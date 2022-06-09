
euro girilecek, cevir butonuna bastiginda internet üzerindeki rest Api kullanilarak tl ye cevirecek.
RestApi linki bende calismadi.


=======================================================================================
document.getElementById("change").addEventListener("click",change);



function change(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest");              //bu site (RestApi) den deger aliyor!

    xhr.onload = function(){
        if(this.status) {
            const response = JSON.parse(this.responseText);
            // console.log(this.responseText);

            const rate = response.rates.TRY
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value = amount * rate;

        }

    }

    xhr.send();


}