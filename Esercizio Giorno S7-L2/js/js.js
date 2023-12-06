let btnSave = document.querySelector('#invia');
let btnReset = document.querySelector('#reset');
let nameInput = document.querySelector('#nameInput');
let risultato = document.querySelector('#risultato');
let pCount = 0;


console.log(nameInput);


//FORM

window.onload= function(){
    let name = localStorage.getItem('name');
    let risultato = document.querySelector('#risultato');
    if (name) {

        let p = document.createElement('p');
        p.classList.add('m-5', 'text-center');
        p.innerText = "Il nome che hai inserito è " + name;

        risultato.appendChild(p);
        pCount++
}
}

function getName() {
    
    let  nameValue = nameInput.value;
    if (pCount>0) {
        alert('Hai già inserito un nome. Clicca su Pulisci per rimuovere il nome salvato');
        return;
    }

    localStorage.setItem('name', nameValue);
    let p = document.createElement('p');
    p.classList.add('m-5');
    p.innerText = "Il nome che hai inserito è " + nameValue;
    risultato.appendChild(p);
    console.log(nameValue);
    pCount++

};

function resetName() {
    localStorage.clear();
    let pElementi = document.querySelector('#risultato p');
    pElementi.remove();
    pCount = 0;
}

btnSave.addEventListener("click", getName);
btnReset.addEventListener("click", resetName);

//CONTATORE

let count = sessionStorage.getItem('tempo') ? parseInt(sessionStorage.getItem('tempo')) : 0;
let counter = document.querySelector('#contatore p span');
counter.innerText = count;


function updateCounter() {
    count++;
    counter.innerText = count;
    sessionStorage.setItem('tempo', count);
}

let intervalId = setInterval(updateCounter, 1000);