document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    en: {

      'title': 'Flow Sense - Intelligent Time Management',
      
      'nav.brand': 'Flow Sense',
      'nav.features': 'Features',
      'nav.benefits': 'Benefits',
      'nav.technology': 'Technology',
      'nav.plans': 'Plans',
      'nav.login': 'Log in',
      'nav.trial': 'Free trial',
      
      'hero.label': 'Innovation in productivity',
      'hero.title': 'Transform your time management with Flow Sense',
      'hero.description': 'Smart productivity solutions for businesses and freelancers with IoT and AI technology.',
      'hero.cta.start': 'Get started now',
      'hero.cta.demo': 'Request a demo',
      
      'features.label': 'Tailored solutions',
      'features.title': 'One platform, multiple solutions',
      'features.description': 'Flow Sense adapts to the specific needs of companies and independent professionals.',
      'features.tabs.business': 'For Companies',
      'features.tabs.freelancer': 'For Freelancers',
      
      'features.business.card1.title': 'Real-time monitoring',
      'features.business.card1.description': 'Monitor personnel and work environment with accurate data for decision making.',
      'features.business.card2.title': 'Shift management',
      'features.business.card2.description': 'Efficient automation of shifts and schedules adapted to your team\'s needs.',
      'features.business.card3.title': 'Productivity analysis',
      'features.business.card3.description': 'Detailed metrics and data analysis to optimize processes and improve results.',
      'features.business.cta': 'Solutions for companies',
      
      'features.freelancer.card1.title': 'Automatic time tracking',
      'features.freelancer.card1.description': 'Automatically track time spent on each project without manual effort.',
      'features.freelancer.card2.title': 'Client management',
      'features.freelancer.card2.description': 'Organize your clients, projects, and tasks in one place effectively.',
      'features.freelancer.card3.title': 'Smart invoicing',
      'features.freelancer.card3.description': 'Generate automatic invoices based on recorded time and established rates.',
      'features.freelancer.cta': 'Solutions for freelancers',
      
      'benefits.label': 'Why choose us',
      'benefits.title': 'Benefits that transform your work',
      'benefits.description': 'Flow Sense combines advanced technology with intuitive design to improve your productivity.',
      'benefits.card1.title': 'Improved efficiency',
      'benefits.card1.description': 'Optimize processes and reduce time spent on administrative tasks.',
      'benefits.card2.title': 'Smart automation',
      'benefits.card2.description': 'Let AI handle repetitive tasks while you focus on what matters.',
      'benefits.card3.title': 'Access from anywhere',
      'benefits.card3.description': 'Manage your work from any device, at any time.',
      'benefits.card4.title': 'Enhanced collaboration',
      'benefits.card4.description': 'Facilitate communication and teamwork with collaborative tools.',
      'benefits.card5.title': 'Detailed analysis',
      'benefits.card5.description': 'Gain valuable insights into your productivity and areas for improvement.',
      'benefits.card6.title': 'Personalized assistance',
      'benefits.card6.description': 'Receive recommendations tailored to your work style and needs.',
      
      'tech.label': 'Advanced technology',
      'tech.title': 'Powered by emerging technologies',
      'tech.description': 'Flow Sense integrates the latest in technology to deliver an unprecedented experience.',
      'tech.card1.title': 'IoT Sensors',
      'tech.card1.description': 'Smart sensors that capture data from the work environment for real-time analysis.',
      'tech.card2.title': 'Artificial Intelligence',
      'tech.card2.description': 'Advanced algorithms that learn from your work patterns to offer personalized recommendations.',
      'tech.card3.title': 'Voice Assistants',
      'tech.card3.description': 'Integration with voice assistants for hands-free management of your tasks and projects.',
      
      'pricing.label': 'Plans',
      'pricing.title': 'Choose the plan that best suits you',
      'pricing.description': 'Flexible solutions for businesses of all sizes and independent professionals.',
      'pricing.popular': 'Popular',
      'pricing.currency': '$',
      'pricing.period': '/month',
      
      'pricing.freelancer.title': 'Freelancer',
      'pricing.freelancer.subtitle': 'Ideal for independent professionals',
      'pricing.freelancer.price': '69',
      'pricing.freelancer.feature1': 'Automatic time tracking',
      'pricing.freelancer.feature2': 'Management of up to 10 clients',
      'pricing.freelancer.feature3': 'Basic invoicing',
      'pricing.freelancer.feature4': 'Integration with 1 voice assistant',
      'pricing.freelancer.feature5': 'Email support',
      
      'pricing.business.title': 'Business',
      'pricing.business.subtitle': 'For small and medium businesses',
      'pricing.business.price': '179',
      'pricing.business.feature1': 'Everything in Freelancer',
      'pricing.business.feature2': 'Real-time monitoring',
      'pricing.business.feature3': 'Shift management',
      'pricing.business.feature4': 'Productivity analysis',
      'pricing.business.feature5': 'Up to 25 users',
      'pricing.business.feature6': 'Priority support',
      
      'pricing.enterprise.title': 'Enterprise',
      'pricing.enterprise.subtitle': 'Custom solutions for large companies',
      'pricing.enterprise.contact': 'Contact us',
      'pricing.enterprise.feature1': 'Everything in Business',
      'pricing.enterprise.feature2': 'Unlimited users',
      'pricing.enterprise.feature3': 'Custom API',
      'pricing.enterprise.feature4': 'Integration with existing systems',
      'pricing.enterprise.feature5': 'Custom IoT sensors',
      'pricing.enterprise.feature6': '24/7 support',
      'pricing.enterprise.feature7': 'Dedicated account manager',
      
      'pricing.cta.trial': 'Start free trial',
      'pricing.cta.contact': 'Contact sales',
      
      'testimonials.label': 'Testimonials',
      'testimonials.title': 'What our users say',
      'testimonials.description': 'Discover how Flow Sense has transformed the productivity of companies and professionals.',
      
      'cta.title': 'Transform your productivity today',
      'cta.description': 'Join thousands of companies and professionals who have already improved their efficiency with Flow Sense.',
      'cta.start': 'Get started now →',
      'cta.demo': 'Request a demo',
      
      'footer.brand': 'Flow Sense',
      'footer.terms': 'Terms',
      'footer.privacy': 'Privacy',
      'footer.contact': 'Contact',
      'footer.copyright': '© 2025 Flow Sense. All rights reserved.',
      'footer.lang.en': 'EN',
      'footer.lang.es': 'ES'
    },
    es: {

      'title': 'Flow Sense - Gestión inteligente del tiempo',
      
      'nav.brand': 'Flow Sense',
      'nav.features': 'Características',
      'nav.benefits': 'Beneficios',
      'nav.technology': 'Tecnología',
      'nav.plans': 'Planes',
      'nav.login': 'Iniciar sesión',
      'nav.trial': 'Prueba gratuita',
      
      'hero.label': 'Innovación en productividad',
      'hero.title': 'Transforma tu gestión del tiempo con Flow Sense',
      'hero.description': 'Soluciones inteligentes de productividad para empresas y freelancers con tecnología IoT e IA.',
      'hero.cta.start': 'Comenzar ahora',
      'hero.cta.demo': 'Solicitar demo',

      'features.label': 'Soluciones adaptadas',
      'features.title': 'Una plataforma, múltiples soluciones',
      'features.description': 'Flow Sense se adapta a las necesidades específicas de empresas y profesionales independientes.',
      'features.tabs.business': 'Para Empresas',
      'features.tabs.freelancer': 'Para Freelancers',
      
      'features.business.card1.title': 'Supervisión en tiempo real',
      'features.business.card1.description': 'Monitoreo del personal y entorno de trabajo con datos precisos para toma de decisiones.',
      'features.business.card2.title': 'Gestión de turnos',
      'features.business.card2.description': 'Automatización eficiente de turnos y horarios adaptados a las necesidades de tu equipo.',
      'features.business.card3.title': 'Análisis de productividad',
      'features.business.card3.description': 'Métricas detalladas y análisis de datos para optimizar procesos y mejorar resultados.',
      'features.business.cta': 'Soluciones para empresas',
      
      'features.freelancer.card1.title': 'Registro automático de horas',
      'features.freelancer.card1.description': 'Seguimiento automático del tiempo dedicado a cada proyecto sin esfuerzo manual.',
      'features.freelancer.card2.title': 'Gestión de clientes',
      'features.freelancer.card2.description': 'Organiza tus clientes, proyectos y tareas en un solo lugar de forma efectiva.',
      'features.freelancer.card3.title': 'Facturación inteligente',
      'features.freelancer.card3.description': 'Genera facturas automáticas basadas en el tiempo registrado y las tarifas establecidas.',
      'features.freelancer.cta': 'Soluciones para freelancers',
      
      'benefits.label': 'Por qué elegirnos',
      'benefits.title': 'Beneficios que transforman tu trabajo',
      'benefits.description': 'Flow Sense combina tecnología avanzada con diseño intuitivo para mejorar tu productividad.',
      'benefits.card1.title': 'Eficiencia mejorada',
      'benefits.card1.description': 'Optimiza procesos y reduce el tiempo dedicado a tareas administrativas.',
      'benefits.card2.title': 'Automatización inteligente',
      'benefits.card2.description': 'Deja que la IA se encargue de las tareas repetitivas mientras te enfocas en lo importante.',
      'benefits.card3.title': 'Acceso desde cualquier lugar',
      'benefits.card3.description': 'Gestiona tu trabajo desde cualquier dispositivo, en cualquier momento.',
      'benefits.card4.title': 'Colaboración mejorada',
      'benefits.card4.description': 'Facilita la comunicación y el trabajo en equipo con herramientas colaborativas.',
      'benefits.card5.title': 'Análisis detallado',
      'benefits.card5.description': 'Obtén insights valiosos sobre tu productividad y áreas de mejora.',
      'benefits.card6.title': 'Asistencia personalizada',
      'benefits.card6.description': 'Recibe recomendaciones adaptadas a tu estilo de trabajo y necesidades.',

      'tech.label': 'Tecnología avanzada',
      'tech.title': 'Impulsado por tecnologías emergentes',
      'tech.description': 'Flow Sense integra lo último en tecnología para ofrecer una experiencia sin precedentes.',
      'tech.card1.title': 'Sensores IoT',
      'tech.card1.description': 'Sensores inteligentes que capturan datos del entorno de trabajo para análisis en tiempo real.',
      'tech.card2.title': 'Inteligencia Artificial',
      'tech.card2.description': 'Algoritmos avanzados que aprenden de tus patrones de trabajo para ofrecer recomendaciones personalizadas.',
      'tech.card3.title': 'Asistentes de voz',
      'tech.card3.description': 'Integración con asistentes de voz para una gestión manos libres de tus tareas y proyectos.',
      
      'pricing.label': 'Planes',
      'pricing.title': 'Elige el plan que mejor se adapte a ti',
      'pricing.description': 'Soluciones flexibles para empresas de todos los tamaños y profesionales independientes.',
      'pricing.popular': 'Popular',
      'pricing.currency': 'S/',
      'pricing.period': '/mes',
      
      'pricing.freelancer.title': 'Freelancer',
      'pricing.freelancer.subtitle': 'Ideal para profesionales independientes',
      'pricing.freelancer.price': '69',
      'pricing.freelancer.feature1': 'Registro automático de horas',
      'pricing.freelancer.feature2': 'Gestión de hasta 10 clientes',
      'pricing.freelancer.feature3': 'Facturación básica',
      'pricing.freelancer.feature4': 'Integración con 1 asistente de voz',
      'pricing.freelancer.feature5': 'Soporte por email',

      'pricing.business.title': 'Business',
      'pricing.business.subtitle': 'Para pequeñas y medianas empresas',
      'pricing.business.price': '179',
      'pricing.business.feature1': 'Todo lo de Freelancer',
      'pricing.business.feature2': 'Supervisión en tiempo real',
      'pricing.business.feature3': 'Gestión de turnos',
      'pricing.business.feature4': 'Análisis de productividad',
      'pricing.business.feature5': 'Hasta 25 usuarios',
      'pricing.business.feature6': 'Soporte prioritario',
      
      'pricing.enterprise.title': 'Enterprise',
      'pricing.enterprise.subtitle': 'Soluciones personalizadas para grandes empresas',
      'pricing.enterprise.contact': 'Contactar',
      'pricing.enterprise.feature1': 'Todo lo de Business',
      'pricing.enterprise.feature2': 'Usuarios ilimitados',
      'pricing.enterprise.feature3': 'API personalizada',
      'pricing.enterprise.feature4': 'Integración con sistemas existentes',
      'pricing.enterprise.feature5': 'Sensores IoT personalizados',
      'pricing.enterprise.feature6': 'Soporte 24/7',
      'pricing.enterprise.feature7': 'Gerente de cuenta dedicado',

      'pricing.cta.trial': 'Comenzar prueba gratuita',
      'pricing.cta.contact': 'Contactar ventas',
      
      'testimonials.label': 'Testimonios',
      'testimonials.title': 'Lo que dicen nuestros usuarios',
      'testimonials.description': 'Descubre cómo Flow Sense ha transformado la productividad de empresas y profesionales.',
      
      'cta.title': 'Transforma tu productividad hoy mismo',
      'cta.description': 'Únete a miles de empresas y profesionales que ya han mejorado su eficiencia con Flow Sense.',
      'cta.start': 'Comenzar ahora →',
      'cta.demo': 'Solicitar demo',

      'footer.brand': 'Flow Sense',
      'footer.terms': 'Términos',
      'footer.privacy': 'Privacidad',
      'footer.contact': 'Contacto',
      'footer.copyright': '© 2025 Flow Sense. Todos los derechos reservados.',
      'footer.lang.en': 'EN',
      'footer.lang.es': 'ES'
    }
  };
  
  function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });
    
    document.querySelectorAll('.language-option').forEach(option => {
      option.classList.toggle('active', option.getAttribute('data-lang') === lang);
    });
    
    localStorage.setItem('preferred-language', lang);
  }
  
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', () => {
      const lang = option.getAttribute('data-lang');
      updateLanguage(lang);
    });
  });

  const savedLanguage = localStorage.getItem('preferred-language');
  if (savedLanguage) {
    updateLanguage(savedLanguage);
  }
});