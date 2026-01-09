let wynik;


function potęgowanie(){
    let liczona = Number(document.getElementById("licz").value);
    const liczba = Number(document.getElementById("licz").value);
    const potęga = Number(document.getElementById("pot").value);
    if (potęga === 0) {
    document.getElementById("wynik").textContent = 1;
    return;
    }
    for(let i = 1; i < potęga; i++){
        liczona = liczona * liczba;
    }
    wynik = liczona;
    document.getElementById("wynik").textContent = wynik;
}