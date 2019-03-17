function createdb(dbname) {
  if (typeof dbname !== "string") throw new TypeError("A string is needed!");
  const express = require('express');
  const app = express();
  var db = require('quick.db')
  var economy = new db.table(dbname)
    await delay(1000)
    app.get('/' + dbname, function(req, res){
      db.fetch(dbname).then(function(db2) {
      res.json(db2)
      });
  });
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.get("/" + dbname, (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
}
function setdb(dbname,toadd) {
  const express = require('express');
  const app = express();
  var db = require('quick.db')
  const delay = require('delay');
    const json = {content: toadd, placholder: "Do not remove"};
    db.set(dbname, json)
    await delay(1000)
    app.get('/' + dbname, function(req, res){
      db.fetch(dbname).then(function(db2) {
      res.json(db2)
      });
  });
}
function resetdb(dbname) {
  if (typeof dbname !== "string") throw new TypeError("A string is needed!");
  const express = require('express');
  const app = express();
  var db = require('quick.db')
  const delay = require('delay');
  var economy = new db.table(dbname)
  //Add stuff here
  await delay(1000)
  app.get('/' + dbname, function(req, res){
    db.fetch(dbname).then(function(db2) {
    res.json(db2)
    });
});
}
module.export.dbcreate = createddb;
module.export.dbset = setdb;
module.export.dbreset = resetdb;