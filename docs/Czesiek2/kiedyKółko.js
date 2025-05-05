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