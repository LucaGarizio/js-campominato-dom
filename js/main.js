// PRIMO ESERCIZIO 

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.// 


// Consigli del giorno:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.


// creare const da legare al click dell'evento
const startGame = document.getElementById("genera-campo");
// creare const per appendere celle
const container = document.querySelector(".container");


// creare evento on click
startGame.addEventListener("click", 
    // creare funzione per creazione celle
    function(){
        // svuota il contenuto del container cosi da non far comparire celle ogni volta che si clicca il tasto play
        container.innerHTML = "";
        for (let i = 1; i <= 100; i++) {

            // creare const per creare elemento div
            const square = document.createElement("div");

            // collegamento classe css all'elemento creato
            square.classList.add("square")
            
            // crezione elemento in html
            container.append(square);
            
            // collegamento cella al rispettivo numero
            square.append(i);
            
            // creazione evento per cambio di colore della cella al click
            square.addEventListener("click",
                function(){

                    // collegamento classe css all'elemento square
                    square.classList.add("clicked");
                  
                    // stampare su schermo il numero della cella selezionata
                    alert("Hai selezionato la cella n°: "+ i);
                }
            );  
        }   
    }
);


// SECONDO ESERCIZIO 

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: 

// le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.

// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.



// // creazione funzione per array di numeri casuali da 1 a 100 e quante bombe deve creare
function createRandomNumbersForArray(numMin, numMax, quanteBombe) {
    // creazione array vuoto
    let arrayNumber = [];
    // ciclo per creare 16 bombe
    while (arrayNumber.length < quanteBombe) {
        // creazione variabile da collegare a funzione creazione numero casuale
        let randomNumber = createRandomNumber(numMin, numMax);
        // controllare che non vengano pusshati 2 numeri uguali 
        if (!arrayNumber.includes(randomNumber)){
        arrayNumber.push(randomNumber);
        }
    }
    // carica nell'array vuoto i 16 numeri casuali
    return arrayNumber;
}

// // creazione funzione che mi restituisca un numero random
function createRandomNumber(numMin, numMax) {
    return Math.floor(Math.random() * (numMax - numMin + 1 )) + numMin;
}