// yani elementlerimize event kazandirmaya calisacagiz!
//formu submit ettigimizde(submit-event) , butona tikladigimizda(klik-eventi) , 
// yada input alanina tiklayip odaklanma yaptigimizda (focus-eventi)
//aslinda JS de belli eventler olusuyor. JS bu eventleri yakalayip belli islemler yapiyor.
//EventObjesi : bir event hakkinda birden cok bilgi veren bir objedir.

//FOCUS EVENT==============================================================================================================
const filterInput = document.getElementById("filter");

// filterInput.onfocus = function(){   //1.yöntem:focus olunca bu eventi calistir demek.ama daha cok 2. yöntemi kullaniyormus
//     console.log("Naber");

// }


// filterInput.addEventListener("focus",function(e){   //2.Yöntem:burdaki e parametresi sana bilgi dönderiyor.ordaki target özellikkleri önemliymis.)

//     console.log(e);                      //burasi focusEvent{...} objesini veriyor
//     console.log(e.type);
//     console.log(e.target);               //burasi bir element verdigi icin className ClassId yazdirailiyorsun
					    //eventin yer tesbiti icin target cok kullaniliyor.	
//     console.log(e.target.placeholder);
//     console.log(e.target.className);

// });


//SUBMIT EVENT==============================================================================================================
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);   //submit oldugunda submitForm fonsionunu calistir demek bu.

function submitForm(e){

    console.log("Submit Eventi");


    e.preventDefault();     //burada e eventinin default özelliklerini yok sayiyor. 
			    //defaultta ciktiyi göremiyorsun,seni baska sayfaya gönderiyor yada güncelliyor.
}


