// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import SignInScreen from "./signin";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArOenAOTA2GC6Ft4D2gr9I-2Mtdr5vBC4",
  authDomain: "test-proj-29ecf.firebaseapp.com",
  projectId: "test-proj-29ecf",
  storageBucket: "test-proj-29ecf.appspot.com",
  messagingSenderId: "461384008553",
  appId: "1:461384008553:web:cfd602201c53612edaf3f8",
  measurementId: "G-BBEKD10MX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <>
      Hello
      <SignInScreen/>
    </>
  );
}

export default App;
