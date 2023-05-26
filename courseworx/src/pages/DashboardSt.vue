<template>
  <div>
    <title>Welcome to Courseworx</title>
      <div class="container">
        <!-- =============== Navigation ================ -->
        <div class="navigation">
          <ul>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="item.icon"></ion-icon>
                </span>
                <h1 class="maintitle">COURSEWORX</h1>
              </a>
            </li>

            <li>
              <a href="#" @click="activeTab = 'home'">
                <span class="icon">
                  <ion-icon :icon="homeOutline"></ion-icon>
                </span>
                <span class="title">Home</span>
              </a>
            </li>

            <li>
              <a href="#" @click="activeTab = 'application'">
                <span class="icon">
                  <ion-icon :icon="peopleOutline"></ion-icon>
                </span>
                <span class="title">Your Application</span>
              </a>  
            </li>

            <li>
              <a href="#" @click="activeTab = 'messages'">
                <span class="icon">
                  <ion-icon :icon="chatbubbleOutline"></ion-icon>
                </span>
                <span class="title">Messages</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon :icon="helpOutline"></ion-icon>
                </span>
                <span class="title">Track Progress</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon :icon="logOutOutline"></ion-icon>
                </span>
                <span class="title">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- ========================= Top Navigation & search ==================== -->
      <div class="main">
        <div class="topbar">
          <div class="toggle" @click="toggleNavigation">
            <ion-icon :icon="menuOutline"></ion-icon>
          </div>

          <div class="search">
            <input type="text" placeholder="Search here">
            <button class='btn-search'><ion-icon :icon="searchOutline"></ion-icon></button>
          </div>

          <div class="user">
            <img :src="prof_pic" alt="">
          </div>
        </div>

       
        <!-- ======================= HOME CONTENT ================== -->
        <div v-if="activeTab === 'home'">

          <div class="welcome-text">
           Hello,<span>Enrico!</span>
        </div>

        <div class="recommendation-text">
           Top Employers
        </div>
          <div class="cardBox">
                <div class="card1">
                    <div>
                        <div class="numbers">Google</div>
                        <div class="cardName">50 hires</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                <div class="card1">
                    <div>
                        <div class="numbers">CodeChamp</div>
                        <div class="cardName">40 hires</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>

                <div class="card1">
                    <div>
                        <div class="numbers">Twitter</div>
                        <div class="cardName">Co</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                </div>

                <div class="card1">
                    <div>
                        <div class="numbers">$7,842</div>
                        <div class="cardName">Earning</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div>
            </div>

            <div class="recommendation-text">                                                                                                                                                                         
              Job Recommendations for you!
            </div>  
                      <!--wrapper-->
                      <div class = 'wrapper'>
                          <div class="card">
                            <div class="card-left blue-bg">
                              <img :src="google" alt="Company Logo">
                            </div>  
                            <div class="card-center">
                              <h3></h3>
                              <p class="card-detail"><b><ul>Company Name:</ul></b>{{ ojtCompT }}</p>
                              <p class="card-detail"><b><ul>Position:</ul></b>{{ ojtPosT }}</p>
                              <p class="card-loc-app"><ion-icon :icon="locationOutline"></ion-icon>{{ ojtJobLocT }}</p>
                              <div class="card-sub">
                                <p><ion-icon :icon="peopleOutline"></ion-icon></p>
                                <p><ion-icon :icon="hourglassOutline"></ion-icon>{{ ojtDurT }}hour/s</p>
                              </div>
                              <div class="card-salary">
                                <p><b>OJT Position Requirements:</b><span>{{ ojtPosReqT }}</span></p>
                              </div>
                            </div>
                            <div class="card-right">
                              <div class="card-tag">
                                <h5>Job Description</h5>
                                <p>{{ ojtDescT }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                 <!--wrapper-->
                    <!--2wrapper-->
                    <div class = 'wrapper'>
                          <div class="card">
                            <div class="card-left blue-bg">
                              <img :src="google" alt="Company Logo">
                            </div>  
                            <div class="card-center">
                              <h3></h3>
                              <p class="card-detail"><b><ul>Company Name:</ul></b>{{ ojtCompT2 }}</p>
                              <p class="card-detail"><b><ul>Position:</ul></b>{{ ojtPosT2 }}</p>
                              <p class="card-loc-app"><ion-icon :icon="locationOutline"></ion-icon>{{ ojtJobLocT2 }}</p>
                              <div class="card-sub">
                                <p><ion-icon :icon="peopleOutline"></ion-icon></p>
                                <p><ion-icon :icon="hourglassOutline"></ion-icon>{{ ojtDurT2 }}hour/s</p>
                              </div>
                              <div class="card-salary">
                                <p><b>OJT Position Requirements:</b><span>{{ ojtPosReqT2 }}</span></p>
                              </div>
                            </div>
                            <div class="card-right">
                              <div class="card-tag">
                                <h5>Job Description</h5>
                                <p>{{ ojtDescT2 }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                 <!--wrapper-->
                    <!--3wrapper-->
                    <div class = 'wrapper'>
                          <div class="card">
                            <div class="card-left blue-bg">
                              <img :src="google" alt="Company Logo">
                            </div>  
                            <div class="card-center">
                              <h3></h3>
                              <p class="card-detail"><b><ul>Company Name:</ul></b>{{ ojtCompT3 }}</p>
                              <p class="card-detail"><b><ul>Position:</ul></b>{{ ojtPosT3 }}</p>
                              <p class="card-loc-app"><ion-icon :icon="locationOutline"></ion-icon>{{ ojtJobLocT3 }}</p>
                              <div class="card-sub">
                                <p><ion-icon :icon="peopleOutline"></ion-icon></p>
                                <p><ion-icon :icon="hourglassOutline"></ion-icon>{{ ojtDurT3 }}hour/s</p>
                              </div>
                              <div class="card-salary">
                                <p><b>OJT Position Requirements:</b><span>{{ ojtPosReqT3 }}</span></p>
                              </div>
                            </div>
                            <div class="card-right">
                              <div class="card-tag">
                                <h5>Job Description</h5>
                                <p>{{ ojtDescT3 }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                 <!--wrapper-->
                    <!--4wrapper-->
                    <div class = 'wrapper'>
                          <div class="card">
                            <div class="card-left blue-bg">
                              <img :src="google" alt="Company Logo">
                            </div>  
                            <div class="card-center">
                              <h3></h3>
                              <p class="card-detail"><b><ul>Company Name:</ul></b>{{ ojtCompT4 }}</p>
                              <p class="card-detail"><b><ul>Position:</ul></b>{{ ojtPosT4 }}</p>
                              <p class="card-loc-app"><ion-icon :icon="locationOutline"></ion-icon>{{ ojtJobLocT4 }}</p>
                              <div class="card-sub">
                                <p><ion-icon :icon="peopleOutline"></ion-icon></p>
                                <p><ion-icon :icon="hourglassOutline"></ion-icon>{{ ojtDurT4 }}hour/s</p>
                              </div>
                              <div class="card-salary">
                                <p><b>OJT Position Requirements:</b><span>{{ ojtPosReqT4 }}</span></p>
                              </div>
                            </div>
                            <div class="card-right">
                              <div class="card-tag">
                                <h5>Job Description</h5>
                                <p>{{ ojtDescT4 }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                 <!--wrapper-->
                    <!--5wrapper-->
                    <div class = 'wrapper'>
                          <div class="card">
                            <div class="card-left blue-bg">
                              <img :src="google" alt="Company Logo">
                            </div>  
                            <div class="card-center">
                              <h3></h3>
                              <p class="card-detail"><b><ul>Company Name:</ul></b>{{ ojtCompT5 }}</p>
                              <p class="card-detail"><b><ul>Position:</ul></b>{{ ojtPosT5 }}</p>
                              <p class="card-loc-app"><ion-icon :icon="locationOutline"></ion-icon>{{ ojtJobLocT5 }}</p>
                              <div class="card-sub">
                                <p><ion-icon :icon="peopleOutline"></ion-icon></p>
                                <p><ion-icon :icon="hourglassOutline"></ion-icon>{{ ojtDurT5 }}hour/s</p>
                              </div>
                              <div class="card-salary">
                                <p><b>OJT Position Requirements:</b><span>{{ ojtPosReqT5 }}</span></p>
                              </div>
                            </div>
                            <div class="card-right">
                              <div class="card-tag">
                                <h5>Job Description</h5>
                                <p>{{ ojtDescT5 }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                 <!--wrapper-->
                 

  
                
            </div> 
            <div>
      <!-- ======================= YOUR APPLICATION ================== -->  
      <div class="content" v-if="activeTab === 'application'">  
      <div class="wrapper">

                     <div class="record-header">
                        <div class="add">
                            <span>Manage Your Applications</span>
                        </div>

                        <div class="browse">
                           <input type="search" placeholder="Search" class="record-search">
                            <select name="" id="">
                                <option value="">Applied Date</option>
                                <option value="">Company Name</option>
                                <option value="">Status</option>
                            </select>
                        </div>
                    </div>

                  <div class="card">
                      <div class="card-left blue-bg">
                          <img :src="google">
                      </div>
                      <div class="card-center">
                        <h3>Google</h3>
                          <p class="card-detail"><b>Position:</b> IT/CS OJT Intern</p>
                          <p class="card-loc-app"><ion-icon :icon="locationOutline"></ion-icon>Colon Street, Cebu City</p>
                            <div class="card-sub">
                              <p>Date Applied: 2 hours ago</p>
                              <p><ion-icon :icon="peopleOutline"></ion-icon>OJT Position</p>
                              <p><ion-icon :icon="hourglassOutline"></ion-icon>:100 hours</p>
                            </div>
                            <div class="card-salary">
                              <p><b>OJT Position Requirements:</b><span>School ID</span></p>
                          </div>
                      </div>
                      <div class="card-right">
                          <div class="card-tag">
                            <h5>Job Description</h5>
                            <p>We are seeking IT/CS OJT Interns to join our team at XYZ Tech Solutions. As an OJT Intern, you will have the opportunity to gain practical experience and apply your knowledge in a professional IT environment. You will work closely with our experienced IT professionals on various projects, contributing to the development, implementation, and maintenance of IT systems and solutions. 
                              This is an excellent opportunity to enhance your skills, expand your knowledge, and kick-start your career in the IT industry.</p>
                          </div>
                      </div><!--card-right-->
                  </div><!--card-->
                  </div><!--wrapper-->
            </div>
            <!-----------------MESSAGES---------------->
                      <div class="content" v-if="activeTab === 'messages'">     
                       
                      </div>
            </div>
          </div>
      </div>
      </template> 


<script>
import { IonIcon } from '@ionic/vue';
import { add, cartOutline, chatbubbleOutline, eyeOutline, helpOutline, homeOutline, lockClosedOutline, logOutOutline, peopleOutline, searchOutline, settingsOutline, cashOutline, menuOutline, locationOutline, todayOutline, hourglassOutline, closeCircleOutline } from 'ionicons/icons';
import { mapGetters } from "vuex";

import { push } from "firebase/database";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, child, get, update, onValue, } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyBau35ju8XAdFN5em6h7HjPAhpf3pL5wSE",
authDomain: "courseworx-454d2.firebaseapp.com",
databaseURL: "https://courseworx-454d2-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "courseworx-454d2",
storageBucket: "courseworx-454d2.appspot.com",
messagingSenderId: "561114332314",
appId: "1:561114332314:web:0b4cabbaffea89b0113323"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export default {
  components: { IonIcon },

  props: {
    jobListings: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    ...mapGetters(["getJobListings"]),
    getJobListings() {
    return this.jobListings;
  }
  },

  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
    toggleNavigation() {
      const navigation = document.querySelector('.navigation');
      const main = document.querySelector('.main');

      navigation.classList.toggle('active');
      main.classList.toggle('active');
    }
  },

  data() {
    return {
      add,
      cartOutline,
      chatbubbleOutline,
      eyeOutline,
      helpOutline,
      homeOutline,
      lockClosedOutline,
      logOutOutline,
      peopleOutline,
      searchOutline,
      settingsOutline,
      cashOutline,
      menuOutline,
      locationOutline,
      todayOutline,
      hourglassOutline,
      activeTab: 'home',
      ojtCompT:'',
      ojtDescT:'',
      ojtDurT:'',
      ojtJobLocT:'',
      ojtPosT:'',
      ojtPosReqT:'',
      ojtCompT2:'',
      ojtDescT2:'',
      ojtDurT2:'',
      ojtJobLocT2:'',
      ojtPosT2:'',
      ojtPosReqT2:'',
      ojtCompT3:'',
      ojtDescT3:'',
      ojtDurT3:'',
      ojtJobLocT3:'',
      ojtPosT3:'',
      ojtPosReqT3:'',
      ojtCompT4:'',
      ojtDescT4:'',
      ojtDurT4:'',
      ojtJobLocT4:'',
      ojtPosT4:'',
      ojtPosReqT4:'',
      ojtCompT5:'',
      ojtDescT5:'',
      ojtDurT5:'',
      ojtJobLocT5:'',
      ojtPosT5:'',
      ojtPosReqT5:''

    };
  },
  created(){
    const dbRef = ref(db);

      onValue(child(dbRef, `allJobList/1`),
      (snapshot) => {
          onValue(child(dbRef, `allJobList/1/ojtComp`),(snapshot) => { this.ojtCompT = snapshot.val() });
          onValue(child(dbRef, `allJobList/1/ojtDesc`),(snapshot) => {this.ojtDescT = snapshot.val() });
          onValue(child(dbRef, `allJobList/1/ojtDur`),(snapshot) => { this.ojtDurT = snapshot.val() });
          onValue(child(dbRef, `allJobList/1/ojtJobLoc`),(snapshot) => { this.ojtJobLocT = snapshot.val()});
          onValue(child(dbRef, `allJobList/1/ojtPos`),(snapshot) => { this.ojtPosT = snapshot.val()});
          onValue(child(dbRef, `allJobList/1/ojtPosReq`),(snapshot) => { this.ojtPosReqT = snapshot.val()});

      });
      onValue(child(dbRef, `allJobList/2`),
      (snapshot) => {
          onValue(child(dbRef, `allJobList/2/ojtComp`),(snapshot) => { this.ojtCompT2 = snapshot.val() });
          onValue(child(dbRef, `allJobList/2/ojtDesc`),(snapshot) => {this.ojtDescT2 = snapshot.val() });
          onValue(child(dbRef, `allJobList/2/ojtDur`),(snapshot) => { this.ojtDurT2 = snapshot.val() });
          onValue(child(dbRef, `allJobList/2/ojtJobLoc`),(snapshot) => { this.ojtJobLocT2 = snapshot.val()});
          onValue(child(dbRef, `allJobList/2/ojtPos`),(snapshot) => { this.ojtPosT2 = snapshot.val()});
          onValue(child(dbRef, `allJobList/2/ojtPosReq`),(snapshot) => { this.ojtPosReqT2 = snapshot.val()});

      });
      onValue(child(dbRef, `allJobList/3`),
      (snapshot) => {
          onValue(child(dbRef, `allJobList/3/ojtComp`),(snapshot) => { this.ojtCompT3 = snapshot.val() });
          onValue(child(dbRef, `allJobList/3/ojtDesc`),(snapshot) => {this.ojtDescT3 = snapshot.val() });
          onValue(child(dbRef, `allJobList/3/ojtDur`),(snapshot) => { this.ojtDurT3 = snapshot.val() });
          onValue(child(dbRef, `allJobList/3/ojtJobLoc`),(snapshot) => { this.ojtJobLocT3 = snapshot.val()});
          onValue(child(dbRef, `allJobList/3/ojtPos`),(snapshot) => { this.ojtPosT3 = snapshot.val()});
          onValue(child(dbRef, `allJobList/3/ojtPosReq`),(snapshot) => { this.ojtPosReqT3 = snapshot.val()});

      });
      onValue(child(dbRef, `allJobList/4`),
      (snapshot) => {
          onValue(child(dbRef, `allJobList/4/ojtComp`),(snapshot) => { this.ojtCompT4 = snapshot.val() });
          onValue(child(dbRef, `allJobList/4/ojtDesc`),(snapshot) => {this.ojtDescT4 = snapshot.val() });
          onValue(child(dbRef, `allJobList/4/ojtDur`),(snapshot) => { this.ojtDurT4 = snapshot.val() });
          onValue(child(dbRef, `allJobList/4/ojtJobLoc`),(snapshot) => { this.ojtJobLocT4 = snapshot.val()});
          onValue(child(dbRef, `allJobList/4/ojtPos`),(snapshot) => { this.ojtPosT4 = snapshot.val()});
          onValue(child(dbRef, `allJobList/4/ojtPosReq`),(snapshot) => { this.ojtPosReqT4 = snapshot.val()});

      });
      onValue(child(dbRef, `allJobList/5`),
      (snapshot) => {
          onValue(child(dbRef, `allJobList/5/ojtComp`),(snapshot) => { this.ojtCompT5 = snapshot.val() });
          onValue(child(dbRef, `allJobList/5/ojtDesc`),(snapshot) => {this.ojtDescT5 = snapshot.val() });
          onValue(child(dbRef, `allJobList/5/ojtDur`),(snapshot) => { this.ojtDurT5 = snapshot.val() });
          onValue(child(dbRef, `allJobList/5/ojtJobLoc`),(snapshot) => { this.ojtJobLocT5 = snapshot.val()});
          onValue(child(dbRef, `allJobList/5/ojtPos`),(snapshot) => { this.ojtPosT5 = snapshot.val()});
          onValue(child(dbRef, `allJobList/5/ojtPosReq`),(snapshot) => { this.ojtPosReqT5 = snapshot.val()});

      });


  }
};
</script>




  <style>
  /* =========== Google Fonts ============ */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
  /* =============== Globals ============== */
  * {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --blue: #293556;
    --white: #FFF;
    --gray: #f5f5f5;
    --black1: #222;
    --black2: #999;
  }
  .maintitle{
    font-size: rem;
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    text-align: start;
    white-space: nowrap;
  }
  .container {
    position: relative;
    width: 100%;
  }
/* =============== TABBING CONTENT ================ */  

  /* =============== Navigation ================ */
.navigation {
  position: fixed;
  width: 300px;
  height: 100%;
  background: var(--blue);
  border-left: 10px solid var(--blue);
  transition: 0.5s;
  overflow: hidden;
}
.navigation.active {
  width: 80px;
}

.navigation ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.navigation ul li {
  position: relative;
  width: 100%;
  list-style: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.navigation ul li:hover,
.navigation ul li.hovered {
  background-color: #E9edf2;
}

.navigation ul li:nth-child(1) {
  margin-bottom: 40px;
  pointer-events: none;
}

.navigation ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: var(--white);
}
.navigation ul li:hover a,
.navigation ul li.hovered a {
  color: var(--blue);
}

.navigation ul li a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 75px;
  text-align: center;
}
.navigation ul li a .icon ion-icon {
  font-size: 1.75rem;
}

.navigation ul li a .title {
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  line-height: 60px;
  text-align: start;
  white-space: nowrap;
}

/* --------- curve outside ---------- */
.navigation ul li:hover a::before,
.navigation ul li.hovered a::before {
  content: "";
  position: absolute;
  right: 0;
  top: -50px;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 35px 35px 0 10px #E9edf2;
  pointer-events: none;
}
.navigation ul li:hover a::after,
.navigation ul li.hovered a::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -50px;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 35px -35px 0 10px #E9edf2;
  pointer-events: none;
}

  
  /* ===================== Main ===================== */
  .main {
    position: absolute;
    width: calc(100% - 300px);
    left: 300px;
    min-height: 100vh;
    background: #E9edf2;
    transition: 0.5s;
    overflow: hidden;
  }
  .main.active {
    width: calc(100% - 80px);
    left: 80px;
  }
  
  .filter-wrapper .header {
  font-weight: 600;
  font-size: 1.5em;
  }

  .filter-wrapper .reco{
    font-size: 1.5em;
    font-weight: 800;
  }
  .welcome {
    position: relative;
    padding-left: 50px;
    margin: 1rem 0;
    font-size: 14px;
  }
  .topbar {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
  
  .toggle {
    position: relative;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    cursor: pointer;
  }
  
  .search {
    width: 50%;
    display: flex;
    justify-content: space-between;
    border: none;
    background-color: none;
    border-radius: 20px; 
    padding: 0.5rem 1rem;
    position: relative;
    background: #fff;
  }
  
  .search input{
    width: 90%;
    border: none;
  }
  .search .btn-search{
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    padding: 0 5%;
    border: none;
    background-color: #293556;
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
  }
  
  .btn-search:hover{
    background-color: #E9edf2;
    color: #293556;
  }
  .search label {
    position: relative;
    width: 100%;
  }
  
  .search label input {
    width: 100%;
    height: 40px;
    border-radius: 40px;
    padding: 5px 20px;
    padding-left: 35px;
    font-size: 18px;
    outline: none;
    border: 1px solid var(--black2);
  }
  
  .search label ion-icon {
    position: absolute;
    top: 0;
    left: 10px;
    font-size: 1.2rem;
  }
  
  .user {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
  
  .user img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* ======================= Cards ====================== */

.welcome-text{
  font-size: 1.6em;
  font-weight: 600;
  text-align: left;
  color: #999;
  margin-left: 20px;
}

.welcome-text span{
  color: #293556;
}

.welcome-text::before{
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 25px;
  background: #293556;
}
  .recommendation-text {
  font-size: 1em;
  font-weight: 600;
  text-align: left;
  margin-top: 10px;
  margin-left: 20px;
}
.cardBox {
  position: relative;
  width: 100%;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}

.cardBox .card1 {
  position: relative;
  background: var(--white);
  padding: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
}

.cardBox .card1 .numbers {
  position: relative;
  font-weight: 500;
  font-size: 2.5rem;
  color: var(--blue);
}

.cardBox .card1 .cardName {
  color: var(--black2);
  font-size: 1.1rem;
  margin-top: 5px;
}

.cardBox .card1 .iconBx {
  font-size: 3.5rem;
  color: var(--black2);
}

.cardBox .card1:hover {
  background: var(--blue);
}
.cardBox .card1:hover .numbers,
.cardBox .card1:hover .cardName,
.cardBox .card1:hover .iconBx {  
  color: #fff;
}
  /* ================== JOB RECO ============== */
  .wrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 1rem;
    overflow-y: auto;
  }
  
  .card{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    padding: 3%;
    margin: 0 1%;
    background-color: white;
    line-height: 1.5;
    gap: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border: 10px;
    cursor: pointer;
  }
  
  .card-left{
    width: 10%;
    min-width: 50px;
    display: flex;
    justify-content: center;
    border: 20%;
  }
  
  .card-left img{
    width: 100%;
    height: auto;
    min-height: 60px;
    padding: 1rem;
  }
  
  .card:hover{
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  
  .wrapper .card .card-center h3{
    font-size: larger;
    font-weight: 600;
  }
  .card-center{
    width: 50%;
  }
  .wrapper .card .card-center h3{
    font-size: larger;
    font-weight: 600;
  }
  .card-detail{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .card-loc{
    font-size: 13px;
    color: darkgrey;
    margin-bottom: 5px;
  }
  
  .card-sub{
    display: flex;
    flex-wrap: wrap;
    color: #222;
  }
  
  .card-sub p{
    display: flex;
    padding: 0 0.5rem 0 0;
    padding-left: 0.25rem;
    align-items: center;

  }
  
  .card-salary{
    padding: 0.5rem 0;
    color: #293556;
  }
  .card-salary span{
    color: #222;
    font-size: 15px
  }
  
  .card-right{
    width: 15%;
  }
  .card-tag a{
    color: darkgrey;
    font-size: 18px;
  }
  
  h5{
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
  }
  
  .blue-bg{
    background: #93CAED;
    border-radius: 20px;
  }



   /* ================== MANAGE APPLICATION============== */
  .card{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    padding: 3%;
    margin: 0 1%;
    background-color: white;
    line-height: 1.5;
    gap: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border: 10px;
    cursor: pointer;
    border-radius: 20px;
  }
  
  .card-left{
    width: 10%;
    min-width: 50px;
    display: flex;
    justify-content: center;
    border: 20%;
  }
  
  .card-left img{
    width: 100%;
    height: auto;
    min-height: 60px;
    padding: 1rem;
  }
  
  .card:hover{
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  
  .wrapper .card .card-center h3{
    font-size: larger;
    font-weight: 600;
  }
  .card-center{
    width: 50%;
  }
  .wrapper .card .card-center h3{
    font-size: larger;
    font-weight: 600  ;
  }
  .card-detail{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .card-loc-app{
    color: darkgrey;
    margin-bottom: 5px;
  }
  
  .card-sub p{
    display: flex;
    padding: 0 0.5rem 0 0;
    padding-left: 0.25rem;
    align-items: center;

  }
  
  .card-salary{
    padding: 0.5rem 0;
    color: #293556;
  }
  .card-salary span{
    color: #222;
    font-size: 15px
  }
  
  .card-right{
    width: 35%;
  }
  .card-right button{
    
    background: #293556;
    color: #fff;
    height: 37px;
    border-radius: 7px;
    padding: 0rem 1rem;
    border: none;
    font-weight: 600;
  }
  .card-sub{
    display: flex;
    flex-wrap: wrap;
    color: #222;
  }

  .card-tag p{
    font-size: 18px;
    text-align: justify;
  }
  
  h5{
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
  }
  
  .blue-bg{
    background: #93CAED;
    border-radius: 20px;
  }

  /*<--------------------STATUSES------------------------> */
  .status.delivered {
    padding: 2px 4px;
    background: #8de02c;
    color: var(--white);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
  }
  .status.pending {
    padding: 2px 4px;
    background: #e9b10a;
    color: var(--white);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
  }
  .status.return {
    padding: 2px 4px;
    background: #f00;
    color: var(--white);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
  }
  .status.inProgress {
    padding: 2px 4px;
    background: #1795ce;
    color: var(--white);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
  }
  
  .recentCustomers {
    position: relative;
    display: grid;
    min-height: 500px;
    padding: 20px;
    background: var(--white);
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
  }
  .recentCustomers .imgBx {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    overflow: hidden;
  }
  .recentCustomers .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .recentCustomers table tr td {
    padding: 12px 10px;
  }
  .recentCustomers table tr td h4 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2rem;
  }
  .recentCustomers table tr td h4 span {
    font-size: 14px;
    color: var(--black2);
  }
  .recentCustomers table tr:hover {
    background: var(--blue);
    color: var(--white);
  }
  .recentCustomers table tr:hover td h4 span {
    color: var(--white);
  }
  
  /*========================== Job Applications================================= */
  .record-header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.add, .browse {
    display: flex;
    align-items: center;
}

.add span {
    display: inline-block;
    margin-right: .6rem;
    font-size: 1rem;
    color: #666;
}

input, button, select {
    outline: none;
}

.add select, .browse input, .browse select {
    height: 35px;
    border: 1px solid #b0b0b0;
    border-radius: 5px;
    display: inline-block;
    width: 75px;
    padding: 0rem .5rem;
    margin-right: .8rem;
    color: #666;
}

.browse button {
    background: #293556;
    color: #fff;
    height: 37px;
    border-radius: 7px;
    padding: 0rem 1rem;
    border: none;
    margin-right: auto;
    font-weight: 600;
}

.browse input {
    width: 150px;
}

.browse select {
    width: 200px;
}

/* ===============================MESSAGES======================================*/
.discussions {
  width: 35%;
  height: 700px;
  box-shadow: 0px 8px 10px rgba(0,0,0,0.20);
  overflow: hidden;
  background-color: #87a3ec;
  display: inline-block;
}

.discussions .discussion {
  width: 100%;
  height: 90px;
  background-color: #FAFAFA;
  border-bottom: solid 1px #E0E0E0;
  display:flex;
  align-items: center;
  cursor: pointer;
}

.discussions .search {
  display:flex;
  align-items: center;
  justify-content: center;
  color: #E0E0E0;
}

.discussions .search .searchbar {
  height: 40px;
  background-color: #FFF;
  width: 70%;
  padding: 0 20px;
  border-radius: 50px;
  border: 1px solid #EEEEEE;
  display:flex;
  align-items: center;
  cursor: pointer;
}

.discussions .search .searchbar input {
  margin-left: 15px;
  height:38px;
  width:100%;
  border:none;
  font-family: 'Montserrat', sans-serif;;
}

.discussions .search .searchbar *::-webkit-input-placeholder {
    color: #E0E0E0;
}
.discussions .search .searchbar input *:-moz-placeholder {
    color: #E0E0E0;
}
.discussions .search .searchbar input *::-moz-placeholder {
    color: #E0E0E0;
}
.discussions .search .searchbar input *:-ms-input-placeholder {
    color: #E0E0E0;
}

.discussions .message-active {
  width: 98.5%;
  height: 90px;
  background-color: #FFF;
  border-bottom: solid 1px #E0E0E0;
}

.discussions .discussion .photo {
    margin-left:20px;
    display: block;
    width: 45px;
    height: 45px;
    background: #E6E7ED;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.online {
  position: relative;
  top: 30px;
  left: 35px;
  width: 13px;
  height: 13px;
  background-color: #8BC34A;
  border-radius: 13px;
  border: 3px solid #FAFAFA;
}

.desc-contact {
  height: 43px;
  width:50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.discussions .discussion .name {
  margin: 0 0 0 20px;
  font-family:'Montserrat', sans-serif;
  font-size: 11pt;
  color:#515151;
}

.discussions .discussion .message {
  margin: 6px 0 0 20px;
  font-family:'Montserrat', sans-serif;
  font-size: 9pt;
  color:#515151;
}

.timer {
  margin-left: 15%;
  font-family:'Open Sans', sans-serif;
  font-size: 11px;
  padding: 3px 8px;
  color: #BBB;
  background-color: #FFF;
  border: 1px solid #E5E5E5;
  border-radius: 15px;
}

.chat {
  width: calc(65% - 85px);
}

.header-chat {
  background-color: #FFF;
  height: 90px;
  box-shadow: 0px 3px 2px rgba(0,0,0,0.100);
  display:flex;
  align-items: center;
}

.chat .header-chat .icon {
  margin-left: 30px;
  color:#515151;
  font-size: 14pt;
}

.chat .header-chat .name {
  margin: 0 0 0 20px;
  text-transform: uppercase;
  font-family:'Montserrat', sans-serif;
  font-size: 13pt;
  color:#515151;
}

.chat .header-chat .right {
  position: absolute;
  right: 40px;
}

.chat .messages-chat {
  padding: 25px 35px;
}

.chat .messages-chat .message {
  display:flex;
  align-items: center;
  margin-bottom: 8px;
}

.chat .messages-chat .message .photo {
    display: block;
    width: 45px;
    height: 45px;
    background: #E6E7ED;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.chat .messages-chat .text {
  margin: 0 35px;
  background-color: #f6f6f6;
  padding: 15px;
  border-radius: 12px;
}

.text-only {
  margin-left: 45px;
}

.time {
  font-size: 10px;
  color:lightgrey;
  margin-bottom:10px;
  margin-left: 85px;
}

.response-time {
  float: right;
  margin-right: 40px !important;
}

.response {
  float: right;
  margin-right: 0px !important;
  margin-left:auto; /* flexbox alignment rule */
}

.response .text {
  background-color: #e3effd !important;
}

.footer-chat {
  width: calc(65% - 66px);
  height: 80px;
  display:flex;
  align-items: center;
  position:absolute;
  bottom: 0;
  background-color: transparent;
  border-top: 2px solid #EEE;
  
}

.chat .footer-chat .icon {
  margin-left: 30px;
  color:#C0C0C0;
  font-size: 14pt;
}

.chat .footer-chat .send {
  color:#fff;
  background-color: #4f6ebd;
  position: absolute;
  right: 50px;
  padding: 12px 12px 12px 12px;
  border-radius: 50px;
  font-size: 14pt;
}

.chat .footer-chat .name {
  margin: 0 0 0 20px;
  text-transform: uppercase;
  font-family:'Montserrat', sans-serif;
  font-size: 13pt;
  color:#515151;
}

.chat .footer-chat .right {
  position: absolute;
  right: 40px;
}

.write-message {
  border:none !important;
  width:60%;
  height: 50px;
  margin-left: 20px;
  padding: 10px;
}

.footer-chat *::-webkit-input-placeholder {
  color: #C0C0C0;
  font-size: 13pt;
}
.footer-chat input *:-moz-placeholder {
  color: #C0C0C0;
  font-size: 13pt;
}
.footer-chat input *::-moz-placeholder {
  color: #C0C0C0;
  font-size: 13pt;
  margin-left:5px;
}
.footer-chat input *:-ms-input-placeholder {
  color: #C0C0C0;
  font-size: 13pt;
}

.clickable {
  cursor: pointer;
}

  </style>
  







  
  <style scoped>
  
  /* ====================== Responsive Design ========================== */
  @media (max-width: 991px) {
    .navigation {
      left: -300px;
    }
    .navigation.active {
      width: 300px;
      left: 0;
    }
    .main {
      width: 100%;
      left: 0;
    }
    .main.active {
      width: calc(100% - 80px);
      left: 80px;
    }
  
  }
  
  
  @media (max-width: 480px) {
    .user {
      min-width: 40px;
    }
    .navigation {
      width: 100%;
      left: -100%;
      z-index: 1000;
    }
    .navigation.active {
      width: 100%;
      left: 0;
    }
    .toggle {
      z-index: 10001;
    }
    .main.active .toggle {
      color: #fff;
      position: fixed;
      right: 0;
      left: initial;
    }
  }

  
  </style>

<script setup>
  import prof_pic from "~/assets/images/prof_pic.jpg";
  import google from "~/assets/images/google.png";
  </script>