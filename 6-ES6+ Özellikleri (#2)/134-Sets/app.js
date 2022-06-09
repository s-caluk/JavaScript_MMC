

Setler = yani Kümeler , array ve map lere  benziyor.
Farki: bir degeri sadece bir kez tasiyor. "2" degeri sadece 1 kez verilebiliyor.
==========================================================================

const myset = new Set();

myset.add(100);
myset.add(100);                                   //zaten eklendi, 1 kez yazar
myset.add(3.14);
myset.add("Mustafa");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2});                             

const myset2 = new Set([100,3.14,"Mustafa"]);     //arrayden sen olusturdu.

console.log(myset);                               //cikti: Set(6) {100, 3.14, ... }
console.log(myset2);                              //cikti: Set(3) {100,3.14,"Mustafa"}

// Size: icinde kac eleman var? ------------------------------------
// console.log(myset.size);

// Delete Metodu-----------------------------------------------------
// myset.delete("Mustafa");                       //deger varsa siliyor. yoksa hata vermiyor.

// Has Metodu--------------------------------------------------------         
// console.log(myset.has(3.14));                  //kümede bu deger var mi? t,f
// console.log(myset.has("Mustafa"));             //cikti: true
// console.log(myset.has(2000));                  //false , bu yok
// console.log(myset.has([1,2,3]));               //bu false verir,neden? cünkü iki [1,2,3] indexleri baska!

// For Each---------------------------------------------------------------
// myset.forEach(function(value){
//     console.log(value);                        //cikti:100, 3.14, ...
// })

// For Of-----------------------------------------------------------------      
// for (let value of myset){
//     console.log(value);                        //for eachle ayni sonucu verir
// }

const array = Array.from(myset);                 //set ten array olusturma.
const myset2 = new Set([100,3.14,"Mustafa"]);    //arrayden set olusturma.

console.log(array);





