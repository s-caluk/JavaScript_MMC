
windows (yani this penceren) objesinde JS den gelen bir cok özellik ve method bulunuyor. 
js deki en GENEL objemizmis. console.log(window/this) yazarak consol üzerinde window icindeki 
tüm metotlari yada objeleri görebilirsin. bu dersin amaci bu. locationa->confirm´e bakabilirsin.

Window objesinin cok kullanilan methodlarindan birkaci asagida.
alert : pop-up acar.. ok
confirm : eminmisiniz diye sordugumuz popuplari aciyormus. ok-cancel
prompt: kullanicindan input alan pop-up aciyor.. ok-cancel

peki window objesi nerelerde kullanilir? ihtiyacin oldugunda!

=======================================================================================

// Alert-----------------------------------

// alert("Merhaba");

// console.log(cevap);

// Confirm---------------------------------

// if (confirm("Emin misiniz?")){
//     console.log("Silin Gitsin");        //ok basarsa true döner ve siler
// }
// else {
//     console.log("Silmeyin");            //cancel basarsa false döner.
// }


// Prompt----------------------------------------

// const cevap = prompt("2 + 2 = ?");

// if (cevap == "4") {
//     console.log("Doğru");
// }
// else {
//     console.log("Yanlış");10
// }


//-------------------------------------------------------------------
// Window propertieslerini/özelliklerinni cagirma/yazdirma nasil oluyor?

let value;

value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;

// if (confirm("Sayfa yenilensin mi?")) {
//     window.location.reload();
// }
// else {
//     console.log("sayfa yenilenmedi");
// }


// value = window.outerHeight;
// value = window.outerWidth;


// value = window.innerHeight;
// value = window.innerWidth;


// value = window.scrollX;

// value = window.scrollY;

console.log(value);




