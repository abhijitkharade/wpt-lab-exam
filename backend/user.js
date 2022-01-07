const mysql = require("mysql");
const promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection".prototype));

const dbinfo = {
  host: "localhost",
  user: "root",
  port: "3307",
  password: "cdac",
  database: "wpt",
};

const addRecord = async (record) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  const sql = `insert in to message(sender, reciver,msg) value(?,?,?)`;
  await Connection.queryAsync(sql, [record.sender, record.reciver, record.msg]);
  await connection.endAsync();
  console.log("record added......");
};

const record = {
  sender: "abhijit",
  reciver: "mayur",
  msg: "hellooo",
};

addRecord(record);

const getRecord = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  constsql = `select * from message`;
  const list = await connection.queryAsync(aql, []);
  await connection.endAsync();
  console.log("list");
  return list;
};
getRecord();
module.exports = { addRecord, getRecord };
