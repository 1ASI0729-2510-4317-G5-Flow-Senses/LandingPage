document.addEventListener('DOMContentLoaded', () => {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  const body = document.body;
  
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);
  
  function toggleMenu() {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('menu-open');
  }
  
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', toggleMenu);
    
    overlay.addEventListener('click', toggleMenu);
    
    const navLinks = document.querySelectorAll('.navbar-links a, .navbar-actions a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarMenu.classList.contains('active')) {
          toggleMenu();
        }
      });
    });
    
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 1024 && navbarMenu.classList.contains('active')) {
          toggleMenu();
        }
      }, 250);
    });
  }
  
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
      
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }
});