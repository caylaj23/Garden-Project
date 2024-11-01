<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function startHere() {
  router.push("/map");
}

function learnMore() {
  router.push("resources");
}

function signup(){
  router.push('/signup')
}

function volunteer(){
  router.push('/volunteer')
}
</script>

<template>
  <body>
    <div class="welcome">
      <h1>Welcome</h1>
      <p id="goal">
        Our goal is to help you discover fresh, locally grown produce from local
        community gardens. We strive to make healthy food accessible for
        everyone.
      </p>
      <br />
      <button @click="startHere()">Start Here</button>
    </div>
  </body>
  <div class="about-info">
    <div class="mission-container">
      <h1 id="mission-title">Our Mission</h1>
      <p class="info-text">
To empower residents in West Louisville by providing accessible resources to find fresh, healthy produce. Through innovative solutions, we aim to bridge the gap in food accessibility, supporting local gardens, markets, and fostering a healthier, more sustainable community.
      </p>
      <button class="learn-more">Learn More</button>
    </div>
      <img class="city-farm" src="../assets/cityfarm.jpg" alt="city farm sign" />
    
  </div>
  <h2>Get Involved!</h2>
  <div class="footer-container">
    <footer>
      <div id="volunteer">
        <h1>Volunteer</h1>
        <img
          id="volunteer-photo"
          src="https://images.pexels.com/photos/6646862/pexels-photo-6646862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="volunteers"
        />
        <h3>Looking To Support Your Community?</h3>
        <p>
          There are numerous ways to get involved within your community, click
          below to see how you can make a difference!
        </p>
        <button @click="volunteer()">Get Involved</button>
      </div>
      <div id="farm-market">
        <h1>Newsletter</h1>
        <img
          id="farm-photo"
          src="https://images.pexels.com/photos/5094483/pexels-photo-5094483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <h3>Stay Up To Date</h3>
        <p>
          There's always something going on at farmers markets. Stay in the know
          about fresh produce
        </p>
        <button @click="signup()">Sign Me Up</button>
      </div>
      <div id="resources">
        <h1>Resources</h1>
        <img
          id="resource-photo"
          src="https://images.pexels.com/photos/7563663/pexels-photo-7563663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <h3>Looking For Something Else?</h3>
        <p>
          Check out this list of providers, foragers, urban farmers, and more!
        </p>
        <button @click="learnMore()">Learn More</button>
      </div>
    </footer>
  </div>
</template>

<style scoped>
#goal {
  width: 50%;
}

body {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5efed;
  text-align: center;
  height: 75vh;
  width: 100vw;
}
.welcome {
  font-size: 200%;
  background-color: #f5efed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  background-color: gray;
  border: none;
  color: white;
  padding: 16px 32px;
  font-size: 16px;
  transition: 0.3s;
  align-items: center;
}

button:hover {
  border: black solid 4px;
  background-color: #babd8d;
  color: white;
}

h2 {
  font-size: 400%;
  text-align: center;
}

#mission-title {
  font-size: 400%;
}

.mission-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 60%;
}
.about-info {
  align-items: center;
  display: flex;
  height: 75vh;
  width: 100%;
  background-color: #babd8d;
  color: white;
}

.city-farm {
  width: 50%;
  margin: 30px;
}

.info-text {
  margin: auto;
  text-align: center;
  font-size: 1.5rem;
  margin: 30px;

}

#volunteer-photo,
#farm-photo,
#resource-photo {
  height: 250px;
  width: 75%;
  text-align: center;
}

#volunteer,
#farm-market,
#resources {
  color: black;
  font-size: larger;
  height: 600px;
  width: 500px;
  background-color: #f5efed;
  border: black solid 2px;
}

.footer-container {
  display: flex;
  justify-content: center;
  text-align: center;
}

footer {
  display: flex;
  gap: 5%;
  margin: 5%;
}

.learn-more {
  background-color: gray;
  border: none;
  color: white;
  padding: 16px 32px;
  font-size: 16px;
  transition: 0.3s;
  align-items: center;
  margin: 20px;
}

.learn-more:hover {
  border: white solid 4px;
  background-color: #f5efed;
  color: black;
  border: black solid 4px;
}
</style>
