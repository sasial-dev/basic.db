const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements['dream'];
const dbnames = dreamsForm.elements['seter'];
const dbname = dbnames.value
const toadd = dreamInput.value
console.log(toadd)
console.log(dbname)

dreamsForm.onsubmit = function(event) {
  event.preventDefault();
  var db = require('quick.db')
  const json = {content: toadd, placeholder: "Do not remove"};
  db.set(dbname, json)
  dreamInput.value = '';
  dreamInput.focus();
};