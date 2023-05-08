<script>
import { push } from "firebase/database";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
getDatabase,
ref,
child,
get,
update,
onValue,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyBau35ju8XAdFN5em6h7HjPAhpf3pL5wSE",
  authDomain: "courseworx-454d2.firebaseapp.com",
  databaseURL: "https://courseworx-454d2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "courseworx-454d2",
  storageBucket: "courseworx-454d2.appspot.com",
  messagingSenderId: "561114332314",
  appId: "1:561114332314:web:0b4cabbaffea89b0113323"
}

const app = initializeApp(firebaseConfig);

const db = getDatabase();

export default {
data() {
  return {
    errMsg: '',
    errMsgP: '',
  }
},
created (){

},
methods: {

  logIn(){
    const dbRef = ref(db);

    onValue(
      child(dbRef, `studUsers/${this.username}`),
      (snapshot) => {
      
       if(snapshot.val()==null){
        this.errMsg ="INVALID USERNAME";
       }
       else{
          onValue(
            child(dbRef, `studUsers/${this.username}/password`),
            (snapshot) => {
              if(snapshot.val()==password.value){
                this.errMsgP="";
                console.log("LOG IN SUCCESS")
              }
              else{
                console.log("LOG IN FAIL")

                this.errMsg="INVALID PASSWORD";

              }
            },
            (error) => {
              console.error(error);
            }
          );        
        this.errMsg= "";
       }

      },
      (error) => {
        console.error(error);
      }
    );


  }
 
 
  
}
}

</script>