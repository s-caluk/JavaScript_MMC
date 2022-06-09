// Scope(kapsam) Kavramı bize bir degiskenin nerelerde var olabilecegini söyler!3 scope var.

1) global scope: window üzerindeki kisimdir. yani herhangi bir function yada if durumunun icinde degil!

2) function scope: function icindeki olan degiskenler.

3) block scope: if weil for blogu icinde olanlar. 
degisken var ise disarida var oluyor fakat let ve const disarida var olmuyor!
yani block da vari degisirsen globaldekini degistirmis gibi oluyorsun. let ve const da gecerli degil!
o yzden artik var cok kullanilmiyor!

kisaca let ve const da sikinti olusmuyor. 
globalde var ile degisken tanimlarsan, block scopda degistirilebiliyor.sikinti... 

===============================================================================

let a = "123456";

// var value1 = 10;                  //bu alan global scope
// let value2 = 20;
// const value3 = 30;

// function Func(){
//     var value1 = 40;              //function scope
//     let value2 = 50;
//     const value3 = 60;            //bagimsiz alanlar gibi! const value3!!! 

//     console.log(value1,value2,value3);       //40,50,60  birbiriye karismiyor! fakat block da isler karisiyor.
// }
// Func();

===================================================================================

// if (true){                                  //block Scope
 
//     var value1 = 40;                        //bu var globaldekini degistirmis gibi oluyor!! 
//     let value2 = 50;
//     const value3 = 60;
//     console.log(value1,value2,value3);       // 40 50 60

// }

// console.log(value1,value2,value3);           //cikti 40 20 30 


if (true) {

    let a = "34343434";                         

}
// console.log(value1,value2,value3);





