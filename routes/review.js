const express = require('express');
const session = require('express-session');
const query = require('../database/complex_query');
const query2 = require('../database/simple_query');
const router = express.Router()

function get_date_now(){
  let currentDate = new Date();
  return  ( (currentDate.getUTCFullYear()) + '-' +
  (currentDate.getUTCMonth() + 1)  + '-' +
  (currentDate.getUTCDate())       + ' ' );
}


router.post('/:id',async(req, res)=>{
  console.log(req.params.id)
  console.log(req.body)
  const proposal_id = req.params.id;
  const data = req.body;
  let status = 1;

    let review = { review_type: data.review_type,
                   proposal_id: proposal_id,
                   primary_reviewer: data.primary_reviwer,
                   status: status
                 };
    const newReviewId =  await query2.insert_one_data("review", review).then( newReview=>{
      return (newReview)? newReview.insertId: false;
    });
    
    if(!newReviewId) return res.status(404).json('Cannot add Review');

    let reviewActivity1 = {
      review_activity: "Assigned Type of Review",
      review_id: newReviewId,
      comments: "Assigned " + data.review_type
   }
   await query2.insert_one_data("review_activity", reviewActivity1)

    res.status(200).redirect('/screening')
})

router.post("/status/:id",async(req, res)=>{
    const review_id = req.params.id;
    const data = req.body.status;

    await query2.update_data_fields("review", review_id, { status: data });
    await query2.insert_one_data("review_activity", data.activity)
    res.status(200).json("ok")
})

module.exports = router;