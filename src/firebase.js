import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNl-iNmEoiHdvxk6g7cQpsMINx9rZ-sY4",
  authDomain: "netflix-clone-78b06.firebaseapp.com",
  projectId: "netflix-clone-78b06",
  storageBucket: "netflix-clone-78b06.appspot.com",
  messagingSenderId: "601141135388",
  appId: "1:601141135388:web:b7f32e15f787fd8671b7d9",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
