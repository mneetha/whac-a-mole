
const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const score = document.querySelector("#score")
const timeLeft = document.querySelector("#time-left")

let result = 0
let hitPosition
let currentTime = 60
let timerId = null
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole")
        square.classList.remove("moleHit")
    })
     
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add("mole")

    hitPosition = randomSquare.id
}

function moveMole() {
    
    timerId = setInterval(randomSquare, 600)
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            square.classList.add("moleHit")
            hitPosition= null
        }
        
    } )
})

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0 ){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("Game Over! Final Score is "+ result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)
moveMole()