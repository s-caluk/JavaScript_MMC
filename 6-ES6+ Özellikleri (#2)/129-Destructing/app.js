

//Destructing : array, function ve objelerin icinden deger almak icin kullanilan "kisa yol"! 

================================================================================================

// arr = [100,200,300,400];
// let number1,number2;
// number1 = arr[0];                         //eskiden böyle arrayden deger alip atardin.
// number2 = arr[1];

// Destructing

// const [number1,number2] = arr;             //es6 ile arrayden kisa deger alip atama!

// console.log(number1,number2);


// Obje Destructing=============================================================

// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// };

// const {a:number1,c:number2,e:number3} = numbers;           //objenin icinden alindigi icin {} kullanilir!

// console.log(number1,number2,number3);        


// Function Destructing=============================================================

// const getLangs = () => ["Python","Java","C++"];            //tek islem, tek return oldugu icin...

// const [lang1,lang2,lang3] = getLangs();                    //function ve arrayda birebir eslestiriyor.obje istisna!
// console.log(lang1,lang2,lang3);

// Obje:buna bayildim================================================================================= 

const person = {
    name:"Mustafa Murat",
    year:1993,
    salary : 3000,
    showInfos : () => console.log("Bilgiler gösteriliyor...")

}

const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person;

console.log(isim,yil,maas);                                   //degerler cagiriliyor..
bilgileriGoster();                                            //degerler baska , function baska cagiriliyor.









