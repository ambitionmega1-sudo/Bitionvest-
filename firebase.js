
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBeXN0EUusLBiWkYbYEsQwOVdv9DPTWnEXo",
  authDomain: "bitionvest.firebaseapp.com",
  projectId: "bitionvest",
  storageBucket: "bitionvest.firebasestorage.app",
  messagingSenderId: "1054566201939",
  appId: "1:1054566201939:web:480bef86c9e91e5db2a4a6"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
