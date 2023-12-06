/* ESERCIZIO 1 
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*function maggiore(arr){
  return Math.max(...arr);
}

let num=[1,2];
let numeroMaggiore = maggiore(num);
console.log("il numero maggiore è: "+ numeroMaggiore)*/


/* ESERCIZIO 2 
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*let num = prompt('inserisci un numero');

if(num == 5){
  console.log("equal");
}
  else if(num !== 5){
    console.log("not equal")
} */


/* ESERCIZIO 3 
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*let num = prompt("inserisci il numero");

if(num%5 === 0){
  console.log("true")
}
else {
  console.log("false")
} */


/* ESERCIZIO 4 
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* let x=1;
let y=7;

if(x+y == 8){
  console.log("è uguale a 8")
}
else{
  console.log("non è uguale a 8")
}

if(x-y == 8){
  console.log("è uguale a 8")
}
else{
  console.log("non è uguale a 8")
}

if(x,y == 8){
  console.log("è uguale a 8")
}
else{
  console.log("non è uguale a 8")
} */


/* ESERCIZIO 5 
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*let totaleShoppingCart = prompt('inserisci il totale')

if(totaleShoppingCart > 50){
  console.log("il tuo totale è: " + totaleShoppingCart+"eur" + " e hai diritto alla spedizione gratuita!");
}
else {
  console.log("il tuo totale è " + totaleShoppingCart + " e 10eur di spedizione");
} */


/* ESERCIZIO 6 
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*let totaleShoppingCart = prompt('inserisci il totale') 
let scontoBlackFriday = totaleShoppingCart * 0.20;
let prezzoFinale = totaleShoppingCart - scontoBlackFriday;


if(prezzoFinale > 50){
  console.log("il tuo totale è: " + prezzoFinale+"eur" + " e hai diritto alla spedizione gratuita!");
}
else {
  console.log("il tuo totale è: " + prezzoFinale +"eur" + " e 10eur di spedizione");
} */

/* ESERCIZIO 7 <!--ATTENZIONE
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let x=prompt ("inserisci un numero");
let y=prompt ("inserisci un numero");
let z=prompt ("inserisci un numero");


/*if(x>y && x>z){
  if (y>z){
    console.log(x,y,z)
  } else if(y<z){
    console.log(x,z,y)
  }
}

if(y>x && y>z){
  if(x>z){
  console.log(y,x,z)
}
else if(x<z){
  console.log(y,z,x)
}
}

if(z>x && z>y){
  if(y>x){
  console.log(z,y,x)
}
else if(y<x){
  console.log(z,x,y)
}
}
*/

if(Number(x)>Number(y) && Number(x)>Number(z)){
  if (y>z){
    console.log(x,y,z)
  } else if(y<z){
    console.log(x,z,y)
  }
}

if (Number(y)>Number(x) && Number(y)>Number(z)){
  if(Number(x)>Number(z)){
  console.log(y,x,z)
}
else if(Number(x)<Number(z)){
  console.log(y,z,x)
}
}

if(Number(z)>Number(x) && Number(z)>(y)){
  if (Number(y)>Number(x)){
  console.log(z,y,x)
}
else if(Number(y)<Number(x)){
  console.log(z,x,y)
}
}


/* ESERCIZIO 8 
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* let x=prompt("inserisci qualcosa");

if((Number)(x)){
  console.log("quello che hai inserito è un "+ typeof ((Number)(x)));
}
else if(x){
  console.log("quello che hai inserito è una "+ typeof x);
} */


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*
let x=prompt("inserisci un numero")

if(x%2 == 0){
  console.log("è pari");
}
else if(x%2 !== 0){
  console.log("è dispari");
}
*/

/* ESERCIZIO 10 
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  
/* 
let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    }
    else if(val>10){
      console.log("maggiore di 10");
    }

  if (val < 5) {
      console.log("Meno di 5");
    } 
    else if(val>5){
      console.log("maggiore di 5");
    }

  if (val >= 10){
      console.log("Uguale a 10 o maggiore");
    }
    else if (val <= 10){
      console.log("minore o uguale a 10")
    }
*/

/* ESERCIZIO 11 
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*
 const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city="Toronto";

console.log(me)
*/

/* ESERCIZIO 12 
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

delete me.lastName;

console.log(me)
*/

/* ESERCIZIO 13 
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.skills.pop();

console.log(me);
*/

/* ESERCIZIO 14 
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/*
let x=[]

x.push(1,2,3,4,5,6,7,8,9,10)

console.log(x);
*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/*
let x=[]

x.push(1,2,3,4,5,6,7,8,9,10)
x[9]=100;

console.log(x);
*/
