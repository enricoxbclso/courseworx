import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmnSxpczOL91Adj-lx5OYqubGsFP24qNo",
  authDomain: "courseworx-6cc8c.firebaseapp.com",
  projectId: "courseworx-6cc8c",
  storageBucket: "courseworx-6cc8c.appspot.com",
  messagingSenderId: "292666837402",
  appId: "1:292666837402:web:16833a9d4d3824d7ec5223"
};


initializeApp(firebaseConfig);

const app = createApp(App)

import { getDatabase, ref,child ,get , update  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";



app.use(router);

app.mount('#app')
