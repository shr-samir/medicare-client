import axios from 'axios';

const loginForm = document.getElementById('login-form') as HTMLFormElement;
const emailInput = document.getElementById('email-input') as HTMLInputElement;
const passwordInput = document.getElementById(
  'password-input'
) as HTMLInputElement;

const http = axios.create({
  baseURL: 'http://localhost:3000/auth',
});
loginForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('submit');
  
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const response = await http({
      url: '/login',
      data: {
        email,
        password,
      },
      method: 'POST',
    });
    // console.log(response);

    const accessToken = response.data.accessToken;
    localStorage.setItem('accessToken', accessToken);

    const refreshToken = response.data.refreshToken;
    localStorage.setItem('refreshToken', refreshToken);

    const fullName = response.data.fullName;
    localStorage.setItem('fullName', fullName);

    const role = response.data.role;
    localStorage.setItem('role', role);

    if (response.status === 200) {
      window.location.href = '../UserLayout/index.html';
    }
  } catch (e) {
    console.error(e);
  }
});
