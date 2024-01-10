//INITIALISATION OF THE VARIABLES 
const randomPc = document.getElementById("computerNumber")
const randomUser = document.getElementById("userNumber")
const randomWinner = document.getElementById("resultWinner")

//FUNCTION'S SECTION
let computer = RandomNumber (1,7)
let gamer = RandomNumber (1,7)

randomPc.innerHTML = computer
randomUser.innerHTML = gamer

function RandomNumber( min , max ) {
    return Math.floor( Math.random()*(max-min + 1) + 1 )
}
