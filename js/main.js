// SECONDO ESERCIZIO 

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: 

// le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.

// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.


// creare const da legare al click dell'evento
const startGame = document.getElementById("genera-campo");
// creare const per appendere celle
const container = document.querySelector(".container");
// creare const per punteggio
const score = document.getElementById("score");
// punteggio iniziale = 0
let punteggio = 0;
// variabile per finire il gioco (BONUS)
let gameOver = false;


// creare evento on click
startGame.addEventListener("click", 
    // creare funzione per creazione celle
    function(){
        // impostare 
        document.getElementById("titolo").classList.remove("hidden");
        score.innerHTML = "";
        punteggio = 0;
        gameOver = false;
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
                function() {
                    // se perdi interrompi la funzione(BONUS)
                    if (gameOver) return;

                    // collegamento classi css all'elemento square
                    if (arrayBomb.includes(i)) {
                        square.classList.add("bomb");
                        // cambiare in vero la variabile game over
                        gameOver = true;
                        // cancella il titolo 
                        document.getElementById("titolo").classList.add("hidden");
                        score.innerHTML = "Hai perso! Il tuo punteggio è: " +punteggio;
                    } else{
                        square.classList.add("safe");
                        // aggiorna il punteggio ogni volta che si trova un casella vuota
                        punteggio +=1;
                        // stampa su schermo l'aggiornamento dei punti
                        score.innerHTML = + punteggio; // Aggiorna l'elemento HTML del punteggi
                    }
                }
            );  
        }   
    }
);


// creare variabile che si collega alla funzione
let arrayBomb = createRandomNumbersForArray(1, 100, 16);
// log per sapere in quale cella ci sono le bombe
console.log(arrayBomb);

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