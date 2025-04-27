document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }, 100);
    }
  }

  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      updateThemeIcon(true);
    }

    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      updateThemeIcon(isDark);
    });
  }

  function updateThemeIcon(isDark) {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.innerHTML = isDark 
        ? '<img src="https://api.iconify.design/mdi:weather-sunny.svg" alt="Light mode">'
        : '<img src="https://api.iconify.design/mdi:weather-night.svg" alt="Dark mode">';
    }
  }
  
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {

      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      

      btn.classList.add('active');
      

      const tabId = btn.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
          
          history.pushState(null, null, targetId);
        }
      }
    });
  });
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const animatedElements = document.querySelectorAll('.feature-card, .benefit-card, .pricing-card, .tech-card');
  animatedElements.forEach(el => {
    el.classList.add('reveal-animation');
    observer.observe(el);
  });
});