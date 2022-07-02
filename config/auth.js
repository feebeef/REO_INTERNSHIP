const passport=require('passport');//path of user model
const googleStrategy=require('passport-google-oauth').OAuth2Strategy;
const User = require("../model/User")

passport.use(new googleStrategy({
    clientID : "550419767517-mnjv7e296m3pvcm8ilk1vcqf5dnad4pq.apps.googleusercontent.com",
    clientSecret : "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",
    callbackURL : "/signin"
    },function(token,tokensecret,profile,done){
        console.log(profile);
        console.log()
        User.authenticate(profile._json.email, done(null, profile))

    }
))

module.exports = passport;
