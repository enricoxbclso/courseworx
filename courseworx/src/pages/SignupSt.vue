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
          <div class="title">Signup</div>
            <div class="input-boxes">
              <div class="input-box">
                <i class="fas fa-user-alt"></i>
                <input type="text" placeholder="First Name" required v-model="fname" id="fname">
              </div>
              <div class="input-box">
                <i class="fas fa-user-alt"></i>
                <input type="text" placeholder="Last Name" required v-model="lname" id="lname">
              </div>
              <div class="input-box">
                <i class="fas fa-calendar"></i>
                <input type="date" placeholder="Birthdate(mm/yy/dd)" required v-model="bday" id="bday">
              </div>
              <div class="input-box">
                <i class="fas fa-envelope"></i>
                <input type="text" placeholder="Email Address" required v-model="email" id="email">
              </div>
              <div class="input-box">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" required v-model="password" id="password">
              </div>
              <form action="login">
              <div class="button input-box">
                <input type="submit" value="Submit">
              </div>
            </form>
              <div class="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
            </div>
    </div>
    </div>
    </div>
    </div>
</template>


<script setup>

// import { ref } from "vue";
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import backimg from "~/assets/images/backImg.png";
import { useRouter} from "vue-router";
const fname = ref("");
const lname = ref("");
const bday = ref("");
const email= ref("");
const password = ref("");  
const errMsg = ref();
const router = useRouter();

const register =() => {
	signInWithEmailAndPassword(getAuth(),fname.value, lname.value, bday.value,email.value, password.value)
	.then((data) =>{
		console.log("Sucessfully registered!");
        router.push("/Login");

		
	})
	.catch((error)=>{
		console.log(error.code);
		switch(error.code) {
		
		case "auth/invalid-email":
		errMsg.value = "INVALID EMAIL!";
		break;
		
		case "auth/user-not-found":
		errMsg.value = "NO ACCOUNT WITH THAT EMAIL IS FOUND";
		break;
		
		case "auth/wrong-password":
		errMsg.value = "INCORRECT PASSWORD";
		break;
		
		default:
		errMsg.value = "Email or Password was incorrect";
		break;

		}

	})
};

const signInWithGoogle = () => {
	

}

// import axios from "axios";

// const name = ref("");
// const pass = ref("");

// async function onLogin() {
//     // const response = await axios.post("http://127.0.0.1:3000/login", {
//     //     user: "asdc",
//     //     pass: "asdcasdcasdcs"
//     // });
// }
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

</style>
