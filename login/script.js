function register(event) {
  event.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  if (localStorage.getItem(email)) {
    alert('User already exists!');
  } else {
    localStorage.setItem(email, JSON.stringify({ password }));
    alert('Registration successful!');
    window.location.href = 'index.html';
  }
}

function login(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const user = JSON.parse(localStorage.getItem(email));
  if (user && user.password === password) {
    sessionStorage.setItem('loggedInUser', email);
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid credentials!');
  }
}

function checkAuth() {
  const user = sessionStorage.getItem('loggedInUser');
  if (!user) {
    window.location.href = 'index.html';
  } else {
    document.getElementById('user-email').textContent = user;
  }
}

function logout() {
  sessionStorage.removeItem('loggedInUser');
  window.location.href = 'index.html';
}
