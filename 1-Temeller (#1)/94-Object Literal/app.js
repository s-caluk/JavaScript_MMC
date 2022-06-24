
Programlama gercek hayati koda yansitmak icindir.
gercek hayatta bilgisayar bir obje olabilir.
rengi, boyutu propertiesidir.
kapanip, acilmasi verbi/olayi yani metodudur.

let value = "seher";
let dizi = [1, 2, 3];
let class = {color: "red", work: function(){...} };

==================================================
let value;

const programmer = {
    name : "Mustafa Murat Coşkun",
    age : 25,
    email: "coskun.m.murat@gmail.com",
    langs : ["Python","Java","Javascript"],

    address : {                                   //burasi ic-ice objeye örnek
        city : "Ankara",
        street : "Bahçelievler"
    },

    work : function(){                            //burasi method
        console.log("Programcı Çalışıyor...");
    }
}


value = programmer;                                //objeye ve özellik yada mehoduna nasil ulasacagiz ?

value = programmer.email;                          // Genel olarak , bu daha cok kullaniliyor.
value = programmer["email"];                       //2.yöntem ikiside olur


value = programmer.langs;


value = programmer.address.city;


programmer.work();                             


const programmers = [                      //objelerden olusan arraye örnektir.
    {name: "Mustafa Murat",age:25},
    {name : "Oğuz",age : 25}
];

value = programmers[0].name;


console.log(value);                     //her satir icin sirasiyla aktif oluyor



