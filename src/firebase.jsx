import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCKOy4raIrih-_xEk5RjXIZCbglar-6F6c",
    authDomain: "final-nozama-clone-6f892.firebaseapp.com",
    projectId: "final-nozama-clone-6f892",
    storageBucket: "final-nozama-clone-6f892.firebasestorage.app",
    messagingSenderId: "167580789705",
    appId: "1:167580789705:web:5bef4990bcfd3649355618"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };