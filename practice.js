const Inputtext1=document.getElementById("inputxt1");
const Inputtext2=document.getElementById("inputxt2");
const Button=document.querySelector(".Btn");
const outputDisplay=document.getElementById("result");

Button.addEventListener("click", ()=>{
    const num1=parseFloat(Inputtext1.value);
    const num2=parseFloat(Inputtext2.value);
    if(!isNaN(num1)&& !isNaN(num2)){
        const sum=num1+num2;
        outputDisplay.textContent=sum;
    }else{
        outputDisplay.textContent="Invalid Input";
    }
});
