

let click = document.getElementById("button")
let item = document.getElementById("main")

click.onclick = () => {
    setTimeout(() => {
        item.style.opacity = 1;
        item.style.top = '10px';
    }, 500);

    let inputNum1 = document.getElementById("first1");
   let i=0;
   
const counter1 = setInterval(() => {
  
      i+=10
    inputNum1.textContent = i;

    if(i >= 24069){
        clearInterval(counter1)
    }

}, 10)


let inputNum2 = document.getElementById("first2");

let i2 = 0;
const counter2 = setInterval(() => {

    i2+=10
    inputNum2.textContent = i2;

    if(i2 >= 16329){
        clearInterval(counter2)
    }
},15)

let inputNum3 = document.getElementById("first3")

 let i3 = 0;
const counter3 = setInterval (() => {
       
    i3++;
    inputNum3.textContent = i3;

    if(i3 >= 89){
        clearInterval(counter3)
    }

}, 100)
};

