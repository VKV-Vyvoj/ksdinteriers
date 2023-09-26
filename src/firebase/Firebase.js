
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database"; // Používáme getDatabase místo getFirestore

const firebaseConfig = {
  apiKey: "AIzaSyDJufRr2azoOcmbtYqxXbAKrupOmW1F7ss",
  authDomain: "truhlarstvi-interiors.firebaseapp.com",
  projectId: "truhlarstvi-interiors",
  storageBucket: "truhlarstvi-interiors.appspot.com",
  messagingSenderId: "673199886917",
  appId: "1:673199886917:web:5d187aec81370c1789492c"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Používáme getDatabase pro získání Realtime Database instance

export { db };
