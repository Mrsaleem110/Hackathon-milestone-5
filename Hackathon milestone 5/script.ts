//Milestone 5 Typescript Code
// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as
HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as
HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as
HTMLButtonElement;
// Handle form submission
form.addEventListener('submit', (event: Event) => {
event.preventDefault(); // prevent page reload
// Collect Input value
const username = (document.getElementById('username') as HTMLInputElement).value
const objective = (document.getElementById('objective') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const FaterName = (document.getElementById('FaterName') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const cnic = (document.getElementById('cnic') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
// Save form data in localStorage with the username as the key
const resumeData = {
username,    
objective,
name,
FaterName,
email,
phone,
cnic,
address,
education,
experience,
skills
};
localStorage.setItem(username, JSON.stringify(resumeData)); // Saving thedata locally
  // Generate the resume content dynamically
  const resumeHTML = `
  <h2><b>Resume</b></h2>
  <h3><b>Personal Information</b></h3>
  <p><b>Objective:</b>${objective}</p>
  <p><b>Name:</b>${name}</p>
  <p><b>FatherName:</b>${FaterName}</p>
  <p><b>Contact:</b>${phone}</p>
  <p><b>Cnic:</b>${cnic}</p>
  <p><b>Email:</b>${email}</p>
  <p><b>Address:</b>${address}</p>
  
  <h3><b>Education</b></h3>
  <p>${education}</p>
  
  <h3><b>Experience</b></h3>
  <p>${experience}</p>
  
  <h3><b>Skills</b></h3>
  <p>${skills}</p>
  `;// Display the generated resume
resumeDisplayElement.innerHTML = resumeHTML;
// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to saveas PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {
// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value =
username;
(document.getElementById('objective') as HTMLInputElement).value =
resumeData.objective;
(document.getElementById('name') as HTMLInputElement).value =
resumeData.name;

(document.getElementById('FatherName') as HTMLInputElement).value =
resumeData.FaterName;

(document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('cnic') as HTMLInputElement).value =
resumeData.cnic;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('address') as HTMLInputElement).value =
resumeData.address;
(document.getElementById('education') as HTMLTextAreaElement).value =
resumeData.education;
(document.getElementById('experience') as HTMLTextAreaElement).value
= resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value =
resumeData.skills;
}
}
});