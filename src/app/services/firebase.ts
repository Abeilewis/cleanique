import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIv69n0CbruxQyqWysptlweZPVoqC5SdQ",
  authDomain: "cleanapp-382b1.firebaseapp.com",
  projectId: "cleanapp-382b1",
  storageBucket: "cleanapp-382b1.firebasestorage.app",
  messagingSenderId: "372308616912",
  appId: "1:372308616912:web:2055945b6def3582eca0d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Auth and get a reference to the service
const auth = getAuth(app);

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  timestamp: Date;
}

export const addBooking = async (bookingData: Omit<BookingData, 'timestamp'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'bookings'), {
      ...bookingData,
      timestamp: new Date()
    });
    console.log('Booking added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding booking: ', error);
    throw error;
  }
};

export interface ReviewData {
  name: string;
  service: string;
  rating: number;
  reviewText: string;
  timestamp: Date;
}

export const addReview = async (reviewData: Omit<ReviewData, 'timestamp'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'reviews'), {
      ...reviewData,
      timestamp: new Date()
    });
    console.log('Review added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding review: ', error);
    throw error;
  }
};

export { db, auth };
