// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu2JItMRxJ_c4e0FD59BWivbf6g5F9JBY",
  authDomain: "online-job-portal-9a8cc.firebaseapp.com",
  projectId: "online-job-portal-9a8cc",
  storageBucket: "online-job-portal-9a8cc.appspot.com",
  messagingSenderId: "83978326856",
  appId: "1:83978326856:web:5dfbba557d2bcd930bd97d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//init firestore
const db = getFirestore(app);

export { db };
