const talia = ["2", "3", "4", "5", "6", "7", "8", "9", "A", "J", "Q", "K"];
const liczbaTalii = 4;
let talie = [];

for (let i = 0; i < liczbaTalii; i++) {
  talie = talie.concat([...talia]); // tworzymy jedną wspólną pulę kart
}

// Funkcja pomocnicza: losuj kartę z talii
function losujKarte() {
  const indeks = Math.floor(Math.random() * talie.length);
  return talie.splice(indeks, 1)[0];
}

// Przeliczenie wartości karty
function wartoscKarty(karta) {
  if (["J", "Q", "K"].includes(karta)) return 10;
  if (karta === "A") return 11; // domyślnie 11, później możemy zmniejszyć do 1
  return parseInt(karta);
}

// Oblicz sumę kart, uwzględniając Asa
function sumaKart(karty) {
  let suma = 0;
  let liczbaAsow = 0;

  for (let karta of karty) {
    let wartosc = wartoscKarty(karta);
    suma += wartosc;
    if (karta === "A") liczbaAsow++;
  }

  while (suma > 21 && liczbaAsow > 0) {
    suma -= 10; // zamieniamy jednego Asa z 11 na 1
    liczbaAsow--;
  }

  return suma;
}

// Gra
function blackjack() {
  const gracz = [losujKarte(), losujKarte()];
  const krupier = [losujKarte(), losujKarte()];

  const sumaGracza = sumaKart(gracz);
  const sumaKrupiera = sumaKart(krupier);

  document.getElementById("wynik").textContent = `Twoje karty: ${gracz.join(" i ")} (suma: ${sumaGracza})`;
  document.getElementById("wynik_kom").textContent = `Karty przeciwnika: ${krupier.join(" i ")} (suma: ${sumaKrupiera})`;

  let wynik = "";

  if (sumaGracza > 21) wynik = "Przegrywasz (spaliłeś się)";
  else if (sumaKrupiera > 21 || sumaGracza > sumaKrupiera) wynik = "Wygrywasz!";
  else if (sumaGracza === sumaKrupiera) wynik = "Remis";
  else wynik = "Przegrywasz";

  document.getElementById("Wygrana").textContent = wynik;
}

window.onload = blackjack;
