

// Spread Operator:arrayin ciktisini, array gibi degilde düz cümle gibi veriyor!
=======================================================================================

// const langs = ["Python","C++","Java","Php"];

// console.log(langs[0],langs[1],langs[2],langs[3]);    //spread olmadan böyle yazilmali!

// console.log(...langs);                               // sread op. birlikte kisaltiyoruz.

// const langs2 = ["Javascript","C#",...langs];          //langs arrayine ek yapip , lang2 arrayini olusturdu.

// console.log(langs2);                                  //bu array gibi cikti olusturur.  
// console.log(...langs2);                               //bu düz yazi gibi cikti olusturur.  
-------------------------------------------------------------------

// const numbers = [1,2,3,4,5,6,7,8,9];

// const [a,b,...number2] =numbers;                      //1,2 haric gerisini bir arraya ata demek bu!

// console.log(a,b);                                     //bunun ciktisi 1 2 dir!
// console.log(number2);                                 //3,4,5,6,7,8,9 ciktisini verir

-------------------------------------------------------------------

// const addNumbers = (a,b,c) => console.log(a+b+c);

// const numbers = [100,200,300];                        //eski yöntem:addNumbers(numbers[0],numbers[1],numbers[2])

// addNumbers(...numbers);                               //spread operator sayesinde arrayin tamamini, parametre olarak yolluyoruz.





