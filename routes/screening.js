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

router.post("/",async(req, res)=>{
    const data = await req.body;
    const num = await query2.manual_query(`SELECT COUNT(proposal_id) AS count FROM reo_db.proposal WHERE AY= ? ` +
    ` AND term=? AND category=?`, [data.AY, data.term, data.category]);

    let protocol_code = data.category + "." +  ('000' + num[0].count).substr(-3) + "." + data.AY + ".T" + data.term + "." + data.proponents[0].college
    await query2.insert_one_data("proposal", {category: req.body.category, AY: req.body.AY, term:req.body.term, preb_category:req.body.phreb, 
                                        title: req.body.title, protocol_code: protocol_code });
    
    let proposal_id = await query2.manual_query(`SELECT MAX(proposal_id) as proposal_id FROM reo_db.proposal as proposal_id`); 
        proposal_id = proposal_id[0].proposal_id; console.log(proposal_id);
    
    Array.from(data.proponents).forEach( async function p(p){
        const proponent = await query2.get_all_data("proponent", {name: [p.name]});
        const proponent_id = proponent[0].proponent_id;
        await query2.insert_one_data("proposal_proponent", {proposal_id: proposal_id, proponent_id: proponent_id});  
    })

    //console.log(get_due_date()); console.log(data.ra)
    const screening = await query2.insert_one_data("screening", {proposal_id: proposal_id, status: 1, assigned_user: data.ra.split("-")[1],  due_date: get_due_date()});   
    res.status(200);
})

module.exports = router;



  