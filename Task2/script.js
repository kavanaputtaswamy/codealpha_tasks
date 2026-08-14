const quotes = [
    {
        text: "Success is the sum of small efforts repeated every day.",
        author: "Robert Collier",
        category: "Success"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        category: "Motivation"
    },
    {
        text: "The beautiful thing about learning is that nobody can take it away from you.",
        author: "B.B. King",
        category: "Study"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi",
        category: "Life"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan",
        category: "Dreams"
    },
    {
        text: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh",
        category: "Success"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
        category: "Motivation"
    },
    {
        text: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci",
        category: "Study"
    }
];

let currentQuote;
let viewedCount = 0;
let favorites = [];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const category = document.getElementById("category");

const newQuoteBtn = document.getElementById("newQuoteBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

const counter = document.getElementById("counter");
const favoriteCount = document.getElementById("favoriteCount");

const themeBtn = document.getElementById("themeBtn");
const toast = document.getElementById("toast");
const quoteCard = document.getElementById("quoteCard");


function showRandomQuote() {

    let newQuote;

    do {
        newQuote =
            quotes[Math.floor(Math.random() * quotes.length)];
    } while (
        quotes.length > 1 &&
        newQuote === currentQuote
    );

    currentQuote = newQuote;

    quote.textContent = currentQuote.text;
    author.textContent = `— ${currentQuote.author}`;
    category.textContent = `✨ ${currentQuote.category}`;

    viewedCount++;
    counter.textContent = viewedCount;

    favoriteBtn.textContent = "♡";
    favoriteBtn.classList.remove("active");

    quoteCard.style.transform = "scale(0.97)";

    setTimeout(() => {
        quoteCard.style.transform = "";
    }, 150);

    showToast("✨ New quote loaded!");
}


function copyQuote() {

    if (!currentQuote) return;

    const text =
        `"${currentQuote.text}" — ${currentQuote.author}`;

    navigator.clipboard.writeText(text)
        .then(() => {
            showToast("📋 Quote copied!");
        })
        .catch(() => {
            showToast("Copy failed. Try again.");
        });
}


function shareQuote() {
    if (!currentQuote) return;

    const text = `"${currentQuote.text}" — ${currentQuote.author}`;

    if (navigator.share) {
        navigator.share({
            title: "QuoteVerse ✨",
            text: text
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(text)
            .then(() => {
                showToast("📤 Quote copied! You can share it now.");
            })
            .catch(() => {
                showToast("Please copy the quote manually.");
            });
    }
}


function favoriteQuote() {

    if (!currentQuote) return;

    const index = favorites.findIndex(
        item => item.text === currentQuote.text
    );

    if (index === -1) {

        favorites.push(currentQuote);

        favoriteBtn.textContent = "♥";
        favoriteBtn.classList.add("active");

        showToast("❤️ Added to favorites!");

    } else {

        favorites.splice(index, 1);

        favoriteBtn.textContent = "♡";
        favoriteBtn.classList.remove("active");

        showToast("💔 Removed from favorites!");
    }

    favoriteCount.textContent = favorites.length;
}


function toggleTheme() {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.textContent = "☀️";
        showToast("☀️ Light mode");

    } else {

        themeBtn.textContent = "🌙";
        showToast("🌙 Dark mode");
    }
}


function showToast(message) {

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}


newQuoteBtn.addEventListener("click", showRandomQuote);
copyBtn.addEventListener("click", copyQuote);
shareBtn.addEventListener("click", shareQuote);
favoriteBtn.addEventListener("click", favoriteQuote);
themeBtn.addEventListener("click", toggleTheme);


// Random quote when app opens
showRandomQuote();
