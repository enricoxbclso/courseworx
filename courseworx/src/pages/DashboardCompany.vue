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
                    <ion-icon :icon="analyticsOutline"></ion-icon>
                  </span>
                  <span class="title">Manage Applicants </span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="icon">
                    <ion-icon :icon="notificationsOutline"></ion-icon>
                  </span>
                  <span class="title">Notifications</span>
                </a>
              </li>

              <li>
                <a @click="signout">
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
            Hello,<span>{{ curCompName}}!</span>
          </div>

          <div class="recommendation-text">
            Top Employers
          </div>
            <div class="cardBox">
                  <div class="card1">
                      <div>
                          <div class="numbers">{{ curCompViews }}</div>
                          <div class="cardName">Views</div>
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
                            <img :src="Tiktok">
                        </div>
                        <div class="card-center">
                          <h3>Tiktok</h3>
                            <p class="card-detail">UI/UX Designer OJT Position</p>
                              <div class="card-highlight">
                                  <span>UI/UX Design</span>
                              </div>
                            <p class="card-loc"><ion-icon :icon="locationOutline"></ion-icon>Colon Street, Cebu City</p>
                              <div class="card-sub">
                                <p><ion-icon :icon="todayOutline"></ion-icon>4 hours ago</p>
                                <p><ion-icon :icon="peopleOutline"></ion-icon>OJT Position</p>
                                <p><ion-icon :icon="hourglassOutline"></ion-icon>100 hours</p>
                              </div>
                        </div>
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
                              <button @click="togglePopup">Add a listing</button>
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

                    
                        <!--Wrapper1-->
                          <div class="card" v-if="isTrueYow">  
                            <div class="button-container">
                                 <button class="card-button" @click="toggleEditForm">Edit Listing</button>
                                <ion-icon :icon="trashBinOutline" class="delete" @click="togglePopDel"></ion-icon>
                              </div>                          
                            <div class="card-left blue-bg">
                              <img :src="google" alt="Company Logo">
                            </div>
                            <div class="card-center">
                              <h3></h3>
                              <p class="card-detail"><b><ul>Company Name:</ul></b>{{ ojtCompT }}</p>
                              <p class="card-detail"><b><ul>Position:</ul></b>{{ ojtPosT }}</p>
                              <p class="card-loc-app"><ion-icon :icon="locationOutline"></ion-icon>{{ ojtJobLocT }}</p>
                              <div class="card-sub">
                
                                <p><ion-icon :icon="hourglassOutline"></ion-icon>{{ ojtDurT }}hour/s</p>
                              </div>
                              <div class="card-salary">
                                <p><b>OJT Position Requirements:</b><span></span>{{ ojtPosReqT }}</p>
                              </div>
                            </div>
                            <div class="card-right">
                              <div class="card-tag">
                                <h5>Job Description</h5>
                                <p>{{ ojtDescT }}</p>
                              </div>
                            </div>
                          </div>
                                                  <!--Wrapper1-->
                                                                          <!--2-->
                          <div class="card" v-if="isTrueYow2">  
                            <div class="button-container">
                                 <button class="card-button" @click="toggleEditForm2">Edit Listing</button>
                                <ion-icon :icon="trashBinOutline" class="delete" @click="togglePopDel2"></ion-icon>
                              </div>                          
                            <div class="card-left blue-bg">
                              <img :src="google" alt="Company Logo">
                            </div>
                            <div class="card-center">
                              <h3></h3>
                              <p class="card-detail"><b><ul>Company Name:</ul></b>{{ ojtCompT2 }}</p>
                              <p class="card-detail"><b><ul>Position:</ul></b>{{ ojtPosT2 }}</p>
                              <p class="card-loc-app"><ion-icon :icon="locationOutline"></ion-icon>{{ ojtJobLocT2 }}</p>
                              <div class="card-sub">
                
                                <p><ion-icon :icon="hourglassOutline"></ion-icon>{{ ojtDurT2 }}hour/s</p>
                              </div>
                              <div class="card-salary">
                                <p><b>OJT Position Requirements:</b><span></span>{{ ojtPosReqT2 }}</p>
                              </div>
                            </div>
                            <div class="card-right">
                              <div class="card-tag">
                                <h5>Job Description</h5>
                                <p>{{ ojtDescT2 }}</p>
                              </div>
                            </div>
                          </div>
                                                  <!--2-->
                                                                          <!--3-->
                          <div class="card" v-if="isTrueYow3">  
                            <div class="button-container">
                                 <button class="card-button" @click="toggleEditForm3">Edit Listing</button>
                                <ion-icon :icon="trashBinOutline" class="delete" @click="togglePopDel3"></ion-icon>
                              </div>                          
                            <div class="card-left blue-bg">
                              <img :src="google" alt="Company Logo">
                            </div>
                            <div class="card-center">
                              <h3></h3>
                              <p class="card-detail"><b><ul>Company Name:</ul></b>{{ ojtCompT3 }}</p>
                              <p class="card-detail"><b><ul>Position:</ul></b>{{ ojtPosT3 }}</p>
                              <p class="card-loc-app"><ion-icon :icon="locationOutline"></ion-icon>{{ ojtJobLocT3 }}</p>
                              <div class="card-sub">
                
                                <p><ion-icon :icon="hourglassOutline"></ion-icon>{{ ojtDurT3 }}hour/s</p>
                              </div>
                              <div class="card-salary">
                                <p><b>OJT Position Requirements:</b><span></span>{{ ojtPosReqT3 }}</p>
                              </div>
                            </div>
                            <div class="card-right">
                              <div class="card-tag">
                                <h5>Job Description</h5>
                                <p>{{ ojtDescT3 }}</p>
                              </div>
                            </div>
                          </div>
                                                  <!--3-->
                                                                          <!--4-->
                              <div class="card" v-if="isTrueYow4">  
                            <div class="button-container">
                                 <button class="card-button" @click="toggleEditForm4">Edit Listing</button>
                                <ion-icon :icon="trashBinOutline" class="delete" @click="togglePopDel4"></ion-icon>
                              </div>                          
                            <div class="card-left blue-bg">
                              <img :src="google" alt="Company Logo">
                            </div>
                            <div class="card-center">
                              <h3></h3>
                              <p class="card-detail"><b><ul>Company Name:</ul></b>{{ ojtCompT4 }}</p>
                              <p class="card-detail"><b><ul>Position:</ul></b>{{ ojtPosT4 }}</p>
                              <p class="card-loc-app"><ion-icon :icon="locationOutline"></ion-icon>{{ ojtJobLocT4 }}</p>
                              <div class="card-sub">
                
                                <p><ion-icon :icon="hourglassOutline"></ion-icon>{{ ojtDurT4 }}hour/s</p>
                              </div>
                              <div class="card-salary">
                                <p><b>OJT Position Requirements:</b><span></span>{{ ojtPosReqT4 }}</p>
                              </div>
                            </div>
                            <div class="card-right">
                              <div class="card-tag">
                                <h5>Job Description</h5>
                                <p>{{ ojtDescT4 }}</p>
                              </div>
                            </div>
                          </div>
                                                  <!--4-->
                                                                          <!--5-->
                                   <div class="card" v-if="isTrueYow5">  
                            <div class="button-container">
                                 <button class="card-button" @click="toggleEditForm5">Edit Listing</button>
                                <ion-icon :icon="trashBinOutline" class="delete" @click="togglePopDel5"></ion-icon>
                              </div>                          
                            <div class="card-left blue-bg">
                              <img :src="google" alt="Company Logo">
                            </div>
                            <div class="card-center">
                              <h3></h3>
                              <p class="card-detail"><b><ul>Company Name:</ul></b>{{ ojtCompT5 }}</p>
                              <p class="card-detail"><b><ul>Position:</ul></b>{{ ojtPosT5 }}</p>
                              <p class="card-loc-app"><ion-icon :icon="locationOutline"></ion-icon>{{ ojtJobLocT5 }}</p>
                              <div class="card-sub">
                
                                <p><ion-icon :icon="hourglassOutline"></ion-icon>{{ ojtDurT5 }}hour/s</p>
                              </div>
                              <div class="card-salary">
                                <p><b>OJT Position Requirements:</b><span></span>{{ ojtPosReqT5 }}</p>
                              </div>
                            </div>
                            <div class="card-right">
                              <div class="card-tag">
                                <h5>Job Description</h5>
                                <p>{{ ojtDescT5 }}</p>
                              </div>
                            </div>
                          </div>
                                                  <!--5-->


                          <!--------------------------------------FOR EDITING--------------------------------------------->
                          <div class="editform" id="editform">
                                <div class="contpop">
                                  <header>Edit Listing</header>
                                  <div class="close-btn" @click="cancelEditForm">X</div>
                                  <div class="popform">
                                    <div class="intbox">
                                      <label>OJT Position Title</label>
                                      <input v-model="ojtPos" type="text" placeholder="Enter Position Title" />
                                    </div>
                                    <div class="intbox">
                                      <label>Company Name</label>
                                      <input v-model="ojtComp" type="text" placeholder="Enter Company Name" />
                                    </div>
                                    <div class="columnpop">
                                      <div class="intbox">
                                        <label>OJT Description</label>
                                        <textarea name="jobdescript" rows="4" cols="" v-model="ojtDesc" placeholder="Enter Job Description"></textarea>
                                      </div>
                                      <div class="intbox">
                                        <label>OJT Duration</label>
                                        <input type="number" placeholder="Enter OJT Duration" v-model="ojtDur" />
                                      </div>
                                    </div>
                                    <div class="columnpop">
                                      <div class="intbox">
                                        <label>OJT Position Requirements</label>
                                        <textarea name="jobreq" rows="4" v-model="ojtPosReq" placeholder="Enter Position Requirements"></textarea>
                                      </div>
                                    </div>
                                    <div class="reqlist">
                                      <ul>
                                        <li v-for="requirement in parsedRequirements">{{ requirement }}</li>
                                      </ul>
                                    </div>
                                    <div class="intbox address">
                                      <label>Job Location</label>
                                      <input v-model="ojtJobLoc" type="text" placeholder="Enter address" />
                                    </div>
                                    <button @click="editListing">Save</button>
                                  </div>
                                </div>
                            </div>


                    </div><!--wrapper-->
                    
                    

                        
              </div>
            </div>
            </div>
        </div>

        <div class="popup" id="popup">
        <div class="contpop">
          <header>Add a new listing</header>
          <div class="close-btn" @click="cancelPopup">X</div>
            <div class = "popform">
            <div class="intbox">
              <label>OJT Position Title</label>
              <input v-model="ojtPos" type="text" placeholder="Enter Position Title" :class="{ 'error': showError && !ojtPos }" @input="checkInput" />
              <span v-if="showError && !ojtPos" class="error-message">This field is required.</span>
            </div>
      
            <div class="intbox">
              <label>Company Name</label>
              <input v-model="ojtComp" type="text" placeholder="Enter Company Name" :class="{ 'error': showError && !ojtComp }" @input="checkInput" />
              <span v-if="showError && !ojtComp" class="error-message">This field is required.</span>
            </div>
            <div class="columnpop">
              <div class="intbox">
                <label>OJT Description</label>
                <textarea name="jobdescript" rows="4" cols="" v-model="ojtDesc" placeholder="Enter Job Description"  :class="{ 'error': showError && !ojtDesc }" @input="checkInput"></textarea>
                <span v-if="showError && !ojtDesc" class="error-message">This field is required.</span>
              </div>
              <div class="intbox">
                <label>OJT Duration</label>
                <input type="number" placeholder="Enter OJT Duration"  v-model="ojtDur" :class="{ 'error': showError && !ojtDur }" @input="checkInput" />
                <span v-if="showError && !ojtDur" class="error-message">This field is required.</span>
              </div>
            </div>
            <div class="columnpop">
                <div class="intbox">
                    <label>OJT Position Requirements</label>
                    <textarea name="jobreq" rows="4" v-model="ojtPosReq" placeholder="Enter Position Requirements" :class="{ 'error': showError && !ojtPosReq }" @input="checkInput"></textarea>
                    <span v-if="showError && !ojtPosReq" class="error-message">This field is required.</span>
                  </div>
                </div>
                <div class="reqlist">
                <ul>
                    <li v-for="requirement in parsedRequirements">{{ requirement }}</li>
                </ul>
                </div>
                <div class="intbox address">
              <label>Job Location</label>
              <input v-model="ojtJobLoc" type="text" placeholder="Enter address" required :class="{ 'error': showError && !ojtPosReq }" @input="checkInput"/>
              <span v-if="showError && !ojtJobLoc" class="error-message">This field is required.</span>
            </div>
            <button @click="submitForm">Submit</button>
        </div>
        </div>
      </div>


      <!-----------------POP DELETE--------------------->
      <div class="popdel" id="popdel">
          <div class="form">
            <div class="poptitle">Are you sure you want to delete this listing?</div>

            <div class="form-element">
              <button type="submit" class="submit-btn" @click="deleteListing();cancelPopDel()">Yes</button>
              <button type="button" class="cancel-btn" @click="cancelPopDel">No</button>
            </div>
          </div>
    </div>



</template> 


<script>
import { IonIcon } from '@ionic/vue';
import { add, cartOutline, chatbubbleOutline, eyeOutline, helpOutline, homeOutline, lockClosedOutline, logOutOutline, peopleOutline, searchOutline, settingsOutline, cashOutline, menuOutline, locationOutline, todayOutline, hourglassOutline, closeCircleOutline, notificationsOutline, analyticsOutline, trashBinOutline } from 'ionicons/icons';
import { push } from "firebase/database";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, child, get, update, onValue, remove } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { mapActions, mapGetters } from "vuex"

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
    closeCircleOutline,
    trashBinOutline,
    notificationsOutline,
    analyticsOutline,
    activeTab: 'home',
    curCompName: '',
    curCompUsername: '',
    curCompViews: null,
    cardCount: 0,
    ojtPos: '',
    ojtComp: '',
    ojtDesc: '',
    ojtDur: '',
    ojtPosReq: '',
    ojtJobLoc: '',
    showError: false,
    isListenerSet: false,
    isTrueYow : false,
    isTrueYow2 : false,
    isTrueYow3 : false,
    isTrueYow4 : false,
    isTrueYow5 : false,
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
computed: {
  ...mapGetters(["getJobListings"])
},
created() {
  
  const curComp = localStorage.getItem('curComp');
  const curCompUsername = localStorage.getItem('curCompUsername');

  if (curComp && curCompUsername) {
    this.curCompName = curComp;
    this.curCompUsername = curCompUsername;

    onValue(child(ref(db), `users/${this.curCompUsername}/views`), (snapshot) => {
      this.curCompViews = Number(snapshot.val());
    });

    // Retrieve job listings from Firebase
    if (!this.isListenerSet) {
      const listingsRef = ref(db, `joblisting/${this.curCompName}`);
      onValue(listingsRef, (snapshot) => {
        const listings = snapshot.val();
        if (listings) {
          this.updateJobListings(Object.values(listings));
          this.cardCount = this.getJobListings.length;
          localStorage.setItem('jobListings', JSON.stringify(this.getJobListings));
        } else {
          this.updateJobListings([]);
          this.cardCount = 0;
          localStorage.removeItem('jobListings');
        }
      });
      this.isListenerSet = true;
    }
  }
},
mounted() {
  const dbRef = ref(db);
  onValue(child(dbRef, `allJobList/1`),
      (snapshot) => {
          onValue(child(dbRef, `allJobList/1/ojtComp`),(snapshot) => { this.ojtCompT = snapshot.val(); if(snapshot.val()!=null){this.isTrueYow = true} });
          onValue(child(dbRef, `allJobList/1/ojtDesc`),(snapshot) => {this.ojtDescT = snapshot.val() });
          onValue(child(dbRef, `allJobList/1/ojtDur`),(snapshot) => { this.ojtDurT = snapshot.val() });
          onValue(child(dbRef, `allJobList/1/ojtJobLoc`),(snapshot) => { this.ojtJobLocT = snapshot.val()});
          onValue(child(dbRef, `allJobList/1/ojtPos`),(snapshot) => { this.ojtPosT = snapshot.val()});
          onValue(child(dbRef, `allJobList/1/ojtPosReq`),(snapshot) => { this.ojtPosReqT = snapshot.val()});

      });
      onValue(child(dbRef, `allJobList/2`),
      (snapshot) => {
          onValue(child(dbRef, `allJobList/2/ojtComp`),(snapshot) => { this.ojtCompT2 = snapshot.val(); if(snapshot.val()!=null){this.isTrueYow2 = true}});
          onValue(child(dbRef, `allJobList/2/ojtDesc`),(snapshot) => {this.ojtDescT2 = snapshot.val() });
          onValue(child(dbRef, `allJobList/2/ojtDur`),(snapshot) => { this.ojtDurT2 = snapshot.val() });
          onValue(child(dbRef, `allJobList/2/ojtJobLoc`),(snapshot) => { this.ojtJobLocT2 = snapshot.val()});
          onValue(child(dbRef, `allJobList/2/ojtPos`),(snapshot) => { this.ojtPosT2 = snapshot.val()});
          onValue(child(dbRef, `allJobList/2/ojtPosReq`),(snapshot) => { this.ojtPosReqT2 = snapshot.val()});

      });
      onValue(child(dbRef, `allJobList/3`),
      (snapshot) => {
          onValue(child(dbRef, `allJobList/3/ojtComp`),(snapshot) => { this.ojtCompT3 = snapshot.val(); if(snapshot.val()!=null){this.isTrueYow3 = true}});
          onValue(child(dbRef, `allJobList/3/ojtDesc`),(snapshot) => {this.ojtDescT3 = snapshot.val() });
          onValue(child(dbRef, `allJobList/3/ojtDur`),(snapshot) => { this.ojtDurT3 = snapshot.val() });
          onValue(child(dbRef, `allJobList/3/ojtJobLoc`),(snapshot) => { this.ojtJobLocT3 = snapshot.val()});
          onValue(child(dbRef, `allJobList/3/ojtPos`),(snapshot) => { this.ojtPosT3 = snapshot.val()});
          onValue(child(dbRef, `allJobList/3/ojtPosReq`),(snapshot) => { this.ojtPosReqT3 = snapshot.val()});

      });
      onValue(child(dbRef, `allJobList/4`),
      (snapshot) => {
          onValue(child(dbRef, `allJobList/4/ojtComp`),(snapshot) => { this.ojtCompT4 = snapshot.val(); if(snapshot.val()!=null){this.isTrueYow4 = true}});
          onValue(child(dbRef, `allJobList/4/ojtDesc`),(snapshot) => {this.ojtDescT4 = snapshot.val() });
          onValue(child(dbRef, `allJobList/4/ojtDur`),(snapshot) => { this.ojtDurT4 = snapshot.val() });
          onValue(child(dbRef, `allJobList/4/ojtJobLoc`),(snapshot) => { this.ojtJobLocT4 = snapshot.val()});
          onValue(child(dbRef, `allJobList/4/ojtPos`),(snapshot) => { this.ojtPosT4 = snapshot.val()});
          onValue(child(dbRef, `allJobList/4/ojtPosReq`),(snapshot) => { this.ojtPosReqT4 = snapshot.val()});

      });
      onValue(child(dbRef, `allJobList/5`),
      (snapshot) => {
          onValue(child(dbRef, `allJobList/5/ojtComp`),(snapshot) => { this.ojtCompT5 = snapshot.val();if(snapshot.val()!=null){this.isTrueYow5 = true} });
          onValue(child(dbRef, `allJobList/5/ojtDesc`),(snapshot) => {this.ojtDescT5 = snapshot.val() });
          onValue(child(dbRef, `allJobList/5/ojtDur`),(snapshot) => { this.ojtDurT5 = snapshot.val() });
          onValue(child(dbRef, `allJobList/5/ojtJobLoc`),(snapshot) => { this.ojtJobLocT5 = snapshot.val()});
          onValue(child(dbRef, `allJobList/5/ojtPos`),(snapshot) => { this.ojtPosT5 = snapshot.val()});
          onValue(child(dbRef, `allJobList/5/ojtPosReq`),(snapshot) => { this.ojtPosReqT5 = snapshot.val()});

      });

      // const deletePathA = ref(db, `admin/${this.uName}`);
      // remove(deletePathA).then(() => {console.log("location removed");});


},
methods: {
  deleteListing(){
    this.index = localStorage.getItem('indexD');

       const deletePath = ref(db, `allJobList/${this.index}`);
       remove(deletePath).then(() => {console.log("location removed");});

  },
  editListing(){
    this.index = localStorage.getItem('index');

    const dbRefList = ref(db, `allJobList/${this.index}`);
                update(dbRefList, {  
                                ojtPos: this.ojtPos,
                                ojtComp: this.ojtComp,
                                ojtDesc: this.ojtDesc,
                                ojtDur: this.ojtDur,
                                ojtPosReq: this.ojtPosReq,
                                ojtJobLoc: this.ojtJobLoc     
                                    
                            });  

                                this.ojtPos = '';
                                this.ojtComp = '';
                                this.ojtDesc = '';
                                this.ojtDur = '';
                                this.ojtPosReq = '';
                                this.ojtJobLoc = '';   



  },
  addNewListing() {
    if (!this.validateForm()) {
      this.showError = true;
      return;
    }


    const dbRef = ref(db);

    const dbRefCTR = ref(db, `allJobList/ctr`);
            get(dbRefCTR).then((snapshot) => {
              console.log("ctr is" + snapshot.val())
              const dbRefCtr = ref(db, `allJobList`);
              this.ctrNN = snapshot.val();

              if(snapshot.val()==null){
                this.ctr = 1;
                const dbRefList = ref(db, `allJobList/${this.ctr}`);
                update(dbRefList, {  
                                ojtPos: this.ojtPos,
                                ojtComp: this.ojtComp,
                                ojtDesc: this.ojtDesc,
                                ojtDur: this.ojtDur,
                                ojtPosReq: this.ojtPosReq,
                                ojtJobLoc: this.ojtJobLoc     
                                    
                            });    
                      update(dbRefCtr, { ctr: 1 });    

                  }
                  else{
                    console.log("ctr val is "+snapshot.val())
                    update(dbRefCtr, { ctr: snapshot.val()+1 });    
                    const dbRefList = ref(db, `allJobList/${snapshot.val()+1}`);
                    update(dbRefList, {  
                                ojtPos: this.ojtPos,
                                ojtComp: this.ojtComp,
                                ojtDesc: this.ojtDesc,
                                ojtDur: this.ojtDur,
                                ojtPosReq: this.ojtPosReq,
                                ojtJobLoc: this.ojtJobLoc                                         
                                });    
                  }

                });// end

  },
  checkInput() {
    this.showError = false;
  },
  submitForm() {
    if (!this.validateForm()) {
      this.showError = true;
    } else {
      this.addNewListing();
      this.showError = false;
    }
  },
  validateForm() {
    return (
      this.ojtPos &&
      this.ojtComp &&
      this.ojtDesc &&
      this.ojtDur &&
      this.ojtPosReq &&
      this.ojtJobLoc
    );
  },
  

  ...mapActions(["updateJobListings"]),
  signout() {
    localStorage.removeItem('curComp');
    localStorage.removeItem('curCompUsername');
    localStorage.removeItem('jobListings');
    this.$router.push('/');
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
  togglePopDel() {
    localStorage.setItem('index',null);
    localStorage.setItem('indexD',1);
    const popup = document.getElementById("popdel");
    popup.classList.toggle("visible");
  },
  togglePopDel2() {
    localStorage.setItem('index',null);
    localStorage.setItem('indexD',2);
    const popup = document.getElementById("popdel");
    popup.classList.toggle("visible");
  },
  togglePopDel3() {
    localStorage.setItem('index',null);
    localStorage.setItem('indexD',3);
    const popup = document.getElementById("popdel");
    popup.classList.toggle("visible");
  },
  togglePopDel4() {
    localStorage.setItem('index',null);
    localStorage.setItem('indexD',4);
    const popup = document.getElementById("popdel");
    popup.classList.toggle("visible");
  },
  togglePopDel5() {
    localStorage.setItem('index',null);
    localStorage.setItem('indexD',5);
    const popup = document.getElementById("popdel");
    popup.classList.toggle("visible");
  },

  cancelPopDel() {
    const popup = document.getElementById("popdel");
    popup.classList.remove("visible");
  },
  toggleEditForm() {
    localStorage.setItem('index',1);
    const popup = document.getElementById("editform");
    popup.classList.toggle("visible");
  },
  toggleEditForm2() {
    localStorage.setItem('index',2);
    const popup = document.getElementById("editform");
    popup.classList.toggle("visible");
  },
  toggleEditForm3() {
    localStorage.setItem('index',3);
    const popup = document.getElementById("editform");
    popup.classList.toggle("visible");
  },
  toggleEditForm4() {
    localStorage.setItem('index',4);
    const popup = document.getElementById("editform");
    popup.classList.toggle("visible");
  },
  toggleEditForm5() {
    localStorage.setItem('index',5);
    const popup = document.getElementById("editform");
    popup.classList.toggle("visible");
  },
  cancelEditForm() {
    const popup = document.getElementById("editform");
    popup.classList.remove("visible");
  },
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
.cardBox .card1:hover .numbers,
.cardBox .card1:hover .cardName,
.cardBox .card1:hover .iconBx {  
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
    align-items: flex-star t;
    padding: 3%;
    margin: 0 1%;
    background-color: white;
    line-height: 1.5;
    gap: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 20px;
    border: 10px;
    cursor: pointer;
    margin-bottom: 20px;
    position: relative;
  }

  .card-button {
  background-color: #293556;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
}

.delete {
  color: red;
  font-size: 24px;
  margin-left: 20px;
}

.button-container {
  position: absolute;
  top: 20px;
  right: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-left {
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
    width: 35%;
  }
  .card-tag a{
    color: darkgrey;
    font-size: 18px;
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
  .card-highlight {
    background-color: #ccc;
  border-radius: 10px;
  padding: 5px 10px;
  display: inline-block;
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.card-highlight span {
  color: #fff;
}
.card-highlight:hover {
  background-color: #999;
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

/*-----------------POPUP APPLICATION FORM-----------------*/
.popup {

  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0%;
  transform: translate(-50%, -50%);
  padding: 20px 30px;
  background-color: #293556;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
}

.editform{

  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0%;
  transform: translate(-50%, -50%);
  padding: 20px 30px;
  background-color: #293556;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;

}
.editform.visible {
  opacity: 1;
  pointer-events: auto;
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
.contpop {
    max-width: 800px;
    width: 100%;
    background: #fff;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  .contpop header {
    font-size: 1.5rem;
    color: #333;
    font-weight: 500;
    text-align: center;
  }
  .contpop .popform {
    margin-top: 30px;
  }
  .popform .intbox {
    width: 100%;
    margin-top: 20px;
  }
  .intbox label {
    color: #333;
  }
  .popform :where(.intbox input, .select-box) {
    position: relative;
    height: 50px;
    width: 100%;
    outline: none;
    font-size: 1rem;
    color: #707070;
    margin-top: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 0 15px;
  }
  .intbox input:focus {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  }
  .popform .columnpop {
    display: flex;
    column-gap: 15px;
  }
  .popform .gender-box {
    margin-top: 20px;
  }
  .gender-box h3 {
    color: #333;
    font-size: 1rem;  
    font-weight: 400;
    margin-bottom: 8px;
  }
  .popform :where(.gender-option, .gender) {
    display: flex;
    align-items: center;
    column-gap: 50px;
    flex-wrap: wrap;
  }
  .popform :where(.intbox input[type="text"], .intbox textarea) {
    position: relative;
    height: 50px;
    width: 100%;
    outline: none;
    font-size: 1rem;
    color: #707070;
    margin-top: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 0 15px;
  }

  .intbox textarea {
    height: auto;
    padding: 10px 15px;
    resize: vertical;
  }

  .intbox input:focus,
  .intbox textarea:focus {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  }

  .popform .gender {
    column-gap: 5px;
  }
  .gender input {
    accent-color: rgb(130, 106, 251);
  }
  .popform :where(.gender input, .gender label) {
    cursor: pointer;
  }
  .gender label {
    color: #707070;
  }
  .address :where(input, .select-box) {
    margin-top: 15px;
  }
  .select-box select {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    color: #707070;
    font-size: 1rem;
  }
  .popform button {
    height: 55px;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #293556;
  }
  .popform button:hover {
    background: #fff;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    color: #293556;
  }

    /*===================POPUP DELETE=======================*/

    .radio-group {
      display: flex;
      cursor: pointer;
      justify-content: space-between;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .radio {
      display: flex;
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

      .popdel {
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

      .popdel.visible {
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


      .popdel .form .poptitle{
      position: relative;
      font-size: 18px;
      font-weight: 500;
      color: #333;

      }


  /*Responsive*/
  @media screen and (max-width: 500px) {
    .popform .columnpop {
      flex-wrap: wrap;
    }
    .popform :where(.gender-option, .gender) {
      row-gap: 15px;
  }
  }

  .error {
  border: 1px solid red;
}

.error-popup {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: red;
  color: white;
  padding: 5px;
  display: inline-block;
}
.error-message {
    font-size: 12px; 
    color: red; 
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
  import Google from "~/assets/images/google.png";
  import Tiktok from "~/assets/images/tiktok.svg"
  import Twitter from "~/assets/images/twitter.png"
  import Discord from "~/assets/images/discord.svg"
  import logo from "~/assets/images/backImg.jpg";
  </script> 