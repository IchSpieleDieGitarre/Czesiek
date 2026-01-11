startInput();
let wynik = "";
let liczba = "";
let wspolne = 0;
let licz2 = 0;
let rodz_dział = '';
let wynik_jest = false;
let znak_jest = false;
let ghost_wynik = 0;
let ilosc = 0;

function wpisywanie(cyfra){
    znak_jest = false;
    if (wynik_jest){
        return;
    }
    wynik += cyfra;
    liczba += cyfra;
    document.getElementById("wynik").textContent = wynik;
}

function rownanie(){
    licz2 = Number(liczba);
        switch(rodz_dział){
            case '+':
                ghost_wynik = wspolne + licz2;
                wynik = String(ghost_wynik);
                break;
            case '-':
                ghost_wynik = wspolne - licz2;
                wynik = String(ghost_wynik);
                break;
            case 'x':
                ghost_wynik = wspolne * licz2;
                wynik = String(ghost_wynik);
                break;
            case '/':
                ghost_wynik = wspolne / licz2;
                wynik = String(ghost_wynik);
                break;
            case 'p':
                potęgowanie();
                break;
            default:
                wynik = "ERROR";
        }
    document.getElementById("wynik").textContent = wynik;
    wynik_jest = true;
}

function oddziel(dzialanie){    
    if(znak_jest || wynik_jest || ilosc>=1)return;
    ilosc++;
    wynik += dzialanie;
    document.getElementById("wynik").textContent = wynik;

    rodz_dział = dzialanie;
    wspolne = Number(liczba);
    liczba = "";
}

function potęgowanie(){
    let liczona = wspolne;
    for(let i = 1; i < licz2; i++){
       liczona = liczona * wspolne;
    }
    wynik = liczona;
    document.getElementById("wynik").textContent = wynik;
}

function reset(){
    startInput();
    wynik = "";
    liczba = "";
    wspolne = 0;
    licz2 = 0;
    rodz_dział = '';
    wynik_jest = false;
    znak_jest = false;
    ghost_wynik = 0;
    ilosc = 0;
    document.getElementById("wynik").textContent = wynik;
}
function error(){
    wynik = "ERROR";
    document.getElementById("wynik").textContent = wynik;
    wynik_jest = true;
}
function startInput() {
    const cursor = document.getElementById("cursor");
    cursor.classList.add("active");
}
function stopInput() {
    const cursor = document.getElementById("cursor");
    cursor.classList.remove("active");
}