
OOP ne demekti? Nesne yönelimli Programlama yani nesne olusturuyoruz.
bu nesnelerin kendi özellikleri ve metodlari olabilir.
burda gercek hayati bil.uyarlayarak cözüm üretmeye calisiyoruz.

//JS i frameworklerle kullanabilmemiz icin sadece DOM bilmemiz yetmiyor.
//OOP bilmezsen arka planini bilmiyorsun demek. is mulakatlarinda cok soru geliyor.
//objeler javadaki klasslara denk geliyor, fakat "oop" c# ve javada daha geliskin.


===========================================================================================

// console.log(this);                                      //"Global Scope".Kendi objeni olusturursan this senin objeni gösterir. 

// const emp1 = {                                          // Object Literal
//     name:"Mustafa",
//     age:25,
//     showInfos:function() {console.log("Bilgiler Gösteriliyor");}
// };
// const emp2 = {
//     name:"Ahmet",
//     age:25
// }

// console.log(emp1);

--------------------------------------------------------------
function Employee(name,age,salary){                        // Yapıcı Fonksiyon - Constructor Olusturma 
    this.name = name;                                      // 1 kere yaziyorsun, sablon gibi
    this.age =age;                                         // sonra ondan yeni objeler olusturuyorsun
    this.salary = salary;
    
    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);       //this kelimesi suanki objeyi gösteriyor.
    }
    
}
const emp1 = new Employee("Mustafa",25,4000);              //const date1 = new Data(); benzeri!
const emp2 = new Employee("Ahmet",25,5000);

console.log(emp1);                                         //cikti: Employee {name: 'Mustafa', age: 25, salary: 4000, showInfos: ƒ}
console.log(emp2);

emp1.showInfos();                                          //cikti: Mustafa 25 4000  







