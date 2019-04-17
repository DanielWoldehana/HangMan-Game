let  wordBank = ['java', 'javascript', 'css']


let categoryValue = document.querySelector("#category-select")
categoryValue.addEventListener('click', function(evt){
    if(categoryValue.value == "random"){
      wordBank.push("Hello", "there")
     }
})




// let  wordBank = ['java', 'javascript', 'css']

let random = Math.floor(Math.random() * wordBank.length)
let myButton = document.querySelector(".myButton")

myButton.addEventListener("click", function(evt){
    evt.preventDefault()
    location.reload()
})

let randomWord = wordBank[random].toUpperCase()
let myP = document.querySelector(".dashes")
for(let i = 0; i < randomWord.length; i++){
   console.log(randomWord[i])
   let myDiv = document.createElement("div")
   myDiv.className = "myDivs"
   let mySpan = document.createElement("span");
   mySpan.id = `${i}`
   mySpan.className = "correct-letter"
   mySpan.setAttribute("data-id", `${i}`)
   mySpan.classList.add("poof")
   myP.appendChild(myDiv)
   myDiv.appendChild(mySpan)
   mySpan.innerHTML = `${randomWord[i]}`


}

let myKeyBoard = document.querySelector(".container")
myKeyBoard.addEventListener("click", findLetter)
let score = 0 

function findLetter(evt){
    evt.preventDefault()
        if(evt.target !== evt.cuurentTarget) {
            evt.target.classList.add("poof")
            console.log(evt.target.id)
            for(let i = 0; i < randomWord.length; i++){
                if(evt.target.id == document.getElementById(`${i}`).textContent){
                document.getElementById(`${i}`).classList.remove("poof")
                score += randomWord.length / randomWord.length
               let scoreSpan = document.querySelector(".score-span")
               scoreSpan.innerHTML = `Score: 🤩 ${score}`
               if(score == randomWord.length){
                   alert("YOU WIN!")
               }
    }
        
    } 
    
    }
    // if (randomWord.includes(`${evt.target.id}`)){
    //     score += 1
    //     console.log(score)
    // }

    if (!randomWord.includes(`${evt.target.id}`)){
        if(lifes <= 1){
            alert('GAME OVER the answer was ' + randomWord)
            location.reload()
            
            } 
        
        console.log('wrong')
        lifes -= 1
        console.log(lifes)
        life.innerHTML = `❤️: ${lifes}`
    }
} 
 
 let life = document.querySelector(".life-span")
let lifes = 6
life.innerHTML = `❤️: 6`




let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');
c.fillStyle = "blue";

function Circle(x, y, dx, dy, radius, r, g, b){
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = Math.floor(Math.random() * 30)
   this.r = r
   this.g = g
   this.b = b
    this.draw = function(){
       c.beginPath();
       c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
       c.strokeStyle = "white";
       c.stroke();
    }
    this.update = function(){
       if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
           this.dx = -this.dx
       }
   
       if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
           this.dy = -this.dy
       }
   
       this.x += this.dx
       this.y += this.dy
       
       this.draw()
    }
   }
   
   let circlesArray = [];
   for(let i = 0; i < 100; i++){
       let radius = 30
       let x = Math.random() * (innerWidth - radius * 2) + radius
       let y = Math.random() * (innerHeight - radius * 2) + radius
       let dx = (Math.random() - 0.5) * 3
       let dy = (Math.random() - 0.5) * 3
       circlesArray.push(new Circle(x, y, dx, dy, radius))

   }


function animate() {
   requestAnimationFrame(animate)
   c.clearRect(0, 0, innerWidth, innerHeight)

   for(let i = 0; i < circlesArray.length; i++){
       circlesArray[i].update();
   }
}

animate()