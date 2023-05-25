<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  </div>
<div class="background"></div>
<div class="container">
  <div class="cover">
    <div class="front">
      <img :src="backimg" alt="backimg">
      <div class="text">
        <span class="text-1">Every new friend is a <br> new adventure</span>
        <span class="text-2">Let's get connected</span>
      </div>
    </div>
  </div>

  <div class="forms">
    <div class="form-content">
      <div class="login-form">
        <div class="title">Login</div>
        <div class="input-boxes">
          <div class="input-box">
            <i class="fas fa-envelope"></i>
            <input type="text" placeholder="Enter Username" v-model="username">
          </div>
          <div class="input-box">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Enter Password" v-model ="password">
          </div>
          <div class="text">Forgot password?
            <br>{{errMsg }}
          </div>
          <div class="button input-box">
            <input type="submit" value="Submit" @click="logIn">
          </div>
          <div class="text sign-up-text">Don't have an account? <label for="popup" @click="togglePopup">Signup now</label></div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="popup" id="popup">
<div class="form">
  <div class="title">Are you an?</div>
  <div class="radio-group">
    <label for="employer" class="radio">
      <input type="radio" name="employer" id="employer" class="radio__input">
      <div class="radio__radio"></div>
      Employer (Company)
    </label>
    <label for="student" class="radio">
      <input type="radio" name="employer" id="student" class="radio__input">
      <div class="radio__radio"></div>
      Student
    </label>
  </div>
  <div class="form-element">
    <button type="submit" class="submit-btn" @click="redirectPage">Submit</button>
    <button type="button" class="cancel-btn" @click="cancelPopup">Cancel</button>
  </div>
</div>
</div>
</template>




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

  let loggedas = localStorage.getItem('loggedas');
  let loggedin = localStorage.getItem('loggedin');

},
methods: {

  logIn(){
    const dbRef = ref(db);
    const dbRefCompNameSetter= ref(db, `users/${this.username}/comp_name` );

    onValue(
      child(dbRef, `users/${this.username}`),
      (snapshot) => {
      
       if(snapshot.val()==null){
        this.errMsg ="INVALID USERNAME";
       }
       else{
          onValue(
            child(dbRef, `users/${this.username}/password`),
            (snapshot) => {
              if(snapshot.val()==this.password){
                this.errMsgP="";    
                onValue(
                    child(dbRef, `users/${this.username}/usertype`),
                    (snapshot) => {
                      if(snapshot.val()=='student'){
                        localStorage.setItem('loggedin', true);
                        localStorage.setItem('loggedas', 'student');
                        this.$router.push('/dashstudent');


                      }
                      else if(snapshot.val()=='company'){
                        localStorage.setItem('loggedin', true);
                        this.$router.push('/dashcompany');
                        localStorage.setItem('loggedas', 'company');
                        localStorage.setItem('curCompUsername', this.username);
                        get(dbRefCompNameSetter).then((snapshot) => { 
                          localStorage.setItem('curComp',snapshot.val());
                        });

                      }
                      },
                    (error) => {
                      console.error(error);
                    }
                  );  
 
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

<script setup>
import backimg from "~/assets/images/backImg.png";



const togglePopup = () => {
  const popup = document.getElementById("popup");
  popup.classList.toggle("visible");
}

const cancelPopup = () => {
  const popup = document.getElementById("popup");
  popup.classList.remove("visible");
}



function redirectPage() {
const employerRadio = document.getElementById("employer");
const studentRadio = document.getElementById("student");

 if (employerRadio.checked) {
   window.location.href = "signupcompany";
} else if (studentRadio.checked) {
  window.location.href = "signupstudent";
  }
}




</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Poppins" , sans-serif;
}
body{
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
padding: 30px;
background-color: #293556; /* change background color */
background-size: cover;
background-position: center center;
}
.background {
background-image: url('~/assets/images/backbg.jpg');
background-size: cover;
filter: blur(5px);
height: 100vh;
width: 100%;
}
.container{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 10px;
max-width: 1000px;
width: 100%;
background: #fff;
padding: 40px 30px;
box-shadow: 0 5px 10px rgba(0,0,0,0.2);
perspective: 2700px;
}
.container .cover{
position: absolute;
border-radius: 30px;
top: 0;
left: 50%;
height: 100%;
width: 50%;
z-index: 98;
transition: all 1s ease;
transform-origin: left;
transform-style: preserve-3d;
}
.container #flip:checked ~ .cover{
transform: rotateY(-180deg);
backface-visibility: hidden;
}
.container .cover .front,
.container .cover .back{
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
}
.cover .back{
transform: rotateY(180deg);
backface-visibility: hidden;
}
.container .cover::before,
.container .cover::after{
content: '';
position: absolute;
height: 100%;
width: 100%;
background: #293556;
opacity: 0.5;
z-index: 12;
}
.container .cover::after{
opacity: 0.3;
transform: rotateY(180deg);
backface-visibility: hidden;
}
.container .cover img{
position: absolute;
height: 100%;
width: 100%;
object-fit: cover;
z-index: 10;
}

.container .cover .text{
position: absolute;
z-index: 130;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
.cover .text .text-1,
.cover .text .text-2{
font-size: 26px;
font-weight: 600;
color: #fff;
text-align: center;
}
.cover .text .text-2{
font-size: 15px;
font-weight: 500;

} 
.container .forms{
height: 100%;
width: 100%;
background: #fff;
}
.container .form-content{
display: flex;
align-items: center;
justify-content: space-between;
}
.form-content .login-form,
.form-content .signup-form{
width: calc(100% / 2 - 25px);
}
.forms .form-content .title{
position: relative;
font-size: 24px;
font-weight: 500;
color: #333;
}
.forms .form-content .title:before{
content: '';
position: absolute;
left: 0;
bottom: 0;
height: 3px;
width: 25px;
background: #293556;
}

.forms .form-content .input-boxes{
margin-top: 30px;
}
.forms .form-content .input-box{
display: flex;
align-items: center;
height: 50px;
width: 100%;
margin: 10px 0;
position: relative;
}
.form-content .input-box input{
height: 100%;
width: 100%;
outline: none;
border: none;
padding: 0 30px;
font-size: 16px;
font-weight: 500;
border-bottom: 2px solid rgba(0,0,0,0.2);
transition: all 0.3s ease;
}
.form-content .input-box input:focus,
.form-content .input-box input:valid{
border-color: #293556;
}
.form-content .input-box i{
position: absolute;
color: #293556;
font-size: 17px;
}
.forms .form-content .text{
font-size: 14px;
font-weight: 500;
color: #333;
}
.forms .form-content .text a{
text-decoration: none;
}
.forms .form-content .text a:hover{
text-decoration: underline;
}
.forms .form-content .button{
color: #fff;
margin-top: 40px;
}
.forms .form-content .button input{
color: #fff;
background: #293556;
border-radius: 6px;
padding: 0;
cursor: pointer;
transition: all 0.4s ease;
}
.forms .form-content .button input:hover{
background: #293556;
}
.forms .form-content label{
color: #293556;
cursor: pointer;
}
.forms .form-content label:hover{
text-decoration: underline;
}
.forms .form-content .login-text,
.forms .form-content .sign-up-text{
text-align: center;
margin-top: 25px;
}
.container #flip{
display: none;
}
@media (max-width: 730px) {
.container .cover{
display: none;
}

}

.radio-group {
display: flex;
margin-bottom: 20px;
}

.radio {
display: inline-flex;
align-items: center;
cursor: pointer;
margin-right: 10px;
}

.radio__input {
display: none;
}

.radio__radio {
width: 1.25em;
height: 1.25em;
border: 2px solid #293556;
border-radius: 50%;
margin-right: 10px;
box-sizing: border-box;
padding: 2px;
}

.radio__radio::after{
content: '';
width: 100%;
height: 100%;
display: block;
background: #293556;
border-radius: 50%;

transform: scale(0);
}

.radio__input:checked +.radio__radio::after{
transform: scale(1);
}

.popup {
position: absolute;
top: 50%;
left: 50%;
opacity: 0%;
transform: translate(-50%, -50%);
width: 380px;
padding: 20px 30px;
background: #fff;
box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.15);
border-radius: 10px;
pointer-events: none;
transition: opacity 0.3s ease-in-out;
}

.popup.visible {
opacity: 1;
pointer-events: auto;
}

.form-element {
display: flex;
justify-content: space-between;
}

.submit-btn {
width: 45%;
height: 40px;
border: none;
outline: none;
font-size: 16px;
background-color: #293556;
color: #fff;
border-radius: 10px;
cursor: pointer;
}

.cancel-btn {
width: 45%;
height: 40px;
border: none;
outline: none;
font-size: 16px;
background-color: #ccc;
color: #293556;
border-radius: 10px;
cursor: pointer;
}

.radio-group {
display: flex;
flex-direction: column;
margin-bottom: 20px;
}


.popup .form .title{
position: relative;
font-size: 24px;
font-weight: 500;
color: #333;

}


</style>
