<template>
  <div class="header__wrapper">
    <header v-if="background" :style="{ backgroundImage: 'url(' + background + ')' }">
      <button class="edit-btn" @click="openFileInput('background')" v-if="!isDefaultCover"><ion-icon :icon="cameraOutline" style="font-size: 1.5em"></ion-icon>Edit Profile</button>
      <div v-else class="upload-placeholder">
        <span class="upload-symbol">+</span>
        <p>Upload a cover photo</p>
      </div>
    </header>
    <div class="cols__container">
      <div class="left__col">
        <div class="img__container" @click="openFileInput('profile')">
          <img :src="profile" alt="">
          <span></span>
        </div>
        <div class="profile">
        <h2>Enrico S. Bacalso</h2>
        <p>4th-Year CS Student</p>
        <p>enricoxbclso@gmail.com</p>
      </div>
      <div>
        <ul class="about">
          <li><span>10</span>Followers</li>
          <li><span>16</span>Following</li>
          <li><span>4</span>Posts</li>
        </ul>
      </div>
      
        <div class="content">
          <p><span class="head">Skills</span></p>
          <ul class="experience">
            <li><b>Programming:</b> Java Python JavaScript Flutter</li>
            <li><b>Web Development:</b> HTML CSS React.js Vue.js</li>
            <li><b>Database:</b> SQL MongoDB</li>
            <li>Problem-solving & Debugging</li>
          </ul>
          <ul class="socials">
            <li><ion-icon :icon="logoTwitter"></ion-icon></li>
            <li><ion-icon :icon="logoLinkedin"></ion-icon></li>
            <li><ion-icon :icon="logoFacebook"></ion-icon></li>
            <li><ion-icon :icon="logoGithub"></ion-icon></li>
          </ul>
        </div>
      </div>
      <div class="right__col">
        <nav>
          <ul>
            <li><a href="#">photos</a></li>
            <li><a href="#">posts</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">about</a></li>
          </ul>
        </nav>
        <div class="add-photo">
           <button class="add-photo-btn" @click="openFileInput('photo')">Add Photo</button>
        </div>
        <div class="photos">
          <div v-for="photo in photos" :key="photo">
            <img :src="photo" alt="Photo">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { IonIcon } from '@ionic/vue';
  import { cameraOutline, logoFacebook, logoGithub, logoLinkedin, logoTwitter} from "ionicons/icons";
  

  const profile = ref("~/assets/images/profile.jpg");
  const background = ref("~/assets/images/background.jpg");
  const photos = ref([]);

  const openFileInput = (target) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", (event) => {
      handleFileUpload(target, event);
    });
    fileInput.click();
  };

  const handleFileUpload = (target, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (target === 'profile') {
          profile.value = reader.result;
        } else if (target === 'background') {
          background.value = reader.result;
        } else if (target === 'photo') {
          photos.value.push(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
</script>


<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }
  .header__wrapper {
  position: relative;
}
  .header__wrapper header {
    min-height: calc(100px + 15vw);
  background-position: 50% 30%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  }

  .header__wrapper .cols__container .left__col {
  padding: 25px 20px;
  max-width: 350px;
  position: relative;
  margin: 0 auto;
}

.profile{
  text-align: center;
}

.edit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  right: 120px;
  background-color: rgba(41, 53, 86, 0.5);
  font-size: 1.1em;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f1f1f1;
}

.upload-symbol {
  font-size: 40px;
  color: #ccc;
}

.upload-btn {
  background: #293556;
  color: #fff;
  border: none;
  padding: 10px 25px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}
  .header__wrapper .cols__container .left__col .img__container {
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
  }

  .header__wrapper .cols__container .left__col .img__container img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
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
    display: flex;
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

  .header__wrapper .cols__container .left__col .about::after {
    position: absolute;
    content: "";
    bottom: -16px;
    display: block;
    background: #cccccc;
    height: 1px;
    width: 100%;
  }

  .header__wrapper .cols__container .content {
  text-align: left;
  margin-top: 25px;
  }
  .header__wrapper .cols__container .content p {
    font-size: 1rem;
    color: #1d1d1d;
    line-height: 1.8em;
  }

  .header__wrapper .cols__container .content .socials {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  }
  .header__wrapper .cols__container .content .head{
    font-weight: bold;
    font-size: 1.2em;
    text-align: left;
  }
  .header__wrapper .cols__container .content .experience {
    margin-top: 25px;
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
  }

  .header__wrapper .cols__container .content .experience li {
    margin-bottom: 10px;
    display: block;
  }

  .header__wrapper .cols__container .content ul li {
    display: flex;
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


  .header__wrapper .cols__container .right__col nav button:hover {
    opacity: 0.8;
  }

  .header__wrapper .cols__container .right__col .photos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 10px;
  }

  .header__wrapper .cols__container .right__col .photos img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  .add-photo-btn {
  border: none;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #293556;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
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
