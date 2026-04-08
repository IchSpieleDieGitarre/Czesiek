function pokazGodzine() {
  const teraz = new Date();
  const godzina = teraz.toLocaleTimeString();
  document.getElementById("czas").textContent = godzina;
}

setInterval(pokazGodzine, 1000);
pokazGodzine();