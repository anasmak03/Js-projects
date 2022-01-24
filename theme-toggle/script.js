const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")
const container = document.querySelector('.container')
 
if(christmasBtn.addEventListener("click", christmas))
{
    christmas()
}

else if(snowBtn.addEventListener("click", snow))
{
    snow()
}

function christmas (){
    body.style.backgroundColor="royalblue"
    greeting.style.textTransform = "capitalize"
    greeting.style.color="brown"
}


function snow(){
    body.style.backgroundColor = "grey"
    greeting.style.textTransform="uppercase"
    greeting.style.color="brown"

}