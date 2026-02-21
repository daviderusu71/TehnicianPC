
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

setInterval(() => {
    testimonials[index].classList.remove("active");
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add("active");
}, 4000);

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

(function(){
emailjs.init("72l_NChKiKl2K3UXj");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(e) {
e.preventDefault();

emailjs.sendForm(
"service_l0ajtbi",
  "template_cbtd9bg",
this
).then(function() {
alert("Mesaj trimis cu succes!");
}, function(error) {
alert("Eroare. Încearcă din nou.");
});
});