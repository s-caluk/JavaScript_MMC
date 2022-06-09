

// Yeni Element Oluşturma:=================================================================================== 
//html icinde yok fakat js dosyasina yazarak yeni elementler olusturulabiliyor ve bunlar web ortaminda gözüküyor

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

//newLink.textContent = "farkli sayfaya git";    (texti bu sekil degistirebilirsin fakat güvenli degil!)
//const text=document.createTextNode("Naber?");  (textNode ile yeni text olusturdu.bu güvenli!)
//cardbody.appendChild(text);                    (sonra ona yerini gösterdi) 


newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

cardbody.appendChild(newLink);


console.log(newLink);