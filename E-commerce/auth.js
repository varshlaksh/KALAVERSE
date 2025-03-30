
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyApfbnH6HCHl6GFMMNC6wyi8eWIAQNnvKQ",
    authDomain: "login-efd32.firebaseapp.com",
    projectId: "login-efd32",
    storageBucket: "login-efd32.firebasestorage.app",
    messagingSenderId: "417993168747",
    appId: "1:417993168747:web:2452e3da06e1f814e51e2e",
    measurementId: "G-MSFJC14GPT"
  };

  const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        getAnalytics(app);

        document.getElementById('signup-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert('User signed up successfully!');
                    console.log('User Info:', { firstName, lastName, phone });
                    window.location.href = 'index.html';
                })
                .catch((error) => alert(error.message));
        });

        document.getElementById('googleSignIn').addEventListener('click', () => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
        .then((result) => {
            alert('Signed in with Google!');
            window.location.href = 'index.html'; // Redirect to index.html
        })
        .catch((error) => alert(error.message));
        });