
DÖNGÜLER: While, Do While , For Döngüleri
Break ve Continue : Break döngüyü direk sonlandirir. 
Continue döngünün devamini birakip basa döner.

baslangic+kosul+arttirma for dongüsünde tek satirda yapilabiliyor. pratik.

tek tek elemanlarin üzerinde gezinmeye "iterasyon" deniliyor. 
while,for,forEach,map ile yapilabilir.forEach() bunun en kisa yolu!JS kendi gönderiyor.

Objelerde kullanabilecegimiz map() funksionu da cok kullanisli. frameworklerde zaten cok kullanacaksiniz.
for in kullanimi da objelerde iterasyon icin! 

=================================================================


// While Döngüleri--------------------------------------------------------------------------

// let i = 0;

// while(i < 10){                 // Sonsuz Döngü
//     console.log(i);
//     i++;                       // i = i+1 , i += 1 hepsi ayni sonuc
// }


// let i = 10;

// while (i > 0){
//     console.log(i);
//     i -= 2;
// }


// Break ve Continue--------------------------------------------------------------------------
//Break döngüyü direk sonlandirir. Continue döngünün devamini birakip basa döner.


// let i = 0;

// while (i < 10) { 

//     if (i == 3 || i == 5){       //3 ve 5 yazilmaz!
//         i++;                     //bunu yapmazsan sonsuz döngüye girer!
//         continue;
        
//     }
//     console.log(i);
//     i++;
// }

// Do While-----------------------------------------------------------------
bu döngünün en az bir defa calisma garantisi var. bu cok kullanilmiyor. genelde for while kullaniliyor.

// let i = 0;

// do {
//     console.log(i);
//     i++;
// }while(i < 10);


// For--------------------------------------------------------------------------

const langs = ["Python","Javascript","Java"];

// let index = 0;

// while(index < langs.length){                        //iterasyonu while ile yapmak

//     console.log(langs[index]);

//     index++;
// }


// for (let index = 0;index < langs.length;index++){      //iterasyonu for ile yapmak

//     console.log(langs[index]);

// }

// langs.forEach(function(lang,index){                  //iterasyonu forEach ile yapmak

// });


// const users = [                                      //iterasyonu map ile objelerde yapmak         
//     {name:"Mustafa",age:25},
//     {name:"Zeynep",age:40},
//     {name:"Ali",age:12}
// ];

// const names = users.map(function(user){ 
//     return user.name;
// });
// const ages = users.map(function(user){
//     return user.age;
// });
// console.log(names);
// console.log(ages);


const user = {                                          //iterasyonu for in ile objede yapmak.    
    name:"Mustafa",
    age:25
};

for (let key in user){
    console.log(key,user[key]);
}








