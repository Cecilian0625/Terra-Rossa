document.getElementById('checkoutForm').addEventListener('submit', function (event) {
  // Clear previous error messages
  document.querySelectorAll('.error').forEach(function (el) {
    el.textContent = '';
  });

  let isValid = true;

  // Validate phone number
  const telephone = document.querySelector('input[name="telephone"]');
  const telephonePattern = /^[0-9]{11}$/;
  if (!telephonePattern.test(telephone.value)) {
    isValid = false;
    document.getElementById('telephoneError').textContent = 'Please enter a valid 11-digit phone number. The phone number should contain only digits.';
  }

  // Validate email
  const email = document.querySelector('input[name="email"]');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email.value)) {
    isValid = false;
    document.getElementById('emailError').textContent = 'Please enter a valid email address in the format: example@example.com.';
  }

  // Validate first name
  const firstname = document.querySelector('input[name="firstname"]');
  if (firstname.value.trim() === '') {
    isValid = false;
    document.getElementById('firstnameError').textContent = 'First name is required. Please enter your first name.';
  }

  // Validate last name
  const lastname = document.querySelector('input[name="lastname"]');
  if (lastname.value.trim() === '') {
    isValid = false;
    document.getElementById('lastnameError').textContent = 'Last name is required. Please enter your last name.';
  }

  // Validate address
  const address = document.querySelector('input[name="address"]');
  if (address.value.trim() === '') {
    isValid = false;
    document.getElementById('addressError').textContent = 'Address is required. Please enter your address.';
  }

  // If the form is invalid, prevent submission
  if (!isValid) {
    event.preventDefault();
  }
});