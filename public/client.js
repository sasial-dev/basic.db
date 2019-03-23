const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements['dream'];
const dbnames = dreamsForm.elements['seter'];
const dbname = dbnames.value
const toadd = dreamInput.value
console.log(toadd)
console.log(dbname)

dreamsForm.onsubmit = function(event) {
  event.preventDefault();
  const express = require('express');
  const app = express();
  var db = require('quick.db')
  const json = {content: toadd, placeholder: "Do not remove"};
  db.set(dbname, json)
    app.get('/' + dbname, function(req, res){
      var db2 = db.fetch(dbname)
      console.log(db2)
      res.json(db2)
      });
  app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
  });
  dreamInput.value = '';
  dreamInput.focus();
};