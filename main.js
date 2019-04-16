let  wordBank = ["JAVASCRIPT", "CSS", "HTML", "JAVA", "PYTHON"]
let myP = document.querySelector(".dashes")
let rand = Math.floor(Math.random() * wordBank.length)
let splitWord = wordBank[rand].split("")


// function generateWord(ph){

// for(let i = 0; i < splitWord.length; i++){
    
//     let myDiv = document.createElement("div")
//     let letters = document.createElement("span")
//     letters.className = "hang-letters"
//     myDiv.className = "lines"
//     letters.innerHTML = `${splitWord[i].toUpperCase()}`
//     myP.appendChild(myDiv)
//     myDiv.appendChild(letters)


// }
// }
// generateWord()

let myKeyBoard = document.querySelector(".container")
myKeyBoard.addEventListener("click", findLetter)

function findLetter(evt){
    evt.preventDefault()
        if(evt.target !== evt.currentTarget) {
            var keyData = evt.target.id
    }
        for (let i = 0; i < splitWord.length; i++) {
           console.log(splitWord[i])
           if(keyData == splitWord[i]){
               console.log(splitWord)
               console.log(splitWord[i])
                let myDiv = document.createElement("div")
                let letters = document.createElement("span")
                letters.className = "hang-letters"
                myDiv.className = "lines"
                letters.innerHTML = `${splitWord[i].toUpperCase()}`
                myP.appendChild(myDiv)
                myDiv.appendChild(letters)
           }
        }
}


