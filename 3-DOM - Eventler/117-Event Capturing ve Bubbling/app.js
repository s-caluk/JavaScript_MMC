
Event Capturing ve Event Bubbling olaylari js le alakali degil , html dökümani ile alakaliyms.
Event Bubbling:kabarciklanma yani bir child´i secince parentini ve onunda parentini run yapiyor!
Event Capturing veya Delegation:olay yakalama demek. bubbling´in tam tersi. 
yani parente atadigim event , childlerinden biri tiklansa da calisiyor. 
Nerde kullaniliyor? e.target´le basilan yeri yakalayip ona uyfun if calistiriyoruz.
bunlar DOM a yeni element eklenecekse oldukca önemli!

// Event Bubbling = Kabarciklanma

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("Div Container");

// });
// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card Row");
    
// });
// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){  //card-body icindeki h5 e tikladi, 3´ü birden calisti!
//     console.log("Card Body");
    
// });



// Event Capturing veya Delegation = Olay Yakalama veya Yetkilendirme=========================================================

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);

function run(e){
    if (e.target.className === "fa fa-remove"){        //yani X isaretine tiklandiysa sil diyoruz
        console.log("Silme İşlemi");
    }
    if (e.target.id === "filter") {
        console.log("Filtreleme İşlemi");
    }
    if(e.target.id === "clear-todos") {
        console.log("Tüm taskları silme işlemi");
        
    }
    // console.log(e.target);

}