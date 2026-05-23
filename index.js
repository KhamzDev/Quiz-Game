const answers = [
    {
        question: "Which is the biggest animal ?",
        answer: [
            {name: "Giraffe", correct: false},
            {name: "Elephant", correct: false},
            {name: "Whale", correct: true},
            {name: "Rhinoceraus", correct: false}
        ]
    },
    {
        question: "Which is the smallest animal ?",
        answer: [
            {name: "Mice", correct: false},
            {name: "Bacteria", correct: true},
            {name: "Rat", correct: false},
            {name: "Bird", correct: false}
        ]
    },
    {
        question: "What's 2+2",
        answer: [
            {name: "2", correct: false},
            {name: "4", correct: true},
            {name: "1", correct: false},
            {name: "5", correct: false}
        ]
    }
]
const qDisplay = document.getElementById('question');
const answersDisplay = document.getElementById('answers-display');
const nextBtn = document.getElementById('nextBtn');
nextBtn.classList.add('nextBtn');
nextBtn.innerHTML = "Next",
nextBtn.style.display = "none";
let currentAnswer = 0;
let score = 0;

function showAnswers(){
    if(currentAnswer >= answers.length){
        qDisplay.innerHTML = `You scored ${score} out of ${answers.length}`
        nextBtn.innerHTML = "Replay";
        nextBtn.style.display = "block";
        return;
    }
    let currentIndex = answers[currentAnswer];
    qDisplay.innerHTML = currentIndex.question;
    answers[currentAnswer].answer.forEach(a =>{
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = a.name;
        if(a.correct){
            button.dataset.correct = "true";
        }
        answersDisplay.appendChild(button);
        
        button.addEventListener('click', () => {
            if(a.correct){
                button.style.background = "lightgreen";
                score++;
            }else{
                button.style.background = "tomato";
            }
        Array.from(answersDisplay.children).forEach(btn => {
            
            if(btn.dataset.correct === "true"){
                btn.style.background = "lightgreen";
            };
            
            btn.disabled = true;
            
            
        });
        nextBtn.style.display = "block";
        })
        
    })
}
nextBtn.addEventListener('click', () => {
    if(nextBtn.innerHTML === "Replay"){
        reset();
        showAnswers();
        return
    }
    answersDisplay.innerHTML = "";
    nextBtn.style.display = "none"
    currentAnswer++;
    
    showAnswers();
});
function reset(){
    currentAnswer = 0;
    score = 0
    qDisplay.innerHTML = "";
    answersDisplay.innerHTML = "";
    nextBtn.innerHTML = "Next";
    nextBtn.style.display = "none";
}
showAnswers();

