import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCV_iq8iOLCX2JPS_IjKxosbxFv3QQpQhI",
  authDomain: "courseworx-34d2a.firebaseapp.com",
  projectId: "courseworx-34d2a",
  storageBucket: "courseworx-34d2a.appspot.com",
  messagingSenderId: "912429290416",
  appId: "1:912429290416:web:bbafdaade4afbb0d5f3c75",
  measurementId: "G-D2F9E3E7FP"
};


initializeApp(firebaseConfig);

const app = createApp(App)

import { getDatabase, ref,child ,get , update  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";



app.use(router);

app.mount('#app')
