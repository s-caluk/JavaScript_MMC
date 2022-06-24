Fonksiyon Tanımlama; yazilim fonsiyonlardan ibaret. math() objesinin icindeki
karekök alma METODU da baskayazilimcilar tarafindan sen kullanasin diye olusturulmus. 
Math.sqrt() -> hazir objeler büyük harfle basliyor. 
objenin icindeki fonsiyona metod denir! disindaysa fonsiyon! ikiside ayni aslinda.
sen de kendi fonksiyonlarini olusturabilirsin. 1 kere yazip , yine lazim olursa, sadece cagiriyorsun!

functionu sadece tanimlarsan cikti vermez.

varsayilan deger vermenin iki yolu var:
1-if kontrolu ile yapabilirsin
2-tanimlarken yapabilirsin. bunu kullan! daha güncel.

return neden kullanilir? :
1)functionda degeri/sonucu return yapmazsan, baska fonsiyonda kullanamazsin!
2)return fonksiyonu tamamen sonlandirir. returndan sonrasi calismaz!


1. fonsiyon Türü: Function Call = Fonksiyon Çağrısı ()

2. fonsiyon Türü: Function Expression = bir degiskene funktion atama islemine denir.

3. fonsiyon Türü:Immediately Invoked Function Expression (IIFE) = Tanimlandigi yerde calisan fonsiyon türü!
   bunu cagirmayaa gerek yok. ilerde modül patternde cok kullaniliyormus.
===================================================================================

// function merhaba(name = "Bilgi Yok",age = "Bilgi Yok"){

//     // if (typeof name === "undefined") name = "Bilgi Yok";   //Burda aslinda varsayilan deger veriyor.

//     // if(typeof age === "undefined") age = "Bilgi Yok";      //varsayilan deger vermenin daha kisa yolu tanimlarken yazmak!

//     console.log(`İsim: ${name} Yaş: ${age}`);
// }

// merhaba("Murat",25);    		// Fonksiyon Çağrısı (Function Call)

// merhaba("Ayşe",30);

// merhaba();              		//burda cikti undefined´dir

// merhaba("Kadir");        		//varsayilan deger atanmissa isim:kadir yas: bilgi yok



//--------------------------------------//return anlatiliyor!!----------------------
// function square(x) {
//     return x * x;

//     console.log("Naber");              // Hiç bir zaman çalıştırılmaz.

// }
// function cube(x) {
//     return x*x*x;
// }

// let a = cube(square(12));

// console.log(a);


//Function Expression------------------------------------------------------------

// function merhaba(){
//     return "Merhaba";
// }
// console.log(merhaba());


// const merhaba = function(name){
//     console.log("Merhaba " + name);
// };
// merhaba("Murat");



// Immediately Invoked Function Expression (IIFE)-----------------------------------------------------------

// (function(name){                            //adi yok hemen calisir.
//     console.log("Merhaba: " + name);
// })("Murat");                                //böyle cagrilir!


const database = {                             //obje olusturuyoruz
    host: "localhost",                         //1 propertiesi var
    add: function(){                           //4 tane METHODu var
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde Edildi");
    },
    update:function(id){
      console.log(`Id: ${id} Güncellendi`);  
    },
    delete:function(id){
      console.log(`Id: ${id} Silindi`);  
    }
}

console.log(database.host);                 //propertisi cagirdi!

database.add();                             //methodu cagirdi! onun zaten consol.log var.

database.delete(10);




