  async function delayi(time) {
    var delay = require('delay')
  await delay(time)
}
function createdb(dbname) {
  if (typeof dbname !== "string") throw new TypeError("A string is needed!");
  var db = require('quick.db')
  var economy = new db.table(dbname)
}
function setdb(dbname,toadd) {
  var db = require('quick.db')
    const json = {content: toadd, placeholder: "Do not remove"};
    db.set(dbname, json)
    delayi(1000)
} 
function resetdb(dbname) {
  if (typeof dbname !== "string") throw new TypeError("A string is needed!");
  var db = require('quick.db')
  const json = {};
  db.set(dbname, json)
}
function getdb(dbname) {
  if (typeof dbname !== "string") throw new TypeError("A string is needed!");
  var db = require('quick.db')
  var fetch = db.fetch(dbname)
  return fetch.dbname
}
module.exports.dbcreate = createdb;
module.exports.dbset = setdb;
module.exports.dbreset = resetdb; 
module.exports.dbget = getdb;