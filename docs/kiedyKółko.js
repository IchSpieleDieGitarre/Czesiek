function getNextTuesdayAt14(fromDate = new Date()) {
  const day = fromDate.getDay(); // 0 = niedziela, 1 = poniedziałek, 2 = wtorek
  const daysUntilTuesday = (9 - day) % 7 || 7;

  const nextTuesday = new Date(fromDate);
  nextTuesday.setDate(fromDate.getDate() + daysUntilTuesday);
  nextTuesday.setHours(14, 0, 0, 0); // ustaw na 14:00

  return nextTuesday;
}

function startCountdown() {
  let targetDate = getNextTuesdayAt14();

  const interval = setInterval(() => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      // Jeżeli aktualny czas >= targetDate, to pokazujemy komunikat
      document.getElementById("countdown").innerText = "Wydarzenie już trwa!";

      // Sprawdź, czy już przeszła 14:00 – wtedy zaktualizuj targetDate
      if (now >= targetDate) {
        targetDate = getNextTuesdayAt14(now); // od teraz licz następny wtorek
      }

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
