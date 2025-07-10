// ## Descrizione:

// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere,
// Età del passeggero,
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di
// viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km),
// va applicato uno sconto del 20% per i minorenni,
// va applicato uno sconto del 40% per gli over 65.
// # - MILESTONE 1:

// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// il contenuto del nostro primo text-input di id# full-name sarà : 
console.log(document.getElementById(`full-name`).value) //debug
// il contenuto del secondo text-input di id# distance sarà :
console.log(document.getElementById(`distance`).value)  //debug
// il contenuto del terzo text-input di id# age-range sarà :
console.log(document.getElementById(`age-range`).value) //debug 
// il valore però è una stringa vuota al momento del caricamento della pagina

//selezioniamo il bottone per id 
const button=document.getElementById("submit");

//e gli allacciamo un event listener
button.addEventListener('click' , function(event){
  console.log(event);
  event.preventDefault();
  // il contenuto del nostro primo text-input di id# full-name sarà : 
console.log(document.getElementById(`full-name`).value) //debug
// il contenuto del secondo text-input di id# distance sarà :
console.log(document.getElementById(`distance`).value)  //debug
// il contenuto del terzo text-input di id# age-range sarà :
console.log(document.getElementById(`age-range`).value) //debug 
// ora invece dopo il click possiamo vedere 
});
