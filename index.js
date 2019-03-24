  async function delayi(time) {
  await delay(time)
}
function createdb(dbname) {
  if (typeof dbname !== "string") throw new TypeError("A string is needed!");
  var db = require('quick.db')
  var delay = require('delay')
  var economy = new db.table(dbname)
}
function setdb(dbname,toadd) {
  var db = require('quick.db')
    const json = {content: toadd, placeholder: "Do not remove"};
    db.set(dbname, json)
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
  return fetch
}
export const dbcreate = createdb;
export const dbset = setdb;
export const dbreset = resetdb; 
export const dbget = getdb;