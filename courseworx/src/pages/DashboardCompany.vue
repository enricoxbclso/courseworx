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
                <span class="title">Your Listings</span>
              </a>
            </li>

            <li>
              <a href="#">
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
                <span class="title">OJTs</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon :icon="helpOutline"></ion-icon>
                </span>
                <span class="title">Help</span>
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
                        <div class="numbers">1,504</div>
                        <div class="cardName">Daily Views</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                <div class="card1">
                    <div>
                        <div class="numbers">80</div>
                        <div class="cardName">Sales</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>

                <div class="card1">
                    <div>
                        <div class="numbers">284</div>
                        <div class="cardName">Comments</div>
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
              <!-- ================ JOB RECOMMENDATIONS ================= -->
              <div class="wrapper">
                  <div class="card">
                      <div class="card-left blue-bg">
                          <img :src="google">
                      </div>
                      <div class="card-center">
                        <h3>Google</h3>
                          <p class="card-detail">Software Development Intern</p>
                          <p class="card-loc"><ion-icon :icon="locationOutline"></ion-icon>Colon Street, Cebu City</p>
                            <div class="card-sub">
                              <p><ion-icon :icon="todayOutline"></ion-icon>2 hours ago</p>
                              <p><ion-icon :icon="peopleOutline"></ion-icon>OJT Position</p>
                              <p><ion-icon :icon="hourglassOutline"></ion-icon>100 hours</p>
                            </div>
                      </div>
                      <div class="card-right">
                          <div class="card-tag">
                            <h5>Job Description</h5>
                            <a href="#"><u>UI/UX Designer</u></a>
                          </div>
                          <div class="card-salary">
                              <p><b>$350k</b><span>/ year</span></p>
                          </div>
                      </div><!--card-right-->
                  </div><!--card-->
                  </div><!--wrapper-->
  
                  <div class="wrapper">
                  <div class="card">
                      <div class="card-left blue-bg">
                          <img :src="tiktok">
                      </div>
                      <div class="card-center">
                        <h3>Tiktok</h3>
                          <p class="card-detail">UI/UX Designer</p>
                          <p class="card-loc"><ion-icon :icon="locationOutline"></ion-icon>Colon Street, Cebu City</p>
                            <div class="card-sub">
                              <p><ion-icon :icon="todayOutline"></ion-icon>4 hours ago</p>
                              <p><ion-icon :icon="peopleOutline"></ion-icon>OJT Position</p>
                              <p><ion-icon :icon="hourglassOutline"></ion-icon>100 hours</p>
                            </div>
                      </div>
                      <div class="card-right">
                          <div class="card-tag">
                            <h5>Job Description</h5>
                            <a href="#"><u>UI/UX Designer</u></a>
                          </div>
                          <div class="card-salary">
                              <p><b>$350k</b><span>/ year</span></p>
                          </div>
                      </div><!--card-right-->
                  </div><!--card-->
                  </div><!--wrapper-->
  
                  <div class="wrapper">
                  <div class="card">
                      <div class="card-left blue-bg">
                          <img :src="twitter">
                      </div>
                      <div class="card-center">
                        <h3>Twitter</h3>
                          <p class="card-detail">UI/UX Designer</p>
                          <p class="card-loc"><ion-icon :icon="locationOutline"></ion-icon>Colon Street, Cebu City</p>
                            <div class="card-sub">
                              <p><ion-icon :icon="todayOutline"></ion-icon>1 day ago</p>
                              <p><ion-icon :icon="peopleOutline"></ion-icon>OJT Position</p>
                              <p><ion-icon :icon="hourglassOutline"></ion-icon>100 hours</p>
                            </div>
                      </div>
                      <div class="card-right">
                          <div class="card-tag">
                            <h5>Job Description</h5>
                            <a href="#"><u>UI/UX Designer</u></a>
                          </div>
                          <div class="card-salary">
                              <p><b>$350k</b><span>/ year</span></p>
                          </div>
                      </div><!--card-right-->
                  </div><!--card-->
                  </div><!--wrapper-->
  
                  <div class="wrapper">
                  <div class="card">
                      <div class="card-left blue-bg">
                          <img :src="discord">
                      </div>
                      <div class="card-center">
                        <h3>Discord</h3>
                          <p class="card-detail">UI/UX Designer</p>
                          <p class="card-loc"><ion-icon :icon="locationOutline"></ion-icon>Colon Street, Cebu City</p>
                            <div class="card-sub">
                              <p><ion-icon :icon="todayOutline"></ion-icon>2 hours ago</p>
                              <p><ion-icon :icon="peopleOutline"></ion-icon>OJT Position</p>
                              <p><ion-icon :icon="hourglassOutline"></ion-icon>100 hours</p>
                            </div>
                      </div>
                      <div class="card-right">
                          <div class="card-tag">
                            <h5>Job Description</h5>
                            <a href="#"><u>UI/UX Designer</u></a>
                          </div>
                          <div class="card-salary">
                              <p><b>$350k</b><span>/ year</span></p>
                          </div>
                      </div><!--card-right-->
                  </div><!--card-->
                  </div><!--wrapper-->  
            </div> 
            <div>
      <!-- ======================= YOUR APPLICATION ================== -->  
      <div class="content" v-if="activeTab === 'application'">  
      <div class="wrapper">

                     <div class="record-header">
                        <div class="add">
                            <span>Entries</span>
                            <select name="" id="">
                                <option value="">ID</option>
                            </select>
                            <button>Add record</button>
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
                          <p class="card-detail">Software Development Intern</p>
                          <p class="card-loc"><ion-icon :icon="locationOutline"></ion-icon>Colon Street, Cebu City</p>
                            <div class="card-sub">
                              <p><ion-icon :icon="todayOutline"></ion-icon>2 hours ago</p>
                              <p><ion-icon :icon="peopleOutline"></ion-icon>OJT Position</p>
                              <p><ion-icon :icon="hourglassOutline"></ion-icon>100 hours</p>
                            </div>
                      </div>
                      <div class="card-right">
                          <div class="card-tag">
                            <h5>Job Description</h5>
                            <a href="#"><u>UI/UX Designer</u></a>
                          </div>
                          <div class="card-salary">
                              <p><b>$350k</b><span>/ year</span></p>
                          </div>
                      </div><!--card-right-->
                  </div><!--card-->
                  </div><!--wrapper-->
  
                  <div class="wrapper">
                  <div class="card">
                      <div class="card-left blue-bg">
                          <img :src="tiktok">
                      </div>
                      <div class="card-center">
                        <h3>Tiktok</h3>
                          <p class="card-detail">UI/UX Designer</p>
                          <p class="card-loc"><ion-icon :icon="locationOutline"></ion-icon>Colon Street, Cebu City</p>
                            <div class="card-sub">
                              <p><ion-icon :icon="todayOutline" ></ion-icon>4 hours ago</p>
                              <p><ion-icon :icon="peopleOutline"></ion-icon>OJT Position</p>
                              <p><ion-icon :icon="hourglassOutline"></ion-icon>100 hours</p>
                            </div>
                      </div>
                      <div class="card-right">
                          <div class="card-tag">
                            <h5>Job Description</h5>
                            <a href="#"><u>UI/UX Designer</u></a>
                          </div>
                          <div class="card-salary">
                              <p><b>$350k</b><span>/ year</span></p>
                          </div>
                      </div><!--card-right-->
                  </div><!--card-->
                  </div><!--wrapper-->
                      
            </div>
          </div>
          </div>
      </div>
  
      </template> 
  
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
  background-color: #D8D0D0;
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
  box-shadow: 35px 35px 0 10px #D8D0D0;
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
  box-shadow: 35px -35px 0 10px #D8D0D0;
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
    background-color: white;
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
.cardBox .card:hover .numbers,
.cardBox .card:hover .cardName,
.cardBox .card:hover .iconBx {  
  color: var(--white);
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
    font-size: .9rem;
    color: #666;
}

input, button, select {
    outline: none;
}

.add select, .browse input, .browse select {
    height: 35px;
    border: 1px solid #b0b0b0;
    border-radius: 3px;
    display: inline-block;
    width: 75px;
    padding: 0rem .5rem;
    margin-right: .8rem;
    color: #666;
}

.add button {
    background: #293556;
    color: #fff;
    height: 37px;
    border-radius: 7px;
    padding: 0rem 1rem;
    border: none;
    font-weight: 600;
}

.browse input {
    width: 150px;
}

.browse select {
    width: 200px;
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
  <script>
  import { IonIcon } from '@ionic/vue';
  import { add, cartOutline, chatbubbleOutline, eyeOutline, helpOutline, homeOutline, lockClosedOutline, logOutOutline, peopleOutline, searchOutline, settingsOutline, cashOutline, menuOutline, locationOutline, todayOutline, hourglassOutline, closeCircleOutline } from 'ionicons/icons';

export default {
  components: { IonIcon },
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
      activeTab: 'home'
    };
  }
};


  
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// import {
// getDatabase,
// ref,
// child,
// get,
// update,
// onValue,
// } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
// const firebaseConfig = {
//   apiKey: "AIzaSyBau35ju8XAdFN5em6h7HjPAhpf3pL5wSE",
//   authDomain: "courseworx-454d2.firebaseapp.com",
//   databaseURL: "https://courseworx-454d2-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "courseworx-454d2",
//   storageBucket: "courseworx-454d2.appspot.com",
//   messagingSenderId: "561114332314",
//   appId: "1:561114332314:web:0b4cabbaffea89b0113323"
// }
// const app = initializeApp(firebaseConfig);
// const db = getDatabase();
// export default {
// data() {
//   return {
   
//   }
// },
// created (){
  
//   let loggedas = localStorage.getItem('loggedas');
//   if(loggedas !='company'){
//     this.$router.push('/');
//   }
// },
// methods: {
//   logOut(){
//     localStorage.setItem('loggedin', false);
//     this.$router.push('/');
    
//   }
  
// }
// }
  
  </script>
<script setup>
  import prof_pic from "~/assets/images/prof_pic.jpg";
  import google from "~/assets/images/google.png";
  import tiktok from "~/assets/images/tiktok.svg"
  import twitter from "~/assets/images/twitter.png"
  import discord from "~/assets/images/discord.svg"
  import logo from "~/assets/images/backImg.jpg";
  </script>