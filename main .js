const heroPage = document.getElementById("hero-page");
const wishPage = document.getElementById("wish-page");
const counterCard = document.getElementById("counter-card");
const viewGreetingBtn = document.getElementById("view-greeting-btn");
const music = document.getElementById("bgMusic");

viewGreetingBtn.addEventListener("click", () => {
  music.play().catch(console.error);
  music.volume = 0.1;
  showWishPage();
});

const targetDate = new Date("2025-12-17T00:00:00").getTime();
// const targetDate = new Date("2025-12-16T00:25:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timer);
    counterCard.style.display = "none";
    viewGreetingBtn.style.display = "block";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("mins").innerText = String(minutes).padStart(2, "0");
  document.getElementById("sec").innerText = String(seconds).padStart(2, "0");
}, 1000);

const showWishPage = () => {
  heroPage.style.display = "none";
  wishPage.style.display = "flex";
};

const texts = [
  "Every time I look at you, my heart forgets how to beat normally and chooses its own rhythm, one that exists only for you, your smile, your warmth, and the future I want to build together forever 💖✨🌹",

  "Loving you feels like finding home in a person, where every laugh, every silence, and every shared dream makes my world calmer, brighter, and more meaningful than I ever thought possible 💕🏡💫",

  "You are not just part of my life, you are the reason my days feel lighter, my nights feel safer, and my dreams feel closer, because loving you gives purpose to everything I do 💗🌙🌸",

  "In a world full of noise and rush, your presence slows time for me, reminding my heart that true love is gentle, patient, and powerful enough to turn ordinary moments into forever memories 💞⏳🌺",

  "If love were a journey, I would choose to walk every step with you, through smiles and storms, holding your hand, trusting our hearts, and believing that us together is always the right direction 💘🛤️🤝",
];

const el = document.getElementById("typewriter");
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 40; // typing speed
let holdTime = 10000; // pause after full text

function typeWriter() {
  if (charIndex < texts[textIndex].length) {
    el.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    setTimeout(eraseText, holdTime);
  }
}

function eraseText() {
  if (charIndex > 0) {
    el.textContent = el.textContent.slice(0, -1);
    charIndex--;
    setTimeout(eraseText, 20);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeWriter, 300);
  }
}

typeWriter();
