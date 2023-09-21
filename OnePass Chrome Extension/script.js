// Function to generate a random password
function generatePassword() {
  const length = 12; // Common password length requirement is to be 8-12 characters
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";

  // Ensure the first character is an uppercase letter (a common requirement)
  const randomUppercaseIndex = Math.floor(Math.random() * uppercaseChars.length);
  password += uppercaseChars[randomUppercaseIndex];

  // Generate the rest of the password characters
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  // Display the generated password in the input field
  const passwordInput = document.getElementById("password");
  passwordInput.value = password;
}

// Function to show a "Copied!" notification
function showCopyNotification() {
  const notification = document.createElement("div");
  notification.classList.add("copy-notification");
  notification.textContent = "Copied!";
  document.body.appendChild(notification);

  // Add a slight delay to ensure the class is added after appending
  setTimeout(() => {
    notification.classList.add("show");
  }, 50);

  // Remove the notification after 1.5 seconds
  setTimeout(() => {
    notification.remove();
  }, 1500);
}

// Function to copy the generated password to the clipboard
function copyPassword() {
  const passwordInput = document.getElementById("password");
  passwordInput.select();
  document.execCommand("copy");

  // Show the "Copied!" notification
  showCopyNotification();
}

// Event listener for when the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Generate a password when the page loads
  generatePassword();

  // Add click event listeners to the "Generate" button and copy icon
  const generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", generatePassword);

  const copyIcon = document.querySelector(".copyicon");
  copyIcon.addEventListener("click", copyPassword);
});

// Get references to elements for dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

const sunIcon = document.getElementById('lightModeIcon');
const moonIcon = document.getElementById('darkModeIcon');

// Event listener for toggling between light and dark themes
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    // Toggle the visibility of moon and sun icons based on the selected theme
    if (body.classList.contains('light-theme')) {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
});
