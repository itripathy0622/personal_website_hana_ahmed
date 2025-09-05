// Smooth reveal on scroll
const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible'));
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  
  // Smooth anchor scrolling with offset for top strip
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - 56;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
  
  // Contact buttons (custom actions)
  const EMAIL = 'hanahmed@umich.edu';
  const LINKEDIN = 'https://www.linkedin.com/in/hanahmed/';
  
  document.getElementById('btnEmail')?.addEventListener('click', () => {
    window.location.href = `mailto:${EMAIL}`;
  });
  
  document.getElementById('btnLinkedIn')?.addEventListener('click', () => {
    window.open(LINKEDIN, '_blank', 'noopener');
  });
  