//Milestone 5 Typescript Code
// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect Input value
    var username = document.getElementById('username').value;
    var objective = document.getElementById('objective').value;
    var name = document.getElementById('name').value;
    var FaterName = document.getElementById('FaterName').value;
    var phone = document.getElementById('phone').value;
    var cnic = document.getElementById('cnic').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        username: username,
        objective: objective,
        name: name,
        FaterName: FaterName,
        email: email,
        phone: phone,
        cnic: cnic,
        address: address,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving thedata locally
    // Generate the resume content dynamically
    var resumeHTML = "\n  <h2><b>Resume</b></h2>\n  <h3><b>Personal Information</b></h3>\n  <p><b>Objective:</b>".concat(objective, "</p>\n  <p><b>Name:</b>").concat(name, "</p>\n  <p><b>FatherName:</b>").concat(FaterName, "</p>\n  <p><b>Contact:</b>").concat(phone, "</p>\n  <p><b>Cnic:</b>").concat(cnic, "</p>\n  <p><b>Email:</b>").concat(email, "</p>\n  <p><b>Address:</b>").concat(address, "</p>\n  \n  <h3><b>Education</b></h3>\n  <p>").concat(education, "</p>\n  \n  <h3><b>Experience</b></h3>\n  <p>").concat(experience, "</p>\n  \n  <h3><b>Skills</b></h3>\n  <p>").concat(skills, "</p>\n  "); // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to saveas PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('objective').value =
                resumeData.objective;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('FatherName').value =
                resumeData.FaterName;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('cnic').value =
                resumeData.cnic;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('address').value =
                resumeData.address;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
