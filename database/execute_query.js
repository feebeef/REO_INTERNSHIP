
const mysql  = require('mysql2');
const db_config = require("../config/database")

const exec = async function execute_query(qs, vals=null){
   const db =  mysql.createConnection(db_config)
   return await db.promise().execute(qs, vals)
           .then( ([rows, fields]) => { db.close(); /*console.log(rows);*/ return rows; })
           .catch(err =>{ db.close(); console.log(err); return false});
}

module.exports = exec;


//console.log(get_all_data('proposal'))


