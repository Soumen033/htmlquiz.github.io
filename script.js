const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hypertext Machine language.",
        b: "Hypertext and links markup language.",
        c: "Hypertext Markup Language.",
        d: "Hightext machine language. ",
        correct: "c",
    },
    {
        question: "Which of the following HTML Elements is used for making any text bold ? ",
        a: "<p>",
        b: "<i>",
        c: "<li>",
        d: "<b>",
        correct: "d",
    },
    {
        question: "Which of the following HTML element is used for creating an unordered list? ",
        a: "<ui>",
        b: "<i>",
        c: "<em>",
        d: "<ul>",
        correct: "d",
    },
    {
        question: "Which of the following characters indicate closing of a tag? ",
        a: ".",
        b: "/",
        c: "\\",
        d: "!",
        correct: "b",
    },
    {
        question: "Which of the following attributes is used to add link to any element?  ",
        a: "link",
        b: "ref",
        c: "href",
        d: "newref",
        correct: "c",
    },
    {
        question: "What is the purpose of using div tags in HTML? ",
        a: "For creating Different styles.",
        b: "For creating different sections",
        c: "For adding headings.",
        d: "For adding titles.",
        correct: "b",
    },
    {
        question: " Which of the tag is used to creates a number list?" ,
        a: "<LI>",
        b: "<OL>",
        c: "<LI> AND <OL>",
        d: "NONE OF THESE",
        correct: "c",
    },
    {
        question: "What is the font-size of the h1 heading tag? ",
        a: "3.5em",
        b: "2.17em",
        c: "2em",
        d: "1.5em",
        correct: "c",
    },
    {
        question: "Which of the following tags is used to make a portion of text italic in HTML?",
        a: "<italic>",
        b: "<style= “i”>",
        c: "<i>",
        d: "<style=“italic”>",
        correct: "c",
    },
    {
        question: "The tag which allows you to rest other HTML tags within the description is ",
        a: "<TH>",
        b: "<TD>",
        c: "<TR>",
        d: "<CAPTION>",
        correct: "d",
    },


];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});