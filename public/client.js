const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements['dream'];
const dbname = dreamsForm.elements['seter'];
console.log(dreamInput)
console.log(dbname)

dreamsForm.onsubmit = function(event) {
  event.preventDefault();
  const express = require('express');
  const app = express();
  var db = require('quick.db')
    const json = {content: dreamInput.value, placeholder: "Do not remove"};
    db.set(dbname, json)
    app.get('/' + dbname, function(req, res){
      db.fetch(dbname).then(function(db2) {
      res.json(db2)
      });
  });
  app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
  });
  dreamInput.value = '';
  dreamInput.focus();
};