
// const quetionList = [
    // {
        // question: "A flashing red traffic light signifies that a driver should do what?",
        // A: "stop",
        // B: "speed up",
        C: "proceed with caution",
        D: "honk the horn",
        answer: "A"
    },
    {
        question: "A knish is traditionally stuffed with what filling?",
        A: "potato",
        B: "creamed corn",
        C: "lemon custard",
        D: "raspberry jelly",
        answer: "A"
    },
    {
        question: "A pita is a type of what?",
        A: "fresh fruit",
        B: "flat bread",
        C: "French tart",
        D: "friend bean dip",
        answer: "B"
    },
    {
        question: "A portrait that comically exaggerates a person's physical traits is called a what?",
        A: "landscape",
        B: "caricature",
        C: "still life",
        D: "Impressionism",
        answer: "B"
    },
    {
        question: "A second-year college student is usually called a what?",
        A: "sophomore",
        B: "senior",
        C: "freshman",
        D: "junior",
        answer: "A"
    },
    {
        question: "A student who earns a J.D. can begin his or her career as a what?",
        A: "lawyer",
        B: "bricklayer",
        C: "doctor",
        D: "accountant",
        answer: "A"
    },
    {
        question: "A triptych is a work of art that is painted on how many panels?",
        A: "two",
        B: "three",
        C: "five",
        D: "eight",
        answer: "B"
    },
    {
        question: "According to a famous line from the play 'No Exit' what is hell?",
        A: "oneself",
        B: "other people",
        C: "little made large",
        D: "hued in green and blue",
        answer: "B"
    },
    {
        question: "According to a popular slogan, what state should people not 'mess with'?",
        A: "New York",
        B: "Texas",
        C: "Montana",
        D: "Rhode Island",
        answer: "B"
    },
    {
        question: "According to a Yale University study, what smell is the most recognizable?",
        A: "tuna",
        B: "laundry",
        C: "popcorn",
        D: "coffee",
        answer: "D"
    }
];


const curr_index = document.getElementById("index");
const question = document.getElementById("question");
const optionA = document.getElementById("a");
const optionB = document.getElementById("b");
const optionC = document.getElementById("c");
const optionD = document.getElementById("d");
const btn_submite = document.getElementById("submite");
const timer = document.getElementById("timer");

const clickA = document.getElementById("option-a");
const clickB = document.getElementById("option-b");
const clickC = document.getElementById("option-c");
const clickD = document.getElementById("option-d");

const result = document.getElementById("result")

// result.textContent = "dehuhyeu"


let index = 0;
let count = 0;
let timerInterval;
let score = 0;
let ansList = [];



function display_question() {
    question.textContent = quetionList[index].question;
    optionA.textContent = quetionList[index].A;
    optionB.textContent = quetionList[index].B;
    optionC.textContent = quetionList[index].C;
    optionD.textContent = quetionList[index].D;

    curr_index.textContent = index + 1;
}

function refreshPage() {
    location.reload();
}


function nextQuestion() {

    scoreCounter();

    if (index < quetionList.length - 1) {
        index++;
        count = 0;
        display_question();
        console.log(score)
    } else {

        clearInterval(timerInterval);
        document.getElementById("container").style.display = "none";
        timer.textContent = "0";
        console.log("Final Score:", score);
        console.log("Final Score:", score);


        result.innerHTML = ` <h1>Quiz Completed 🎉</h1>
        <h3 > Score: ${score} / ${quetionList.length}</h3>
         <button class="btn btn-outline-primary"  onclick="refreshPage()">Restart</button>`;


    }
}



function startTimer() {
    clearInterval(timerInterval);
    count = 0;

    timerInterval = setInterval(() => {
        count++;
        timer.textContent = count;

        if (count >= 60) {
            nextQuestion();
        }
    }, 1000);
}



clickA.addEventListener("click", () => {
    ansList[index] = "A";
});

clickB.addEventListener("click", () => {
    ansList[index] = "B";
});

clickC.addEventListener("click", () => {
    ansList[index] = "C";
});

clickD.addEventListener("click", () => {
    ansList[index] = "D";
});



function scoreCounter() {
    if (ansList[index] === quetionList[index].answer) {
        score++;
    }
}



btn_submite.addEventListener("click", () => {
    nextQuestion();
});



display_question();
startTimer();
