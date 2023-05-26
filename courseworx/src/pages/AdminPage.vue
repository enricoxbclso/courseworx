<template>
  <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    </div>
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
                    <ion-icon :icon="peopleOutline"></ion-icon>
                  </span>
                  <span class="title">Manage Users</span>
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
  
            <div class="notifications">
                <a href="#">
                <span class="icon">
                <ion-icons :icon="notificationsOutline"></ion-icons>
                </span>
                </a>
            </div>

            <div class="user">
              <img :src="prof_pic" alt="">
            </div>
          </div>
  
         
          <!-- ======================= HOME CONTENT ================== -->
          <div v-if="activeTab === 'home'">
  
            <div class="welcome-text">
             Welcome,<span>Admin!</span>
          </div>

              <div class="recommendation-text">
                Manage User Data
              </div>                     
        <!-------------------------------USER TABLE--------------------------->   
             <div class="table-wrapper">   
              <main class="table">
                  <section class="table__header">
                            <h1>Registered Users</h1>
                    <div class="table__buttons">
                      <button class="action__button" @click="togglePopup">Add</button>
                      <button class="action__button" @click="deleteData()">Delete</button>
                      <button class="action__button">Edit</button>
                    </div>
                        </section>
                        <section class="table__body">
                            <table>
                                <thead>
                                    <tr>
                                        <th> Id <span class="icon-arrow">&UpArrow;</span></th>
                                        <th> First Name <span class="icon-arrow">&UpArrow;</span></th>
                                        <th> Last Name <span class="icon-arrow">&UpArrow;</span></th>
                                        <th> UserType<span class="icon-arrow">&UpArrow;</span></th>
                                        <th> E-Mail <span class="icon-arrow">&UpArrow;</span></th>
                                        <th> ID Num <span class="icon-arrow">&UpArrow;</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> <button @click="indexer()">1 </button></td>
                                        <td> {{ fnameT}}</td>
                                        <td> {{ lnameT }}</td>
                                        <td> Student </td>
                                        <td> {{ emailT }}</td>
                                        <td> <strong> {{ usernameT }} </strong></td>
                                    </tr>   
                                    <tr>
                                        <td> <button @click="indexer2()">2 </button></td>
                                        <td> {{ fnameT2}}</td>
                                        <td> {{ lnameT2 }}</td>
                                        <td> Student </td>
                                        <td> {{ emailT2 }}</td>
                                        <td> <strong> {{ usernameT2 }} </strong></td>
                                    </tr>                  
                                    <tr>
                                        <td> <button @click="indexer3()">3 </button></td>
                                        <td> {{ fnameT3}}</td>
                                        <td> {{ lnameT3 }}</td>
                                        <td> Student </td>
                                        <td> {{ emailT3 }}</td>
                                        <td> <strong> {{ usernameT3 }} </strong></td>
                                    </tr>                  
                                    <tr>
                                        <td> <button @click="indexer4()">4 </button></td>
                                        <td> {{ fnameT4}}</td>
                                        <td> {{ lnameT4 }}</td>
                                        <td> Student </td>
                                        <td> {{ emailT4 }}</td>
                                        <td> <strong> {{ usernameT4 }} </strong></td>
                                    </tr>                  
                                    <tr>
                                        <td> <button @click="indexer5()">5 </button></td>
                                        <td> {{ fnameT5}}</td>
                                        <td> {{ lnameT5 }}</td>
                                        <td> Student </td>
                                        <td> {{ emailT5 }}</td>
                                        <td> <strong> {{ usernameT5 }} </strong></td>
                                    </tr>       
                                    <tr>
                                        <td> <button>-</button></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td> <strong>-</strong></td>
                                    </tr>     
                                    <tr>
                                        <td> <button>-</button></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td> <strong>-</strong></td>
                                    </tr>  
                                    <tr>
                                        <td> <button>-</button></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td> <strong>-</strong></td>
                                    </tr>  
                                    <tr>
                                        <td> <button>-</button></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td> <strong>-</strong></td>
                                    </tr>  
                                    <tr>
                                        <td> <button>-</button></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td> <strong>-</strong></td>
                                    </tr>  
                                    <tr>
                                        <td> <button>-</button></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td> <strong>-</strong></td>
                                    </tr>                         
                                </tbody>
                            </table>
                        </section>
                    </main> 
                       
                  </div>        
               </div> 
           <div>
        <!-- ======================= MESSAGES================== -->  
        <div class="content" v-if="activeTab === 'messages'">  
         </div>
            </div>
            </div>
        </div>

        <!---- POPUPS------>
        <div class="popup" id="popup">
              <div class="cover">
                    <div class="front">
                      <img :src="backimg" alt="backimg">
                      <div class="text">
                        <span class="text-1">Every new friend is a <br> new adventure</span>
                        <span class="text-2">Let's get connected</span>
                      </div>
                    </div>
              </div> <!-- Closing tag for div.cover -->
          <div class="forms">
                <div class="form-content">
                  <div class="signup-form">
                    <div class="title">Add A New Student User</div>
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
                        <input type="date" placeholder="Birthdate" required v-model="bday" id="bday">
                      </div>
                      <div class="input-box">
                        <i class="fas fa-envelope"></i>
                        <input type="text" placeholder="E-mail" required v-model="email" id="email">
                      </div>
                      <div class="input-box">
                        <i class="fas fa-id-card"></i>
                        <input type="text" placeholder="ID Number" required v-model="username" id="username">
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required v-model="password" id="password">
                      </div>
                      <div class="button-container">
                      <div class="button input-box">
                        <input type="submit" value="Submit" @click="addUser()">
                      </div>
                      <div class="button input-box">
                        <input type="submit" value="Cancel" @click="cancelPopup">
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div> <!-- Closing tag for div.forms -->
            </div> <!-- Closing tag for div.studdadd -->



        </template> 
      <script>
    import { IonIcon } from '@ionic/vue';
    import { add, cartOutline, chatbubbleOutline, eyeOutline, helpOutline, homeOutline, lockClosedOutline, logOutOutline, peopleOutline, searchOutline, settingsOutline, cashOutline, menuOutline, locationOutline, todayOutline, hourglassOutline, closeCircleOutline } from 'ionicons/icons';
    import { push } from "firebase/database";
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
    import {
    getDatabase,
    ref,
    child,
    get,
    update,
    onValue,
    remove
    } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


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
        fnameT:'',
        lname:'',
        emailT:'',
        usernameT:'',
        fnameT2:'',
        lname2:'',
        emailT2:'',
        usernameT2:'',
        fnameT3:'',
        lname3:'',
        emailT3:'',
        usernameT3:'',
        fnameT4:'',
        lname4:'',
        emailT4:'',
        usernameT4:'',
        fnameT5:'',
        lname5:'',
        emailT5:'',
        usernameT5:'',
        
      };
    },
    created(){
      const dbRef = ref(db);


  onValue(child(dbRef, `users/1/fname`),(snapshot) => {this.fnameT=snapshot.val();});
  onValue(child(dbRef, `users/1/lname`),(snapshot) => {this.lnameT=snapshot.val();});
  onValue(child(dbRef, `users/1/email`),(snapshot) => {this.emailT=snapshot.val();});
  onValue(child(dbRef, `users/1/username`),(snapshot) => {this.usernameT=snapshot.val()});
  
  onValue(child(dbRef, `users/2/fname`),(snapshot) => {this.fnameT2=snapshot.val();});
  onValue(child(dbRef, `users/2/lname`),(snapshot) => {this.lnameT2=snapshot.val();});
  onValue(child(dbRef, `users/2/email`),(snapshot) => {this.emailT2=snapshot.val();});
  onValue(child(dbRef, `users/2/username`),(snapshot) => {this.usernameT2=snapshot.val()});

  onValue(child(dbRef, `users/3/fname`),(snapshot) => {this.fnameT3=snapshot.val();});
  onValue(child(dbRef, `users/3/lname`),(snapshot) => {this.lnameT3=snapshot.val();});
  onValue(child(dbRef, `users/3/email`),(snapshot) => {this.emailT3=snapshot.val();});
  onValue(child(dbRef, `users/3/username`),(snapshot) => {this.usernameT3=snapshot.val()});

  onValue(child(dbRef, `users/4/fname`),(snapshot) => {this.fnameT4=snapshot.val();});
  onValue(child(dbRef, `users/4/lname`),(snapshot) => {this.lnameT4=snapshot.val();});
  onValue(child(dbRef, `users/4/email`),(snapshot) => {this.emailT4=snapshot.val();});
  onValue(child(dbRef, `users/4/username`),(snapshot) => {this.usernameT4=snapshot.val()});

  onValue(child(dbRef, `users/5/fname`),(snapshot) => {this.fnameT5=snapshot.val();});
  onValue(child(dbRef, `users/5/lname`),(snapshot) => {this.lnameT5=snapshot.val();});
  onValue(child(dbRef, `users/5/email`),(snapshot) => {this.emailT5=snapshot.val();});
  onValue(child(dbRef, `users/5/username`),(snapshot) => {this.usernameT5=snapshot.val()});


    

   


    },
    methods: {
      deleteData(){

        

      const index = localStorage.getItem('indexer');

        const dbRef = ref(db, `users/${index}/username`);
          let counterVariable;
          get(dbRef).then((snapshot) => {
            const deletePath = ref(db, `users/${snapshot.val()}`);
            remove(deletePath).then(() => {console.log("location removed");});   
          });

       const deletePath = ref(db, `users/${index}`);
       remove(deletePath).then(() => {console.log("location removed");});




      },
        addUser(){
          const userIdB = `users/${this.username}`;
          const dbRefcustomersB = ref(db, userIdB);
          
            this.usertype = 'student'
                      update(dbRefcustomersB, { fname: this.fname });
                      update(dbRefcustomersB, { lname: this.lname });
                      update(dbRefcustomersB, { password: this.password });
                      update(dbRefcustomersB, { bday: this.bday });
                      update(dbRefcustomersB, { usertype: this.usertype });


                      console.log("this is working")

                  const dbRefCTR = ref(db, `users/ctr`);
                    get(dbRefCTR).then((snapshot) => {
                    console.log("ctr is" + snapshot.val())
                    const dbRefCtr = ref(db, `users`);
                    this.ctrNN = snapshot.val();

                    if(snapshot.val()==null){
                      this.ctr = 1;
                      const dbRefList = ref(db, `users/${this.ctr}`);

                      const dbRefCompanyData = ref(db, `users/${this.ctr}`);
                      update(dbRefCompanyData, { username: this.username });
                      update(dbRefCompanyData, { email: this.email });
                      update(dbRefCompanyData, { fname: this.fname });
                      update(dbRefCompanyData, { lname: this.lname });
                      update(dbRefCompanyData, { password: this.password });
                      update(dbRefCompanyData, { bday: this.bday });
                      update(dbRefCompanyData, { usertype: this.usertype });
                            update(dbRefCtr, { ctr: 1 });    

                        }
                        else{
                          console.log("ctr val is "+snapshot.val())
                          update(dbRefCtr, { ctr: snapshot.val()+1 });    
                            const dbRefList = ref(db, `users/${snapshot.val()+1}`);
                            update(dbRefList, { username: this.username });
                            update(dbRefList, { fname: this.fname });
                            update(dbRefList, { lname: this.lname });
                            update(dbRefList, { email: this.email });
                            update(dbRefList, { password: this.password });
                            update(dbRefList, { username: this.username });
                            update(dbRefList, { bday: this.bday });
                            update(dbRefList, { usertype: this.usertype });
        
                        }

                      });// end
                      
          
            },
      indexer(){
          localStorage.setItem('indexer',1)
      },
      indexer2(){
          localStorage.setItem('indexer',2)
      },
      indexer3(){
          localStorage.setItem('indexer',3)
      },
      indexer4(){
          localStorage.setItem('indexer',4)
      },
      indexer5(){
          localStorage.setItem('indexer',5)
      },
      
      changeTab(tab) {
        this.activeTab = tab;
      },
      toggleNavigation() {
        const navigation = document.querySelector('.navigation');
        const main = document.querySelector('.main');

        navigation.classList.toggle('active');
        main.classList.toggle('active');
      },
      togglePopup() {
        const popup = document.getElementById("popup");
        popup.classList.toggle("visible");
      },
      cancelPopup() {
        const popup = document.getElementById("popup");
        popup.classList.remove("visible");
      },
      savaStudentData() {
        // Add your save student data logic here
      }
    },

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
    
    .notifications{
        position: relative  ;
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
    font-size: 1.7em;
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

    @media (max-width: 768px) {
    .table-wrapper table {
      width: 100%;
    }

    .table-wrapper table thead {
      display: none;
    }

    .table-wrapper table tbody tr {
      display: block;
      border-bottom: 1px solid #ccc;
      margin-bottom: 10px;
    }

    .table-wrapper table tbody td {
      display: block;
      text-align: left;
    }
  }
    
    /*--------------TABLE-------------- */
    .table-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

main.table {
  width: 82vw;
  height: 90vh;
  margin: 15px;
  background-color: #fff5;
  backdrop-filter: blur(7px);
  box-shadow: 0 .4rem .8rem #0005;
  border-radius: .8rem;
  overflow: hidden;
}

.table__header h1 {
  font-size: 24px;
  font-weight: 600;
}

.table__header {
  width: 100%;
  height: 10%;
  background-color: #fff4;
  padding: .8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table__header .input-group {
  width: 35%;
  height: 100%;
  background-color: #fff5;
  padding: 0 .8rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s;
}

.table__header .input-group:hover {
  width: 45%;
  background-color: #fff8;
  box-shadow: 0 .1rem .4rem #0002;
}

.table__header .input-group img {
  width: 1.2rem;
  height: 1.2rem;
}

.table__header .input-group input {
  width: 100%;
  padding: 0 .5rem 0 .3rem;
  background-color: transparent;
  border: none;
  outline: none;
}

.table__body {
  width: 95%;
  max-height: calc(89% - 1.6rem);
  background-color: #fffb;
  margin: .8rem auto;
  border-radius: .6rem;
  overflow: auto;
  overflow: overlay;
}

.table__body::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

.table__body::-webkit-scrollbar-thumb {
  border-radius: .5rem;
  background-color: #0004;
  visibility: hidden;
}

.table__body:hover::-webkit-scrollbar-thumb {
  visibility: visible;
}

table {
  width: 100%;
}

td img {
  width: 36px;
  height: 36px;
  margin-right: .5rem;
  border-radius: 50%;
  vertical-align: middle;
}

table,
th,
td {
  border-collapse: collapse;
  padding: 1rem;
  text-align: left;
}

thead th {
  position: sticky;
  top: 0;
  left: 0;
  background-color: #d5d1defe;
  cursor: pointer;
  text-transform: capitalize;
}

tbody tr:nth-child(even) {
  background-color: #0000000b;
}

tbody tr {
  --delay: .1s;
  transition: .5s ease-in-out var(--delay), background-color 0s;
}

tbody tr.hide {
  opacity: 0;
  transform: translateX(100%);
}

tbody tr:hover {
  background-color: #fff6 !important;
}

tbody tr td,
tbody tr td p,
tbody tr td img {
  transition: .2s ease-in-out;
}

tbody tr.hide td,
tbody tr.hide td p {
  padding: 0;
  font: 0 / 0 sans-serif;
  transition: .2s ease-in-out .5s;
}

@media (max-width: 1000px) {
  td:not(:first-of-type) {
    min-width: 12.1rem;
  }
}

thead th span.icon-arrow {
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  border: 1.4px solid transparent;
  text-align: center;
  font-size: 1rem;
  margin-left: .5rem;
  transition: .2s ease-in-out;
}

thead th:hover span.icon-arrow {
  border: 1.4px solid #6c00bd;
}

thead th:hover {
  color: #6c00bd;
}

.table__buttons {
  display: flex;
  align-items: center;
  padding: 10px;
}

.action__button {
  background: #293556;
  color: #fff;
  height: 37px;
  border-radius: 7px;
  padding: 0rem 1rem;
  border: none;
  font-weight: 600;
  margin-right: 10px;
}

/* Add margin between tables */

  /*==========================STUDENT ADD POPUP==============================*/
  .popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  max-width: 1000px;
  width: 100%;
  background: #fff;
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  perspective: 2700px;
  transition: opacity 0.3s ease-in-out;
  opacity: 0%;
}

.popup.visible {
  opacity: 1;
  pointer-events: auto;
}
.popup .cover{
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
.popup #flip:checked ~ .cover{
  transform: rotateY(-180deg);
  backface-visibility: hidden;
}
 .popup .cover .front,
 .popup .cover .back{
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
.popup .cover::before,
.popup .cover::after{
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background: #293556;
  opacity: 0.5;
  z-index: 12;
}
.popup .cover::after{
  opacity: 0.3;
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
.popup .cover img{
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 10;
}

.popup .cover .text{
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
.popup .forms{
  height: 100%;
  width: 100%;
  background: #fff;
}
.popup .form-content{
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
  flex-basis: 48%;
  cursor: pointer;
  transition: all 0.4s ease;
}
.button-container {
  display: flex;
  justify-content: space-between;
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

@media screen and (max-width: 768px) {
  .popup {
    max-width: 80%;
  }
}

@media screen and (max-width: 480px) {
  .popup {
    max-width: 90%;
    padding: 20px;
  }
}
 </style>
  
  <script setup>
    import prof_pic from "~/assets/images/prof_pic.jpg";
    import backimg from "~/assets/images/backImg.png";
    </script>