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
