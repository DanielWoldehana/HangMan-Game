
let wordBank = ['JAVA', 'JAVASCRIPT', 'CSS']

let random = Math.floor(Math.random() * wordBank.length)

let randomWord = wordBank[random]
let myP = document.querySelector(".dashes")
for(let i = 0; i < randomWord.length; i++){
   console.log(randomWord[i])
   let mySpan = document.createElement("span");
   mySpan.id = `${i}`
   mySpan.setAttribute("data-id", `${i}`)
   mySpan.classList.add("poof")
   myP.appendChild(mySpan)
   mySpan.innerHTML = `${randomWord[i]}`


}

let myKeyBoard = document.querySelector(".container")
myKeyBoard.addEventListener("click", findLetter)

function findLetter(evt){
    evt.preventDefault()
        if(evt.target !== evt.cuurentTarget) {
            // var keyData = evt.target.id
            console.log(evt.target.id)
            for(let i = 0; i < randomWord.length; i++){
                console.log(randomWord)
                if(evt.target.id == document.getElementById(`${i}`).textContent){
            document.getElementById(`${i}`).classList.remove("poof")
            
    }
}
 }
}