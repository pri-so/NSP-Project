const quizData = [
    {
        question: "When was the Bitcoin software first released??",
        a: "2002",
        b: "2009",
        c: "2012",
        d: "2001",
        correct: "b",
    },
    {
        question: "Who ran the Silk Road??",
        a: "Ross Ulbricht",
        b: "Mark Karpeles",
        c: "Ron Jeremy",
        d: "Mike Tyson",
        correct: "a",
    },
    {
        question: "What is Cryptography?",
        a: "A way of sending information securely over an insecure environment",
        b: "A way of sending information to multiple people at the same time",
        c: "Charting the number of transactions per second on the Bitcoin network",
        d: "Using the Crypt Protocol to analyse the security of the Bitcoin Network",
        correct: "a",
    },
    {
        question: "What technology is Bitcoin built on?",
        a: "The famous Volkswagon Eco engine",
        b: "Javascript",
        c: "Telepathy",
        d: "The Blockchain",
        correct: "d",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})