/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

 
//Stringhe= Indica solo i caratteri, le singole lettere o più lettere insieme. Le stringhe vanno scritte in mezzo agli apici('x') o ai doppi apici("x"). È sempre meglio utilizzare i doppi apici!
//Numeri= Indica solo i numeri, e possono essere interi (1/2/3/4...) oppure decimali (quelli con la virgola ad esempio 8,906584). I numeri non hanno bisogno di essere scritti in mezzo agli apici o doppi apici.
//Booleani= Con i booleani noi possiamo solo indicare se la nostra variabile è vera (true) o se è falsa (falsa). Nulla di più.


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

//let name="Trixia";
//console.log(name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

 
//let num1=12;
//let num2=20;
//console.log(num1+num2)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

//let x=12 
//console.log(x)


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/


//var name="Trixia"
//name="Lorenzana"
//console.log(name)

//var name="Marie"
//{let name="Trixia"
//name="Lorenzana"
//console.log(name)}
//name="Trixia"
//console.log(name) //È possibile in quanto let è racchiuso in una istruzione condizionale. In questo caso è racchiuso in {}. Se non fossero stati racchiusi, mi avrebbe dato ERRORE

//const name="Trixia"
//name="Lorenzana" 
//consol.log(name) //mi darà errore in quanto il costrutto const non permette in alcun caso di cambiare il suo valore inizialmente dichiarato*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

//let y=4
//console.log(y-x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

 
let name1="john";
let name2="John";
console.log(name1 == name2); //Prova che il valore in name1 e il valore in name2 non sono uguali (false), in quanto il carattere J in maiuscolo è diverso.

let trueconlowercase= name1.toLowerCase() == name2.toLowerCase();
console.log(trueconlowercase); //È stato utilizzato il metodo .toLowerCase per "cambiare" i valori in ambo le parti in modo che tutti i caratteri risultassero scritti in minuscolo. In questo modo è risultato vero (true).

