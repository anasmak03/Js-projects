const body = document.getElementById('body');
const h1 = document.getElementById('h1');
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');

toggle.addEventListener("click", check)

function check () {
    if (toggle.checked) {
        h1.style.color = "#264653"
        body.style.backgroundColor = "#003049"
        header.style.backgroundColor="#03071e"
    }
    else {
        h1.style.color = '';
        body.style.backgroundColor='';
        header.style.backgroundColor="";
    }
}