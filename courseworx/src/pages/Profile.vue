<template>
<div class="header__wrapper">
      <header></header>
      <div class="cols__container">
        <div class="left__col">
          <div class="img__container">
            <img :src="profile" alt="">
            <span></span>
          </div>
          <h2>Enrico S. Bacalso</h2>
          <p>4th-Year CS Student</p>
          <p>enricoxbclso@gmail.com</p>

          <ul class="about">
            <li><span>10</span>Followers</li>
            <li><span>16</span>Following</li>
            <li><span>4</span>Posts</li>
          </ul>

          <div class="content">
            <p class><span class="head">Skills</span></p>
            <ul class="experience">
                <li>Programming: Java, Python, Javascript,Flutter</li>
                <li>Web Development: HTML, CSS, React.js, Vue.js</li>
                <li>Database: SQL, MongoDB</li>
                <li>Problem-solving & Debugging</li>
            </ul>
            <ul class="socials">
              <li><ion-icon :icon="logoTwitter"></ion-icon></li>
              <ion-icon :icon="logoLinkedin"></ion-icon>
                <ion-icon :icon="logoFacebook"></ion-icon>
                <ion-icon :icon="logoGithub"></ion-icon>
            </ul>
          </div>
        </div>
        <div class="right__col">
          <nav>
            <ul>
              <li><a href="">photos</a></li>
              <li><a href="">posts</a></li>
              <li><a href="">Resume</a></li>
              <li><a href="">about</a></li>
            </ul>
            <button>Edit Profile</button>
          </nav>

          <div class="photos">
            <img :src="photo1" alt="Photo" />
            <img :src="photo2" alt="Photo" />
            <img :src="photo3" alt="Photo" />
            <img :src="photo4" alt="Photo" />
            <img :src="photo5" alt="Photo" />
            <img :src="photo6" alt="Photo" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { IonIcon } from '@ionic/vue';
  import { logoFacebook, logoGithub, logoLinkedin, logoTwitter, logoGithub } from "ionicons/icons";

</script>

<script setup>
  import profile from "~/assets/images/profile.jpg";
  import photo1 from "~/assets/images/photo1.jpg";
  import photo2 from "~/assets/images/photo2.jpeg";
  import photo3 from "~/assets/images/photo3.png";
  import photo4 from "~/assets/images/photo4.jpg";
  import photo5 from "~/assets/images/photo5.png";
  import photo6 from "~/assets/images/photo6.png";
</script>
<style>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
body{
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
}

.header__wrapper header {
  width: 100%;
  background: url("~/assets/images/background.jpg") no-repeat 50% 30% / cover;
  min-height: calc(100px + 15vw);
}

.header__wrapper .cols__container .left__col {
  padding: 25px 20px;
  text-align: center;
  max-width: 350px;
  position: relative;
  margin: 0 auto;
}


.header__wrapper .cols__container .left__col .img__container {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translatex(-50%);
}
.header__wrapper .cols__container .left__col .img__container img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: #fff;
  display: block;
  border: 2px solid #fff;
  box-shadow: 1px 3px 12px rgba(0, 0, 0, 0.18);
}
.header__wrapper .cols__container .left__col .img__container span {
  position: absolute;
  background: #2afa6a;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  bottom: 3px;
  right: 11px;
  border: 2px solid #fff;
}
.header__wrapper .cols__container .left__col h2 {
  margin-top: 60px;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 5px;
}
.header__wrapper .cols__container .left__col p {
  font-size: 0.9rem;
  color: #818181;
  margin: 0;
}
.header__wrapper .cols__container .left__col .about {
  justify-content: space-between;
  position: relative;
  margin: 35px 0;
}
.header__wrapper .cols__container .left__col .about li {
  display: flex;
  flex-direction: column;
  color: #818181;
  font-size: 0.9rem;
}
.header__wrapper .cols__container .left__col .about li span {
  color: #1d1d1d;
  font-weight: 600;
}
.header__wrapper .cols__container .left__col .about:after {
  position: absolute;
  content: "";
  bottom: -16px;
  display: block;
  background: #cccccc;
  height: 1px;
  width: 100%;
}
.header__wrapper .cols__container .content p {
  font-size: 1rem;
  color: #1d1d1d;
  justify-content: left;
  align-items: left;
  line-height: 1.8em;
}
.header__wrapper .cols__container .content .socials {
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
}

.header__wrapper .cols__container .content .experience {
  margin-top: 25px;
}


.header__wrapper .cols__container .content ul li {
  display: flex;
}
.header__wrapper .cols__container .content ul i {
  font-size: 1.3rem;
}
.header__wrapper .cols__container .right__col nav {
  display: flex;
  align-items: center;
  padding: 30px 0;
  justify-content: space-between;
  flex-direction: column;
}
.header__wrapper .cols__container .right__col nav ul {
  display: flex;
  gap: 20px;
  flex-direction: column;
}
.header__wrapper .cols__container .right__col nav ul li a {
  text-transform: uppercase;
  color: #818181;
}
.header__wrapper .cols__container .right__col nav ul li:nth-child(1) a {
  color: #1d1d1d;
  font-weight: 600;
}
.header__wrapper .cols__container .right__col nav button {
  background: #293556;
  color: #fff;
  border: none;
  padding: 10px 25px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}
.header__wrapper .cols__container .right__col nav button:hover {
  opacity: 0.8;
}
.header__wrapper .cols__container .right__col .photos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 20px;
}
.header__wrapper .cols__container .right__col .photos img {
  max-width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
}

/* Responsiveness */

@media (min-width: 868px) {
  .header__wrapper .cols__container {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 50px;
  }
  .header__wrapper .cols__container .left__col {
    padding: 25px 0px;
  }
  .header__wrapper .cols__container .right__col nav ul {
    flex-direction: row;
    gap: 30px;
  }
  .header__wrapper .cols__container .right__col .photos {
    height: 400px;
    padding: 0 0 30px;
  }
}

@media (min-width: 1017px) {
  .header__wrapper .cols__container .left__col {
    margin: 0;
    margin-right: auto;
  }
  .header__wrapper .cols__container .right__col nav {
    flex-direction: row;
  }
  .header__wrapper .cols__container .right__col nav button {
    margin-top: 0;
  }
}


</style>