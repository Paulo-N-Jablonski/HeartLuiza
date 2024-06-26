let isDarkTheme = true;

function toggleTheme() {
  const heart = document.querySelector(".heart");
  const squares = document.querySelectorAll(".square");
  const circles = document.querySelectorAll(".circle");

  if (isDarkTheme) {
    // Change to light theme with pink background and blue heart
    document.body.style.backgroundColor = "#FFC0CB"; // Light pink background
    document.body.style.color = "#121212"; // Dark text color

    heart.style.backgroundColor = "#0000FF"; // Blue color
    squares.forEach((square) => (square.style.backgroundColor = "#0000FF"));
    circles.forEach((circle) => (circle.style.backgroundColor = "#0000FF"));
  } else {
    // Change back to dark theme with dark background and purple heart
    document.body.style.backgroundColor = "#121212"; // Dark background
    document.body.style.color = "#ffffff"; // Light text color

    heart.style.backgroundColor = "#800080"; // Purple color
    squares.forEach((square) => (square.style.backgroundColor = "#800080"));
    circles.forEach((circle) => (circle.style.backgroundColor = "#800080"));
  }

  // Toggle the theme state
  isDarkTheme = !isDarkTheme;

  // Show floating love messages
  showLoveMessage();
}

function showLoveMessage() {
  const messages = [
    "Eu te amo Luiza!",
    "Você é meu tudo!",
    "Para sempre juntos!",
    "Você ilumina minha vida!",
    "Amor eterno!",
    "Você é a luz do meu dia",
    "Meu coração sorri só de pensar em você",
    "Nosso amor é minha inspiração diária",
    "Você é a melhor parte dos meus dias",
    "Com você, o mundo parece mais bonito",
    "Seu sorriso é minha felicidade",
    "Cada momento ao seu lado é um presente",
    "Você é o meu abraço preferido",
    "Juntos, nosso amor só cresce",
    "Sua presença é meu lugar seguro",
    "Você é a razão do meu sorriso",
    "Nosso amor é a música que embala minha vida",
    "Com você, até as segundas-feiras são especiais",
    "Cada dia é uma nova aventura ao seu lado",
    "Meu amor por você só aumenta a cada batida do meu coração",
  ];

  const messageContainer = document.getElementById("message-container");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.textContent =
    messages[Math.floor(Math.random() * messages.length)];

  // Set random left position
  const randomLeft = Math.floor(Math.random() * 100);
  messageElement.style.left = `${randomLeft}%`;

  messageContainer.appendChild(messageElement);

  // Remove the message element after animation completes
  messageElement.addEventListener("animationend", () => {
    messageElement.remove();
  });
}
