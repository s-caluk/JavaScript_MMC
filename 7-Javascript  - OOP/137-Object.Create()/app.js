
Dillerde kalitimin mantigi nasildir?
Obje olustururken , eger prototipini baska bir objeden almak istiyorsan object.create() kullanilir.

===============================================================================
// const obj = {
//     test1:function(){
//         console.log("Test 1");
//     },
//     test2:function(){
//         console.log("Test 2");
//     }
// }
// // console.log(obj);
----------------------------------------  //yeni obje olusturacagim, objemin prototype´i yukariyi göstersin!!
// const emp = Object.create(obj);        //Object.create kalitim islemlerinde kullanilacak.
// emp.name = "Mustafa";
// emp.age = 25;
// console.log(emp);
-----------------------------------------
// function Person(){                       //construktur

// }
// Person.prototype.test1 =function(){
//     console.log("Test 1");
// }
// Person.prototype.test2 =function(){
//     console.log("Test 2");
// }

// function Employee(name,age){            //construktur
//     this.name = name;
//     this.age = age;
// }

// Employee.prototype = Object.create(Person.prototype);  //employenin _proto_sunu , personun _protosuna bagladi!
// Employee.prototype.myTest = function(){                 
//     console.log("MyTest");
// }
// const emp = new Employee("Mustafa",25);

// console.log(emp);

// // emp.test1();                                       //test1() kendi fonsiyonu degil ama personun protosunda miras/kalitim aldi

