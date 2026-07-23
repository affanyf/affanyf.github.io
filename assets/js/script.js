document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.about-grid, .entry, .tier, .project-card, .testimonial-card'
  );
  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));
});
