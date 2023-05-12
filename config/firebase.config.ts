import { initializeApp } from 'firebase-admin'
import 'dotenv/config'
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSender,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

export const app = initializeApp(firebaseConfig)