const question = document.getElementById('questions');
const choices = Array.from ( document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText')
const scoreText = document.getElementById('score')



let currentQuestion = {}
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions =[];

fetch('questions.json').then(res => {
    return res.json();
}) .then(loadedQuestions => {
    console.log(loadedQuestions)
    questions = loadedQuestions
})

//CONSTANT
const CURRENT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [ ...questions ];
    // console.log(availableQuestion);
    getNewQuestion();
}

getNewQuestion = () => {
    if (availableQuestion.length === 0 || questionCounter >= MAX_QUESTIONS ) { 
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign("./end.html");
    }
    questionCounter ++;
    progressText.innerHTML = questionCounter + "/" + MAX_QUESTIONS

    // update the progress bar 
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS)*100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion [questionIndex];
    questionss.innerText= currentQuestion.question;

    choices.forEach ( choice => {
        // console.log(choice)
        const number = choice.dataset ["number"];
        // console.log(number)
        choice.innerText = currentQuestion ["choice" + number];
    })

    availableQuestions.splice (questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach ( choice => {
    choice.addEventListener('click', e =>{
        
        if (!acceptingAnswers) return;
        acceptingAnswers = false

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === 'correct'){
            incrementScore(CURRENT_BONUS)
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000 );

        // console.log(classToAPply)

    })
})
        
incrementScore = num =>{
    score = score + num;
    scoreText.innerHTML = score;
}


startGame();