//will be using const and getElementbyID to select all elements
//const behave like variables, except they cannot be reassigned
//getElementbyID method returns the element that has the ID attribute with the specified value
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGuage");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreDiv");

//create the questions with arrays
//inside the arrays every element will be an object
//objects will have the same properties
var questions = [
    {
        question: "What does HTML stand for?",
        imgSrc: "./assets/images/html.jpg",
        choiceA: "Hyper Text Markup Language",
        choiceB: "Hyperlinnks and Text Markup Languages",
        choiceC: "Home Tool Markup Language",
        correct: "A"
    },{
        question: "What does CSS stand for?",
        imgSrc: "./assets/images/css.jpg",
        choiceA: "Cascading Source Sheets",
        choiceB: "Cascading Style Sheets",
        choiceC: "Color Style Sheets",
        correct: "B"
    },{
        question: "What does JS stand for?",
        imgSrc: "./assets/images/js.png",
        choiceA: "JavaScreen",
        choiceB: "Javascript",
        choiceC: "Java",
        correct: "B"
    }
];

//created variables
//length property returns the length of a string (number of characters)
//this will show the questions of four and we are minusing one to show the array of 3
const lastQuestion = question.length - 1;

//this is the question the user is answering
var runningQuestion = 0;
var count = 0;

//ten seconds to answer each questions
const questionTime =10;

//measure gauge in px
const guageWidth = 150;

//time of question
const guageUnit = guageWidth / questionTime;

//timer
var TIMER;
var score = 0;

//render a question

function renderQuestion(){
    //q for question
    var q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

//
start.addEventListener("click", startQuiz);

//start the quiz

function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    //1000ms = 1s
    TIMER = setInterval(renderCounter, 1000);

}


//render progress to show the progress bar during the quiz
//will be a for loop will start at 0 and end at lasQuestionIndex
function renderProgress() {
    for(var qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML+= "div class='prog' id=" + qIndex + "></div>";
    }
}

//counter render


