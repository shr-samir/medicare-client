// Define the structure of your data
interface DoctorCardData {
  name: string;
  specialty: string;
  experience: number;
  education: string;
  imageUrl: string;
}

// A function to update the doctor card with fetched data
// function updateDoctorCard(data: DoctorCardData) {
//   const doctorImage = document.getElementById(
//     'doctor-image'
//   ) as HTMLImageElement;
//   const doctorName = document.getElementById('doctor-name');
//   const doctorSpecialty = document.getElementById('doctor-specialty');
//   const doctorExperience = document.getElementById('doctor-experience');

//   const div = document.createElement('div');
//   const doctorImage = document.createElement('img');
//   const div1 = document.createElement('div');
//   const
// }

async function fetchDoctorData(doctorId: number): Promise<DoctorCardData> {
  const response = await fetch(`http://localhost:3000/user/${doctorId}`);
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  const responseData = response.json();
  console.log(responseData);

  return responseData;
}

fetchDoctorData(1);
