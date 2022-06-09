

// Local Storage: sessiondaki komutlarla ayni! farki oturum kapaninca silinmemesi.
Local ve session storage da sayi bile olsa stringe otomatik cevriliyor!


// SetItem======================================

// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", 50);    

// Get Item=====================================

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

// Clear Local Storage=========================================

// localStorage.clear();

//  Local Storage sorgulamayi nasil yaparsin ?=========================================
======================================================================================

// console.log(localStorage.getItem("sport"));

// if (localStorage.getItem("hareket") === null){
//     console.log("Sorguladığınız veri bulunmuyor");

// }
// else {
//     console.log("Sorguladığınız veri bulunuyor");

// }

// Local Storage - Array Yazma===========================================================
normalde localStorage sadece string kabul ediyor.=================================================

// const todos = ["Todo 1","Todo 2","Todo 3"];                 //ama bu string yazdi.diyelim sen array sekilde yazmak ve almak istiyorsan?
// localStorage.setItem("todolar",todos);                      //böyle eklersen string gibi yaziyor ama amacimiz array gibi yazdirmak!
							       //bunun icin json icindeki 2 fonsiyonu kullaniyoruz!	

// localStorage.setItem("todos", JSON.stringify(todos));       //locale array yazdirirken JSON.stringify

// const value = JSON.parse(localStorage.getItem("todos"));    //localde array olarak cekeceksen JSON.pars
// console.log(value);


//BSP: todoya girilen verileri array yapacak, sonra localstorage atacak=================

const form = document.getElementById("todo-form");    //bu submit alani
const todoInput = document.getElementById("todo");    //input alani


form.addEventListener("submit",addTodo);              //formda submit yapilirsa, addTodo func. calistir.

function addTodo(e){
    const value = todoInput.value;

    let todos;

    if (localStorage.getItem("todos") === null) {            //storage´nin key kisminda todos var mi diye önce sorguluyor.
        todos = [];                                          //todos key yoksa , yoktan baslat demek bu!
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));    //todos key de varsa array olarak bana getir diyor.
    }

    todos.push(value);                                        //yeni eklenmis valueyi todos´a ekle, push et!


    localStorage.setItem("todos", JSON.stringify(todos));     //storageye arraymis gibi ekledi.


    e.preventDefault();                   //submit olunca sayfa yenilenmesin diye yaziliyor
}







