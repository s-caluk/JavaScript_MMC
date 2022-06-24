
ajax a göre daha kolay bir arayüz oldugunu düsünüyor.
fetch ögrenince ajax ve digerlerini kullanmiyorlarmis.
fetch ile veri alma ve gönderme islerini yapiyorsun. 
yine promise dönüyor!

==================================================

function getTextFile(){                  // Text Dosyasından veri alma

    fetch("example.txt")                 //nerden alacaksin veriyi, yolu yaziyor.
    .then(response => response.text())   //burda gizli returnn var!
    .then(data => console.log(data))    
    .catch(err => console.log(err));

}
// getTextFile();


//----------------------------
function getJsonFile(){                   // Local bir Json Dosyasından Veri Alma

    fetch("example.json")
    .then(response => response.json())   //2 satir yerine su da olur:
    .then(data => console.log(data))     //.then(response => console.log(response))    
    .catch(err => console.log(err));
}
// getJsonFile();


//-----------------------------------
function getExternalAPI(){
    fetch("https://api.exchangeratesapi.io/latest")   //uzaktaki entpointin linki veriyorsun. ordan al ilgiyi demek.
    .then(response => response.json())                //dikkat bu link artik aktuel degil.
    .then(data => {
        console.log(data.rates.TRY);
    })
    .catch(err => console.log(err));
}
// getExternalAPI();


// https://api.exchangeratesapi.io/latest


