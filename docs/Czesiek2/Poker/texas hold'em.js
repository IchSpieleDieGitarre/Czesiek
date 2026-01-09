const pik = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];
const kier = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];
const karo = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];
const trefl = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];
const talie = [pik, kier, karo, trefl];

let reka_gr1 = [];
let reka_gr2 = [];
let reka_gr3 = [];
let reka_gr4 = [];
let reka_gr5 = [];
let reka_gr6 = [];
const gracze = [reka_gr1, reka_gr2, reka_gr3, reka_gr4, reka_gr5, reka_gr6];

function los_kart(gracz){
    let i = 0;
    while(i<=2){
        let x = Math.floor(Math.random() * 4);
        let y = Math.floor(Math.random() * talie[x].length);
        gracze[gracz].push(y);
        i++;
    }
}

let i = 0;
while(i<=gracze.length){
    los_kart(i);
    console.log(gracze[i]);
    i++;
}