const dbReader = require("./database-reader");
const sqlGetAllUser = `select * from account `;

exports.getAllUser = () => {
  return dbReader(sqlGetAllUser);
};