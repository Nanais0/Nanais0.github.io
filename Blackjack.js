
//let firstCard = Math.floor(Math.random() * 13)+1;
//let secondCard = Math.floor(Math.random() * 13)+1;
//let fourthCard = Math.floor(Math.random() * 11)+2;

let firstCard = getRandomCard()
let secondCard = getRandomCard()

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
    name:"LuoYina",
    chips:100
}

let cardsEl = document.querySelector("#cards-el")
let messageEl = document.querySelector("#message-el")
let sumEl =  document.querySelector("#sum-el")
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

console.log (playerEl)

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    if(random > 10){
        return random=10
    }else if (random === 1){
        return random=11
    }else {
        return random
    }

    return random
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards[firstCard, secondCard]
    sum = firstCard + secondCard
	renderGame()
}

function renderGame() {
	cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + ' '
    }

	sumEl.textContent="Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false 
    }
    messageEl.textContent = message 
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
    let thirdCard = getRandomCard()
	sum += thirdCard
    cards.push(thirdCard)
    renderGame()
    }else{
        cardsEl.textContent = "You've Blackjacks"
    }
}

function restGame(){
    cardsEl.textContent="Cards: " + 0
    sumEl.textContent="Sum: " + 0
}