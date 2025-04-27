document.addEventListener('DOMContentLoaded', () => {
  const testimonials = [
    {
      content: "Flow Sense ha revolucionado la forma en que gestionamos nuestro tiempo. La integración de IA y sensores IoT nos ha permitido optimizar nuestros procesos y aumentar la productividad de manera significativa.",
      author: "María González",
      role: "Gerente de Operaciones, TechCorp",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      content: "Como consultora independiente, Flow Sense me ha permitido organizar mejor mi tiempo y aumentar mi facturación. La aplicación móvil es especialmente útil cuando estoy fuera de la oficina.",
      author: "Ana Gómez",
      role: "Consultora de Marketing Digital",
      rating: 5,
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      content: "La integración con asistentes de voz y la automatización de tareas han revolucionado nuestra forma de trabajar. El soporte técnico es excepcional.",
      author: "Carlos Ruiz",
      role: "Director de Operaciones",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    }
  ];

  const slider = document.querySelector('.testimonials-slider');
  const dotsContainer = document.querySelector('.testimonial-dots');
  let currentSlide = 0;

  testimonials.forEach((testimonial, index) => {
    const card = createTestimonialCard(testimonial);
    slider.appendChild(card);

    const dot = document.createElement('button');
    dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    const rating = document.createElement('div');
    rating.className = 'testimonial-rating';
    for (let i = 0; i < testimonial.rating; i++) {
      const star = document.createElement('img');
      star.src = 'https://api.iconify.design/mdi:star.svg';
      star.alt = 'Star';
      rating.appendChild(star);
    }

    const content = document.createElement('p');
    content.className = 'testimonial-content';
    content.textContent = testimonial.content;

    const author = document.createElement('div');
    author.className = 'testimonial-author';
    
    const avatar = document.createElement('div');
    avatar.className = 'testimonial-avatar';
    const avatarImg = document.createElement('img');
    avatarImg.src = testimonial.avatar;
    avatarImg.alt = testimonial.author;
    avatar.appendChild(avatarImg);

    const info = document.createElement('div');
    info.className = 'testimonial-info';
    
    const name = document.createElement('div');
    name.className = 'testimonial-name';
    name.textContent = testimonial.author;

    const role = document.createElement('div');
    role.className = 'testimonial-role';
    role.textContent = testimonial.role;

    info.appendChild(name);
    info.appendChild(role);
    author.appendChild(avatar);
    author.appendChild(info);

    card.appendChild(rating);
    card.appendChild(content);
    card.appendChild(author);

    return card;
  }

  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % testimonials.length;
    updateSlider();
  });

  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
  }

  function updateSlider() {
    const offset = currentSlide * slider.offsetWidth;
    slider.style.transform = `translateX(-${offset}px)`;
    
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonials.length;
    updateSlider();
  }, 5000);

  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        currentSlide = (currentSlide + 1) % testimonials.length;
      } else {
        currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
      }
      updateSlider();
    }
  }

  updateSlider();
});