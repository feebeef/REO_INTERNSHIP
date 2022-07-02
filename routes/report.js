const express = require('express')
const query = require('../database/complex_query');
const query2 = require('../database/simple_query');
const router = express.Router()
const converter = require('json-2-csv');

function format_date(date){
    
    let currentDate = new Date(date);
    return  ( (currentDate.getUTCFullYear()) + '-' +
    (currentDate.getUTCMonth() + 1)  + '-' +
    (currentDate.getUTCDate())       + ' ' );
}
//get screening activity from screening id
router.get("/",async(req, res)=>{
    const result = await query.get_phreb_summary();
    console.log(result);
    converter.json2csv(result, (err, csv) => {
        console.log(csv)
        if (!err) { res.status(200).json( {csv} ); return } 
        else res.status(400).json('Error');
    });
    //res.status(200).json( {o: 1, a: 4})
})




module.exports = router;