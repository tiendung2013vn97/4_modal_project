const databasePool = require("../config/database/database")();

const dbReader = (sql, arr) => {
  return new Promise((resolve, reject) => {
    databasePool.query(sql, arr, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
module.exports = dbReader;
