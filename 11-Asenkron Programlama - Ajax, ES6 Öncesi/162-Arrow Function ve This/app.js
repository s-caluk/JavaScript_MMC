
this bazen window objesini bazen kendi objemizi gösterebiliyor. karisiklik olabiliyor.

========================================
const person = {

    age:25,

    // tellAge : function(){

    //     console.log(this);                   //this neresi diye böyle bakabilirsin.        
    //     console.log(this.age);               // this - Person objesini gösteriyor. hangi obje icindeyse onu...
    // }.bind(this)                             //burdaki this windows objesidir!

    tellAge: () => {                            //arowfunction ile noral function arasindaki fark: burda this windowsdur
        console.log(this);
        console.log(this.age);
    }

    // this - Window
}

person.tellAge();
