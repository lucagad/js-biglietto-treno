/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:


il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.


L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


1. Chiedere il numero di chilometri ed età
2. Calcolare prezzo biglietto secondo i vari parametri
3. Visualizzare a video il costo finale del biglietto

*/

const kmTotali = parseFloat(prompt("Inserisci i Km da percorrere"));
const etaCliente = parseInt(prompt("Inserisci la tua età"));
const nomeCliente = prompt("Inserisci il tuo nome");

console.log("Km Totali:", kmTotali);
console.log("Età:", etaCliente);

const costoKm = 0.21;

const prezzoSenzaSconti = kmTotali * costoKm;

console.log("Costo al Km:", costoKm);
console.log("Prezzo senza sconti:", prezzoSenzaSconti);

let prezzoScontato, scontoDaApplicare;

if (etaCliente > 65){

  scontoDaApplicare = (prezzoSenzaSconti/100) * 40 ;
  prezzoScontato = prezzoSenzaSconti - scontoDaApplicare;

} else if (etaCliente < 18){

  scontoDaApplicare = (prezzoSenzaSconti/100) * 20 ;
  prezzoScontato = prezzoSenzaSconti - scontoDaApplicare;

} else { 
  scontoDaApplicare= 0;
  prezzoScontato = prezzoSenzaSconti - scontoDaApplicare;

}

prezzoScontato = prezzoScontato.toFixed(2);
scontoDaApplicare = scontoDaApplicare.toFixed(2);

console.log("Sconto da Applicare:", scontoDaApplicare);
console.log("Prezzo scontato:", prezzoScontato);

document.getElementById("riepilogo-intro").innerHTML =
`
  Caro ${nomeCliente}, <br> in base ai dati inseriti che trova riepilogati a seguire:
`;



if (etaCliente > 65){

  document.getElementById("riepilogo-box").innerHTML +=
  `
    <ul>
      <li id="km-list-item">Km da percorrere: ${kmTotali}</li>
      <li id="age-list-item">Età cliente: ${etaCliente}</li>
    </ul>
    <p class="lead mb-1 fw-bold">Il costo del suo biglietto è di: ${prezzoScontato} &euro;</p>
    <span class="mb-4">Il costo finale tiene conto dello sconto del 40&percnt; (${scontoDaApplicare}&euro;)</span>
    
  `;
  scontoDaApplicare = (prezzoSenzaSconti/100) * 40 ;
  prezzoScontato = prezzoSenzaSconti - scontoDaApplicare;

} else if (etaCliente < 18){

  document.getElementById("riepilogo-box").innerHTML +=
  `
    <ul>
      <li id="km-list-item">Km da percorrere: ${kmTotali}</li>
      <li id="age-list-item">Età cliente: ${etaCliente}</li>
    </ul>
    <p class="lead mb-1 fw-bold">Il costo del suo biglietto è di: ${prezzoScontato} &euro;</p>
    <span class="mb-4">Il costo finale tiene conto dello sconto del 20&percnt; (${scontoDaApplicare}&euro;)</span>
    
  `;
  scontoDaApplicare = (prezzoSenzaSconti/100) * 20 ;
  prezzoScontato = prezzoSenzaSconti - scontoDaApplicare;

} else { 

  document.getElementById("riepilogo-box").innerHTML +=
  `
    <ul>
      <li id="km-list-item">Km da percorrere: ${kmTotali}</li>
      <li id="age-list-item">Età cliente: ${etaCliente}</li>
    </ul>
    <p class="lead mb-1 fw-bold">Il costo del suo biglietto è di: ${prezzoScontato} &euro;</p>
  `;
  scontoDaApplicare= 0;
  prezzoScontato = prezzoSenzaSconti - scontoDaApplicare;

}
