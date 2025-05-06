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
let karta_gr1;
let karta_kr1;
let karta_gr2;
let karta_kr2;
let karty_gr;
let karty_kom;
let As_gr = 0;
let As_kr = 0;
let c_ręka_gr;
let c_ręka_kr;

// Funkcja do losowania talii i kart
function nr_kart() {
  x = Math.floor(Math.random() * 4);  
  y = Math.floor(Math.random() * 4);  
  los_t = [x, y];  // Talia gracza i komputer
  do {
    los_k1 = Math.floor(Math.random() * talie[x].length);  // Losowanie karty dla gracza
    los_k2 = Math.floor(Math.random() * talie[y].length);  // Losowanie karty dla komputera
  } while (los_k1 === los_k2);  // Pętla zapewniająca, że karty są różne
}

// Funkcja do wyświetlania kart gracza
function los_Gracz() {
  nr_kart();  // Losowanie talii i kart
  p_karta = talie[los_t[0]][los_k1];  // Karta gracza
  d_karta = talie[los_t[1]][los_k2];  // Karta komputera
  const tekst = `Twoje karty: ${p_karta} i ${d_karta}`;
  document.getElementById("wynik").textContent = tekst;  // Wyświetlanie kart
  talie[los_t[0]].splice(los_k1, 1);  // Usuwanie karty gracza z talii
  talie[los_t[1]].splice(los_k2, 1);  // Usuwanie karty komputera z talii
  karty_gr = [p_karta, d_karta];
}

// Funkcja do wyświetlania kart komputera
function los_kom() {
  nr_kart();  // Losowanie talii i kart
  p_karta = talie[los_t[0]][los_k1];  // Karta gracza
  d_karta = talie[los_t[1]][los_k2];  // Karta komputera
  const tekst = `Karty przeciwnika: ${p_karta} i ${d_karta}`;
  document.getElementById("wynik_kom").textContent = tekst;  // Wyświetlanie kart
  talie[los_t[0]].splice(los_k1, 1);  // Usuwanie karty gracza z talii
  talie[los_t[1]].splice(los_k2, 1);  // Usuwanie karty komputera z talii
  karty_kom = [p_karta, d_karta];
}

function blackjack(){
  function ruch1(){
    if(karty_gr[0] == J || Q || K){ //ręka gracza
      ręka_gr1 = 10;
    }
    else if(karty_gr[0] == A){
      ręka_gr1 = As;
    }
    else{
      ręka_gr1 = karty_gr[0];
    }
    if(karty_gr[1] == J || Q || K){
      ręka_gr2 = 10;
    }
    else if(karty_gr[1] == A){
      ręka_gr2 = As;
    }
    else{
      ręka_gr2 = karty_gr[1];
    }
  }
  function ruch_kom1(){
    if(karty_kom[0] == J || Q || K){ //ręka krupiera
      ręka_kr1 = 10;
    }
    else if(karty_kom[0] == A){
      ręka_kr1 = As;
    }
    else{
      ręka_kr1 = karty_kom[0];
    }
    if(karty_kom[1] == J || Q || K){
      ręka_kr2 = 10;
    }
    else if(karty_kom[1] == A){
      ręka_kr2 = As;
    }
    else{
      ręka_kr2 = karty_kom[1];
    }
  }
  function wyznacz_as_gr(){
    if(ręka_gr1 + ręka_gr2 + 11 < 21){
      As_gr = 1;
    }
    else{
      As_gr = 11;
    }
  }
  function wyznacz_as_kr(){
    if(ręka_kr1 + ręka_kr2 + 11 < 21){
      As_kr = 1;
    }
    else{
      As_kr = 11;
    }
    
  }
  function porównanie(){
  if(c_ręka_kr > 21){
    const tekst = `Wygrywasz`;
    document.getElementById("Wygrana").textContent = tekst;
  }
  else if(c_ręka_gr > c_ręka_kr && c_ręka_gr <= 21){
      const tekst = `Wygrywasz`;
      document.getElementById("Wygrana2").textContent = tekst;
    }
    else{
      const tekst = `Przegrywasz`;
      document.getElementById("Przegrana").textContent = tekst;      
    }
  }
  ruch1();
  ruch_kom1();
  wyznacz_as_gr();
  wyznacz_as_kr();
  c_ręka_gr = ręka_gr1 + ręka_gr2;
  c_ręka_kr = ręka_kr1 + ręka_kr2;
  porównanie();
}

window.onload = function() {
  los_Gracz();  
  setTimeout(los_kom, 500); 
  blackjack();
};