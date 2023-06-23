import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyDy55zNodYz4ACX0qtJ41UaYMCc_r98sEw",
  authDomain: "internship-dashboard.firebaseapp.com",
  projectId: "internship-dashboard",
  storageBucket: "internship-dashboard.appspot.com",
  messagingSenderId: "543698012927",
  appId: "1:543698012927:web:4164bba69792ea5aba9aca",
  measurementId: "G-CM9ZYYMXRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;