<script setup>
import googlemap from "@/components/googlemap.vue";

fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=136+Tait+Place,+Louisville+Kentucky,+40212&key=AIzaSyAVDwz028CVpz3cs1iTXnas3TfCDx6pKjg`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

//where is the data going
//how can i get it there
// need to figure out how to convert address to latitude and longitude
// when an address is searched, the map needs to display ALL gardens, grocery stores in that area
// need to use a google geocoding map
function getLatLong() {

}


</script>

<template>
  <body>
 
    <div class="destination-container">
      <h1>Where To?</h1>
      <label class="map" for="map">Input Your Address</label>
      <br />
      <input type="text" placeholder="Enter Location Here" id="louisville"
      />
      <br />
      <button @click="getLatLong()">Search</button>
    </div>
    <div class="map-container">
      <googlemap></googlemap>
    </div>

  </body>
</template>

<style scoped>

h1 {
  color: white;
  padding-top: 50px;
}

body {
  background-image: url("../assets/globe.jpg");
  background-position: left;
  height: 100vh;
  width: 100vw;
}

.map-container {
  border: 2px solid black;
}
.destination-container {

  border-bottom: 2px black solid;
  width: 1000px;
}

button {
  margin: 20px;
  padding: 10px 25px;
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember",sans-serif;
  font-size: 13px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 100px;
}


.button:hover {
  background-color: #f7fafa;
}

.button:focus {
  border-color: #008296;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  outline: 0;
}

button.active, button:hover {
background-color: #F4F9E9;
}
</style>
