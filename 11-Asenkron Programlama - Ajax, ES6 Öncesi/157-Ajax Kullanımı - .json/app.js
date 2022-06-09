
(en basta el ile girilen veriyi web´e + storage aktarmayi ögrendik)
ajax kullanilarak;
bir öncekinde .txt dosyasindan veriyi alip web´e eklemistik.
simdi .json dosyasindaki veri tabanini web´e ekliyoruz. (3json objesi array olarak dosyada duruyor.)

fark:json objelerinde keylerde "key"  icine alinir.


======================================================================================


document.getElementById("ajax").addEventListener("click",getAllEmployees);


function getAllEmployees(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","employees.json",true);                       //burda topun bir kanal aciyor.    

    xhr.onload = function(){                                     //response geldiginde:onload(4.) bu bu funktion calissin
        
        let list = document.getElementById("employees");


        if(this.status == 200) {                                  //console.log(JSON.parse(this.responseText)); önce konsolda test et
            const employees = JSON.parse(this.responseText);      //stringi jsonobjesine/jsonarrayine cevirmek icin ne yapiyorduk. typeof una bak object olur!

            employees.forEach(function(employee){
                list.innerHTML += `
                    <tr>
                        <td>${employee.name}</td>
                        <td>${employee.department}</td>
                        <td>${employee.salary}</td>
                    </tr>
                
                
                `;



            });
        }


    }
    
    
    xhr.send();



}

