const pik = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];
const kier = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];
const karo = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];
const trefl = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];
const talie = [pik, kier, karo, trefl];

// Globalne zmienne do przechowywania losowanych kart
let los_k1;
let los_k2;
let los_t = [];
let p_karta;
let d_karta;
let x, y;  

// Funkcja do losowania talii i kart
function nr_kart() {
  x = Math.floor(Math.random() * 4);  
  y = Math.floor(Math.random() * 4);  
  los_t = [x, y]; 
  do {
    los_k1 = Math.floor(Math.random() * talie[x].length);  
    los_k2 = Math.floor(Math.random() * talie[y].length);  
  } while (los_k1 === los_k2);  // Pętla zapewniająca, że karty są różne
}

// Funkcja do wyświetlania kart gracza
function los_Gracz() {
  nr_kart();  // Losowanie talii i kart
  p_karta = talie[los_t[0]][los_k1];  // Karta gracza
  d_karta = talie[los_t[1]][los_k2];  // Karta komputera
  const tekst = `Twoje karty: ${p_karta} i ${d_karta}`;
  document.getElementById("wynik").textContent = tekst;  // Wyświetlanie kart
  talie[los_t[0]].splice(los_k1, 1); 
  talie[los_t[1]].splice(los_k2, 1); 
}

// Funkcja do wyświetlania kart komputera
function los_kom() {
  nr_kart();  // Losowanie talii i kart
  p_karta = talie[los_t[0]][los_k1];  // Karta gracza
  d_karta = talie[los_t[1]][los_k2];  // Karta komputera
  const tekst = `Karty przeciwnika: ${p_karta} i ${d_karta}`;
  document.getElementById("wynik_kom").textContent = tekst;  // Wyświetlanie kart
  talie[los_t[0]].splice(los_k1, 1);  
  talie[los_t[1]].splice(los_k2, 1);  
}
window.onload = function() {
  los_Gracz();
  setTimeout(los_kom, 500);  
};
