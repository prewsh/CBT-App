const question = document.getElementById('questions');
const choices = Array.from ( document.getElementsByClassName("choice-text"));




let currentQuestion = {}
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions =[ 
    {
        question: "What is the capital of Nigeria",
        choice1: "Abuja",
        choice2: "Abia",
        choice3: "Enugu",
        choice4: "Lagos",
        answer: "1",
    },
    {
        question: "What is the capital of Plataeu",
        choice1: "Abuja",
        choice2: "Abia",
        choice3: "Enugu",
        choice4: "Jos",
        answer: "4",
    },
    {
        question: "What is the capital of Anambra",
        choice1: "Abuja",
        choice2: "Abia",
        choice3: "Awka",
        choice4: "Lagos",
        answer: "3",
    },
    {
        question: "What is the capital of Ogun",
        choice1: "Abeaokuta",
        choice2: "Abia",
        choice3: "Enugu",
        choice4: "Lagos",
        answer: "1",
    }

]

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
        return window.location.assign("./end.html");
    }
    questionCounter ++;
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

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000 );

        // console.log(classToAPply)

    })
})
        



startGame();