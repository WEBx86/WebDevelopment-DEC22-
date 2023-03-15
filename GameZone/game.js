
// Part III 
const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');


// Part V

let keys = { ArrowUp : false, ArrowDown : false, ArrowLeft : false, ArrowRight : false };

// part IV
document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);

function keyDown(e){
    e.preventDefault(); // Off your default functionalitity
    keys[e.key] = true;
    console.log(e.key);
    console.log(keys);
}

function keyUp(e){
    e.preventDefault(); // Off your default functionalitity
    keys[e.key] = false;
    console.log(e.key);
    console.log(keys);
}

function playLines() {
    let lines = document.querySelectorAll('.lines');

    lines.forEach(function (element) {

        if (element.y >= 850) {
            element.y -= 900;
        }

        element.y += You.carSpeed;
        element.style.top = element.y + "px";
    })
}

//Part VI
document.addEventListener('click',start);

var You = { carSpeed: 5};

function playYourGame(){
    console.log('Play The game');

    let Car = document.querySelector('.Car');

    let YoueGameRoad = gameArea.getBoundingClientRect();
   // console.log(YoueGameRoad);
    
    if (You.start) {

        playLines();
        
        if (keys.ArrowUp && You.y > (YoueGameRoad.top + 150)) {
            You.y -= You.carSpeed;
        }

        if (keys.ArrowDown && You.y < YoueGameRoad.bottom - 150) {
            You.y += You.carSpeed;
        }

        if (keys.ArrowLeft && You.x > 0) {
            You.x -= You.carSpeed;
        }

        if (keys.ArrowRight && You.x < YoueGameRoad.width - 100) {
            You.x += You.carSpeed;
        }
        Car.style.top = You.y + "px";    // Top Position 
        Car.style.left = You.x + "px";   // Left Position 
        window.requestAnimationFrame(playYourGame);
    }
}

function start(){
    gameArea.classList.remove('hide');
    startScreen.classList.add('hide');

    You.start = true;
    window.requestAnimationFrame(playYourGame);

    // Create Your Road Lines
    for (let i = 0; i < 8; i++){
        let roadLine = document.createElement('div');
        roadLine.setAttribute('class', 'lines');
        roadLine.y = (i * 150);
        roadLine.style.top = roadLine.y + "px";
        gameArea.appendChild(roadLine);
    }
   
    // Create Your Car 
    let yourCar = document.createElement('div');
    yourCar.setAttribute('class','Car');
   // yourCar.innerText = "First Random Car";
    gameArea.appendChild(yourCar);

    You.x = yourCar.offsetLeft;
    You.y = yourCar.offsetTop;

    // console.log("Left Side : ", yourCar.offsetLeft);
    // console.log("Top Side : ", yourCar.offsetTop);
}




