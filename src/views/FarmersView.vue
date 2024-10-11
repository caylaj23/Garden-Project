<script setup>


// fetch("http://localhost:3000/farmers")
// .then(response => response.json())
// .then(data => {
// return data
// })

// function submit(){

// let farmerInfo = {
// let name: name.value,
// let address: address.value
  //  let lat: latitude.value
  //  let lng: longitude.value

// }

//   const params = {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },

//   body: JSON.stringify(farmerInfo),
// };

</script>

<template>
  <body>
    <h1>Sign Up Here</h1>
    <div class="signup-container">
      <h3>Name / Organization</h3>
      <input type="text" placeholder="Enter Org Name" v-model="name"/>
      <h3>Address</h3>
      <input type="text" placeholder="123 Main Street" v-model="address" />

      <h3>Produce Sold</h3>
      <div class="inputs">
        <input type="checkbox" id="carrots" />carrots
        <input type="checkbox" id="onions" />onions
        <input type="checkbox" id="celery" />celery
        <input type="checkbox" id="potatoes" />potatoes
        <input type="checkbox" id="bell pepper" />bell pepper
        <input type="checkbox" id="garlic" />garlic <br /><br />
        <input type="text" placeholder="enter produce" />other
        <br />
      </div>
      <button @click="submit()">Submit!</button>
    </div>
  </body>
</template>

<style scoped>
body {
  background-image: url(../assets/garden.jpg);
  background-position: bottom;
  background-size: cover;
  
  color: black;
  height: 100vh;
}
.signup-container {
  box-shadow: 2px 3px 4px black;
background-color: #EEF0EB;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 60px;
  align-items: center;
  width: 400px;
  border: 3px solid black;
}

h1 {
    padding-top: 40px;
  text-align: center;
  color: black;
}


button {
  color: black;
  margin: 20px;
  padding: 8px 18px;
}

button.active, button:hover {
background-color: #A9AFD1;
}

.inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
