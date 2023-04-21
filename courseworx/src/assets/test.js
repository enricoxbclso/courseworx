
            import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
          
            const firebaseConfig = {
              apiKey: "AIzaSyAF6AmQwc8_xQCsN9OCi_sQdbaKLFkSv9E",
              authDomain: "fir-prac-6263d.firebaseapp.com",
              databaseURL: "https://fir-prac-6263d-default-rtdb.asia-southeast1.firebasedatabase.app",
              projectId: "fir-prac-6263d",
              storageBucket: "fir-prac-6263d.appspot.com",
              messagingSenderId: "62625647160",
              appId: "1:62625647160:web:eeeb21b67f0c6b2f7974cd"
            };
          
            const app = initializeApp(firebaseConfig);

            import { getDatabase, ref,child ,get , update  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

            const db = getDatabase();

            let span = document.getElementById('countSpan');
            let inc = document.getElementById('incBtn');
            let counterVariable;

            window.onload = function (){

                const dbRef = ref(db);

                get(child(dbRef,'Counter')).then((snapshot)=>{
                    counterVariable = Number(snapshot.val());
                    span.innerHTML = counterVariable;
                });
            }

            function incCounter(){
                
                const dbRef = ref(db);
                
                get(child(dbRef,'Counter')).then((snapshot)=>{
                    counterVariable = Number(snapshot.val());

                    if(this.id =='incBtn') counterVariable ++;

                    update(ref(db,"/"),{Counter: counterVariable});

                    span.innerHTML = counterVariable;
                });

            }

            inc.addEventListener('click',incCounter);

  






