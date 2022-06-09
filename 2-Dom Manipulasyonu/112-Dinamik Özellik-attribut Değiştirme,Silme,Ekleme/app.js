
const todoInput = document.getElementById("todo");
let element;


element = todoInput;
element = todoInput.classList;       // kac tane classi var ona bakiyor. DOMTokenList[] seklinde siraliyor


// todoInput.className = "form-control newClass"; //className ile de ekleme yapabilirsin, hangisi isine geliyorsa.
// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");


element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Naber");    // atributun degerini degisti , yenisini girdi.
todoInput.setAttribute("title","Input");          // olmayan title attributunu girdi!
todoInput.removeAttribute("name");                // name özelligi/attributunu sildi.


element = todoInput;
// element = todoInput.hasAttribute("name");     // name attributu bu elementte var mi diye sorguluyor.false/true  döner.

console.log(element);
