const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// Click Event
// title.addEventListener("click",run);
// function run(e){
//   console.log(e.type);               //burasu sadece eventin tipini veriyor click,mausedown/up...vs
// }

// Double Click
// title.addEventListener("dblclick",run);    //doubleclick yaparsan event geliyor.
 
// Mouse Down
// title.addEventListener("mousedown",run);    //bu click´e cok enziyor. mausa bastiginda event geliyor

// Mouse Up
// title.addEventListener("mouseup",run);      //mausun kligini biraktiginda geliyor.

// Mouse Over
// title.addEventListener("mouseover",run);     //mausla her üzerine geldiginde olusuyor.

// // Mouse Out  
// title.addEventListener("mouseout",run);       //mausla üzerinden ciktiginda olusan event

// cardBody.addEventListener("mouseover",run);   //cardbody´nin üzerine geldiginde ve cardbody icindeki elemente girdiginde tekrar tekrar olusur.
// cardBody.addEventListener("mouseout",run);    //cardbody üzerindeki bir elementen ciktiginda(mouseout) yazar, diger elemente girdigi icin mouseover yazar sürekli.

// Mouse Enter ve Mouse Leave

// cardBody.addEventListener("mouseenter",run);   // farki tüm cardbody icine girince oluusur. elementlere girildiginde olusmaz.
// cardBody.addEventListener("mouseleave",run);    //...cikinca olusur.



function run(e) {
    console.log(e.type);          
}
