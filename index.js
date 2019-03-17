async function createdb(dbname) {
  if (typeof dbname !== "string") throw new TypeError("A string is needed!");
  const express = require('express');
  const app = express();
  app.use(express.static('public'));
  var db = require('quick.db')
  var economy = new db.table(dbname)
    app.get('/' + dbname, function(req, res){
      db.fetch(dbname).then(function(db2) {
      res.json(db2)
      });
  });
  app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
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
    const json = {content: toadd, placholder: "Do not remove"};
    db.set(dbname, json)
    app.get('/' + dbname, function(req, res){
      db.fetch(dbname).then(function(db2) {
      res.json(db2)
      });
  });
  app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
  });
}
function resetdb(dbname) {
  if (typeof dbname !== "string") throw new TypeError("A string is needed!");
  const express = require('express');
  const app = express();
  var db = require('quick.db')
  var economy = new db.table(dbname)
  //Add stuff here
  app.get('/' + dbname, function(req, res){
    db.fetch(dbname).then(function(db2) {
    res.json(db2)
    });
});
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
}
module.exports.dbcreate = createdb;
module.exports.dbset = setdb;
module.exports.dbreset = resetdb; 