function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  if (username && password) {
    localStorage.setItem(username, password);
    document.getElementById("message").innerText = "Signup successful! You can now login.";
  } else {
    document.getElementById("message").innerText = "Please enter both username and password.";
  }
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("message").innerText = "Invalid username or password.";
  }
}
