import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZCgsmJ_3qrFURiWSe0o0Kq3foQBrLqmo",
  authDomain: "courseworx-6cfc2.firebaseapp.com",
  databaseURL: "https://courseworx-6cfc2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "courseworx-6cfc2",
  storageBucket: "courseworx-6cfc2.appspot.com",
  messagingSenderId: "896910683359",
  appId: "1:896910683359:web:c9fe6df7e560a79873cd6a"
};


initializeApp(firebaseConfig);

const app = createApp(App)

import { getDatabase, ref,child ,get , update  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";



app.use(router);

app.mount('#app')
