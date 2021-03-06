async function delayi(timeout) {
  return new Promise(
      (resolve, reject) => {
          setTimeout(resolve("Sucess"), timeout);
      }
  );
};
/*function createdb(dbname) {
  if (typeof dbname !== "string") throw new TypeError("A string is needed!");
  var db = require('quick.db')
  var economy = new db.table(dbname)
}*/
function setdb(dbname,toadd) {
  var db = require('quick.db')
  const json = {
    content: toadd,
    placeholder: "Do not remove"
  };
  db.set(dbname, json)
  delayi(1000)
}

function resetdb(dbname) {
  if (typeof dbname !== "string") throw new TypeError("A string is needed!");
  var db = require('quick.db')
  const json = {
    content: null,
    placeholder: "Do not remove"
  };
  db.set(dbname, json)
}
async function getdb(dbname) {
  if (typeof dbname !== "string") throw new TypeError("A string is needed!");
  var db = require('quick.db')
  var fetch = db.fetch(dbname)
  if (fetch == undefined) {
    var economy = new db.table(dbname)
    delayi(1000)
    const json = {
      content: null,
      placeholder: "Do not remove"
    };
    db.set(dbname, json)
    delayi(1000)
    var fetch2 = await db.fetch(dbname)
    return fetch2.content
  }
  return fetch.content
}
//module.exports.dbcreate = createdb;
module.exports.dbset = setdb;
module.exports.dbreset = resetdb;
module.exports.dbget = getdb;
module.exports.wait = delayi;