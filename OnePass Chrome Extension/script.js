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

// Function to generate a random PIN
function generatePin() {
  const length = 4; // PIN Length set to 4
  const charset = "0123456789";
  let pin = "";

  // Generate the PIN digits
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    pin += charset[randomIndex];
  }

  // Display the generated PIN in the input field
  const pinInput = document.getElementById("pin");
  pinInput.value = pin;
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

// Function to copy the generated password or PIN to the clipboard
function copyToClipboard(id) {
  const inputField = document.getElementById(id);
  inputField.select();
  document.execCommand("copy");

  // Show the "Copied!" notification
  showCopyNotification();
}

// Event listener for when the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  
  // Generate intial password when extension is first opened
  generatePassword();
  // Generate intial password when extension is first opened
  generatePin();

  // Add click event listeners to the "Generate" button for both sections
  const generatePinButton = document.getElementById("generatePinButton");
  generatePinButton.addEventListener("click", generatePin);

  const generatePasswordButton = document.getElementById("generatePasswordButton");
  generatePasswordButton.addEventListener("click", generatePassword);

  // Add click event listeners to the copy icon for both sections
  const copyPinIcon = document.querySelector(".copypinicon");
  copyPinIcon.addEventListener("click", () => {
    copyToClipboard("pin");
  });

  const copyPasswordIcon = document.querySelector(".copyicon");
  copyPasswordIcon.addEventListener("click", () => {
    copyToClipboard("password");
  });
});

//Dark Mode Toggle:
// Get references to elements for dark mode toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
  } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
  }
});

const body = document.body;

const sunIcon = document.getElementById('lightModeIcon');
const moonIcon = document.getElementById('darkModeIcon');

// Event listener for toggling between light and dark themes
modeToggle.addEventListener('click', () => {
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

// Save user preference for dark/light mode
modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
      localStorage.setItem('mode', 'dark');
  } else {
      localStorage.setItem('mode', 'light');
  }
});

//Switch Toggle:
// Add an event listener to the switch button
const switchGeneratorButton = document.getElementById("switchGenerator");
const passwordSection = document.getElementById("passwordSection");
const pinSection = document.getElementById("pinSection");

// Function to toggle between password and PIN generator
function toggleGenerator() {
  if (passwordSection.style.display === "block") {
    // Switch to PIN generator
    passwordSection.style.display = "none";
    pinSection.style.display = "block";
    switchGeneratorButton.textContent = "PassGen";
    switchGeneratorButton.title = "Switch to Password Generator"
  } else {
    // Switch to password generator
    pinSection.style.display = "none";
    passwordSection.style.display = "block";
    switchGeneratorButton.textContent = "PIN Gen";
    switchGeneratorButton.title = "Switch to PIN Generator"
  }
}

// Set the initial text content
toggleGenerator();

// Add click event listener to toggle the generator
switchGeneratorButton.addEventListener("click", toggleGenerator);