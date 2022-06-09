Js de documan elementlerini secebiliyorsun. Fakat 
bu secme islemini javaquery framework/kütüphanesinden de yapabilirsin. 
ama az kullanacaksan javaquery eklemene gerek yok. direk yaz diyor.
secince ne olacak ? sectigin elemente belli bir style verebilirsin, degisiklik yapabilirsin.
==================================================================================

// Element Id'e Göre Seçme.=============================================== 

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Element Class'a Göre Seçme===============================================

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

// Element Tag'e Göre Seçme=================================================

element = document.getElementsByTagName("div");

// Query Selector - Css Selector - Tek Bir Element dönüyor!.===================
//bu önemli.hepsini tek metodla yapiyor.css de kullandigimiz seloktörleri kullanarak yapiyoruz.
//farki tüm li leri yada divleri degil , ilk buldugunu getiriyor !

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");


element = document.querySelector(".list-group-item");

element = document.querySelector("li");
element = document.querySelector("div");

// QuerySelectorAll - Tüm Elementleri Seç========================================================
// all dersen tüm li ve divleri getiriyor sana!

element = document.querySelectorAll(".list-group-item"); // Node List

element.forEach(function(el){
    console.log(el);

});
// console.log(element);