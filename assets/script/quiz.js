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
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        correct: "A"
    },{
        question: "What does CSS stand for?",
        imgSrc: "./assets/images/css.jpg",
        choiceA: "Wrong",
        choiceB: "Correct",
        choiceC: "Wrong",
        correct: "B"
    },{
        question: "What does JS stand for?",
        imgSrc: "./assets/images/js.png",
        choiceA: "Wrong",
        choiceB: "Correct",
        choiceC: "Wrong",
        correct: "B"
    }
];

//created variables
