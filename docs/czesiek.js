function pokazGodzine() {
  const teraz = new Date();
  const godzina = teraz.toLocaleTimeString();
  document.getElementById("czas").textContent = godzina;
}

setInterval(pokazGodzine, 1000);
pokazGodzine();

function getNextTuesdayAt14() {
    const now = new Date();
    const day = now.getDay(); // 0 = niedziela, 1 = poniedziałek, 2 = wtorek, ...
    const daysUntilTuesday = (9 - day) % 7 || 7;
  
    const nextTuesday = new Date(now);
    nextTuesday.setDate(now.getDate() + daysUntilTuesday);
    nextTuesday.setHours(14, 0, 0, 0); // ustaw na 14:00
  
    return nextTuesday;
  }
  
  function startCountdown() {
    const targetDate = getNextTuesdayAt14().getTime();
  
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
  
      if (diff <= 0) {
        document.getElementById("countdown").innerText = "Wydarzenie już trwa!";
        clearInterval(interval);
        targetDate = getNextTuesdayAt14().getTime();
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      document.getElementById("countdown").innerText =
        `${days} dni, ${hours} godz., ${minutes} min, ${seconds} sek`;
    }, 1000);
  }
  
  startCountdown();
  
  // Funkcja otwierająca / zamykająca menu po kliknięciu
function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("show");
}

// Zamykaj menu, jeśli klikniemy poza nim
window.onclick = function(event) {
  // Jeśli kliknięto poza przyciskiem
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};