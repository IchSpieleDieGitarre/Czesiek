const keys = [];
let arrows;
const direction = [false, false, false, false];
let is_apple = false;
let wynik = 0;
let bezp_wynik = true;
document.addEventListener("keyup", e => keys[e.key] = false);
document.addEventListener("keydown", e => keys[e.key] = true);

function rng(max){
  return Math.floor(Math.random() * max);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait(ms){
    await sleep(ms);
}

const apple = {
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    element: document.createElement("div")
};
const player = {
    x: 200,
    y: 200,
    width: 10,
    height: 10,
    speed: 1,
    element: document.getElementById("player")
};

/*const direction = {
    x: player.x,
    y: player.y,
    element: document.getElementById("ghost_player")
};*/

function move(){
    if(direction[0]) player.y -= player.speed;
    else if(direction[1]) player.y += player.speed;
    else if(direction[2]) player.x -= player.speed;
    else if(direction[3]) player.x += player.speed;
}

function arrow_nav(arrow){
    switch(arrow){
        case 'w': 
            for (let i = 0; i < direction.length; i++){
                if(direction[i]) direction[i] = false; 
            }
            direction[0] = true;
            break;
        case "s": 
            for (let i = 0; i < direction.length; i++){
                if(direction[i]) direction[i] = false; 
            }
            direction[1] = true;
            break;
        case "a":
            for (let i = 0; i < direction.length; i++){
                if(direction[i]) direction[i] = false; 
            }
            direction[2] = true;
            break;
        case "d": 
            for (let i = 0; i < direction.length; i++){
                if(direction[i]) direction[i] = false; 
            }
            direction[3] = true;
            break;    
    }
}

/*function controls4Way(){
    let way;
    if(keys["w"]) way = "w";
    else if(keys["s"]) way = "s"
    else if(keys["a"]) way = "a"
    else if(keys["d"]) way = "d"
    switch(way){
        case "w": player.y -= player.speed;
            break;
        case "s": player.y += player.speed;
            break;
        case "a": player.x -= player.speed;
            break;
        case "d": player.x += player.speed;
            break;
    }
}
function controls(){
    if(north){
        if (keys["w"]) player.y -= player.speed;
        
    }
    if(south){
        if (keys["s"]) player.y += player.speed;
    }
    
    if(west){
        if (keys["a"]) player.x -= player.speed;
    }

    if(east){
        if (keys["d"]) player.x += player.speed;
    }
}
function player_direction(){
        if (keys["w"]) north = -1;
        else north = 0;
        if (keys["s"]) south = 1;
        else south = 0;
        if (keys["a"]) west = -1;
        else west = 0;
        if (keys["d"]) east = 1;
        else east = 0;

        //in code
        direction.y = player.y + (north+south)*40;
        direction.x = player.x + (west+east)*40;
        //visual
        direction.element.style.top = player.y + (north+south)*40 + "px";
        direction.element.style.left = player.x + (west+east)*40 + "px";
}*/
function update_movement(){
    player.element.style.top = player.y + "px";
    player.element.style.left = player.x + "px";
}

function touching(a, b){
    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    );
}

async function eat(){
    if(touching(player, apple)){
        apple.element.remove();
        is_apple = false;
        if(bezp_wynik){
            bezp_wynik = false;
            wynik++; 
            document.getElementById("wynik").textContent = "wynik: "+ wynik;
        }
        await sleep(2000);
        bezp_wynik = true;
        spawn_apple(rng(350), rng(350));
    }
}

function spawn_apple(x, y){
    if(!is_apple){
        apple.x = x;
        apple.y = y;
        apple.element.style.left = x + "px";
        apple.element.style.top = y + "px";
        apple.element.classList.add("apple");
        document.getElementById("game").appendChild(apple.element);
        is_apple = true;
    }
}

function GameLoop(){
    requestAnimationFrame(move)
    update_movement();
    eat();
    requestAnimationFrame(GameLoop);
    //console.log(player.y, player.x);
    //console.log(apple.y, apple.x);
}

window.onload = () => {
    GameLoop();
    document.getElementById("wynik").textContent = "wynik: "+ 0;
    spawn_apple(rng(350), rng(350));
};