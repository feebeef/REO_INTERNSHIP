const exec = require("./execute_query");

async function get_all_options(table_name, column){
    let qs = `SELECT DISTINCT ` + column  + `  FROM ` + table_name + ` `;
    const results = await exec(qs);
    return results;
}

async function manual_query(qs, vals=null){
    const results = await exec(qs, vals);
    return results;
}

async function get_all_data(table_name, filter=null, sort=null){
    let qs = `SELECT * FROM ` + table_name + ` `;
    let results;
    let vals = [];


    if(filter){
        qs += ` WHERE `
        Object.entries( filter ).forEach(([field, values])=>{
            if(qs[qs.length-1] === `)`) qs += ` AND `;
            qs += ( `(` + field +  ` IN (`);
            
            values.forEach(val=>{
                if(qs[qs.length-1] === `?`) qs += `,`;
                qs+=`?`; vals.push(val);
            })
            qs += `))`;
        })   
    }
    if(filter)
        results = await exec(qs,vals);
    else
        results = await exec(qs);
     
    return results;

  }
  


async function update_data_fields(table_name, id, fields){
    let qs = `UPDATE ` + table_name +  ` SET `
    let vals = []
    Object.entries( fields ).forEach(([field, value])=>{
        if(qs[qs.length-1]==`?`) qs += `, `;
        qs += ( field + `=` );
        qs += `?`;
        vals.push(value)
    })
    qs += ` WHERE ` + table_name + `_id = ?`;
    vals.push(id);
    return await exec(qs, vals);
}



async function insert_one_data(table_name, fields){
    let qs = `INSERT INTO ` + table_name + ` (`;
    let qs2 = `VALUES (`
    let vals = []
    
    Object.entries( fields ).forEach(([field, value])=>{
        if(qs[qs.length-1]!=`(`) qs += `,`;
        qs += field;

        if(qs2[qs2.length-1]==`?`) qs2 += `,`;
        qs2 += '?';
        //console.log(value)
        vals.push(value)
    })
    qs += `) `; qs2 += `) `; qs +=  qs2; //console.log(qs)
    const results = await exec(qs, vals); //console.log(results)
    return results;
}



const query = {get_all_data: get_all_data, update_data_fields: update_data_fields, insert_one_data: insert_one_data,
    get_all_options: get_all_options, manual_query:manual_query
}

//get_all_data("proposal", {category:['FAF', 'FRP'], AY:['2019-2020', '2020-2021'] } );
//update_data_fields("proponent", 3, {center:"test_center", college:"test_college"})
//insert_one_data("screening", { assigned_user: 2, proposal_id:4, status:1,  due_date: '2022-02-15', date_start: '2022-02-15', date_created: '2022-02-15' } )

module.exports = query;