import axios from 'axios';

const doctorApplyForm = document.getElementById(
  'doctor-apply-form'
) as HTMLFormElement;

const http = axios.create({
  baseURL: 'http://localhost:3000/user',
});

// -------------- for selected gender ------------------

doctorApplyForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('submit');

  const specialization = (
    document.getElementById('specialization') as HTMLInputElement
  ).value;
  const experience = Number(
    (document.getElementById('experience') as HTMLInputElement).value
  );
  const fee_per_consult = (document.getElementById('fee') as HTMLInputElement)
    .value;
  const start_date = (document.getElementById('start-time') as HTMLInputElement)
    .value;
  const end_date = (document.getElementById('end-time') as HTMLInputElement)
    .value;

  console.log(start_date);

  try {
    const response = await http({
      url: '/apply',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      data: {
        specialization,
        experience,
        fee_per_consult,
        start_date,
        end_date,
      },
      method: 'POST',
    });
    console.log(response);
  } catch (e) {
    console.error(e);
  }
});
