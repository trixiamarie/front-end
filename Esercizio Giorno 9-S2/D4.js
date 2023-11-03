/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1,l2){
    let areaRettangolo= l1*l2;
    return areaRettangolo;
}

let areaRettangolo= area(5,7);
console.log("L'area del rettangolo è: ", areaRettangolo );



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(x,y){
    if(x!=y){
        let somma = x + y;
        return somma;
    } else {
        let somma = (x+y)*3;
        return somma;
    }
}

let somma = crazySum(5,5);
console.log(somma);



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(x){
    if(x<19){
    let diff= Math.abs(x - 19);
    return diff;
}else{
    let diff= (x-19)*3;
    return diff;
}
}

let diff = crazyDiff(2);
console.log("La differenza assoluta è: ",diff);



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    return((n>=20 && n<=100) || n === 400)
}

let b= boundary(1003);
console.log(b);



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(x){
    if(x.startsWith("EPICODE")){
    let string = x;
    return string;
    } else {
    let string = ("Epicode" + x);
    return string;
    }
}

let string1= epify("EPICODE è un'azienda di e-learning");
console.log(string1);

let string= epify(" è un'azienda di e-learning");
console.log(string);


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(x){
    if(x % 3 === 0){
        let result = ("Il numero è divisbile per 3");
        return result;
    } else if (x % 7 === 0){
        let result =("Il numero è divisbile per 7");
        return result;
    } else {
        let result = ("Il numero non è divisibile per 3 e per 7");
        return result;
    }
}

let result = check3and7();
console.log(result);


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(x){
    let reverseSplit = x.split('');
    let reverseReverse = reverseSplit.reverse();
    let reverseJoin = reverseReverse.join('');
    return reverseJoin;
}

let reverse = reverseString("Trixia");
console.log(reverse);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(x) {
    let parole = x.split(' ');

    let parolaMaiuscola = [];
    for (let i = 0; i < parole.length; i++) {
        let primaLettera = parole[i].charAt(0).toUpperCase();
        let altreLettere = parole[i].slice(1);
        let parolaintera = primaLettera + altreLettere;
        parolaMaiuscola.push(parolaintera);
    }

    let risultato = parolaMaiuscola.join(' ');
    return risultato;
}

let risultato = upperFirst("ciao io sono trixia");
console.log(risultato);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(x){
    let lettere = x.split('');
    lettere.shift();
    lettere.pop();
    let output = lettere.join('');
    return output;
}

let output = cutString("Trixia");
console.log(output);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(x){
    let numericaso=[];
    for (var i = 0; i < x; i++){
    let numeri= Math.floor(Math.random()*11);
    numericaso.push(numeri);
}
 return numericaso;
}

let random= giveMeRandom(10);
console.log(random);