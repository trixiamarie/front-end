
let now = new Date();
let getYear = now.getFullYear();
let getMonth = now.getMonth()+1;
let lastDayDate = new Date(getYear, getMonth, 0);
let lastDayOfTheMonth = lastDayDate.getDate();
let calendar = document.querySelector('#calendar');
let appointments = [];

creaCalendario();
creaArrayAppuntamenti();


//console.log(lastDayDate);

function creaCalendario(){
    let h2 = document.querySelector('h1+h2');
    h2.innerText= nomeMese(now.getMonth()+1);
    for(let i=1; i<=lastDayOfTheMonth; i++){
        //console.log(i);
        const dayCellNode = document.createElement('div');
        dayCellNode.className = 'day';
        dayCellNode.addEventListener('click',() => {
            dayCellNode.classList.add('selected');

            let currentDayAppointments = appointments[i-1];
            console.log(currentDayAppointments);
            if(creaArrayAppuntamenti.length>0){
                showAppointments(i-1);
            } else{
                document.querySelector('#appointments').style.display = 'none';
            }
            
        });

        const day = document.createElement('h3');
        day.innerText= i;
        let today = now.getDate();
        if(today === i){
            day.className= 'color-epic';
        }
        dayCellNode.appendChild(day);
        calendar.appendChild(dayCellNode);
    }
}

function nomeMese(m){
    switch(m){
        case 1: return 'Gennaio';
        case 2: return 'Febbraio';
        case 3: return 'Marzo';
        case 4: return 'Aprile';
        case 5: return 'Maggio';
        case 6: return 'Giugno';
        case 7: return 'Luglio';
        case 8: return 'Agosto';
        case 9: return 'Settembre';
        case 10: return 'Ottobre';
        case 11: return 'Novembre';
        case 12: return 'Dicembre';
    }
}

function creaArrayAppuntamenti(){
    for(let i=0; i<lastDayOfTheMonth; i++){
        appointments[i] = [];
    }
    console.log(appointments);
}

function selezionaGiorno(day){

}

function showAppointments(index){
    document.querySelector('#appointments').style.display = 'block';
    let selectedDayAppointments = appointments[index];
    console.log(selectedDayAppointments);
}