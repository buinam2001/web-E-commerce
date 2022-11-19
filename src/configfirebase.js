import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBntP6KLIU7fc1KDTmH_K0yD4K0Xm46Be4",
  authDomain: "luu-anh-4233f.firebaseapp.com",
  projectId: "luu-anh-4233f",
  storageBucket: "luu-anh-4233f.appspot.com",
  messagingSenderId: "859174656619",
  appId: "1:859174656619:web:87107c9c9f3bafbbae2f2e",
  measurementId: "G-JXZ5QLJB48"
};


const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);