

date1 objesine get ile ulasiyor 
date1 objesini set ile degistiriyor

===============================================================
let value;

const now = new Date();                           // Şu anki zamanı almamızı sağlar...

const date1 = new Date("9-19-1993 06:15:00");     //istedigin zamani da olusturabilirin.

const date2 = new Date("September 19 1993");      //bu da olur

const date3 = new Date("9/19/1993");              //ingilizlerde böyle yaziliyor.standart bu


//getirler burda--------------------------------------------------

value = date1;

value = date1.getMonth();          //date1 objesinin ayina ulasiyoruz.-->8 (0 dan basliyor!)
value = date1.getDate();           // -->19 (1 den basliyor)
value = date1.getDay();            // pazar 0, ... diye devam ediyor.

value = date1.getHours();          //saati alirsin
value = date1.getMinutes();
value = date1.getSeconds();        // saniyeyi alirsin
value = date1.getMilliseconds();

//date1 objesini set ile degistiriyor-----------------------------------

date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1994);
date1.setHours(0);
date1.setMinutes(15);
date1.setSeconds(30);


value = date1;

console.log(value);
