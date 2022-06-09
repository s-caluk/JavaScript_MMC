
var artik kullanilmiyor, avantaji kalmadi sadece let ve const kullaniliyor.
const arraye nasil atama yaparsin? klasik JS mulakat sorusudur! push ile.

======================================================
// Var---------------------------------------- 

// var name = "Mustafa Murat";
// name = "Murat";
// console.log(name);

// Let---------------------------//let´de yukardaki gibi mümkün degil.(araya consol.log girerse mümkün)

// let a,b;                      //2 variable ayni satirda tanimlanabiliyor
// a = 10;
// b = 20;
// console.log(a+b);

// Const----------------------------------------

// const name = "Mustafa Murat";   //valuesi hemen verilmeli. yoksa syntaxerror alirsin.
// console.log(name);
// name = "Murat";                  //constta value degistiremezsin.
// console.log(name);


const a = [1,2,3,4,5];              //burasi mülakatlarda soruluyor!!
console.log(a);                     //a = [1,2,3,4,5,6] tekrar value atamasi yapamazsin fakat pushla olur.
a.push(6);                          //burda a nin adres ayni degismiyor, pushla ekleme yapiyorsun!
console.log(a);

const b = 10;                       //b primitivdir, 
b = 20;                             //const oldugu icin tekrar value atamasi yapamazsin.







