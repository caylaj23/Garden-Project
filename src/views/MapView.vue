<script setup>
import { ref } from "vue";
import googlemap from "@/components/googlemap.vue";

let location = ref();
let geolocation = ref();

function getLatLong() {
  let urlString = location.value.split(" ").join("+");

  //geocoding api
  console.log(urlString);
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${urlString}&key=AIzaSyAVDwz028CVpz3cs1iTXnas3TfCDx6pKjg`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      geolocation.value = data.results[0].geometry.location;
      console.log(geolocation.value);
    });
}
</script>

<template>
  <body>
    <div class="destination-container">
      <h1>Enter Your Address</h1>
      <p>Find Fresh Produce Near You</p>
      <input
        id="search-bar"
        v-model="location"
        type="text"
        size="20"
        placeholder="Enter Address Here"
      />
      <br />
      <button @click="getLatLong()">Search</button>
    </div>
    <div class="map-container">
      <googlemap :key="geolocation" :user-location="geolocation"></googlemap>
    </div>
  </body>
</template>

<style scoped>
body {
  color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5efed;
}

.destination-container {
  margin-top: 30%;
  background: white;
  width: 100%;
  height: 50%;
}

.map-container {
  margin-top: 5%;
  border-style: inset;
}

button {
  background-color: gray;
  border: none;
  color: white;
  padding: 16px 32px;
  font-size: 16px;
  transition: 0.3s;
  align-items: center;
  margin: 20px;
}

button:hover {
  border: white solid 4px;
  background-color: #babd8d;
  color: white;
  border: black solid 4px;
}

#search-bar {
  height: 46px;
  border-radius: 48px;
  border: 0.5px solid lightgrey;
  width: 25%;
  padding-right: 40px;
  padding-left: 10px;
}
</style>
