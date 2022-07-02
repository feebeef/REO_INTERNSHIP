
const exec = require("./execute_query");
/* queries here has multiple relationships with other tables */

let server_cache = {}

function format_date_pretty(date){
   return ( (date.getUTCDate()
            +"/" + (date.toDateString().substr(4, 3)) 
            +"/" +date.getUTCFullYear()));
}

function format_date_phreb(date){
    return ( (date.getUTCDate()
             +"/" + (date.toDateString().substr(4, 3)) 
             +"/" +date.getUTCFullYear()));
 }

async function get_phreb_summary(){
    let qs = `SELECT  protocol_code, proposal.title,  
    JSON_ARRAYAGG(proponent.name) as proponents,
    category,  phreb_category,  date_received, 
    review_type, primary_reviewer, status
    FROM review LEFT JOIN proposal ON 
    review.proposal_id = proposal.proposal_id
    LEFT JOIN proposal_proponent ON proposal_proponent.proposal_id = proposal.proposal_id 
    INNER JOIN proponent ON proposal_proponent.proponent_id = proponent.proponent_id
    GROUP BY review.review_id;`

    let qs2 = `
    SELECT  protocol_code, proposal.title,  
    JSON_ARRAYAGG(proponent.name) as proponents,
    funding,  phreb_category AS research_type
    FROM screening LEFT JOIN proposal ON 
    screening.proposal_id = proposal.proposal_id
    LEFT JOIN proposal_proponent ON proposal_proponent.proposal_id = proposal.proposal_id 
    INNER JOIN proponent ON proposal_proponent.proponent_id = proponent.proponent_id 
    INNER JOIN category_funding ON proposal.category = category_funding.category
    GROUP BY screening.screening_id;`
    const results = await exec(qs2);
    let csv_file = ''
    if(results){
        results.forEach( (res) =>{
           let proponents = ''
           res.proponents.forEach((prop, index) =>{
              proponents += prop 
              if(index < res.proponents.length-1)
                proponents += ','
           })
           res.proponents = proponents;
       })
      }
      return results;
}
async function get_all_review(){
    let qs = `SELECT * FROM reo_db.review INNER JOIN 
    proposal WHERE 
    review.proposal_id = proposal.proposal_id`; 

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
           res.date_received = new Date(res.due_date);
           
           res.date_received = ( (res.due_date.getUTCDate()+"/"
                                + (res.due_date.toDateString().substr(4, 3)) 
                                +"/" +res.due_date.getUTCFullYear()));
       })
      }
      return results
}


async function get_all_screening(filter=false, sort=false, page=false, count=false){

    let qs = `SELECT  screening.screening_id, screening.proposal_id, status,due_date,
    protocol_code, proposal.title, AY, term, category, phreb_category, date_received, CONCAT(fn,' ',ln) as ra, 
    JSON_ARRAYAGG(concat(proponent.name,"-" ,proponent.college, "-", proponent.center)) as proponents, comments,  
    screening_activity, Count(*) Over () AS TotalCount
    FROM screening
    INNER JOIN proposal ON screening.proposal_id = proposal.proposal_id 
    LEFT JOIN user ON screening.assigned_user = user.user_id 
    LEFT JOIN proposal_proponent ON proposal_proponent.proposal_id = proposal.proposal_id 
    INNER JOIN proponent ON proposal_proponent.proponent_id = proponent.proponent_id
    
    LEFT JOIN (SELECT screening_id, screening_activity_id, screening_activity, date_completed, comments
        FROM screening_activity 
        WHERE screening_activity_id IN ( 
            SELECT MAX(screening_activity_id) 
            FROM screening_activity
            GROUP BY screening_id
        )
    ) AS tt
    
    ON screening.screening_id = tt.screening_id
             `
    let vals = [];
    if(filter){
       
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
    qs += ` GROUP BY screening_id `;

    if(sort){
        qs += ` ORDER BY `
        Object.entries( sort ).forEach(([column, sort_type])=>{
            if(qs[qs.length-1] !== ` `) qs += `,`
                qs += ` ` + column; 
            if(sort_type === "asc") qs += " asc"
            else qs += " desc"
        })
    }

    if(page) qs += ( ` LIMIT ` + page.limit + ` OFFSET ` + page.offset);
    

    results = await exec(qs, vals);

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

         if(res.due_date){
            res.due_date = new Date(res.due_date)
            res.due_date = ( (res.due_date.getUTCDate()+"/"+ (res.due_date.toDateString().substr(4, 3)) +"/" +res.due_date.getUTCFullYear()));
         }
         
        // console.log(res.due_date)
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

module.exports = {get_all_screening, get_screening_activity_history,  get_phreb_summary}