dokumanda script,link,form secme yöntemleri!
kac taneler ? vs...
====================================================


let value;

value = document;

// Scriptler: 

value = document.scripts;      /*app.js en alta eklemezsen hata/yanlis veriyor.

value = document.scripts.length;
value = document.scripts[0];

// Linkler

value = document.links;
value = document.links[0];
value = document.links[document.links.length-1];
value = document.links[document.links.length-1].getAttribute("class");
value = document.links[document.links.length-1].getAttribute("href");     /*nereye gidiyor#
value = document.links[document.links.length-1].className;
value = document.links[document.links.length-1].classList;


// Formlar

value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms["form"];
value = document.forms[0].id;
value = document.forms[0].getAttribute("id");
value = document.forms[0].name;
value = document.forms[0].getAttribute("name");

value = document.forms[0].method;

console.log(value);