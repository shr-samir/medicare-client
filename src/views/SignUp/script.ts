import axios from 'axios';

const signUpForm = document.getElementById('signup-form') as HTMLFormElement;

const http = axios.create({
  baseURL: 'http://localhost:3000/auth',
});

// -------------- for selected gender ------------------

signUpForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('submit');

  const name = (document.getElementById('fullname-input') as HTMLInputElement)
    .value;
  const gender = (
    document.querySelector('input[name="gender"]:checked') as HTMLInputElement
  ).value;
  const age = Number(
    (document.getElementById('age-input') as HTMLInputElement).value
  );
  const address = (document.getElementById('address-input') as HTMLInputElement)
    .value;
  const phone = (document.getElementById('phone-input') as HTMLInputElement)
    .value;
  const email = (document.getElementById('email-input') as HTMLInputElement)
    .value;
  const password = (
    document.getElementById('password-input') as HTMLInputElement
  ).value;

  try {
    const response = await http({
      url: '/register',
      data: {
        fullname: name,
        gender,
        age,
        address,
        phoneNumber: phone,
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
