
fonksiyonu baska fonksiyon icine(parametre olarak) göndermeye diyrlar sanirim.
==========================================================================
// Callback Fonksiyonlar

// const langs = ["Python","Java","C++"];

// langs.forEach(function(lang){
//     console.log(lang);
// });

// document.getElementById("btn").addEventListener("click",function(){
//     console.log("Tıkla");

// });
//--------------------------
// function process1(callback){                             //cikti: önce "naber", sonra "Process 2", sonra "Process 1" olur
//     setTimeout(function(){
//         console.log("Process 1");
//         callback();

//     },3000);
// }
// function process2(){
//     setTimeout(function(){
//         console.log("Process 2");
//     },2000);
    
// }
// process1();
// process2();
// console.log("naber");
//---------------------------
// process1(process2);                                   //bu callback li versiyon!
//---------------------------


const langs = ["Python","Java","C++"];

function addLang(lang,callback){

    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback();
    },2000);
}
function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}

addLang("Javascript",getAllLangs);





