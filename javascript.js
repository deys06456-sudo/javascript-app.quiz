class QuizeQuestion {
    constructor (Question , Option , answer) {
        this.Question = Question;
        this.Option = Option;
        this.answer = answer;
    }
    checkAnswer (selectedAnswer) {
        return selectedAnswer === this.answer;
    }
}

// Object made :- [Question & Answer]

const Firstquestion = new QuizeQuestion (
    "What is JavaScript ?",
    ["Scripting Language","Database","Operating System","Browser"],
    "Scripting Language"
);

const Secondquestion = new QuizeQuestion (
    "What is Fanction ?",
    [ "A block of reusable code","A database","An operating system","A browser"],
    "A block of reusable code"
);

const Thirdquestion = new QuizeQuestion (
    "What is object in JavaScript ?",
    [ "A collection of key-value pairs","A loop","A condition","A function only"],
    "A collection of key-value pairs"
);


//Objects within an array :-

const questions = [ Firstquestion, Secondquestion, Thirdquestion ];
let currentQuestion = 0;
let score = 0;

// DOM Elements :- 

const questionElement = 
        document.getElementById("question");

const options = 
        document.querySelectorAll(".option");

const nextBtn = 
        document.getElementById("nextBtn");

const result = 
        document.getElementById("result");


function showQuestion () {
    let current = questions [currentQuestion];

    questionElement.innerText = current.Question;

    options.forEach ((button, index) => {
    button.innerText = current.Option[index];

        // color remove :-
        
        button.style.backgroundColor = "";
        button.style.color = "";

    button.onclick = function () {
        let selectedAnswer = button.innerText;

            if (current.checkAnswer(selectedAnswer)) {

                score++;

                button.style.backgroundColor = "green";
                button.style.color = "white";

                alert("Correct Answer!");
            } else {

                button.style.backgroundColor = "red";
                button.style.color = "white";

                alert ("Wrong Answer!");
            }            
        };
    });    
}


// Next Button

nextBtn.onclick = function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        questionElement.innerText = "Quiz Completed!";

        options.forEach(button => {
            button.style.display = "none";

        });

        nextBtn.style.display = "none";

        result.innerText =
            "Your Score: " + score + "/" + questions.length;
    }
};


// First Question Show

showQuestion();




