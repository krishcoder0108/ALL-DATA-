const questions = [
    {
        question: "who is the papa of this world",
        answers: [{text :"krish coder" , correct : false},
            {text :"krish gunda" , correct : false},
            {text :"krish papa" , correct : true},
            {text :"krish bedmosh" , correct : false},
        ],
       
    },
    {
        question:"who is bedmosh of this world",
        answers: [{text :"krish coder" , correct : false},
            {text :"krish gunda" , correct : false},
            {text :"krish papa" , correct : false},
            {text :"krish bedmosh" , correct : true},
        ],
    }
];

const questionElement= document.getElementById("question");
const answerButton= document.getElementById("answerbutton");
const nextButton= document.getElementById("nxt-btn");

let currentQuestionIndex= 0;
let score= 0;



function startQuiz(){
 currentQuestionIndex= 0;
 score= 0;
 nextButton.innerHTML= "Next";
 
 showQuestion();
};



function showQuestion(){
    answerButton.innerHTML="";
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button= document.createElement("button");
    button.innerHTML= answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct= answer.correct;
    }
    button.addEventListener("click", selectAnswer);

    
});
};

startQuiz()







