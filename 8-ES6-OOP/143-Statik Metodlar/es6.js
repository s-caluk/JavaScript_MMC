// Statik Metodlar (duragan metod): obje olusturmadan, functionu kullanmani sagliyor!
basina static yazarsan obje olusturmadan, functionu kullanabiliyorsun.
diyelim static yazdin ve obje olusturup cagirdin. hata alirsin!
Neden hata alirsin? : cünkü static dediginde function prototype yazilmiyor! 
construktor´un icine yaziliyor. yani sadece sinif üzerinden ulasabiliyorsun!

class(construktor) isimlerini büyük yaziyorlar, obje isimlerini kücük basliyorlar!
================================================

class Matematik {
    sqrt(x){
        console.log(x*x);
    }
    static cube(x) {
        console.log(x*x*x);
    }
}
//----------------                       //static kullanmazsan ciktiyi bu sekil almak zorundasin. math obje olusturmalisin.         
// const math = new Matematik();
// math.cube(3);
// console.log(math);
------------------

// Matematik.cube(3);                   // class üzerinden ulasiyor cünkü static duragan
// math.sqrt(4);                        // obje üzerinden ulasiyor
// Matematik.sqrt(5);                   // hata alirsin , obje üzerinden ulasmalisin

// Object.create();                     // aslinda önceden class üzerinden static fonksiyona ulasmayi kullanmistik. bsp bu.

console.log(Math.sqrt(4));




