// Klavye Eventleri:

// keypress
// document.addEventListener("keypress",run);

// function run(e){
//     // console.log(e.which);     //burda klavyeden herhangi bir sayi yada harfe bastiginda ascii kodunu getirir.
//     console.log(e.key);          //buda neye basarsan onu getiriryor.a ya basarsan a , 1 e basarsan 1 geliyor.
// }

// keydown
// document.addEventListener("keydown",run);   

// function run(e){
//     // console.log(e.which);      
//     console.log(e.key);          //keydown´un farki shift,alt,meta,control,tab vs gibi diger klavye elemanlarida ciktida oluyor.
// }

// keyup

// document.addEventListener("keyup",run);

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);          //farki a´ya bastiginda degil, basmayi biraktigin an evet olusuyor.
// }




// const header = document.querySelector(".card-header");    //input girildiginde header degissin istiyor. hem header hem de input alanini secti.
// const todoInput = document.querySelector("#todo");        //secme islemi nasil yapiliyor ? queryselector yada getElementBy...

// todoInput.addEventListener("keyup",changeText);           //input alanina event ekledi!peki bu eventin func ne ?..

// function changeText(e){
//     header.textContent = e.target.value;                  //inputa eklenilen veri "target"le alinirmis.
//     // console.log(e.target.value);			     //buradan 10 parmak programi/projesi yapabilirsin!
// }


