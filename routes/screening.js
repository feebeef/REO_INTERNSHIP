const express = require('express')
const query = require('../database/complex_query');
const query2 = require('../database/simple_query');
const router = express.Router()


// define the home page route
router.get("/",async(req, res)=>{
    const result = await query.get_all_screening();
    console.log(result)
    res.render('screening', {layout: "fullpage",data: result});
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

async function generate_protocol_code(category, ay, term, college){
    const protocol_num =  await query2.manual_query(`SELECT COUNT(proposal_id) AS count FROM reo_db.proposal WHERE AY= ? ` +
    ` AND term=? AND category=?`, [ay, term, category]).then(data=>{
        return (('000' + data[0].count).substr(-3));
    });
    return ( category + "." +  protocol_num + "." + ay + ".T" + term + "." + college );
}

router.post("/",async(req, res)=>{
    const data = await req.body;
    const protocol_code = await generate_protocol_code(data.category, data.AY, data.term, data.proponents[0].college);
    
    //proposal
    let proposal = {category: data.category, 
                      AY: data.AY, 
                      term:data.term, 
                      phreb_category:data.phreb_category, 
                      title: data.title, 
                      protocol_code: protocol_code }
    proposal.proposal_id = await query2.insert_one_data("proposal", proposal).then(newProposal => {return (newProposal)? newProposal.insertId: false} ); 
    if(!proposal.proposal_id) return;
    console.log(  proposal.proposal_id)
    
    //proponents
    Array.from(data.proponents).forEach( async function p(proponent){
        console.log(proponent.name)
        console.log(proponent)
        let proponent_id = await query2.get_all_data("proponent", {name: [proponent.name]})
                                    .then(data=>{ console.log( data.length); return (data.length > 0) ? data[0].proponent_id: false; })

        if(!proponent_id)
            proponent_id = await query2.insert_one_data("proponent", {name: proponent.name, college: proponent.college, center: proponent.center})
                                 .then(newProponent=>{return newProponent.insertId});
        
                               
        await query2.insert_one_data("proposal_proponent", {proposal_id: proposal.proposal_id, proponent_id: proponent_id});  
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
    
    if(!screening) res.status(400)
    res.status(200).json(screening)

})

module.exports = router;



  