// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDw0oQJwJUsQ-dLdMxOtR4_14YZO5tjdT0",
   authDomain: "household-34fa6.firebaseapp.com",
   projectId: "household-34fa6",
   storageBucket: "household-34fa6.appspot.com",
   messagingSenderId: "597416655997",
   appId: "1:597416655997:web:2880bbaa6e66b7a4d2c514",
   measurementId: "G-TL9XYJBP07"
};

// const firebaseConfig = {
//    apiKey: import.meta.env.FIREBASE_API_KEY,
//    authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
//    projectId: import.meta.env.FIREBASE_PROJECT_ID,
//    storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
//    messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
//    appId: import.meta.env.FIREBASE_APP_ID,
//    measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID
//  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;