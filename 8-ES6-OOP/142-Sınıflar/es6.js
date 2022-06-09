ES6 ile beraber yeni yazim standarti geldi. yeni siniflar nasil yapilir? 
babeljs: bunu es5 calistiran browserlarin okuyacagi forma dönüstürmek icin var.
Syntactic Sugar: yeni siniflarin yazim sitiline diyorlar.class!
================================================================================

// function Employee(name,age,salary){                                  //eski konstructor böyle yaziliyordu!
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
// Employee.prototype.showInfos = function(){
//     console.log("İsim:" + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);

// }
// const emp = new Employee("Mustafa",25,4000);

// console.log(emp);

==Yeni yöntem:=========================================================

class Employee {

    constructor(name,age,salary){                                        // Constructr
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){                                                         //otomatik prototype ekliyor zaten!
        console.log("İsim:" + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }

}

const emp = new Employee("Mustafa",25,4000);

console.log(emp);
emp.showInfos();
