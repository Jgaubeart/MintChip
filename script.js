const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

const nav = document.querySelector('.nav');
if (nav) {
  const updateNav = () => {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  };
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
}

document.querySelectorAll('.tab').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.showcase-panel').forEach((p) => p.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.target);
    if (target) target.classList.add('active');
  });
});

const form = document.querySelector('#lead-form');
const formNote = document.querySelector('#form-note');

if (form && formNote) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const steps = document.querySelector('.form-steps');
    if (steps) steps.hidden = true;
    form.hidden = true;
    formNote.hidden = false;
  });
}
