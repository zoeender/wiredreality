// Highlights the current section's tab as you scroll.
// You shouldn't need to edit this file.

const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('main section[id]');

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tabs.forEach((tab) => {
            tab.classList.toggle('active', tab.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
