
Not:input evetleri daha cok fazla var. JS dökümanindan ilgin varsa bakabilirsin.
Eventler yazilimda cok kullanilir.



const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded",load);  //sayfayi güncelledigin zaman kullaniliyor.


// function load(e){
//     console.log("Sayfa Yüklendi");
// }

// Focus
// filter.addEventListener("focus",run);      //filter icine tiklayinca yani focuslaninca calisir.

// // Blur
// filter.addEventListener("blur",run);       //focustan cikinca calisiyor

// Paste v
// filter.addEventListener("paste",run);      //kopyaladigin seyi filter inputuna "paste"/strg+v yaptiginda calisiyor

// Copy
// filter.addEventListener("copy",run);       //filter icindeki yaziyi kopyaladiginda calisiyor. strg+c

// Cut
// filter.addEventListener("cut",run);        //strg+x yaptiginda cut yani

// Select
// filter.addEventListener("select",run);     //filter icindeki belli bir alani taradiginda/sectiginde calisiyor.





function run(e) {
    console.log(e.type);

}
