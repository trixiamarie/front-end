// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
let array=[];
function newArray(x){
    for (let i = 0; i < x; i++){
    let numeri= Math.floor(Math.random()*11);
    array.push(numeri);
    }
}
 
//let nuovoArray = newArray(prompt());   
let nuovoArray = newArray(10); 
console.log(array);

function checkArray(x) {
    let sum = 0;
  
    for (let i = 0; i < x.length; i++) {
      if (x[i] > 5) {
        console.log(x[i] + " Il suo valore è maggiore di 5");
        sum += x[i];
      } else if (x[i] < 5) {
        console.log(x[i] + " Il suo valore non è maggiore di 5");
      }
    }
  
    if (sum > 0) {
      console.log("La somma dei valori maggiori di 5 è: " + sum);
    }
  }

let check = checkArray(array);
console.log(check);


/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

let shoppingCart = [
    {
      id: 1,
      name: "Prodotto 1",
      price: 10.99,
      quantity: 2
    },
    {
      id: 2,
      name: "Prodotto 2",
      price: 24.99,
      quantity: 1
    },
    {
      id: 3,
      name: "Prodotto 3",
      price: 4.49,
      quantity: 3
    }
];

function shoppingCartTotal(x){
    let totalObj = 0;
    for (let i=0; i < x.length; i++){
        totalObj+=(x[i].price*x[i].quantity);
        
    } return totalObj;
}

let finaltotal = shoppingCartTotal(shoppingCart);
console.log(finaltotal);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

let newObj = { id: 4,
        name: "Prodotto 4",
        price: 3.99,
        quantity: 4
}

function addToShoppingCart(x){
    shoppingCart.push(x);
    return shoppingCart.length;
}

let newTotal = addToShoppingCart(newObj);
console.log("Il numero totale di oggetti nel cestino è ", newTotal);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/


function maxShoppingCart(x) {
  let maxPrice = x[0].price; 
  for (let i = 1; i < x.length; i++) {
    if (x[i].price > maxPrice) {
      maxPrice = x[i]; 
    }
  }
  return maxPrice;
}

let prezzoMax = maxShoppingCart(shoppingCart);
console.log("Il prodotto più costoso nel carrello è: " + prezzoMax.name + "(" + prezzoMax.price + ")");


/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(x){
    let last=(x.length-1);
    let ultimo= x[last];
    return ultimo;
}

let lastElement= latestShoppingCart(shoppingCart);
console.log("L'ultimo elemento del cestino è: ", lastElement);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(x) {
    let numeriConsecutivi = 0;
  
    while (numeriConsecutivi < 3) {
      const randomNumber = Math.floor(Math.random() * 10); 
      console.log("Numero casuale generato: " + randomNumber);
  
      if (randomNumber > x) {
        numeriConsecutivi++;
      } else {
        numeriConsecutivi = 0; 
      }
    }
  
    console.log("Tre numeri consecutivamente maggiori di " + x + " sono stati generati.");
  }
  
  loopUntil(4);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

let numbers=[2,4,6, "cane", "asino"]

function average(x){
    let sum = 0;
    let count = 0;
    for (let i=0; i<x.length; i++){
        if(!isNaN(x[i])){
            sum += x[i];
            count++;
        } else if (isNaN(x[i])){
            console.log(x[i] + " è una stringa");
        }
    }
    if (count > 0) {
        return sum / count; 
      } else {
        return 0; 
      }
}

let mediaAritmetica = average(numbers);
console.log("la media aritmetica è: ", mediaAritmetica);



/* EXTRA 8 
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
const paroleLunghe = ["gatto", "cane", "elefante", "topo"];

function longest(x) {
    let parolaPiuLunga = x[0];
  
    for (let i = 0; i < x.length; i++) {
      const parolaLunga = x[i];
  
      if (parolaLunga.length > parolaPiuLunga.length) {
        parolaPiuLunga = parolaLunga; 
      }
    }
  
    return parolaPiuLunga;
  }
  
 
  
  const longestStr = longest(paroleLunghe);
  console.log("La stringa più lunga è:", longestStr);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
let emailContent = "Questa è ";

function antiSpam(x){
    let email = x.split(' ');

    for(i=0;i<email.length; i++){
        if(email[i]==="SPAM" || email[i]==="SCAM"){
            return false;
        } 
           
    } return true;
}

let Spam = antiSpam(emailContent);
console.log("l'email è spam:", Spam);

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

let data=(2023-5-27);

function fromData(x){
  let actualDate= new Date();
  let differenza= actualDate - x;
  const millisecondiInUnGiorno = 24 * 60 * 60 * 1000; 

  const giorniPassati = Math.floor(differenza / millisecondiInUnGiorno);
  return giorniPassati
}

let quantotempo=fromData(data);
console.log(quantotempo);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
