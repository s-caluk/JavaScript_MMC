let value;

const todoList = document.querySelector(".list-group");                //ul yi secti
const todo = document.querySelector(".list-group-item:nth-child(2)");  //todolardan 2. sini secti!
const cardrow = document.querySelector(".card.row");                   //class ismi boslukluysa yani iki clasi var oluyor.iki noktali yaziliyor.

value= todoList;
value = todo;
value = cardrow;

// Child Nodes=================================================================================================
Text Dahil alip sayiyor. (taba basip alta gectigin satiri da sayiyor.)

value = todoList.childNodes;     //.list-group yani ul nin tüm cocuklarini getirir.9 adet!
value = todoList.childNodes[0];  //tab yaptigin icin bos , onu saymis !

// Children - Element ====================================================================================================
(sadece elementlerimi saysin istiyorum! text yok, taba bastigin satiri saymasin)

value = todoList.children;                                         
value = todoList.children[todoList.children.length - 1];
value = todoList.children[2].textContent = "Değişti";



value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Burası da değişti"; //h5 secip degisti!


value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;

// Parent ya da Oma bulma========================================================================================

value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;


// Element Kardeşleri-sibling================================================================

value = todo;

value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;

value = todo.previousElementSibling.previousElementSibling;
console.log(value);