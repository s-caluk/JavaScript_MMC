

sanirim haklisin, islama gecmeden önce alevi olma ihtimalimiz büyük gözüküyor. 
bilince cikarmama yardimci oldugun icin tesekkkürer. paylasmak istedim.



// Kalıtım - Inheritance
Bu konu JS in arka planini bilmen icin. artik bu yapilar kullanilmiyor. 
arka planda otomatik olusturuluyormus. ama mantigini anlaman icin önemli bir konu.
==========================================================================

function Person(name,age){
    this.name = name;
    this.age = age;

}
Person.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Yaş: " + this.age);
}
// const person = new Person("Mustafa",25);
// console.log(person);

function Employee(name,age,salary){                             //employee persondan miras alsin. nasil olacak?
    // this.name = name;
    // this.age = age;                                     //yani persondaki constructor´u kullaniyor.
    Person.call(this,name,age);                            //employee girilen name ve age PErsondakine esitle demek!
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("Employee");
}

Employee.prototype.showInfos = function(){                       // Overriding - İptal Etme , persondaki showinfos calismaz 

    console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş : " +this.salary);

}
const emp = new Employee("Mustafa",25,4000);

// console.log(emp);
// emp.showInfos();
// emp.toString();

console.log(emp);


