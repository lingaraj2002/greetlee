const targetDate = new Date("2025-12-17T00:00:00").getTime();
// const targetDate = new Date("2025-12-02T00:16:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timer);
    showHomePage();
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

const heroPage = document.getElementById("hero-page");
const homePage = document.getElementById("home-page");

const showHomePage = () => {
  heroPage.style.display = "none";
  homePage.style.display = "flex";
};
