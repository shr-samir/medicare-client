const mainDiv = document.getElementById('doctor-cards') as HTMLElement;

window.addEventListener('load', async () => {
  const res = await fetch('http://localhost:3000/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  const data = await res.json();
  console.log(data);

  const fullName = localStorage.getItem('fullName') as string;
  const role = localStorage.getItem('role') as string;

  const userRole = document.getElementById('userRole') as HTMLElement;
  userRole.textContent = role;

  const doctorInfo = data.doctors;
  doctorInfo.forEach((doctor: any) => {
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add(
      'w-[340px]',
      'bg-slate-200',
      'rounded-xl',
      'overflow-hidden',
      'shadow-lg',
      'hover:shadow-xl',
      'transition-shadow',
      'duration-300',
      'ease-in-out',
      'text-gray-600'
    );

    const div2 = document.createElement('div');
    div2.classList.add('flex', 'items-center', 'p-4');

    const imgAlternate = document.createElement('div');
    imgAlternate.classList.add(
      'rounded-full',
      'border-2',
      'border-gray-300',
      'h-24',
      'w-24'
    );

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('ml-4');

    const nameEle = document.createElement('h3');
    nameEle.classList.add('text-lg', 'font-semibold', 'text-gray-900');
    const specializationEle = document.createElement('span');
    const experienceEle = document.createElement('span');
    const feePerConsultEle = document.createElement('p');
    const appointmentEle = document.createElement('button');
    appointmentEle.classList.add(
      'flex',
      'justify-center',
      'items-center',
      'text-white',
      'bg-primary',
      'hover:bg-blue-200',
      'm-4',
      'text-sm',
      'font-semibold',
      'px-6',
      'py-2',
      'rounded-lg',
      'cursor-pointer'
    );

    nameEle.textContent =
      'Dr. ' + fullName.charAt(0).toUpperCase() + fullName.slice(1);
    specializationEle.textContent = doctor.specialization;
    experienceEle.textContent = doctor.experience + '+ years';
    feePerConsultEle.textContent = 'Rs. ' + doctor.fee_per_consult;

    sectionDiv.appendChild(div2);
    div2.appendChild(imgAlternate);
    div2.appendChild(detailsDiv);
    detailsDiv.appendChild(nameEle);
    detailsDiv.appendChild(specializationEle);
    detailsDiv.appendChild(document.createElement('span')).append(' | ');
    detailsDiv.appendChild(experienceEle);
    detailsDiv.appendChild(feePerConsultEle);
    sectionDiv.appendChild(appointmentEle).append('Make Appointment');
    mainDiv.appendChild(sectionDiv);
  });
});

// ------------------------------------------- for logout ---------------------------------------------

const logoutBtn = document.getElementById('logoutBtn') as HTMLElement;
logoutBtn.addEventListener('click', logout);
function logout() {
  localStorage.clear();
  window.location.href = '/';
};
