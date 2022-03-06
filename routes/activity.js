const express = require('express')
const query = require('../database/complex_query');
const query2 = require('../database/simple_query');
const router = express.Router()


//get screening activity from screening id
router.get("/screening",async(req, res)=>{
    const screening_id = req.query.id;
    const result = await query2.get_all_data("screening_activity", {screening_id:[screening_id]})
    console.log(result)
   // res.render('screening', {layout: "fullpage",data: result});
   res.json(result)
})

//add activity to screening id
router.post("/screening",async(req, res)=>{
    const screening_id = req.query.id;
    const activity_name = req.body.activity_name;
    const comments = req.body.comments;

    const result = await query2.insert_one_data("screening_activity", {screening_id: screening_id, 
        activity_name: activity_name,comments: comments });
   res.json(result)
})







