const express = require('express');
const app = express();
const mysql  = require('mysql2');
const hbs = require('express-hbs');
app.use( express.static('public'))

const screening = require('./routes/screening')
const options = require('./routes/options')
const bodyParser = require('body-parser');

// const db = require('./database/simple_query');
// db.manual_query(`SELECT DISTINCT proponent_id FROM reo_db.proposal_proponent`).then(data=>{
//    data.forEach( (d) =>{
//       db.manual_query(`UPDATE reo_db.proposal_proponent SET proponent_id = proponent_id - 1
//                                  WHERE proponent_id = ?`, [d.proponent_id])
//    })
// });

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials/',
    layoutsDir:  __dirname + '/views/layouts/'
}));
// parse various different custom JSON types as JSON

app.use(bodyParser.urlencoded({
   extended: true
 }));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use('/screening/',screening);
app.use('/api/options/',options );
hbs.registerHelper('get_status',
function (key) {
   switch (key) {
     case 1:
       return "on-going"
    case 2:
       return "pending"
    case 3:
       return "completed"
    case 4:
       return "overdue"
    case 0:
      return "withdrawn"
     default:
       return "";
   }
});

app.listen(3000, ()=>{console.log('Listening on port 3000')})

