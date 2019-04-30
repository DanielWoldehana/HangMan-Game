var backgroundSound = new Audio();
backgroundSound.src = "bubbles.mp3";

var waterDrop = new Audio();
waterDrop.src = "waterdrop.mp3";

var randomWords = require("random-words");
import swal from "sweetalert";

let loosingMsg = [
  "that was tough",
  "that was tricky",
  "you tried your best",
  "it was so easy",
  "Game over",
  "nice try"
];

let winningMsg = [
  "congrats you win",
  "you did it good job",
  "that was close good job",
  "i am so proud of you",
  "wow you think like a computer",
  "you are on fire keep it up"
];
let randomMsg = Math.floor(Math.random() * loosingMsg.length);
let randomWmessage = Math.floor(Math.random()* winningMsg.length)


let words = randomWords(800);

let randomLetter = words;
let twoLetter = [];
let threeLetter = [];
let fourLetter = [];
let fiveLetter = [];
let sixLetter = [];
let sevenLetter = [];
let eightLetter = [];
let nineLetter = [];
let tenLetter = [];
let megaLetter = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].length == 2) {
    twoLetter.push(words[i]);
  } else if (words[i].length == 3) {
    threeLetter.push(words[i]);
  } else if (words[i].length == 4) {
    fourLetter.push(words[i]);
  } else if (words[i].length == 5) {
    fiveLetter.push(words[i]);
  } else if (words[i].length == 6) {
    sixLetter.push(words[i]);
  } else if (words[i].length == 7) {
    sevenLetter.push(words[i]);
  } else if (words[i].length == 8) {
    eightLetter.push(words[i]);
  } else if (words[i].length == 9) {
    nineLetter.push(words[i]);
  } else if (words[i].length == 10) {
    tenLetter.push(words[i]);
  } else if (words[i].length > 10) {
    megaLetter.push(words[i]);
  }
}
let categoryValue = document.querySelector("#category-select");
categoryValue.addEventListener("change", categorySelect);
let myButton = document.querySelector(".myButton");
let myHeader = document.querySelector(".buttonDiv");
let randomWord;

myButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  location.reload();
});

let life = document.querySelector(".life-span");
let lifes = 6;
life.innerHTML = `❤️: 6`;

let wordBank;
function categorySelect(evt) {
  if (evt.target.value == "randomLetters") {
    wordBank = randomLetter;
  } else if (evt.target.value == "twoLetters") {
    wordBank = twoLetter;
  } else if (evt.target.value == "threeLetters") {
    wordBank = threeLetter;
  } else if (evt.target.value == "fourLetters") {
    wordBank = fourLetter;
  } else if (evt.target.value == "fiveLetters") {
    wordBank = fiveLetter;
  } else if (evt.target.value == "sixLetters") {
    wordBank = sixLetter;
  } else if (evt.target.value == "sevenLetters") {
    wordBank = sevenLetter;
  } else if (evt.target.value == "eightLetters") {
    wordBank = eightLetter;
  } else if (evt.target.value == "nineLetters") {
    wordBank = nineLetter;
  } else if (evt.target.value == "tenLetters") {
    wordBank = tenLetter;
  } else if (evt.target.value == "megaLetters") {
    wordBank = megaLetter;
    lifes = 5;
    life.innerHTML = `❤️: 5`;
    let msg = new SpeechSynthesisUtterance("Level Mega Hard, 5 lifes");
    msg.rate = 0.95;
    window.speechSynthesis.speak(msg);
  }

  let random = Math.floor(Math.random() * wordBank.length);

  randomWord = wordBank[random].toUpperCase();
  let myP = document.querySelector(".dashes");
  for (let i = 0; i < randomWord.length; i++) {
    console.log(randomWord[i]);
    let myDiv = document.createElement("div");
    myDiv.className = "myDivs";
    let mySpan = document.createElement("span");
    mySpan.id = `${i}`;
    mySpan.className = "correct-letter";
    mySpan.setAttribute("data-id", `${i}`);
    mySpan.classList.add("poof");
    myP.appendChild(myDiv);
    myDiv.appendChild(mySpan);
    mySpan.innerHTML = `${randomWord[i]}`;
  }
}

let myKeyBoard = document.querySelector(".container");
myKeyBoard.addEventListener("click", findLetter);
let score = 0;
let myhanger = document.querySelector(".hangman-img");

function findLetter(evt) {
  evt.preventDefault();
  waterDrop.pause();
  waterDrop.currentTime = 0;
  waterDrop.volume = 1;
  waterDrop.play();
  if (evt.target.className == "letter") {
    evt.target.classList.add("poof");
    console.log(evt.target.id);
    for (let i = 0; i < randomWord.length; i++) {
      if (evt.target.id == document.getElementById(`${i}`).textContent) {
        document.getElementById(`${i}`).classList.remove("poof");
        score += randomWord.length / randomWord.length;
        let scoreSpan = document.querySelector(".score-span");
        scoreSpan.innerHTML = `Score: 🤩 ${score}`;
        if (randomWord.length - score == 3) {
          var msg = new SpeechSynthesisUtterance("You are so close");
          msg.rate = 0.95;
          window.speechSynthesis.speak(msg);
        }
        if (score == randomWord.length) {
          var msg = new SpeechSynthesisUtterance(`${winningMsg[randomWmessage]}`);
          swal(
            "YOU WIN!",
            "Choose a Category for the next Challange!",
            "success"
          );
          msg.rate = 0.9;
          window.speechSynthesis.speak(msg);
        }
        if (score == randomWord.length) {
          setTimeout(function() {
            location.reload();
          }, 5000);
        }
      }
    }
  }

  if (!randomWord.includes(`${evt.target.id}`)) {
    let errorSound = new Audio();
    errorSound.src = "error.mp3";
    errorSound.play();
    if (lifes == 2) {
      var msg = new SpeechSynthesisUtterance("1 more chance");
      msg.rate = 0.95;
      window.speechSynthesis.speak(msg);
    }
    if (lifes <= 1) {
      setTimeout(function() {
        swal(
          "Game Over!",
          `Answer was ${randomWord.toLocaleLowerCase()}......Better Luck Next time!`,
          "error"
        );
      }, 2000);
      var msg = new SpeechSynthesisUtterance(
        `${loosingMsg[randomMsg]} the answer was ` +
          randomWord.toLocaleLowerCase()
      );
      msg.rate = 0.9;
      window.speechSynthesis.speak(msg);
      setTimeout(function() {
        location.reload();
      }, 7000);
    }

    console.log("wrong");
    lifes -= 1;
    img += 1;
    console.log(lifes);
    life.innerHTML = `❤️: ${lifes}`;
    if (img < 5) {
      let hangImg = document.createElement("img");
      hangImg.setAttribute("src", `Kaguya${img}.png`);
      console.log(img + " image #");
      hangImg.setAttribute("class", "kaguya1 kaguya");
      myhanger.appendChild(hangImg);
    } else if (img == 5) {
      let hangImg = document.createElement("img");
      hangImg.setAttribute("src", `Kaguya${img}.png`);
      hangImg.setAttribute("class", "kaguya5");
      myhanger.appendChild(hangImg);
      console.log("true");
    } else if (img == 6) {
      let hangImg = document.createElement("img");
      hangImg.setAttribute("src", `Kaguya${img}.png`);
      hangImg.setAttribute("class", "kaguya6");
      myhanger.appendChild(hangImg);
      console.log("true");
    }
  }
}

let img = 0;

let mouse = {
  x: undefined,
  y: undefined
};
let maxRadius = 40;
let minimumRadius = 10;

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");
window.addEventListener("mousemove", function(evt) {
  backgroundSound.volume = 0.069;
  backgroundSound.play();
  mouse.x = evt.x;
  mouse.y = evt.y;
});

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

init()
})


function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = Math.floor(Math.random() * 10 + 1);

  this.o = Math.random() * 2;
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.stroke();
  };
  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > minimumRadius) {
      this.radius -= 1;
    }
    this.draw();
  };
}

let circlesArray = [];

function init() {
  circlesArray = []
let i = 0;
while (i < 1000) {
  let radius = 30;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 1;
  let dy = (Math.random() - 0.5) * 1;
  c.strokeStyle = `rgb( 255, 255, 255)`;
  circlesArray.push(new Circle(x, y, dx, dy, radius));
  i++;
}
}


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circlesArray.length; i++) {
    circlesArray[i].update();
  }
}
init()
animate();
