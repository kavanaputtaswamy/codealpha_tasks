let cards = [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language.",
    },
    {
        question: "What is CSS?",
        answer: "CSS is used to style and design web pages.",
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript adds interactivity and dynamic behavior to websites.",
    },
    {
        question: "What is GitHub?",
        answer: "GitHub is a platform used to store and collaborate on code.",
    },
    {
        question: "What is an API?",
        answer: "API stands for Application Programming Interface.",
    }
];

let currentIndex = 0;
let editingIndex = null;

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const cardLabel = document.getElementById("cardLabel");

const cardNumber = document.getElementById("cardNumber");
const progress = document.getElementById("progress");

const showAnswerBtn = document.getElementById("showAnswerBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const addBtn = document.getElementById("addBtn");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");

const formArea = document.getElementById("formArea");
const questionInput = document.getElementById("questionInput");
const answerInput = document.getElementById("answerInput");

const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");


function displayCard() {

    if (cards.length === 0) {
        question.textContent = "No flashcards available";
        answer.textContent = "";
        cardNumber.textContent = "Card 0 of 0";
        progress.style.width = "0%";
        return;
    }

    const card = cards[currentIndex];

    question.textContent = card.question;
    answer.textContent = card.answer;

    answer.classList.add("hidden");

    cardLabel.textContent = "QUESTION";
    showAnswerBtn.textContent = "👀 Show Answer";

    cardNumber.textContent =
        `Card ${currentIndex + 1} of ${cards.length}`;

    const percentage =
        ((currentIndex + 1) / cards.length) * 100;

    progress.style.width = `${percentage}%`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === cards.length - 1;
}


showAnswerBtn.addEventListener("click", () => {

    if (answer.classList.contains("hidden")) {

        answer.classList.remove("hidden");

        cardLabel.textContent = "ANSWER";
        showAnswerBtn.textContent = "🙈 Hide Answer";

    } else {

        answer.classList.add("hidden");

        cardLabel.textContent = "QUESTION";
        showAnswerBtn.textContent = "👀 Show Answer";
    }
});


nextBtn.addEventListener("click", () => {

    if (currentIndex < cards.length - 1) {
        currentIndex++;
        displayCard();
    }
});


prevBtn.addEventListener("click", () => {

    if (currentIndex > 0) {
        currentIndex--;
        displayCard();
    }
});


addBtn.addEventListener("click", () => {

    editingIndex = null;

    questionInput.value = "";
    answerInput.value = "";

    formArea.classList.remove("hidden");

    questionInput.focus();
});


editBtn.addEventListener("click", () => {

    if (cards.length === 0) return;

    editingIndex = currentIndex;

    questionInput.value = cards[currentIndex].question;
    answerInput.value = cards[currentIndex].answer;

    formArea.classList.remove("hidden");

    questionInput.focus();
});


saveBtn.addEventListener("click", () => {

    const newQuestion = questionInput.value.trim();
    const newAnswer = answerInput.value.trim();

    if (newQuestion === "" || newAnswer === "") {

        alert("Please enter both question and answer.");
        return;
    }

    if (editingIndex === null) {

        cards.push({
            question: newQuestion,
            answer: newAnswer
        });

        currentIndex = cards.length - 1;

    } else {

        cards[editingIndex] = {
            question: newQuestion,
            answer: newAnswer
        };

        currentIndex = editingIndex;
    }

    formArea.classList.add("hidden");

    displayCard();
});


cancelBtn.addEventListener("click", () => {

    formArea.classList.add("hidden");
});


deleteBtn.addEventListener("click", () => {

    if (cards.length === 0) return;

    const confirmDelete =
        confirm("Are you sure you want to delete this flashcard?");

    if (!confirmDelete) return;

    cards.splice(currentIndex, 1);

    if (currentIndex >= cards.length) {
        currentIndex = cards.length - 1;
    }

    displayCard();
});


displayCard();
