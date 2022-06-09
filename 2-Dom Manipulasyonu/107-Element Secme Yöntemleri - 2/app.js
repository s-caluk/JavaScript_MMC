

const element = document.querySelector("#clear-todos");     //hep önce seciyoruz, sonra degistiriyoruz

// Element Özellikleri====================================================================================

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);     /*sadece texti veriyor
// console.log(element.innerHTML);       /*elementin icindeki bsp h3 hepsi dahil veriyor.   
// console.log(element.href);
// console.log(element.style);

// Style ve Element Özelliklerini Değiştirme===================================================================

// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginLeft = "50px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";
// element.textContent = "Silin";
// element.innerHTML = "<span style = 'color:green'>Silin</span>" 

// const elements = document.querySelectorAll(".list-group-item"); // Node List
// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#eee";
// });


// "CSS Seloktör" w3school kisminda neyi nasil sececegin gösteriliyor!=========================================

let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelector("li:nth-child(3)");
element2 = document.querySelector("li:nth-child(4)");
element2 = document.querySelectorAll("li:nth-child(odd)");   //1-3-5... elementlerini secer
element2 = document.querySelectorAll("li:nth-child(even)");   //2-4-6... elementlerini secer

element2.forEach(function(el){
    el.style.background ="#ccc";
    el.style.color = "red";
})


console.log(element2);
// console.log(element);
