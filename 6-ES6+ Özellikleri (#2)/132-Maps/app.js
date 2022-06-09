
Mapler -> Key(Anahtar): Value(Değer)

//key ve value her türlü veri tipinden olabilir. farki bu!
//aslinda arrayler ile mapler arasinda kuvvetli bag varmis.

========================================================================


// let myMap = new Map();                    // Oluşturma

// console.log(typeof myMap);                //cikti:object yani referans tip!
// console.log(myMap);                       //cikti: Map(0){}


// const key1 = "Mustafa"; 
// const key2 = {a:10,b:20};
// const key3 = () => 2;

// Set----------------------------------------map e eklemek icin set kullanilir
// myMap.set(key1,"String Değer");            //key1 e karsilik gelen deger, artik "String Değer" oldu!
// myMap.set(key2,"Object Literal Değer");
// myMap.set(key3,"Function Değer");


// Get----------------------------------------key e karsilik gelen degeri almak icin get kullanilir. 
// console.log(myMap.get(key1));              //cikti: "String Değer"
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);                       //cikti: {"Mustafa"=>"String Değer", {...}=>"Object Literal Değer", f=>"Function Değer"    


// Map Boyutu--------------------------------kac elemani var map´in ?
// console.log(myMap.size);                  //cikti: 3



// "For Each" döngsü ile gezinme----------------------

// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);


// cities.forEach(function(value,key){
//     console.log(key,value);
// })

// 
// "For... of" döngsü ile gezinme-----------------------------------------

// for(let [key,value] of cities){                       // Destructing yapisi var burda!
//     console.log(key,value);

// }

// "Map Keys alma" - sadece keyleri almak istersen-------------------

// for(let key of cities.keys()){
//     console.log(key);
// }

// "Map Values alma"- sadece valueleri almak istersen--------------------------

// for(let value of cities.values()){
//     console.log(value);
// }


// "Arraylerden Map Oluşturma"---------------------------------------------

// const array = [["key1","value1"],["key2","value2"]];           //ic ice array olusturdu

// const lastMap = new Map(array);                                //arrray ve map birbirine dönüsebiliyor

// console.log(lastMap);


// "Maplerden Array Oluşturma"----------------------------------------------

//(htmlcollection´dan array olusturmustuk. onun gibi...)

const cities = new Map();                  //map objesi türünde cities diye bir sey olusturdu.

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

const array = Array.from(cities);          //bu kod arraye ceviriyor!
                                           // [["Ankara",5],["İstanbul",15],["İzmir",4]]
console.log(array);                        // cikti: (3) [(array 2),(array 2), (array 2)]  yani arrayin icindeki her 3 elemanin kendisi de array. 



