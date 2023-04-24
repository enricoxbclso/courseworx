<template>

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Courseworx</title>
  <link rel="stylesheet" href="style.css" />

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>


  <div class="container">
    <nav>
      <div class="navbar">
         <div class="logo">
          <img src="" alt="">
          <h1>courseworx</h1>
         </div>
         <ul>
          <li><a href="">
            <i class="fas fa-user"></i>
            <span class="nav-item">Profile</span>
          </a>
          </li>
          <li><a href="">
            <i class="fas fa-tasks"></i>
            <span class="nav-item">Jobs Board</span>
          </a>
          </li>
          <li><a href="">
            <i class="fas fa-cog"></i>
            <span class="nav-item">Setting</span>
          </a>
          </li>
          <li><a href="">
            <i class="fas fa-bell"></i>
            <span class="nav-item">Notifications</span>
          </a>
          </li>
          <li><a href="login" class="logout">
            <i class="fas fa-sign-out-alt"></i>
            <span class="nav-item" @click="togglePopup">Logout</span></a>
          </li>
         </ul>
      </div>
    </nav>
    <section class="main">
      <div class="main-top">
        <p>Explore the universe!</p>
      </div>
      <div class="main-body">
        <h1>Recent Jobs</h1>
      <div class="search_bar">
        <input type="search" placeholder="Search job here...">
        <select name="" id="">
          <option value="">Category</option>
          <option value="">Web Development</option>
          <option value="">App Design</option>
          <option value="">UI/UX Design</option>
        </select>

      </div>
      
      <div class="tags_bar">
        <div class="tag">
          <div class="fas fa-times"></div>
            <span>Programming</span>
        </div>
        <div class="tag">
          <div class="fas fa-times"></div>
            <span>Design</span>
        </div>
        <div class="tag">
          <div class="fas fa-times"></div>
            <span>PHP</span>
        </div>
        <div class="tag">
          <div class="fas fa-times"></div>
            <span>JavaScript</span>
        </div>
      </div>
      <div class="row">
          <p>There are more than <span>15</span> Companies affiliated with University of Cebu</p>
          <a href="#">See all</a>
      </div>  

      <div class="comp_card">
        <div class="comp_details">
          <div class="img">
            <i class="fab fa-google-drive"></i>
          </div>
          <div class="text">
            <h2>UX Designer</h2>
            <span>Google Drive - Junior Pos</span>
          </div>
        </div>
        <div class="pos_req">
          <h4>$6.8k - $12.5k/yr</h4>
          <span>1 day ago</span>
        </div>
    </div>

    <div class="comp_card">
        <div class="comp_details">
          <div class="img">
            <i class="fab fa-google-drive"></i>
          </div>
          <div class="text">
            <h2>UX Designer</h2>
            <span>Google Drive - Junior Pos</span>
          </div>
        </div>
        <div class="pos_req">
          <h4>$6.8k - $12.5k/yr</h4>
          <span>1 day ago</span>
        </div>
    </div>

    <div class="comp_card">
        <div class="comp_details">
          <div class="img">
            <i class="fab fa-google-drive"></i>
          </div>
          <div class="text">
            <h2>UX Designer</h2>
            <span>Google Drive - Junior Pos</span>
          </div>
        </div>
        <div class="pos_req">
          <h4>$6.8k - $12.5k/yr</h4>
          <span>1 day ago</span>
        </div>
    </div>

    <div class="comp_card">
        <div class="comp_details">
          <div class="img">
            <i class="fab fa-google-drive"></i>
          </div>
          <div class="text">
            <h2>UX Designer</h2>
            <span>Google Drive - Junior Pos</span>
          </div>
        </div>
        <div class="pos_req">
          <h4>$6.8k - $12.5k/yr</h4>
          <span>1 day ago</span>
        </div>
    </div>

    <div class="comp_card">
        <div class="comp_details">
          <div class="img">
            <i class="fab fa-google-drive"></i>
          </div>
          <div class="text">
            <h2>UX Designer</h2>
            <span>Google Drive - Junior Pos</span>
          </div>
        </div>
        <div class="pos_req">
          <h4>$6.8k - $12.5k/yr</h4>
          <span>1 day ago</span>
        </div>
      </div>
    </div>
    </section>
  </div>

  <!--Profile Popup-->
  <div class="prof-container">
    <div class="container-box">
      <img :src="menu" class="menu-icon">
      <img :src="settings" class="settings-icon">
      <img :src="prof_pic" class="profile_pic">
      <h3>Paul Here</h3>
      <p>A Developer at University of Cebu</p>
      <div class="social-media">
        <img :src="insta" alt="instagram">
        <img :src="telegram" alt="telegram">
        <img :src="dribble" alt="dribble">
      </div>
      <button type="button">Profile</button>
      <div class="profile-bottom">
        <p>Learn more about me!</p>
        <img :src="arrow">
      </div>
    </div> 
  </div>



</template> 

<script setup>

import prof_pic from "~/assets/images/prof_pic.jpg";
import menu from "~/assets/images/menu.png"
import settings from "~/assets/images/setting.png"
import insta from "~/assets/images/instagram.png"
import telegram from "~/assets/images/telegram.png"
import dribble from "~/assets/images/dribble.png"
import arrow from "~/assets/images/arrow.png"

</script>

<style scoped>
/*  import google fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
*{
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
  font-family: "Poppins", sans-serif;
}

body{
  background-color: #293556; 
  background-size: cover;
  background-position: center center;
}
.container{
  display: flex;
  width: 1200px;
  margin: auto;
}

nav{
    position: sticky;
    top: 0;
    left: 0;
    bottom: 0;
    width: 280px;
    height: 100vh;
    background: #fff;
}
.navbar{
  width: 80%;
  margin: 0 auto;  
}
.logo{
  margin: 2rem 0 1rem 0;
  padding-bottom: 3rem;
  display: flex;
  align-items: center;
}
.logo img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.logo h1{
  margin-left: 1rem;
  text-transform: uppercase;
}
ul{
  margin: 0 auto;
}
li{
  padding-bottom: 2rem;
}

li a{
  font-size: 15px;
  color: rgb(85, 83, 83);
}

nav i{
  width: 50px;
  font-size: 18px;
  text-align: center;
}
.logout{
  position: absolute;
  bottom: 20px;
}
/*Main Section */

.main{
  width: 100%;
} 
.main-top{
  width: 100%;
  background: #fff;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgb(43, 43, 43)
}
.main-body{
  padding: 10px 10px 10px 20px;
}

h1{
  margin: 20px 10px;
  font-size: 1.8rem; 
  font-weight: bold;
}

h2{
  font-size: 1.3rem; 
  font-weight: bold;
}

h4{
  font-size: 1rem; 
  font-weight: bold;
}

.search_bar{
  display: flex;
  padding: 10px;
  justify-content: space-between;
}
.search_bar input{
  width: 50%;
  padding: 10px;
  border: 1px solid rgb(190, 190, 190);
}
.search_bar input:focus{
  border: 1px solid blueviolet;
}
.search_bar select{
  border: 1px solid rgb(190, 190, 190);
  padding: 10px;
  margin-left: 2rem;
}
.search_bar .filter{
  width: 300px;
}

.tags_bar{
  width: 55%;
  display: flex;
  padding: 10px;
  justify-content: space-between;
}
.tag{
  background: #fff;
  padding: 10px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
}
.tag i{
  margin-right: 0.7rem;
}
.row{
  display: flex;
  padding: 10px;
  margin: 1.3rem;
  justify-content: space-between;
}
.row p{
  color: rgb(54, 54, 54);
  font-size: 15px;
}
.row p span{
  color: blueviolet;
}
.row a{
  color: blueviolet;
}
.comp_card{
  width: 100%;
  padding: 15px;
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  background: #fff;
  margin-bottom: 15px;
  justify-content: space-between;
  border: 1px solid rgb(190, 190, 190);
  box-shadow: 0 20px 30px rgba( 0, 0, 0, 0.1);
}
.comp_details{
  display: flex;
}
.comp_details .img{
  display: flex;
  justify-content: center;
  align-items: center;
}
.comp_details .img i{
  width: 70px;
  font-size: 3rem;
  margin-left: 1rem;
  padding: 10px;
  color: rgb(82, 22, 138);
  background: rgb(216, 205, 226);
}
.comp_details .text{
  margin-left: 2.3rem;
}
.comp_details .text span{
  color: rgb(116, 112, 112)
}
.pos_req{
  text-align: right;
  color: rgb(54, 54, 54);
}
.comp_card:active{
  border: 2px solid blueviolet;
  transition: 0.4s;
}

/*profile popup */
.prof-container{
    width: 100%;
    height: 100vh;
    opacity: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
}
.container-box{
  background: #293556;
  top: 50%;
  left: 50%;
  text-align: center;
  padding: 40px 90px;
  color: #fff;
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 20px;
}
.prof-container .menu-icon{
  width: 25px;
  position: absolute;
  left: 40px;
  top: 40px;
}

.prof-container .settings-icon{
  width: 25px;
  position: absolute;
  right: 40px;
  top: 40px;
}
.profile_pic{
  width: 150px;
  border-radius: 50%;
  background: #fff;
  padding: 6px;
}
.profile-bottom{
  background: #fff;
  color: #999;
  padding: 60px 0;
  margin-right: -90px;
  margin-left: -90px;
  margin-bottom: -40px;
  border-radius: 20px;
}
.profile-bottom img{
  width: 15px;
  margin-top: 15px;
  cursor: pointer;
}
.prof-container button{
  background: #fff;
  color: #293556;
  border: none;
  outline: none;
  box-shadow: 0 5px 10px rgba( 0, 41, 53, 86);
  padding: 15px 60px;
  border-radius: 30px;
  margin-bottom: -50px;
  font-weight:600;
  font-size: 16px;
}
.container-box h3{
  font-size: 22px;
  margin-top: 20px;
  font-weight: 500;
}
.social-media{
  display: flex;
  flex-wrap: wrap;
}
.social-media img{
  width: 20px;
  margin: 30px 5px;
  cursor: pointer;
  max-width: 100%;
  height: auto;
  margin: 5px;
}
</style>

