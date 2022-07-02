const express = require('express')
const query = require('../database/complex_query');
const query2 = require('../database/simple_query');
const router = express.Router()
router.get("/", (req, res) =>{
    res.render("portal_search");
})

router.get("/search/", async (req, res) =>{
    console.log("Hello")
    
    let proposal = await query2.get_all_data("proposal", {protocol_code: [req.query.id]});
    console.log(proposal)
    if(proposal.length > 0){
        proposal = proposal[0]
        const screening = (await query.get_all_screening({"proposal.proposal_id": [proposal.proposal_id]}))[0];
        if(screening){
            if(screening.status == 1) screening.status = "on-going";
            if(screening.status == 2) screening.status = "pending - " + screening.screening_activity + " " + screening.comments;
            if(screening.status == 3) screening.status = "completed";
            if(screening.status == 4) screening.status = "withdrawn";
        }
        res.render("portal_found", {proposal:proposal, screening: screening})
    }else{
        res.render("portal_notfound", {id: req.query.id});
    }
   
})
module.exports = router;