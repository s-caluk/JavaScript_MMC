

sayisi stringe vs cevirme ihtiyacin hasil olabilir.
NaN :Not a Nuber -> bu bir sayi degil sonucudur.

===============================================
let value;

// Veritiplerini String'e Çevirme-----------------------

value = String(123);
value = String(3.14);
value = String(true);                       
value = String(false);
value = String(function() {console.log()});
value = String([1,2,3,4]);
value = (123).toString();                 //value = String(123); bu islemle birebir ayni!
value = (3.14).toString();                // sadece yazim formati farkli!

// Veritiplerini Sayılara Çevirme--------------------------------
value = Number("123");                     + //icinde sayi varsa cevrilir
value = Number(null);                      + // null 0 sifirdir! yani cevrilir.
value = Number(undefined);                   //NaN bu Number a cevrilemez. cünkü cevrilecek bir sey yok! typeof -> NaN :NotaNuber olur!
value = Number("Hello World");               //NaN sonucunu verir. sayisal deger yok. ceviremez.
value = Number(function(){console.log()});   //NaN cevrilemez yani
value = Number([1,2,3,4]);                   //NaN array de cevrilemiyor.

value = Number("3.14");
value = parseFloat("3.14");                  //icinde sayi olan stringden float sayi olusturuyor

value = parseInt("3");                       //icinde sayi olan stringi integere cevirir!

//-------------------------------------------//otomatik ceviri--
const a = "Hello" + 53;                      //bir string ve bir number ise otomatik stringe cevirir.
console.log(a);                              //Hello53 verir. yanyana ekler!
console.log(typeof a);                       //string verir. 
 
const a = Number("34") + 53;                 
console.log(a);                              //87 
console.log(typeof a);                       //number verir.


console.log(value);
console.log(typeof value);






