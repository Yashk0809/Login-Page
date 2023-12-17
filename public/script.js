// public/script.js

const section = document.querySelector(".hide-section");
const formContainer = document.querySelector(".login-container");
const loginContainer = document.querySelector(".login");
const profile = document.querySelector("img");
const form = document.querySelector('.login-container');

profile.onclick = () => {
  requestAnimationFrame(() => {
    loginContainer.classList.remove("hide-login");
    formContainer.classList.remove("hide-form");

    setTimeout(() => {
      section.classList.remove("hide-section");
    }, 1000);
  });
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  // Send a POST request to the server
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
  });

  // Handle the server response
  const result = await response.text();
  
  // Display the server response (you can replace this with your own logic)
  alert(result);
});
