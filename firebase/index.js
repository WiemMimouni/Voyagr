// firebase/index.js (clean version)
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCVBbACohSkuUr0FntAmt9BvMUK-RkpY-E",
  authDomain: "delivair-959e9.firebaseapp.com",
  projectId: "delivair-959e9",
  storageBucket: "delivair-959e9.appspot.com",
  messagingSenderId: "1084409904306",
  appId: "1:1084409904306:web:03f5e420eb889f115d1dab"
};

// Initialize Firebase once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Auth with persistent storage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Storage
const storage = getStorage(app);

// Export initialized instances for use in your components
export { app, auth, storage };
