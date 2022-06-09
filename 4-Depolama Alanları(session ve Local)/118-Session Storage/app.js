
JS yazarken herhangi bir veritabani kullanmiyorsan, tarayicinin veritabanini kullanirsin!
aslinda ikisinin de calisma mantigi direk ayni , farki :
localde olan veriler kalici/sabit, session(oturumdemek) da olanlar oturumu kapatinca gider.ön lop arka lop gibi.
window objesinin icinde (console.log(window)) session ve local storage kisimlari bulunuyor. 
bakabilirsin. [window.sessionstorage]
key:meyve value:elma gibi 
Live server sayfayi actiginda otomatik "sessionu" kullaniyor.

// Session Storage - Key ve Value========================================================================

// Butonları seciyor:

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Input alanlarini seciyor:

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");


// butonlara cliklendiginde, event yani function ekliyor.

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value);
}

function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value);

}

function clearItems(e) {
    sessionStorage.clear();
}