
templateLiteral backtick isaretinin icinde ollmali!
\n alt satira gecirir!  (escape sequence diyorlar yani kacis dizisi)
\t tabla ileriye gidersin!

! js dosyasi icinde .html dosyasini sekillendirebiliyorsun.


===========================================================
const name = "Mustafa Murat Coşkun";
const department = "Bilişim";
const salary = 4000;

// const a = "İsim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary;

// const a = `İsim:${name}\nDepartman:${department}\nMaaş:${salary}`;


//--------------------------------------burda js dosyasina html taglari koyuyor, eski usul. 
// const html = "<ul> " + 
//              "<li>" + name + "</li>" +
//              "<li>" + department + "</li>" +
//              "<li>" + salary + "</li>" +
//              "</ul>";
//document.body.innerHTML = html;        //html taglarini body e yerlestiriyor.



//-----------------------------------template Literal ile böyle yaziliyor, böyle devam et.

function a(){
    return "Merhaba";
}

const html = `
      <ul>
       <li>${name}</li>
       <li>${department}</li>
       <li>${salary}</li>
       <li>${10 / 4}</li>
       <li>${a()}</li>                   //function a() yi cagirabiliyorsun.
      </ul>

     `;

document.body.innerHTML = html;

