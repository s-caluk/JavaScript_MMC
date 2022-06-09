                                                       Request->      
API nedir? Application Programing Interface. yourAPP ->  API  ->theirAPP  .Yani uygulama programlama arayüzü.
                                                       <-Data
	 yani bir uygulamanin fonksiyonunu , baska uygulama kullanabilsin diye bir arayüz! Bsp:Github API
	 Peki uygulamalar neden API olusturuyor? reklam, tanitim, ücretli sunabilir,...

RestAPI nedir? WebApplicationlar arasinda iletisim saglamak icin kullanilan API türü. Rest mimarisinne dayaniyor.(birde SOAP var)
	 Rest:Representational State Transfer:avantaji hizli olmasi
	 Rest´in yapisi: stateless(önceki istekleri kaydetmiyor), http istekleri (get,post,put,delete), JSON
	 API leri insan yazdigi icin yapisi degisir. dokümantasyonunu okuyup anla diyor.

Http Istekleri nedir?
	GET : url ye göre belli veriyi alabiliyoruz.
	POST : url ye göre veriyi gönderir.
	PUT : url ye göe veriyi günceller.
	DELETE : url ye göre veriyi siler.

===============================================================================
Set Timeout ve setInterval ve  Clear Interval funsiyonlari windowsun icinde.	
===============================================================================

// Set Timeout

// setTimeout(function(){
//     console.log("Naber");

// },5000);                                   //5 sn sonra islemi baslat demek

// let i = 0;
// let value = setInterval(function(){        
//     i++;
//     console.log("Sayı:",i);

// },1000);                                    //döngüyü 1 sn araliklarla yap demek , sonsuz!

// document.getElementById("btn").addEventListener("click",function(){
//     clearInterval(value);                   //butonla döngüyü durdur demek

// });



