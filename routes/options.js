const express = require('express')
const query = require('../database/simple_query');
const router = express.Router()


router.route('/category').get(async(req, res, next)=>{
    const result = await await query.get_all_data("options", {"type": ["cat"]})
    let vals = {};
    result.forEach(res=>{
        vals[res.display_text] = null;
    })
    res.json(vals);
})

router.route('/ay').get(async(req, res, next)=>{
    const result = await query.manual_query("SELECT DISTINCT AY  FROM reo_db.proposal ORDER BY AY DESC LIMIT 3;")
    let vals = {};
    result.forEach(res=>{
        vals[res.AY] = null;
    })
    res.json(vals);
})

router.route('/preb_category').get(async(req, res, next)=>{
    const result = await await query.get_all_data("options", {"type": ["phreb"]})
    let vals = {};
    result.forEach(res=>{ vals[res.display_text] = null; })
    res.json(vals);
})


router.route('/center').get(async(req, res, next)=>{
    const result = await query.get_all_data("options", {"type": ["center"]})
    let vals = {};
    result.forEach(res=>{ vals[res.display_text] = null; })
    res.json(vals);
})

router.route('/proponent').get(async(req, res, next)=>{
    if(!req.query.name){
        const result = await query.manual_query("SELECT name FROM reo_db.proponent ORDER BY proponent_id;");
        let vals = {};
        result.forEach(res=>{ vals[res.name] = null; }); 
        res.json(vals);
    }else{
        const result = await query.get_all_data("proponent", {name: [req.query.name]});
        if(!result.errno){ res.json(result)}
        else res.json({})
    }
})

router.route('/college').get(async(req, res, next)=>{
    const result = await query.get_all_data("options", {"type": ["college"]})
    let vals = {};
    result.forEach(res=>{ vals[res.display_text] = null; })
    res.json(vals);
})

router.route('/ra').get(async(req, res, next)=>{
    const result = await query.get_all_data("user", {user_type: [1]})
    let vals = {};
    let ids = [];
    result.forEach(res=>{ vals[res.fn +' '+res.ln + '-' + res.user_id] = null; })
    res.json(vals);
})


module.exports = router
