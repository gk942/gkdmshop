function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
