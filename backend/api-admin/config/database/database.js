var mysql = require('mysql');
const config = require('./database-config')

const pool = mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.database
});
module.exports = function handle_db(req, res) {

    pool.getConnection(function (err, connection) {
        if (err) {
            console.error("\x1b[42m","This is error msg, when connecting to db: " + err);
            return;
        }
        console.log("From db config: connected as id: " + connection.threadId);
        connection.on('error', function (err) {
            return;
        });
        return connection;
    });
    return pool;
}
