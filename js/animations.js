document.addEventListener('DOMContentLoaded', () => {
  function animateGridItems(selector, delay = 100) {
    const items = document.querySelectorAll(selector);
    
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * delay}ms`;
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 100 + (index * delay));
    });
  }
  
  setTimeout(() => {
    animateGridItems('.feature-card', 100);
    animateGridItems('.benefit-card', 100);
    animateGridItems('.pricing-card', 150);
  }, 300);
  
  const cards = document.querySelectorAll('.feature-card, .benefit-card, .pricing-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
  
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'all 0.2s ease';
      if (btn.classList.contains('btn-arrow')) {
        const arrow = btn.querySelector('::after');
        if (arrow) {
          arrow.style.transform = 'translateX(5px)';
        }
      }
    });
    
    btn.addEventListener('mouseleave', () => {
      if (btn.classList.contains('btn-arrow')) {
        const arrow = btn.querySelector('::after');
        if (arrow) {
          arrow.style.transform = '';
        }
      }
    });
  });
  
  const heroImage = document.querySelector('.hero-image img');
  
  if (heroImage) {
    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX / innerWidth) * 10 - 5;
      const moveY = (clientY / innerHeight) * 10 - 5;
      
      heroImage.style.transform = `perspective(1000px) rotateY(${-moveX}deg) rotateX(${moveY}deg)`;
    });
    
    document.addEventListener('mouseleave', () => {
      heroImage.style.transform = '';
    });
  }
});