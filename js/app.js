

// widget
const readyBtn = document.getElementById('readyBtn')
const startBtn = document.getElementById('startBtn')
const againBtn = document.getElementById('againBtn')
const firstSection = document.getElementById('firstSection')
const secondSection = document.getElementById('secondSection')
const resultSection = document.getElementById('resultSection')
const humanChoice1 = document.getElementById('Hchoice1')
const humanChoice2 = document.getElementById('Hchoice2')

const aiChoice1 = document.getElementById('Cchoice1')
const aiChoice2 = document.getElementById('Cchoice2')

const humanFingerAmount = document.getElementById('hNoFingers')
const computerFingerAmount = document.getElementById('cNoFingers')

const winnerText = document.getElementById('winner')

// Images

const userImage1 = document.getElementById('userImg1')
const userImage2 = document.getElementById('userImg2')


const computerImage1 = document.getElementById('cmpImg1')
const computerImage2 = document.getElementById('cmpImg2')
// accepted Value

const amharicObj = {
    'desto' : 'ደስቶ',
    'finger' : 'ፊንገር',
    'caw' : 'ካው',
    'cawter' : 'ካውተር',
    'oli' : 'ኦሊ'
}

const userFingers = document.getElementById('userFingers')
let computerFingers

const fingerValues = ['desto','finger','caw','cawter','oli']

let userChoice = []

let computerChoice = []

let userChoiceValue = []

let computerChoiceValue = []

const fingerComparision = {'desto' : 1 , 'finger' : 2, 'caw' : 3 , 'cawter' : 4 , 'oli' : 5}

const makeComputerChoice = (userChoice) =>{
    const userChoice1 = fingerValues[fingerValues.indexOf(userChoice[0])]
    const userChoice2 = fingerValues[fingerValues.indexOf(userChoice[1])]
    let filterChoice = fingerValues.filter(function(value,index,arr){
        return value != userChoice1 && value!= userChoice2 })
    let randomIndex = Math.floor(Math.random() * 3)
    console.log(randomIndex)
    if (randomIndex > -1){
        filterChoice.splice(randomIndex,1)
    }
    computerChoice = filterChoice
}
const checkWinner = (userChoice , computerChoice , computerFingers , userFingers) =>{

    for(let i =0 ; i < 2; i++){
        userChoiceValue.push(fingerComparision[userChoice[i]])
        computerChoiceValue.push(fingerComparision[computerChoice[i]])
    }
    console.log(userChoiceValue)
    console.log(computerChoiceValue)

    let totalFingerValue

    const totalReminderFinger =  parseInt(userFingers) + computerFingers

    if (totalReminderFinger == 5){
        totalFingerValue = 5
    }
    else{
        totalFingerValue = totalReminderFinger % 5
    }

    if(userChoiceValue.includes(totalFingerValue)){
        console.log('User Win')
    }
    else if(computerChoiceValue.includes(totalFingerValue)){
        console.log('Computer Win')
    }
    else{
        console.log('Draw')
    }

    function getKeyByValue(obj,value){
        return Object.keys(obj).filter(key => obj[key] === value) 
    }
    const result = getKeyByValue(fingerComparision , totalFingerValue)
    console.log(`result is ${result}`)
}

readyBtn.addEventListener('click',  (e) => {
    e.preventDefault()
    firstSection.classList.add('hidden')
    secondSection.classList.remove('hidden')
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if(item.checked == true){
            userChoice.push(item.value)
        }
    })
    makeComputerChoice(userChoice)
    console.log(userChoice , computerChoice)
    humanChoice1.textContent = userChoice[0]
    humanChoice2.textContent = userChoice[1]

    aiChoice1.textContent = computerChoice[0]
    aiChoice2.textContent = computerChoice[1]

})


const changeImage = (computerFingerAmount , humanFingerAmount) => {
    computerImage1.src = ""
    computerImage2.src = ""
    userImage1.src = ""
    userImage2.src = ""
    if (computerFingerAmount <= 5){
        computerImage1.src= `/assets/fingers/finger-${computerFingerAmount}.png`
    }
    else{
        if(computerFingerAmount % 2 == 0){
            computerImage1.src= `/assets/fingers/finger-${computerFingerAmount / 2}.png`
            computerImage2.src= `/assets/fingers/finger-${computerFingerAmount / 2}.png`
        }
        else{
            roundNumber = Math.floor(computerFingerAmount/2)
            computerImage1.src= `/assets/fingers/finger-${roundNumber + 1}.png`
            computerImage2.src= `/assets/fingers/finger-${roundNumber}.png`
        }
    }

    if (humanFingerAmount <= 5){
        userImage1.src= `/assets/fingers/finger-${humanFingerAmount}.png`
        
    }
    else{
        if(humanFingerAmount % 2 == 0){
            userImage1.src= `/assets/fingers/finger-${humanFingerAmount / 2}.png`
            userImage2.src= `/assets/fingers/finger-${humanFingerAmount / 2}.png`
        }
        else{
            roundNumber = Math.floor(humanFingerAmount/2)
            userImage1.src= `/assets/fingers/finger-${roundNumber + 1}.png`
            userImage2.src= `/assets/fingers/finger-${roundNumber}.png`
        }
    }

    

}
startBtn.addEventListener('click',() => {

    if(userFingers.value > 10){
        alert("Please Enter Finger Less than 10 )>:")
        return
    }
    else{
    secondSection.classList.add('hidden')
    computerFingers = (Math.floor(Math.random() * 11))
    resultSection.classList.remove('hidden')

    humanFingerAmount.textContent = userFingers.value
    computerFingerAmount.textContent = computerFingers
    console.log('Computer Fingers : ' + computerFingers)
    console.log('User Fingers : ' + userFingers.value)
    changeImage(computerFingers , Number(userFingers.value))
    checkWinner(userChoice, computerChoice , computerFingers , userFingers.value)
    console.log(amharicObj)
    }
})

againBtn.addEventListener('click', () => {
    secondSection.classList.remove('hidden')
    resultSection.classList.add('hidden')
})