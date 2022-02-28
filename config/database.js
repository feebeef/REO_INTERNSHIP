const db_config = {
    user: "root",
    password: "1234",
    database: "reo_db",
    typeCast: function(field, next) {
        if (field.type == 'BLOB' && field.length == 4294967295) {
            let value = field.string();
            try {
                return JSON.parse(value);
            } catch (e) {
                return value;
            }
        }
        return next();
    }
  }

  module.exports = db_config;