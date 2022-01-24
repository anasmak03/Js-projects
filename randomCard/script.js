const card = document.getElementById('card');
const btn = document.getElementById('btn')
const greetingdd = document.getElementById('greeting-display')

btn.addEventListener("click", nextgreeting)
const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

function nextgreeting(){
    let rn = Math.ceil(Math.random() * greetings.length) -1;
    greetingdd.textContent = greetings[rn]
}

