import axios from 'axios';

const signUpForm = document.getElementById('signup-form') as HTMLFormElement;
const nameInput = document.getElementById('fullname-input') as HTMLInputElement;
const genderInput = document.getElementById('gender-input') as HTMLInputElement;
const ageInput = document.getElementById('age-input') as HTMLInputElement;
const addressInput = document.getElementById('address-input') as HTMLInputElement;
const phoneInput = document.getElementById('phone-input') as HTMLInputElement;
const emailInput = document.getElementById('email-input') as HTMLInputElement;
const passwordInput = document.getElementById('password-input') as HTMLInputElement;

const http = axios.create({
  baseURL: 'http://localhost:3000/auth',
});
signUpForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('submit');

  const name = nameInput.value;
  const gender = genderInput.value;
  const age = ageInput.value;
  const address = addressInput.value;
  const phone = phoneInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const response = await http({
      url: '/register',
      data: {
        name,
        gender,
        age,
        address,
        phone,
        email,
        password,
      },
      method: 'POST',
    });
    console.log(response);

  } catch (e) {
    console.error(e);
  }
});