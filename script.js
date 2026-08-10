let flashcards = [
    {
        question: "What is HTML?",
        answer: "HTML is used to create the structure of web pages."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used to style and design web pages."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript is used to add functionality and interactivity to web pages."
    }
];

let currentIndex = 0;

// Get HTML elements
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");

const showAnswerBtn = document.getElementById("showAnswerBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const addBtn = document.getElementById("addBtn");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");

// Display current flashcard
function displayCard() {
    questionElement.textContent = flashcards[currentIndex].question;
    answerElement.textContent = flashcards[currentIndex].answer;

    answerElement.classList.add("hidden");
}

// Show answer
showAnswerBtn.addEventListener("click", function () {
    answerElement.classList.toggle("hidden");
});

// Next card
nextBtn.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex >= flashcards.length) {
        currentIndex = 0;
    }

    displayCard();
});

// Previous card
prevBtn.addEventListener("click", function () {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = flashcards.length - 1;
    }

    displayCard();
});

// Add new flashcard
addBtn.addEventListener("click", function () {
    const question = prompt("Enter your question:");
    const answer = prompt("Enter the answer:");

    if (question && answer) {
        flashcards.push({
            question: question,
            answer: answer
        });

        currentIndex = flashcards.length - 1;
        displayCard();
    }
});

// Edit current flashcard
editBtn.addEventListener("click", function () {
    const question = prompt(
        "Edit question:",
        flashcards[currentIndex].question
    );

    const answer = prompt(
        "Edit answer:",
        flashcards[currentIndex].answer
    );

    if (question && answer) {
        flashcards[currentIndex].question = question;
        flashcards[currentIndex].answer = answer;

        displayCard();
    }
});

// Delete current flashcard
deleteBtn.addEventListener("click", function () {
    if (flashcards.length === 1) {
        alert("At least one flashcard is required.");
        return;
    }

    flashcards.splice(currentIndex, 1);

    if (currentIndex >= flashcards.length) {
        currentIndex = flashcards.length - 1;
    }

    displayCard();
});

// Display first card when app starts
displayCard();