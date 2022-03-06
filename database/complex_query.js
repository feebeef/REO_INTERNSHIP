
const exec = require("./execute_query");
/* queries here has multiple relationships with other tables */

async function get_all_screening(filter=false, sort=false, page=false){
    let qs = `SELECT  screening.screening_id, screening.proposal_id, status,due_date,
                protocol_code, proposal.title, AY, term, category, phreb_category, date_received, CONCAT(fn,' ',ln) as ra, 
                JSON_ARRAYAGG(concat(proponent.name,"-" ,proponent.college, "-", proponent.center)) as proponents, comments
                FROM screening
                INNER JOIN proposal ON screening.proposal_id = proposal.proposal_id 
                INNER JOIN user ON screening.assigned_user = user.user_id 
                LEFT JOIN proposal_proponent ON proposal_proponent.proposal_id = proposal.proposal_id 
                INNER JOIN proponent ON proposal_proponent.proponent_id = proponent.proponent_id
                LEFT JOIN (SELECT screening_activity.screening_id, date_completed, comments
                FROM screening INNER JOIN screening_activity 
                ON screening.screening_id = screening_activity.screening_id
                ORDER BY date_completed DESC LIMIT 1) AS tt
                ON screening.screening_id = tt.screening_id
                `
    if(filter){
        let vals = [];
        qs += ` WHERE `
         
        Object.entries( filter ).forEach(([field, values])=>{

            if(qs[qs.length-1] === `)`) qs += ` AND `

            qs += ( `(` + field +  ` IN (`);
            
            values.forEach(val=>{
                if(qs[qs.length-1] === `?`) qs += `,`;
                qs+=`?`;
                vals.push(val);
            })
            qs += `))`;
        })
    }

    if(sort){
        qs += ` ORDER BY `
        Object.entries( sort ).forEach(([column, sort_type])=>{
            if(qs[qs.length-1] !== ` `) qs += `,`
                qs += ` ` + column; 
            if(sort_type === "asc") qs += " asc"
            else qs += " desc"
        })
    }

    qs += ` GROUP BY screening_id `;

    if(page){
        qs += ( ` LIMIT ` + page.count + ` ` + page.offset );
    }


    results = await exec(qs);

     if(results){
        
      results.forEach( (res) =>{
         const proponents = []
         res.proponents.forEach(prop =>{
            const str = prop.split("-", 3);
            const proponent = {
                name: str[0],
                college: str[1],
                center: str[2]
            }
            proponents.push(proponent);
         })
         res.proponents = proponents;
         res.due_date = new Date(res.due_date)
         res.due_date = ( (res.due_date.getUTCDate()+"/"+ (res.due_date.toDateString().substr(4, 3)) +"/" +res.due_date.getUTCFullYear()));
         
         console.log(res.due_date)
     })
    }

     return results
}


async function get_screening_activity_history(screening_id){
    const qs = `SELECT  date_completed, comments, screening_activity, screening_id
                FROM screening_activity WHERE date_completed IS NOT NULL AND screening_id = ?`
    const results = await exec(qs)
    return results
}



//get_all_screening(null);
//get_all_screening();
//get_all_screening({'category': ['FRP', 'FAF'],  'preb_category':['Environmental']})

module.exports = {get_all_screening, get_screening_activity_history}