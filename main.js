
let wordBank = ['java', 'javascript', 'css']

let random = Math.floor(Math.random() * wordBank.length)
let lifes = 6
let life = document.querySelector(".numberLives")
// life.innerHTML = `${lifes}`
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
console.log(life)
function findLetter(evt){
    evt.preventDefault()
        if(evt.target !== evt.cuurentTarget) {
            // var keyData = evt.target.id
            evt.target.classList.add("poof")
            console.log(evt.target.id)
            for(let i = 0; i < randomWord.length; i++){
                console.log(randomWord)
                if(evt.target.id == document.getElementById(`${i}`).textContent){
            document.getElementById(`${i}`).classList.remove("poof")
    } 
}
 }

}

