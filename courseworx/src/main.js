import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBau35ju8XAdFN5em6h7HjPAhpf3pL5wSE",
  authDomain: "courseworx-454d2.firebaseapp.com",
  databaseURL: "https://courseworx-454d2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "courseworx-454d2",
  storageBucket: "courseworx-454d2.appspot.com",
  messagingSenderId: "561114332314",
  appId: "1:561114332314:web:0b4cabbaffea89b0113323"
};


initializeApp(firebaseConfig);

const app = createApp(App)

import { getDatabase, ref,child ,get , update  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";



app.use(router);

app.mount('#app')
