document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservationForm");

  form.addEventListener("submit", function (event) {
    let valid = true;

    const nameInput = form.querySelector("input[name='name']");
    const telInput = form.querySelector("input[name='telephone']");
    const stateInput = form.querySelector("input[name='state']");
    const dateInput = form.querySelector("input[name='reserve-date']");
    const timeInput = form.querySelector("input[name='time']");
    const emailInput = form.querySelector("input[name='email']");

    const nameError = nameInput.nextElementSibling;
    const telError = telInput.nextElementSibling;
    const stateError = stateInput.nextElementSibling;
    const dateError = dateInput.nextElementSibling;
    const timeError = timeInput.nextElementSibling;
    const emailError = emailInput.nextElementSibling;

    // Clear previous error messages
    nameError.textContent = "";
    telError.textContent = "";
    stateError.textContent = "";
    dateError.textContent = "";
    timeError.textContent = "";
    emailError.textContent = "";

    // Validate name
    if (nameInput.value.trim() === "") {
      valid = false;
      nameError.textContent = "Error: Name is required. Please enter your name.";
    }

    // Validate telephone
    const telPattern = /^\d{10}$/; // Example pattern: 10 digits
    if (!telPattern.test(telInput.value)) {
      valid = false;
      telError.textContent = "Error: Invalid telephone number. Please enter a 10-digit number.";
    }

    // Validate state
    if (stateInput.value.trim() === "") {
      valid = false;
      stateError.textContent = "Error: State number is required. Please enter your state number.";
    }

    // Validate date
    if (dateInput.value === "") {
      valid = false;
      dateError.textContent = "Error: Reservation date is required. Please select a date.";
    }

    // Validate time
    if (timeInput.value === "") {
      valid = false;
      timeError.textContent = "Error: Reservation time is required. Please select a time.";
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      valid = false;
      emailError.textContent = "Error: Invalid email address. Please enter a valid email.";
    }

    if (!valid) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
});