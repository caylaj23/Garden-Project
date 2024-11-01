<script setup>
import { ref } from "vue";

//locations
let name = ref("");
let type = ref("");
let address = ref("");
let image = ref("");
let url = ref("");

//produce

// fetch('http://localhost:3000/farmers')
// .then(response => response.json())
// .then(ingredients => {
//   ingredients = {
//     ingid: ingredientid.value,
//     ingname: ingredientname.value,

//   }
// })
let ingredientid = ref("");
let ingredientname = ref("");
let carrots = false;
let onions = false;
let celery = false;
let potatoes = false;
let bellPepper = false;
let garlic = false;
let other = ref("");

let ingredientsarray = [];


//reverse geocoding
function updateIngredients(ingredient) {
  ingredientsarray.push(ingredient);
}
async function submit() {
  alert("Your information has been recorded"); 
  let urlString = address.value.split(" ").join("+");
  let latitude;
  let longitude;
  await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${urlString}&key=AIzaSyAVDwz028CVpz3cs1iTXnas3TfCDx6pKjg`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const locationData = data.results[0].geometry.location;
      latitude = locationData.lat;
      longitude = locationData.lng;
    });

  let farmerInfo = {
    type: type.value,
    name: name.value,
    address: address.value,
    image: image.value,
    url: url.value,
    ingredientsarray: ingredientsarray,
    ingredientid: ingredientid.value,
    latitude: latitude,
    longitude: longitude,
  };
  console.log(farmerInfo);
  const params = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(farmerInfo),
  };

  fetch("http://localhost:3000/farmers", params)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
</script>

<template>
  <body>
    <h1>Sign Up Here</h1>
    <div class="signup-container">
      <h3>Name / Organization</h3>
      <input
        class="search-bar"
        type="text"
        placeholder="Enter Org Name"
        v-model="name"
      />
      <h3>Address</h3>
      <input
        class="search-bar"
        type="text"
        placeholder="123 Main Street"
        v-model="address"
      />
      <h3>Image</h3>
      <input
        class="search-bar"
        type="text"
        placeholder="enter image address"
        v-model="image"
      />
      <h3>URL</h3>
      <input
        class="search-bar"
        type="text"
        placeholder="enter url here"
        v-model="url"
      />

      
      <div class="inputs">
        <h3>Produce Sold</h3>
        <input
          @change="updateIngredients(1)"
          v-model="carrots"
          type="checkbox"
          id="carrots"
        />carrots
        <input
          @change="updateIngredients(2)"
          v-model="onions"
          type="checkbox"
          id="onions"
        />onions
        <input
          @change="updateIngredients(4)"
          v-model="celery"
          type="checkbox"
          id="celery"
        />celery
        <input
          @change="updateIngredients(8)"
          v-model="potatoes"
          type="checkbox"
          id="potatoes"
        />potatoes
        <input
          @change="updateIngredients(3)"
          v-model="bellPepper"
          type="checkbox"
          id="bell pepper"
        />bell pepper
        <input
          @change="updateIngredients(5)"
          v-model="garlic"
          type="checkbox"
          id="garlic"
        />garlic
        <div class="other-container">
          <h3 id="other">Other</h3>
          <input
            @change="updateIngredients(17)"
            class="search-bar"
            v-model="other"
            type="text"
            placeholder="enter produce"
          />
        </div>
        <button @click="submit()">Submit!</button>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background-image: url(../assets/greenhouse.jpg);
  background-position: bottom;
  background-size: cover;
  color: black;
  height: 100vh;
}
.signup-container {
  box-shadow: 2px 3px 4px black;
  background-color: #f5efed;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 5%;
  align-items: center;
  width: 60%;
  border: 3px solid black;
}

h1 {
  padding-top: 40px;
  text-align: center;
  color: white;
}

button {
  background-color: gray;
  border: none;
  color: white;
  padding: 16px 32px;
  font-size: 16px;
  transition: 0.3s;
  align-items: center;
  margin: 5%;
}

button:hover {
  border: white solid 4px;
  background-color: #babd8d;
  color: white;
  border: black solid 4px;
}
.inputs {
  text-align: center;
  display: block;
  justify-content: center;
  align-items: center;
  margin: 5%;

}

.search-bar {
  height: 46px;
  border-radius: 48px;
  border: 0.5px solid lightgrey;
  width: 75%;
  padding-right: 40px;
  padding-left: 10px;
}

#other {
  margin: 5%;
}

.other-container {
  margin: 5%;
}
</style>
