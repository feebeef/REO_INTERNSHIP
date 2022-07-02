const express = require('express');
const app = express();
const mysql  = require('mysql2');
const hbs = require('express-hbs');
app.use( express.static('public'))
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const query = require('./database/simple_query')

const screening = require('./routes/screening')
const review = require('./routes/review')
const report = require('./routes/report')
const options = require('./routes/options')
const dashboard = require('./routes/dashboard')
const signin = require('./routes/auth')

const portal = require('./routes/portal')
const bodyParser = require('body-parser');

const query2 = require('./database/complex_query');

const localtunnel = require('localtunnel');

process.env.URL = 'localhost://3000';

(async () => {
  const tunnel = await localtunnel({ port: 3000 });
  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  tunnel.url;
  console.log('tunnel')
 // console.log(tunnel.url)
   process.env.URL = tunnel.url;
  console.log(process.env.URL)
  tunnel.on('close', () => {
   process.env.URL = 'localhost://3000'
  });
})();

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

hbs.registerHelper('ifEquals',
function(a, b, opts) {
    if (a == b) {
        return opts.fn(this)
    } else {
        return opts.inverse(this)
    }
});

app.set('views', __dirname + '/views');


app.use('/screening',screening);
app.use('/review',review);
app.use('/report',report);
app.use('/dashboard',dashboard);
app.use('/portal',portal);
app.use('/api/options',options );

// const passport = require("./config/auth");
// passport.serializeUser(function(user, cb) {
//    cb(null, user);
//  });
 
//  passport.deserializeUser(function(obj, cb) {
//    cb(null, obj);
//  });


// app.get('/',passport.authenticate('google', { scope: [ 'email', 'profile' ]
// }))



// app.get('/signin', passport.authenticate( 'google', {
//    successRedirect: '/dashboard',
//    failureRedirect: '/none'
// }));

app.get("/", (req,res)=>{
   res.render("index");
})





app.listen(3000, ()=>{console.log('Listening on port 3000')})


app.post('/user',async (req,res) => {
   let user = await query.get_all_data("user", { username: [req.body.username] } );
   //console.log(user)
   if(user.length == 0){
      res.send('Invalid username or password');
      return;
   }

   user = user[0];

   if(req.body.username === user.username && req.body.password === user.password){
      session=req.session;
      session.userid=req.body.username;
      session.usertype = user.user_type
      res.cookie('show',  session.usertype)
      res.redirect("/dashboard")
  }
  else res.send('Invalid username or password');
  
});

app.get('/logout',(req,res) => {
   if(req.session){
      req.session.destroy();
      res.clearCookie('connect.sid') // clean up!
      res.redirect('/');
   }
  
});

app.get('/search',async (req,res) => {
   console.log(req.query)
   let filter = {}

   Object.entries( req.query ).forEach( ([key, value]) =>{
       if(key !== "in"){
         if(key == "code") key = "protocol_code"
         if (!filter.hasOwnProperty(key)) filter[key] = [];
         filter[key].push(value.trim());
       }
   })

   const results = await query2.get_all_screening(filter, false, false);
   console.log(results)
   if(results) res.status(200).json(results);
   else res.status(400).json("No results");
});




