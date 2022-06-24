
167------------------------------

Callback´lerin dezavantajlarini yok ketmek icin ES6 ile promise gibi yapilar geldi.
callback cehennemi diyorlarmis,hala kullananlar var! callback e alternatiftir promise.
promislerin objeden cok farki yok. tamirci bekle dediginde,bir fonction promis objesi olusturur! 
BSP:pc bozuldu , tairciye get ile istek attin. 
3 durum var: beklersin, olumlu dönüs, olumsuz dönüs.

pending: tamirci bekle sana dönecegim dedi. bekleme durumundur. [state:pending, value:undefined]
resolve:olumlu dönüstür.fulfilled de denir -> .then ile yakalarsin [state:resolved, value:parametre ne ise o olur]
reject:olumsuz dönüstür. -> .catch ile yakalarsin. [state:rejected, value:error]

168-----------------------------------

yani talep ettigin veriyi , promis yapisina göre aliyorsun!
promis yapisi vue.js gibi frameworklarin yapisinda cok karsimiza cikar.
1 tane catch - birden çok then kullanabiliriz: buna Promise Chain deniliyor!


===========================================================================
// function getData(data) {                            // Promise Objesi döndüren fonksiyon
//   return new Promise(function(resolve,reject){
//       setTimeout(function(){

//         if(typeof data === "string"){
//           // Olumlu
//           resolve(data);
//         }
//         else {
//           // Olumsuz
//           reject(new Error("Lütfen string bir değer girin"));
//         }

//       },5000);                                 //bu promise 5 sn sonra calissin demek

//   });

// }

// getData(24)                                    //bu sekilde fonksiyonlar ardarda baglanabiliyor.             
// .then(response => console.log("Gelen Değer " + response))
// .catch(err => console.error(err));

//-----------------------------
// function addTwo(number){

//   return new Promise((resolve,reject) =>{
//       setTimeout(function(){
//           if (typeof number === "number"){
//             resolve(number+2);
//           }
//           else {
//             reject(new Error("Lütfen bir sayı girin"));
//           }
//       },3000);                                  //3 sn sonra calissin. böylece hangi fonsiyonun önce calisacagini belirleyebilirsin.
//   });

// }

// addTwo(10)
// .then(response => {
//   console.log(response);                       //cikti:12
//   return response + 2;                         //promis olarak döndü. 2. ye yakalamak icin yine then kullaniyoruz.
// })
// .then(response2 => console.log(response2))     //cikti:14
// .catch(err => console.error(err));             //1 tane catch - birden çok then kullanabiliriz: buna Promise Chain deniliyor!





