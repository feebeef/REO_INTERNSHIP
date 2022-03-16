const express = require('express');
const app = express();
const mysql  = require('mysql2');
const hbs = require('express-hbs');
app.use( express.static('public'))
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const query = require('./database/simple_query')

const screening = require('./routes/screening')
const options = require('./routes/options')
const portal = require('./routes/portal')
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

 const oneDay = 1000 * 60 * 60 * 24;
 app.use(sessions({
     secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
     saveUninitialized:true,
     cookie: { maxAge: oneDay },
     resave: false 
 }));

 app.use(cookieParser());

app.set('view engine', 'hbs');

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

app.set('views', __dirname + '/views');
app.use('/screening/',screening);
app.use('/portal/',portal);
app.use('/api/options/',options );

app.listen(3000, ()=>{console.log('Listening on port 3000')})

app.get('/',(req,res) => {
    session=req.session;
    if(session.userid){
      res.redirect('/screening')
    }else{
       res.render("index");
    }
  
});

app.post('/user',async (req,res) => {
   let user = await query.get_all_data("user", { username: [req.body.username] } );
   //console.log(user)
   if(user.length == 0){
      res.send('Invalid username or password');
      return;
   }

   user = user[0];

   if(req.body.username == user.username && req.body.password == user.password){
      session=req.session;
      session.userid=req.body.username;
      session.usertype = user.user_type
      console.log(req.session)
      res.redirect("screening")
  }
  else res.send('Invalid username or password');
  
});

app.get('/logout',(req,res) => {
   req.session.destroy();
   res.redirect('/');
});