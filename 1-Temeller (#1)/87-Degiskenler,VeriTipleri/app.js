
Primitiv veri tipleri : number, string, boolean, null(null degeri atanmis),undefined(hic deger atanmamis)
Reference Veri Tipleri: array, obje , function, date object

JS de typeof u OBJECT görülen tüm veri tipleri referans veri tipleridir!

Peki farklari nedir?: 
primitiv veri tipleri sadece o degiskenin degeridir. bekci görevi görüyor.
referans veri tip , referanslar üzerinden bellekte bir "yeri" gösteriyor. ve o gösterilen yerin degerlerini aliyoruz!


===================================================================
// Değişken Oluşturma

// var a = 20;
// var b = 10;
// var c = 40;

// console.log(a,b,c);

// Primitive

// var a = 10;                          // Number VEri Tipi
// var b = 3.14;                        // Number Veri Tipi
// console.log(typeof a);
// console.log(typeof b);

// String----------------------------------

// var name = "Mustafa";

// console.log(name);
// console.log(typeof name);

// Boolean---------------------------------

// var a = false;

// console.log(typeof a);

// var a = null; ----------------------------                     
// console.log(a);

// console.log(typeof a);               //tanimlanmis ve null degeri atanmis.. yani ici bos , bosluk atadim demek.

// var a;--------------------------------------
// console.log(a);                     // bu undefine´dir. yani hic bir ddeger atanmamis.

// var numbers = [1,2,3,4,5];--------------------          

// console.log(numbers);
// console.log(typeof numbers);        //typeof objedir.


// var person = {     -----------------------------------
//     name: "Mustafa Murat",
//     age : 25
// }
// console.log(person);
// console.log(typeof person);         //typeof objedir


// var date = new Date();----------------------------------


// console.log(date);

// console.log(typeof date);           //type of objedir


// var merhaba = function(){ -------------------------------
//     console.log("Merhaba");
// }

// console.log(merhaba);
// console.log(typeof merhaba);

//----------------------------------primitiv ve referans veri tipi farki burdadir.
// var a = 10;                         

// var b = a;

// console.log(a,b);               //10,10 ciktisi verir

// a = 20;

// console.log(a,b);               //20,10 ciktisi verir. primitivdir!

var a = [1,2,3];                   //array referans veri tipidir. a bir yerin adresidir aslinda

var b = a;                         //b ise a´nin gösterdigi yer adresini kopyalar.

a.push(4);

console.log(b);                    // b ve a güncel olan arrayi verir. cünkü referans veri tipidir.




















