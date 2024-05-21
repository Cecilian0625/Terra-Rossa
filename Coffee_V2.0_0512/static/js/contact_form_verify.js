document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    let valid = true;

    const nameInput = form.querySelector("input[name='name']");
    const emailInput = form.querySelector("input[name='email']");
    const subjectInput = form.querySelector("input[name='subject']");
    const messageInput = form.querySelector("textarea[name='message']");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    // Validate name
    if (nameInput.value.trim() === "") {
      valid = false;
      nameError.textContent = "Error: Name is required. Please enter your name.";
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      valid = false;
      emailError.textContent = "Error: Invalid email address. Please enter a valid email.";
    }

    // Validate subject
    if (subjectInput.value.trim() === "") {
      valid = false;
      subjectError.textContent = "Error: Subject is required. Please enter a subject.";
    }

    // Validate message
    if (messageInput.value.trim() === "") {
      valid = false;
      messageError.textContent = "Error: Message is required. Please enter your message.";
    }

    if (!valid) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
});