import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const errorMessage = document.getElementById('errorMessage');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (error) throw error;

        window.location.href = '/dashboard.html';
      } catch (error) {
        errorMessage.textContent = 'Error al iniciar sesión. Por favor verifica tus credenciales.';
        errorMessage.style.display = 'block';
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name
            }
          }
        });

        if (error) throw error;

        alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
        window.location.href = '/login.html';
      } catch (error) {
        errorMessage.textContent = 'Error al crear la cuenta. Por favor intenta nuevamente.';
        errorMessage.style.display = 'block';
      }
    });
  }
});