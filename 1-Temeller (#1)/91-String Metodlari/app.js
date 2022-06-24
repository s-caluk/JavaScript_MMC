

===============================================
let value;

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "Java,Python,C++";

value = firstName + lastName;

value = firstName + " " + lastName;

value = "Mustafa Murat ";

value += "Coşkun";                                // value = value + "Coşkun"

value = firstName.length;                         //uzunlugu verir.

value = firstName.concat(" ",lastName," ","Caz"); // firstName + " " + ... yani stringleri ucuca eklemek istersen; concatenation: birlestirme demek

value = firstName.toLowerCase();                   //kücültür tüm karakterleri

value = firstName.toUpperCase();                   //büyültür tüm karakterleri


value = firstName[0];                              //array gibi 0. indexi verir, yani "L"
value = firstName[2];
value = firstName[4];
value = firstName[firstName.length - 1];           // son karakteri getirir. stringin boyutunu bilmiyorsan kullanilir.


// Index Of-------------------------------------------------

value = firstName.indexOf("L");                   // ilk indexi getirir
value = firstName.indexOf("o");
value = firstName.indexOf("l");                   // aradigin yoksa -1 dönderir


// Char At------------------------------------------------------

value = firstName.charAt(0);                      //value = firstName[0]; ayni islev
value = firstName.charAt(firstName.length -1);

// Split-----------------------------------------------------


value = langs.split(",");                        //önemli bir method. elemanlari "virgule göre" ayri ayri alabilmeni sagliyor, arraye yerlestiriyor.

// Replace----------------------------------------------

value = langs.replace("Python","CSS");           //stringin icinde yerini degismek istersen kullaniyorsun.


// Includes ----------------------------------------------

value = langs.includes("Java");                 //stringin icinde java varmi diye sorguluyorsun. t/f dönderiyor
value = langs.includes("asdsadsadsad");


console.log(value);
