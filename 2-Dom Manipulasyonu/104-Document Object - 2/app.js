// Window "document" özelliklerini inceledik.js araciligi ile this i consola yazdir.
console.log(this.document); tüm sayfayi konsol kismindan izleyebiliyorsun!
(this.alert)yapmiyoruz neden windows objesinin icinde. direk document yazsanda gelir.
links:document altindaki links kismindan documanindaki linkleri görebilirsin!
location: port host vs bilgilere buradan ulasabiliyorsun!
nextsibling: ayni parent icindeki 3 tane <p> gibi..yani kardes elementler!
html collection önemli , collectiondaki elementleri ulasmak icin toplu görmen lazim.


let value;

value = document;
value = document.all;                          /* */
value = document.all.length;                   /*dokumanindaki elementlerin sayisini veriyor*/
value = document.all[0];                       /*0.index html elementleri oluyor. en parent yani */
value = document.all[6];
value = document.all[document.all.length-1];   /*en son elementi verir */

// const elements = document.all;               //Html Collection:tek tek elementleri geziniyor
// for(let i = 0; i < elements.length;i++) {
//     console.log(elements[i]);
// }
// elements.forEach(function(element){           /*forEach kullanmak arraye cevirmeden hatali */           
//     console.log(element);
// });

// const collections = Array.from(document.all);   /*forEach ile ugramak istiyorsan önce Arraye cevirmelisin objeni*/

// collections.forEach(function(collection){
//     console.log(collection);
// });

value = document.all[8];    //body zaten 8. indexte. html collectiondan baktik.
value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.location.port;

value = document.URL;

value = document.characterSet;

console.log(value);