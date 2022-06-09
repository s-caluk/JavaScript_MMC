
ikisini nasil ayiracagiz? (!hangi dil olursa olsun, bu konu is mülakatinda mutlaka sorulurmus!)

Primitiv veri tipleri:sadece o degeri tasiyan veri tipi.sadece deger veri tipi=ilkel veri tipi
bsp: a=2 b=2 a=b esitligi true´dur.
degere göre karsilastirma yapar.

Referans veri tipleri:bellekte belli bir yeri tutan degerlerimiz. (pointer gibi)
Bellekteki yere/indexe göre karsilastirma yapar!

objeler, arrayler referans veri tipine girer!
bsp: 2 arrayin icerigi ayni bile olsa esit degildir. cünkü bellekte gösterdikleri yer ayni degil.
bsp: 2 objenin icrgi ayni olsa bile esit degildir.... "

peki objelerin , arraylerin icerigini kiyaslayabilir miyiz? böyle bir fonksiyon var mi ?
hayir, yok., js de böyle bir fonksiyon yok, ihtiyac da yok.
ihtiyacin olursa kendin yazman gerekiyor.

Önemli olan dili degil konsepti ögrenmek.

============================================================================
// let a = "Mustafa";
// let b = "Mustafa";

// if (a === b) {                        //a ve b yi degil , icerigi kiyasliyor ! ilkeldir!
//     console.log("Eşit");
// }

// const person1 = {
//     name:"Mustafa",
//     age:25
// }
// const person2 = {
//     name:"Mustafa",
//     age:25
// }

// if(person1 === person2) {              //bellekte baska yerlere yazildilar. icerigi degil indexi kiyasliyor gibi.
//     console.log("Eşit");               //esit degildir.
// }
---------------------------------------------------------------------------

// const cities = new Map();    
              
// cities.set("Ankara",5);                //primitiv
// cities.set("İstanbul",15);             //primitiv
// cities.set([1,2,3],"Array")            //[1,2,3] array oldugu icin referans veri tipidir.

console.log(cities.get("Ankara"));        // cikti: 5 , olur neden? cünkü primitivdir(string), degeri veriyor!

console.log(cities.get([1,2,3]));         // cikti : undefined, neden? iki [1,2,3] farkli yerleri gösteriyor. esitlikle kiyaslamaya calisiyor fakat bulamiyor, o yüzden undefined.


// const key = [1,2,3];                   //arrayleri esitleyemeyecegi icin , önce degiskene atadi. key artik indextir.
// cities.set(key,"Array")                //burda "referans veri tipi, yani adres" key var! key´ler ayni adresi gösteriyor!

console.log(cities.get(key));             // cikti: "Array" oldu, neden "key adresinin" icerigini getir diyor.











