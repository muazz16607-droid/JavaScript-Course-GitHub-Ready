const roleText = document.getElementById("roleText");
const roleList = [
  "Frontend Interfaces",
  "Responsive Websites",
  "JavaScript Projects",
  "Animated UI Experiences"
];

let roleIndex = 0;
setInterval(() => {
  roleIndex = (roleIndex + 1) % roleList.length;
  roleText.style.opacity = "0";
  setTimeout(() => {
    roleText.textContent = roleList[roleIndex];
    roleText.style.opacity = "1";
  }, 160);
}, 2200);

document.getElementById("year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const statNumbers = document.querySelectorAll("[data-counter]");
const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const target = Number(entry.target.getAttribute("data-counter"));
      const duration = 1300;
      const startTime = performance.now();

      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        entry.target.textContent = Math.floor(progress * target);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.35 }
);

statNumbers.forEach((stat) => counterObserver.observe(stat));

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const selected = button.dataset.filter;
    projectCards.forEach((card) => {
      const tags = card.dataset.tags || "";
      const visible = selected === "all" || tags.includes(selected);
      card.classList.toggle("is-hidden", !visible);
    });
  });
});

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
menuToggle.addEventListener("click", () => {
  siteNav.classList.toggle("open");
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => siteNav.classList.remove("open"));
});

const progressBar = document.getElementById("scrollProgress");
const updateScrollProgress = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
};

document.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();
