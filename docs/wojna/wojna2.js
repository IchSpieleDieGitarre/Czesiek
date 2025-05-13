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
let t_karta;
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
let ręka_gr1;
let ręka_gr2;
let ręka_kr1;
let ręka_kr2;
let los_nowy;
let los_kolejny;
// Funkcja do losowania talii i kart
function nr_kart() {
  x = Math.floor(Math.random() * 4);  
  y = Math.floor(Math.random() * 4);  
  los_t = [x, y];  // Talia gracza i komputer
  do {
    los_k1 = Math.floor(Math.random() * talie[x].length);  // Losowanie karty dla gracza
    los_k2 = Math.floor(Math.random() * talie[y].length);  // Losowanie karty dla komputera
  } while (x === y && los_k1 === los_k2);  // Pętla zapewniająca, że karty są różne
}

function nr_kart_n() {
  if (talie[x].length === 0 || talie[y].length === 0) {
  alert("Brak kart w jednej z talii!");
  return;
  }
  x = Math.floor(Math.random() * 4);  
  los_nowy = x;
  los_kolejny = Math.floor(Math.random() * talie[x].length);  // Losowanie karty dla gracza
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

  function wartośćKarty(karta) {
  if (karta === "A") return 11; // A jako domyślnie 11
  if (["J", "Q", "K"].includes(karta)) return 10;
  return Number(karta);
  }

function obliczSume(karty) {
  let suma = 0;
  let liczbaAsów = 0;
  for (const karta of karty) {
    const wartość = wartośćKarty(karta);
    if (karta === "A") liczbaAsów++;
    suma += wartość;
  }

  while (suma > 21 && liczbaAsów > 0) {
    suma -= 10; // zmień jeden As z 11 na 1
    liczbaAsów--;
  }

  return suma;
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
  c_ręka_gr = obliczSume(karty_gr)
  c_ręka_kr = obliczSume(karty_kom)
  porównanie();
}

function los_Gracz_n() {
    if (!los_t[0]) {
      alert("Najpierw rozdaj karty!");
      return;
    } 
    nr_kart_n();
    p_karta = talie[los_t[0]][los_kolejny];
    if (talie[los_t[0]].length === 0) {
    alert("Brak kart w talii gracza!");
    return;
    }
    else{
    talie[los_t[0]].splice(los_kolejny, 1);  // Usuwanie karty z talii
    karty_gr.push(p_karta);
    const tekst = `Twoje karty: ${karty_gr.join(", ")}`;  // Poprawienie wyświetlania
    document.getElementById("wynik").textContent = tekst;  // Wyświetlanie kart
  }
}



window.addEventListener("load", function() {
  los_Gracz();  
  setTimeout(los_kom, 500); 
  blackjack();
});

window.los_Gracz_n = los_Gracz_n;
