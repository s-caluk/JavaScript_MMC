

================================================================================================
const person = {                                  //Obje
    name:"Mustafa Murat",
    age:25,
    salary:3000
};

const langs = ["Python","Java","C++","Php"];      //Array

const name = "Mustafa";                           //String

// For In===========================================================

// Object--------------------                  //Obje üzerinde gezinme
// for(let prop in person) {
//     console.log(prop,person[prop]);
// }

// Array----------------------                 //Array üzerinde gezinme
// for (let index in langs){
//     console.log(index,langs[index]);
// }

// String------------------------------        //String üzerinde gezinme:her harf bir indexe denk geliyor!
// for (let index in name){
//     console.log(index,name[index]);
// }


// For Of: ===========================================================
//´for in´ yerine de kullanilabilir. array ve arrayimsi (nodelist gibi) ve string üzerinde geziniliyor.
//farki:bunda objeler üzerinde gezinemiyorsun. daha pratik! indexi degil direk degeri veriyor.


// Object---------------------------
// for (let value of person){                  //Hata: for of la obje üzerinde gezinilmez.
//     console.log(value);
// }

// Array--------------------------       
// for (let value of langs){     
//     console.log(value);                     //farki: indexi degil direk degerini yaziyor.
// }                                           //cikti:Python Java C++ Php

// String----------------------------
for (let character of name){      
    console.log(character);                    //farki: direk degerini yazar
}                                              //cikti: M u s t a f a











