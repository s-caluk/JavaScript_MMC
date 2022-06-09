
Not: degeri alabilmismisin ya da elementi olusturabilmismisin testi icin sürekli console.log kullan

// Tüm elementleri seçme=====================================================================

const form = document.querySelector("#todo-form");                        //form input ve submiti kapsiyor, ama submit icin formu secti burda
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");                   //todolarin eklenecegi ul yi seciyor burda.
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");


eventListeners();                                                         // sayfa yeni acildiginda bu funktion calisacak!


function eventListeners(){                                                // Tüm eventListenerlari bu functionda topluyor.
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);       // sayfa yüklendiginde bu event otomatik olusur.UI ye content ekle demek.
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);

}

//1.=====================================================TODO EKLEME=====================================================================

function addTodo(e){
    const newTodo = todoInput.value.trim();                          //trim(), basta ve sondaki gereksiz bosluklar olmadan valueyi atiyor.

    if (newTodo === "") {
        
        showAlert("danger","Lütfen bir todo girin...");              
    }
    else {
        addTodoToUI(newTodo);                                        //user interface yani html´e todoyu ekleyen function.
        showAlert("success","Todo başarıyla eklendi...");            //basariyla tamamlandi functionu
        addTodoToStorage(newTodo);                                   //todoyu storage´e ekleyen function
        

    }    
    e.preventDefault();

}

//2.================================================================================================================================

function addTodoToUI(newTodo){                                              // String değerini list item olarak UI'ya ekleyecek.
    /*                                                                      // yani ul nin altina li´leri dinamik olarak ekleyecek.

    <li class="list-group-item d-flex justify-content-between">             //bir sey dinamik olarak eklenecekse, html kodunu aynen JS de olusturmalisin.   
        Todo 1                                                              //burasi TextNode ile eklenir
           <a href = "#" class ="delete-item">
                <i class = "fa fa-remove"></i>
            </a>
    </li>
    */

   const listItem = document.createElement("li");                           // List Item Oluşturma <li>
   listItem.className = "list-group-item d-flex justify-content-between";   // yeni element olusturmak icin createElement() kullanmalisin.


   const link = document.createElement("a");                                // Link oluşturma <a>
   link.href = "#";
   link.className = "delete-item";
   link.innerHTML = "<i class = 'fa fa-remove'></i>";                       // X ile silme islemi              


   listItem.appendChild(document.createTextNode(newTodo));                  // Text Node Ekleme: li´nin son cocugu olarak ekle demek bu.
   listItem.appendChild(link);

   todoList.appendChild(listItem);                                          // ul yi en basta todoList olarak secmistik.Todo List'e List Item'ı ekleme: yani ul´ye li´yi son child olarak ekliyoruz.
   todoInput.value = "";                                                    // submit yaptiktan sonra , input alanini bosaltiyor.

}
//3.================================================BILGILENDIRME MESAJLARI=============================================================

/*<div class="alert alert-danger" role="alert">                          //bunu bootstrapin sayfasindan aldi, ayni gibi create yapiyor.
     This is a danger alert—check it out!
  </div>  */

  function showAlert(type,message){

    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`; 

    alert.textContent = message;
 
    firstCardBody.appendChild(alert);                                     //cardbody nin son childi olarak ekle.

    setTimeout(function(){                                                 //alertin 2 sn sonra silinsin istiyorsan window´un bu functionunu kullan.
        alert.remove();

    },2000);

}
//4.================================================TODOLARI STORAGE´A EKLEME=======================================================================
//cok kullanilacagi icin ayri bir fonsiyonda yazdi! kolay cagirilsin diye.
                                    
    function addTodoToStorage(newTodo){                                  //Todolari storage´e ekleme
                                    
        let todos = getTodosFromStorage();
                                    
        todos.push(newTodo);
        localStorage.setItem("todos",JSON.stringify(todos));
    }

     function getTodosFromStorage(){                                      // Storagedan Todoları Alma
        let todos;
                                    
        if (localStorage.getItem("todos") === null){                      //key nullsa yani yoksa baslat
            todos = [];
        }
        else {
            todos = JSON.parse(localStorage.getItem("todos"));           //varsa localstorageden array olarak getirip todos a ata.
        }
        return todos;
                                    
    }
                                    
//5.=================================================TODOLARI STORAGE´DEN UI´YE EKLEME===========================================================================

function loadAllTodosToUI(){  					       //storage´den todolari UI ye ekliyor.
    let todos = getTodosFromStorage();				       //Burda arrayimizi aldik! 1 kez yazdik, yine kullaniyoruz bu functionu.

    todos.forEach(function(todo){
        addTodoToUI(todo);
    })

}
//6.=====================================================TODOLARI ARAYÜZDEN SILME===================================================================
function deleteTodo(e){

    if (e.target.className === "fa fa-remove"){                                    //target nereye basildigini veriyordu.
        e.target.parentElement.parentElement.remove();                             //burda li yi sildiriyor.(sayfa yenilediginde li ler yine geliyor)
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);   //o yüzden L.storage den de silmelisin.

        showAlert("success","Todo başarıyla silindi...");

    }

}
//7.======================================================TODOLARI sTORAGE´DEN SILME==================================================================

function deleteTodoFromStorage(deletetodo){                                       //UI de silinmisleri L.storagededen de silecek.bsp:todo1 silinecek

    let todos = getTodosFromStorage();                                            //arrayi alip todos a atiyor.

    todos.forEach(function(todo,index){                                           //tek tek gezinip bakiyor arraye
        if (todo === deletetodo){
            todos.splice(index,1);                                                // Arrayden değeri silebiliriz.o indexten itibaren 1 tane sil!
        }

    });

    localStorage.setItem("todos",JSON.stringify(todos));                          // güncel hali tekrar L.storage array olarak setiyor.

}
//8.======================================================TODOLARI FILTRELEME==============================================

function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();                         //aranacak texti secti,kücük harflere cevirdi.
    const listItems = document.querySelectorAll(".list-group-item");          //tüm li´leri secti

    listItems.forEach(function(listItem){                                     //tüm li lerde arama yapacagi icin gezinecek

        const text = listItem.textContent.toLowerCase();                      

        if (text.indexOf(filterValue) === -1){
                                                                              
            listItem.setAttribute("style","display : none !important");        //sayfada var ama gösterme demek, bulamadi cünkü
        }                                                                      //peki neden !important: css de d-flex, display:none yi baskiliyor.important diyerek digerini önceliyoruz.
        else {
            listItem.setAttribute("style","display : block");
        }
    });
}
//9.=======================================================TÜM TASKLARI TEMIZLE BUTONU==========================

function clearAllTodos(e){

    if (confirm("Tümünü silmek istediğinize emin misiniz ?")) {           // Arayüzden todoları temizleme
        
        // todoList.innerHTML = "";                                       // Bu yöntem en kolay ama Yavaş

        while(todoList.firstElementChild != null) {                       //döngüde firstElement null degilse tek tek siliyor.
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");                                 //L.storage de key´i sildiginde hepsi gider 
       
    }
    
}
