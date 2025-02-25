// HAMBURGER MENU
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

//   FORM VALIDATION AND SUBMISSION

  function validateForm() {
    // Validate Name
    let name = document.forms["myForm"]["name"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    // Validate Email
    let email = document.forms["myForm"]["email"].value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    } else if (!validateEmail(email)) {
        alert("Invalid email format");
        return false;
    }

    // Validate Message
    let message = document.forms["myForm"]["message"].value;
    if (message == "") {
        alert("Message must be filled out");
        return false;
    }

    // If all validations pass, reset the form and show success message
    alert("Form submitted successfully!");
    
    // Reset the form fields after successful submission
    document.forms["myForm"].reset(); 
    
    return true;
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}