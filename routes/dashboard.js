const express = require('express');
const router = express.Router()
const query = require('../database/simple_query');

router.get("/",async(req, res)=>{
    const ongoing = await query.get_all_data("screening", {status:[1]})
    const pending = await query.get_all_data("screening", {status:[2]})
    const completed = await query.get_all_data("screening", {status: [3]})
    const withdrawn = await query.get_all_data("screening", {status: [0]}); 

    const data = { ongoing: ongoing.length, pending: pending.length, completed: completed.length, withdrawn:withdrawn.length }
    res.render('dashboard', { layout: "fullpage", data: data});
})



router.get("/1", async(req, res)=>{

    // const ongoing = await query.get_all_data("screening", {status:[1]})
    // const pending = await query.get_all_data("screening", {status:[2]})
    // const completed = await query.get_all_data("screening", {status: [3]})
    // const withdrawn = await query.get_all_data("screening", {status: [0]}); 

    // const ay = await query.manual_query("SELECT DISTINCT AY from proposal");
    // const college = await query.manual_query("SELECT option FROM options WHERE type = ?", ["college"])
 
    // // ay.forEach(data ={
    // //     college.forEach()
    // // })

})
module.exports=router;