
// let wordBank = require('random-words')

// console.log(wordBank())




let  wordBank = ['java is awesome', 'javascript', 'css']

let random = Math.floor(Math.random() * wordBank.length)
let myButton = document.querySelector(".myButton")

myButton.addEventListener("click", function(){location.reload()})

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


