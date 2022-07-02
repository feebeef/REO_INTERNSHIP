const express = require('express');
const session = require('express-session');
const query = require('../database/complex_query');
const query2 = require('../database/simple_query');
const router = express.Router()

//define the home page route
router.get("/",async(req, res)=>{
    let data = {};
    let q = `SELECT  JSON_ARRAYAGG(value) AS options, type FROM reo_db.options GROUP BY type ; `
        let options =  await query2.manual_query(q);
        options.forEach(option=>{
            if(option.type != "center")
            data[option.type] = option.options;        
        })
        console.log("================================")

        let q2 = `SELECT distinct(AY) as AY FROM reo_db.proposal ORDER BY AY DESC; `
        let options2 =  await query2.manual_query(q2);
        console.log(options2)
        ay = []
        options2.forEach( (options )=>{
            if(options.AY != '')
            ay.push(options.AY);
        })
        data["ay"] = ay;
        // console.log("HEEERREE")
        // console.log(req.session.usertype)
        // if(req.session.usertype == 1 ) data.usertype = 1;
        // else if(req.session.usertype == 2 ) data.usertype = 2;
        res.render('screening', {data: data, layout: "fullpage"});
})

function get_due_date(){
    const numToAdd = 7;
    let currentDate = new Date();
    for (let i = 1; i <= numToAdd; i++) {
        currentDate.setDate(currentDate.getDate() + 1);
        if (currentDate.getDay() === 6) {
            currentDate.setDate(currentDate.getDate() + 2);
        }
        else if (currentDate.getDay() === 0) {
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }

    return  ( (currentDate.getUTCFullYear()) + '-' +
            (currentDate.getUTCMonth() + 1)  + '-' +
            (currentDate.getUTCDate())       + ' ' );
}

function get_date_now(){
    let currentDate = new Date();
    return  ( (currentDate.getUTCFullYear()) + '-' +
    (currentDate.getUTCMonth() + 1)  + '-' +
    (currentDate.getUTCDate())       + ' ' );
}

async function generate_protocol_code(category, ay, term, college){
    if(category === "FRP" || category === "IR" || category === "PHD" ){
        category = "DLSU-" + category;
    }
    const protocol_num =  await query2.manual_query(`SELECT COUNT(proposal_id) AS count FROM reo_db.proposal WHERE AY= ? ` +
    ` AND term=? AND category=?`, [ay, term, category]).then(data=>{
        const num =  ('000' + (data[0].count + 1 ) );
        return num.substring(num.length - 3);
    });
    return ( category + "." +  protocol_num + "." + ay + ".T" + term + "." + college );
}

router.post("/proposal",async(req, res)=>{
    const data = req.body;
    

    if(!data.category || !data.AY || !data.term || !data.name ) {
        return res.status(422).json("Cannot process your request. Fields are invalid to generate a protocol code.");
    }
           
    if(!Array.isArray(data.name)){ data.name = [data.name]; data.college = [data.college]; data.center=[data.center]}
    //console.log(data)

    const protocol_code = await generate_protocol_code(data.category, data.AY, data.term, data.college[0] );
    let proposal = {category: data.category, 
                      AY: data.AY, 
                      term:data.term, 
                      phreb_category:data.phreb, 
                      title: data.title, 
                      protocol_code: protocol_code }
    proposal.proposal_id = await query2.insert_one_data("proposal", proposal).then(newProposal => {return (newProposal)? newProposal.insertId: false} ); 
    
    
    if(!proposal.proposal_id){ res.status(500).json("There was a server problem in processing your request"); return;}
    
    console.log(proposal)
    
    data.name.forEach( async(name, index) =>{
       await query2.get_all_data("proponent", {name: [name]}).then( async (results) =>{
           console.log("Results"); console.log(results);
            let proponent_id = false;
            if(results.length > 0){
                const result = results[0];
                if( data.college[index] != result.college) await query2.update_data_fields("proponent", result.proponent_id, {college: data.college[index] })
                if( data.center[index] != result.center) await query2.update_data_fields("proponent", result.proponent_id, {center: data.center[index]})
                proponent_id = result.proponent_id
            }else{
                const newId = await query2.insert_one_data("proponent", {name: name, college: data.college[index], center: data.center[index]}).then( newProponent=>{
                    return (newProposal)? newProposal.insertId: false;
                })
                if(newId) proponent_id = newId;
            }
            if(proponent_id) query2.insert_one_data("proposal_proponent", {proposal_id:proposal.proposal_id, proponent_id:proponent_id  })
       })
    })

    //screening
    const due_date = get_due_date();
    let screening = {proposal_id: proposal.proposal_id, 
                     status: 1, 
                     assigned_user: data.ra.split("-")[1],  
                     due_date:due_date};

    screening = await query2.insert_one_data("screening",screening).then(newScreening =>{
                return (newScreening) ? {screening_id: newScreening.insertId, protocol_code: protocol_code,  due_date: due_date, status: screening.status}: false;
                })
    if(!screening){ res.status(500); return;}

    let activity = {
        screening_activity: "Files Received",
        screening_id: screening.screening_id,
        comments: "received on " + get_date_now()
    }
    activity = await query2.insert_one_data("screening_activity",activity).then(newActivity =>{
        if(!newActivity) return false;
        if(newActivity){ screening.activity_name = activity.screening_activity, screening.comments = activity.comments  }
        return true;
    })

    if(activity) res.status(200).redirect("/screening")
    else res.status(500);

})



router.get("/api",async(req, res)=>{
    //console.log(req.cookies);
    let sort = false;
    let page = false;
    let filter = {};
    let totalpage = 0;

    if(req.cookies.sort){
        let s =  req.cookies.sort.split("-");
        sort = {  };   sort[s[0]] = s[1];
    }
    page = { offset: (req.cookies.page-1)*req.cookies.limit,  
             limit: req.cookies.limit 
            };
 
    if(req.cookies.filter){
        filter=JSON.parse(req.cookies.filter);
        if(req.session.usertype == 1)
        filter["assigned_user"] = [(await query2.get_all_data('user', {'username': [req.session.userid ]}, false, false))
                                  [0].user_id]
    }
    filter['status'] = [req.cookies.status];
    let result = await query.get_all_screening(filter, sort, page);
    if(!result){ res.status(400).json("Error"); return }
    if(result.length > 0) totalpage =  Math.ceil(result[0].TotalCount / page.limit);
    res.status(200).cookie('totalpage', totalpage).json(result);
})

router.post("/:id",async(req, res)=>{
    const screening_id = req.params.id;
    const data = req.body;
  //  const activity_data = req.body.activityData;
  console.log('===================SCREENING=======================');
    console.log(screening_id)
    console.log(data)

    await query2.update_data_fields("screening", screening_id, data.screening);
    await query2.insert_one_data("screening_activity", data.activity)
    console.log('====================================================');
    res.status(200).json("ok");
})

module.exports = router;

 