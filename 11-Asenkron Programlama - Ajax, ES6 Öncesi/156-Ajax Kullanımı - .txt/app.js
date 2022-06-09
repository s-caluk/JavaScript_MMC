/*
Senkron : es zamanli demek. processler birbirini bekler.
Asenkron : JS de cogu zaman asenkron islemler olur. islemler birbirini beklemez.
Asenkron bsp: facebook tüm islemleri bir arada oluyor. 
facebokta biri begeni yapiyor. biri yorum yaziyor...vs. arayüz kitlenmiyor.

Asenkron teknolojileri neler ? Ajax , Fetch(mit ES6) , Node.js
Asenkron ile Mücadele yöntemi ? ES6 öncesi: callback , mit ES6: promise , Async & Await

JSON: Java Script Object Notation
AJAX: Asyncronous Javascript and XML 
    -Veri alma/verme islemi asyncron olsun diye kullaniliyor)
    -sayfa yenilenmeden veri alma/verm islemi yapiyor
    -XHR = XmlHttpRequest

HttpRequest ne olabilir? Get Post Put Delete olabilir...
Dönen Response ne olabilir ? Json yada XML
============================================= */


JSON Objeleri normal objeler gibi yapiliyor. { "key"="value"; } aynisi
AJAX = "Asenkron" Javascript ve XML. bir kullanıcının web tarayıcısının sayfadaki içeriğin yalnızca küçük bir kısmının değişmesi gerektiğinde 
web sayfasının tamamını yeniden yüklemesine gerek yoktur. sayfayı yeniden yüklemeden bir sunucu ile iletişim kurmasını sağlayan bir teknikler grubudur.

ajaxta veri alma/verme islemleri sayfa yenilenmesine gerek olmadan asenkron olur. 

XHR = XmlHttpRequest Objesi ile ajaxde veri alma/verme islemi bu obje ile olur.

JSON & XML = verileri alirken her iki formatta da gelebilir. ama json daha hizli ve basit!

HttpRequest gönderip veri almak istedigini söylersin: GET,POST,PUT,DELETE olabilir.-->server

Server Response üretir: XML,JSON olabilir. --> browsere yollar.

Aldigin datayi arka planda asenkron kullanirsin.
------------
kendi serverimizdan yada internet üzerinden veri alabiliriz. 
bu derste butona tiklandiginda asenkron bir sekilde, txt dosyamizdaki yaziyi almayi ögrenecegiz.
aldigimiz veriyi de div in icine yazdirmaya calisacagiz. 
yani .txt dosyasindaki yaziyi web sitemize aktariyoruz!
======================================================================================
readyState: baglandigin server sayisi sanirim. 1-2-3-4.
responseText: veri geldiginde, onu texti burdan alabiliyoruz. pars ile json yapabilirsin
status: asagidaki kodlardan ne son durumu anlarsin. 200:OK
onreadystatechange: eskiden buna function atayarak kullaniliyormus.
onload: Response hazirsa direk olarak calisir! 4.
onerror:
onprogress: 3.
google "http Response status code" dersen developer.mozilla.org dan tüm kodlarin anlamina bakabilirsin.


// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error
// Holds the status of the XMLHttpRequest.
// 0: request not initialized 
// 1: server connection established
// 2: request received 
// 3: processing request 
// 4: request finished and response is ready


document.getElementById("btn").addEventListener("click",function(){
                                                                   
	const xhr = new XMLHttpRequest();                         // XMLHttpRequest objesi olusturursak ajax islemini gerceklestirebiliriz!
                                                                  //console.log(xhr); yaparak icerik incelemesi yapailirsin
	xhr.open("GET","example.txt",true);                       // burda baglanti aciyor. ne yapacak get!, nereden?, true=asenkron olacak demek.

	xhr.send();

	xhr.onload = function(){                                  //response hazirsa calisir.
        	//console.log(this.readyState);                   //hazirmi? 4
		if (this.status === 200) {
		//console.log(this.responseText);                 //texti consola yazdirir

		document.getElementById("ajax").textContent = this.responseText;     // texti div e yazdirir.
        
        }
    }
      
    // xhr.onreadystatechange = function(){                        //onreadystatechange fonsiyon atamak eski yöntem!

    //     if(this.status == 200 && this.readyState == 4) {        // Response Hazır          
    //         console.log(this.responseText);                     //konsola .txt icerigini yazdiriyor.
    //     }

    // }

});



