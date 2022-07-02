const db= require('../database/simple_query')
class User{

    static async authenticate(email, cb){
        const user = await db.get_all_data("User", {email:[email]});
        if(user.length == 0) return false;
        cb(null, user);
    }


}