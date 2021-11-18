// Challenge 1: Age in days

function ageInDays() {
    var birthYear = prompt("What year were you born")
    var today = new Date()
    var curYear = today.getFullYear()
    var ageInDays = (curYear - birthYear) * 365
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old.')
    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
}

function reset() {
    document.getElementById('ageInDays').remove()
}

function genCat() {
    var img = document.createElement('img')
    img.setAttribute('src', 'static/images/cat.gif')
    document.getElementById('cats').appendChild(img)
}

function rpcGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice, choices
    humanChoice = yourChoice.id
    choices = ['rock', 'paper', 'scissor']
    botChoice = choices[Math.floor(Math.random() * choices.length)]
    function decideWinner(humanChoice, botChoice) {
        if (humanChoice === 'rock') {
            if (botChoice === 'paper')
                return [0, 1]
            else if (botChoice === 'scissor')
                return [1, 0]
            else
                return [0.5, 0.5]
        }
        else if (humanChoice === 'paper') {
            if (botChoice === 'scissor')
                return [0, 1]
            else if (botChoice == 'rock')
                return [1, 0]
            else
                return [0.5, 0.5]
        }
        else {
            if (botChoice === 'rock')
                return [0, 1]
            else if (botChoice === 'paper')
                return [1, 0]
            else
                return [0.5, 0.5]
        }
    }

    function finalMessage(results) {
        var result = results.toString()
        if (result == '0,1')
            return { 'message': 'You Lose!', 'color': 'red' }
        else if (result == '1,0')
            return { 'message': 'You Win!', 'color': 'green' }
        else
            return { 'message': `It's a draw!`, 'color': 'yellow' }
    }


    const result = decideWinner(humanChoice, botChoice)         //returns [0,1]
    const message = finalMessage(result)            // {message:"you won", "color" : green}

    document.querySelector(".flex-box-rps").innerHTML=''
    

    var img1 = document.createElement('img')
    img1.setAttribute('src', `static/images/${yourChoice.id}.png`)
    img1.setAttribute('id', `${ yourChoice.id }`)
    document.getElementById('rps').appendChild(img1)

    var div = document.createElement('div')
    div.setAttribute('class', 'rpcdiv')
    var h2 = document.createElement('h2')
    var resultText = document.createTextNode(message.message)
    h2.setAttribute('style', `color:${message.color}`)
    h2.appendChild(resultText)
    div.appendChild(h2)
    document.getElementById('rps').appendChild(div)

    var img2 = document.createElement('img')
    img2.setAttribute('src', `static/images/${botChoice}.png`)
    img2.setAttribute('id', `${botChoice}`)
    document.getElementById('rps').appendChild(img2)

    document.getElementById(`${yourChoice.id}`).addEventListener("click", (e) => rpcGame(e.target))
    document.getElementById(`${botChoice}`).addEventListener("click", (e) => rpcGame(e.target))
}

document.getElementById('btn1').addEventListener("click", ageInDays)
document.getElementById('btn2').addEventListener("click", reset)
document.getElementById('genCat').addEventListener("click", genCat)
document.getElementById('rock').addEventListener("click", (e) => rpcGame(e.target))
document.getElementById('paper').addEventListener("click", (e) => rpcGame(e.target))
document.getElementById('scissor').addEventListener("click", (e) => rpcGame(e.target))