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
    <div class="signup-form">
          <div class="title">Company Signup</div>
            <div class="input-boxes">
              <div class="input-box">
                <i class="fas fa-user-alt"></i>
                <input type="text" placeholder="Company Name" required v-model="comp_name" id="comp_name">
              </div>
              <div class="input-box">
                <i class="fas fa-user-alt"></i>
                <input type="text" placeholder="Company Address" required v-model="comp_add" id="comp_add">
              </div>
              <div class="input-box">
                <i class="fas fa-user-alt"></i>
                <input type="text" placeholder="Company Type" required v-model="comp_type" id="comp_type">
              </div>
              <div class="input-box">
                <i class="fas fa-envelope"></i>
                <input type="text" placeholder="Username" required v-model="username" id="username">
              </div>
              <div class="input-box">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" required v-model="password" id="password">
              </div>
              <div class="button input-box">
                <input type="submit" value="Submit" @click="togglePopup">
              </div>
              <div class="text sign-up-text">Already have an account? <label for="flip"><a href="/">Login now</a></label></div> 
            </div>
    </div>
    </div>
    </div>
    </div>

<div class="popup" id="popup">
  <div class="conte">
    <div class="close-btn" @click="cancelPopup">X</div>
    <form action="">

      <div class="row">

        <div class="col">

            <h3 class="title">billing address</h3>

            <div class="inputBox">
                <span>Full name :</span>
                <input type="text" placeholder="john deo">
            </div>
            <div class="inputBox">
                <span>Email :</span>
                <input type="email" placeholder="example@example.com">
            </div>
            <div class="inputBox">
                <span>Address :</span>
                <input type="text" placeholder="room - street - locality">
            </div>
            <div class="inputBox">
                <span>City :</span>
                <input type="text" placeholder="Cebu City">
            </div>

                <div class="inputBox">
                    <span>Province :</span>
                    <input type="text" placeholder="Cebu">
                </div>
                <div class="inputBox">
                    <span>Zip Code :</span>
                    <input type="text" placeholder="123 456">
                </div>

        </div>

        <div class="col">

            <h3 class="title">payment</h3>

            <div class="inputBox">
                <span>Cards Accepted :</span>
                <img :src="cards" alt="">
            </div>
            <div class="inputBox">
                <span>Name On Card :</span>
                <input type="text" placeholder="mr. john deo">
            </div>
            <div class="inputBox">
                <span>Credit Card Number :</span>
                <input type="number" placeholder="1111-2222-3333-4444">
            </div>
            <div class="inputBox">
                <span>Exp Month :</span>
                <input type="text" placeholder="january">
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>Exp Year :</span>
                    <input type="number" placeholder="2022">
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder="1234">
                </div>
            </div>

        </div>

    </div>

    <input type="submit" value="Proceed to Checkout" class="submit-btn">

</form>

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
  }
},
created (){
 

},
methods: {

  saveCompanyData(){

    const userIdB = `users/${this.username}`;
    const dbRefcustomersB = ref(db, userIdB);
    
      this.usertype = 'company'
    //Que Information B
                update(dbRefcustomersB, { comp_name: this.comp_name });
                update(dbRefcustomersB, { comp_add: this.comp_add });
                update(dbRefcustomersB, { comp_type: this.comp_type });
                update(dbRefcustomersB, { password: this.password });
                update(dbRefcustomersB, { usertype: this.usertype });



                console.log("this is working")
           
      }
    
  }
}


const togglePopup = () => {
  const popup = document.getElementById("popup");
  popup.classList.toggle("visible");
}

const cancelPopup = () => {
  const popup = document.getElementById("popup");
  popup.classList.remove("visible");
}

</script>


<script setup>

import backimg from "~/assets/images/backImg.png";
import cards from "~/assets/images/card_img.png"

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
  border-radius: 10px;
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
.forms .form-content .signup-text,
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

.form-content h3{
    font-size: 1.3em;
}


.popup {
position: absolute;
top: 40%;
left: 50%;
opacity: 0%;
transform: translate(-50%, -50%);
margin: 0;
padding: 0;
box-sizing: border-box;
outline: none;
border-radius: 20px;
pointer-events: none;
transition: opacity 0.3s ease-in-out;
height: 60vh;
}

.popup.visible {
opacity: 1;
pointer-events: auto;
}

.close-btn {
  position: absolute;
  top: 30px;
  right: 40px;
  cursor: pointer;
  font-size: 20px;
  color: black;
  font-weight: bold;
}

.close-btn:hover {
  color: red;
}
.conte{
  display: flex;
  justify-content: center;
  align-items: center;
  padding:25px;
  background: #293556;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  min-height: 100%;
  min-width:900px;
}

.popup .conte h3{
    font-weight: bold;
}

.popup .conte {
display: flex;
justify-content: space-between;
align-items: flex-start;
padding: 25px;
min-width:900px;
}

.conte form{
  padding:20px;
  min-width:900px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
}

.conte form .row{
  display: row;
  flex-wrap: wrap;
  gap: 15px;
}


.popup .col {
  flex: 0 0 calc(50% - 15px)
}

.conte form .row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.conte form .row .col .title{
  font-size: 20px;
  color:#333;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.conte form .row .col .inputBox{
  margin:15px 0;
  width: 100%;
}

.conte form .row .col .inputBox span{
  margin-bottom: 10px;
  display: block;
}

.conte form .row .col .inputBox input{
  width: 100%;
  border:1px solid #ccc;
  padding:10px 15px;
  font-size: 15px;
  text-transform: none;
  border-radius: 5px;
}

.conte form .row .col .inputBox input:focus{
  border:1px solid #000;
}

.conte form .row .col .flex{
  display: flex;
  gap:15px;
}

.conte form .row .col .flex .inputBox{
  margin-top: 5px;
}

.conte form .row .col .inputBox img{
  height: 34px;
  margin-top: 5px;
  filter: drop-shadow(0 0 1px #000);
}

.conte form .submit-btn{
  width: 100%;
  padding:12px;
  font-size: 17px;
  background: #293556;
  color:#fff;
  margin-top: 5px;
  cursor: pointer;
  border-radius: 5px;
  
}

.conte form .submit-btn:hover{
  background: #ccc;
  color: #293556;
}

</style>


