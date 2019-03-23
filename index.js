  var whilei = false
  var dbnamei = ["place holder"]
  while (whilei == true) {
    for (i = 1; i < dbnamei.length; i++){
    app.get('/' + dbname[i], function(req, res){
      var db2 = db.fetch(dbname[i])
      console.log(db2)
      res.json(db2)
  });
}
  delayi(5000)
}
async function delayi(time) {
  await delay(time)
}
function createdb(dbname) {
  if (typeof dbname !== "string") throw new TypeError("A string is needed!");
  const express = require('express');
  const app = express();
  app.use(express.static('public'));
  var db = require('quick.db')
  var delay = require('delay')
  var economy = new db.table(dbname)
  whilei = true
  dbnamei.push(dbname)
  app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
  });
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.get('/' + dbname, function(req, res){
  var db2 = db.fetch(dbname)
  console.log(db2)
  res.json(db2)
});
app.get("/" + dbname, (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
  app.get('/' + dbname, function(req, res){
    var db2 = db.fetch(dbname)
    console.log(db2)
    res.json(db2)
});
}
function setdb(dbname,toadd) {
  var db = require('quick.db')
    const json = {content: toadd, placeholder: "Do not remove"};
    db.set(dbname, json)
      app.get('/' + dbname, function(req, res){
        var db2 = db.fetch(dbname)
        console.log(db2)
        res.json(db2)
        });
}
function resetdb(dbname) {
  if (typeof dbname !== "string") throw new TypeError("A string is needed!");
  const express = require('express');
  const app = express();
  var db = require('quick.db')
  const json = {};
  db.set(dbname, json)
    app.get('/' + dbname, function(req, res){
      var db2 = db.fetch(dbname)
      console.log(db2)
      res.json(db2)
      });
}
module.exports.dbcreate = createdb;
module.exports.dbset = setdb;
module.exports.dbreset = resetdb; 