document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form from reloading the page

    let valid = true;

    // Clear old errors and success message
    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('messageError').textContent = "";
    document.getElementById('successMessage').textContent = "";

    // Get field values
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    // Validate Name
    if (name === "") {
        document.getElementById('nameError').textContent = "Full name is required.";
        valid = false;
    }

    // Validate Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById('emailError').textContent = "Email is required.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Enter a valid email address.";
        valid = false;
    }

    // Validate Message
    if (message === "") {
        document.getElementById('messageError').textContent = "Message is required.";
        valid = false;
    }

    // If all checks pass
    if (valid) {
        document.getElementById('successMessage').textContent = "Thank you for contacting us!";
        // Reset the form after showing the message
        document.getElementById('contactForm').reset();
    }
});
