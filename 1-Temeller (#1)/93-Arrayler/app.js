
Bir arrayde ne yapmak isteyebilirsin ?
basindan/ortasindan/sonundan deger atmak yada eklemek istiyebilirsin.
büyükten kücüge yada tersi siralama yapmak isteyebilirsin. gibi....
mozillada cok güzel fonsiyonlari anlatmis.

==================================

const numbers = [43,56,33,23,44,35,5];              //1.yöntem

const numbers2 = new Array(1,2,3,4,5,6,7);          //2.yöntem ikiside ayni islevi yapiyor.

const langs = ["Python","Java","C++","Javascript"];    //karisik veri tiplri

const a = ["Merhaba",22,null,undefined,3.14];

// Uzunluk---------------------------------------------

let value;
value = numbers.length;
 
// Indekslenme-------------------------------------------

value = numbers[0];
value = numbers[2];
value = numbers[numbers.length -1];

// Herhangi bir indeksteki değeri değiştirme----------------------

numbers[2] = 1000;

value = numbers;

// Index Of--------------------------------------------------------

value = numbers.indexOf(1000);                   //1000 degeri hangi indexte?

// Arrayin Sonuna Değer Ekleme - Push---------------------------------

numbers.push(2000);


// Başına Ekleme---------------------------------------------

numbers.unshift(3000);
value = numbers;

// Sonundan Değer Atma-----------------------------------------

numbers.pop()
value = numbers;

// BAşından Değer Atma---------------------------------------------

numbers.shift()
value = numbers;

// Belli bir kısmını atma------------------------------------------

numbers.splice(0,3);
value = numbers;

// Reverse-Arrayi tam tersine cevirir---------------------------------------------------

numbers.reverse();
value = numbers;

//Arrayi siralamak icin---------------------------------------------------------

value = numbers.sort();                          //ilk haneye göre siralar.

value = numbers.sort(function(x,y){              // Küçükten Büyüğe
    return x - y;
});

value = numbers.sort(function(x,y){              // Büyükten Küçüğe
    return y-x;                                  //bunun mantigini cok anlamana gerek yok. böyle yapiliyor!
});

console.log(value);
