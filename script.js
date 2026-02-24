// ===== Typing Effect =====
const roles = [
  "Full Stack Developer",
  "Java Programmer",
  "AI Engineer",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent =
      roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();


// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll(".section, .card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "1s ease";
  observer.observe(el);
});


// ===== Navbar Shrink on Scroll =====
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.padding = "10px 8%";
  } else {
    header.style.padding = "18px 8%";
  }
});


// ===== Animated Counter =====
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 100;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();

  function toggleTheme() {
  document.body.classList.toggle("dark");
}
  const revealElements = document.querySelectorAll(".section, .card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "1s ease";
  observer.observe(el);
});

});

