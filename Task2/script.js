const quotes = [
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "Success is the sum of small efforts repeated day after day.",
        author: "Robert Collier"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "Do something today that your future self will thank you for.",
        author: "Unknown"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    quoteElement.textContent = `"${quotes[randomIndex].text}"`;
    authorElement.textContent = `— ${quotes[randomIndex].author}`;
}

newQuoteBtn.addEventListener("click", showRandomQuote);

showRandomQuote();
