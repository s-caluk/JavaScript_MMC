
JS deki Prototip mantigini kavrarsan, cok yol almis olacaksin.
java c# gibi diller class tabanli , JS ise Prototype tabanli!
JS de class yok ( var gibi olsa bile "es6" ile arka tarafta ptototype dönüstürülüyor.)
Yani sen Obje olusturdugunda:özellikler, funksion , bir de prototype özelligi geliyor.

her obje üretince otomatik prptotype olusturuluyor. O~>O prototype kendiside ayri bir obje. 
protonun icinde yine:bircok fonksiyon oluyor.bu fonsiyonlar olusturulan objelere otomatik geciyor.

ayni tipte cok obje ürettin diyelim , hepsi ortak prptptype kullaniyor! 1 kez yazilmis oluyor.
aslinda 2 objenin ortak metotlari, prototype altinda toplanmis oluyor.

veeee.. en temel objemiz Object()´tir. bunun icinde her yazilan fonsiyonu MIRAS almis oluyoruz.
employee ~> employee Prototype ~> objeckt()prototype  : buna ptototype zinciri diyorlar.
prototype objeler arasi kalitim yapmamizi/miras almamizi sagliyor.
bir fonsiyon cagirdiginda önce kendi icine bakiyor, sonra prototipine, sonra Object()´e 

2.Avantaji--------------

tüm objelerin ortak kullandigi method/fonksiyonu , prototype´e yazarsan bellekte az yer kaplar!

===================================================================
function Employee(name,age){
    this.name = name;
    this.age = age;

    //this.showInfos = function() {                                  buraya yazarsan olusturdugun her obje icin yer kaplar 
    //    console.log("isim: "+ this.name + " Yas: "+ this.age);     o yüzden bir kere prototype yazman daha mantikli!
    //}
}
Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Yaş: " + this.age);
} 


const emp1 = new Employee("Mustafa",25);
const emp2 = new Employee("Oğuz",25);

emp2.showInfos();

console.log(emp1);
console.log(emp2);

