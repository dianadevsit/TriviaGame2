//will be using const and getElementbyID to select all elements
//const behave like variables, except they cannot be reassigned
//getElementbyID method returns the element that has the ID attribute with the specified value
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

//create the questions with arrays
//inside the arrays every element will be an object
//objects will have the same properties
var questions = [
    {
        question: "What does HTML stand for?",
        imgSrc: "./assets/images/html.jpg",
        choiceA: "Hyper Text Markup Language",
        choiceB: "Hyperlinks and Text Markup Languages",
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
const gaugeWidth = 150;

//time of question
const gaugeUnit = gaugeWidth / questionTime;

//timer
var TIMER;
var score = 0;

//render a question

function renderQuestion(){
    //q for question
    var q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
//
start.addEventListener("click",startQuiz);

//start the quiz

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); 
    // 1000ms = 1s
}

    

//render progress to show the progress bar during the quiz
//will be a for loop will start at 0 and end at lasQuestionIndex
function renderProgress(){
    for(var qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

//counter render
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        //change the progress to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        } else {
            //will end the quiz and show the score here
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

//create function to check the answer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
//check is answer is correct will change the progress color to green
    score++;
    answerIsCorrect();
    } else {
 //if answer is wrong then the color will change to red
    answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    } else {
        //end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

//correct answers
function answerIsCorrect(){
    document.getElementById(runningQuestion);
}
//wrong answers

function answerIsWrong(){
    document.getElementById(runningQuestion);
}


//score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    var img = (scorePerCent >= 80) ? "./assets/images/5.png" :
              (scorePerCent >= 60) ? "./assets/images/4.png" :
              (scorePerCent >= 40) ? "./assets/images/3.png" :
              (scorePerCent >= 20) ? "./assets/images/2.png" :
              "./assets/images/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}






