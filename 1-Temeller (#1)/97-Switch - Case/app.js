
if-elselerin yerine switch-case kullanabilirsin.
breakle cikmazsan isleme devam ediyor!
break ve default kismini unutma!

=========================================================


// if (process === 1) {
//     console.log("İşlem 1");
// }
// else if (process === 2) {
//     console.log("İşlem 2");

// }
// else if (process === 3) {
//     console.log("İşlem 3");
    
// }
// else {
//     console.log("Geçersiz İşlem");

// }
----------------------------------------------------------------

const process = 1;

switch(process){
    case 1:
        console.log("İşlem 1");                 
        break;
    case 2:
        console.log("İşlem 2");
        break;

    case 3:
        console.log("İşlem 3");           //break kullanmazsan hepsini yazdiriyor.
        break;
    default:                                 
        console.log("Geçersiz İşlem");    //default son oldugu icin break gerek yok.
    
}


