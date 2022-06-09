// REPLACE 

//<h5 class="card-title" id = "tasks-title">Todolar</h5>

const cardbody = document.querySelectorAll(".card-body")[1];    //card-body´lerden 1. indeci seciyor!

const newElement = document.createElement("h3");                //yeni elementi olusturuyor.

newElement.className = "card-title";                            //yeni elementi modifiye ediyor.
newElement.id = "tasks-title";
newElement.textContent = "Yeni Todolar";

const oldElement = document.querySelector("#tasks-title");      // Eski Element 

cardbody.replaceChild(newElement, oldElement);                  //cardbody icinde yeni ve eskiyi replace yapiyor

console.log(newElement);
