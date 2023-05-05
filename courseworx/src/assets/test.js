
            import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
          
            const firebaseConfig = {
                apiKey: "AIzaSyBZCgsmJ_3qrFURiWSe0o0Kq3foQBrLqmo",
                authDomain: "courseworx-6cfc2.firebaseapp.com",
                databaseURL: "https://courseworx-6cfc2-default-rtdb.asia-southeast1.firebasedatabase.app",
                projectId: "courseworx-6cfc2",
                storageBucket: "courseworx-6cfc2.appspot.com",
                messagingSenderId: "896910683359",
                appId: "1:896910683359:web:c9fe6df7e560a79873cd6a"
              };
              //ninitializeApp(firebaseConfig);
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

  






