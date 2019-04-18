

let categoryValue = document.querySelector("#category-select");
categoryValue.addEventListener("change", categorySelect);
let myButton = document.querySelector(".myButton");
let myHeader = document.querySelector(".buttonDiv");
let randomWord;

myButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  location.reload();
});


let wordBank = ["elephant","hangman","dinosaur"]
function categorySelect(evt) {

  if (evt.target.value == "random") {
    console.log(evt.target.value);
    console.log("its there");
    wordBank = [
      "elephant",
      "hangman",
      "dinosaur",
      "react",
      "piller",
      "riddles",
      "code",
      "computer"
    ];
  } else if (evt.target.value == "jsSyntax") {
    console.log(evt.target.value);
    console.log("its there");
    wordBank = [
      "javaScript",
      "function",
      "let",
      "classlist",
      "attribute",
      "const",
      "method",
      "array",
      "script",
      "object"
    ];
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
  if (evt.target.className == "letter") {
    evt.target.classList.add("poof");
    console.log(evt.target.id);
    for (let i = 0; i < randomWord.length; i++) {
      if (evt.target.id == document.getElementById(`${i}`).textContent) {
        document.getElementById(`${i}`).classList.remove("poof");
        score += randomWord.length / randomWord.length;
        let scoreSpan = document.querySelector(".score-span");
        scoreSpan.innerHTML = `Score: 🤩 ${score}`;
        if (score == randomWord.length) {
          var msg = new SpeechSynthesisUtterance("YOU WIN ");
          window.speechSynthesis.speak(msg);
        }
      }
    }
  }

  if (!randomWord.includes(`${evt.target.id}`)) {
    if (lifes <= 1) {
      var msg = new SpeechSynthesisUtterance(
        "Game Over the answer was " + randomWord.toLocaleLowerCase()
      );
      msg.rate = 1.0;
      window.speechSynthesis.speak(msg);
      location.reload();
    }

    console.log("wrong");
    lifes -= 1;
    img += 1;
    console.log(lifes);
    life.innerHTML = `❤️: ${lifes}`;
    if (img < 5) {
      let hangImg = document.createElement("img");
      hangImg.setAttribute("src", `/images/Kaguya${img}.png`);
      console.log(img + " image #");
      hangImg.setAttribute("class", "kaguya1 kaguya");
      myhanger.appendChild(hangImg);
    } else if (img == 5) {
      let hangImg = document.createElement("img");
      hangImg.setAttribute("src", `/images/Kaguya${img}.png`);
      hangImg.setAttribute("class", "kaguya5");
      myhanger.appendChild(hangImg);
      console.log("true");
    } else if (img == 6) {
      let hangImg = document.createElement("img");
      hangImg.setAttribute("src", `/images/Kaguya${img}.png`);
      hangImg.setAttribute("class", "kaguya6");
      myhanger.appendChild(hangImg);
      console.log("true");
    }
  }
}

let life = document.querySelector(".life-span");
let lifes = 7;
life.innerHTML = `❤️: 6`;
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
  mouse.x = evt.x;
  mouse.y = evt.y;
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = Math.floor(Math.random() * 10);

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

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circlesArray.length; i++) {
    circlesArray[i].update();
  }
}

animate();
