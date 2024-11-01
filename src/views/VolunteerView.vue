<script setup>
import { ref } from "vue";

let firstName = ref();
let lastName = ref();
let email = ref();
let phoneNumber = ref()

  function volunteer(){
  const params = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({firstname: firstName.value, lastname:lastName.value, email: email.value, phonenumber: phoneNumber.value}),
  };

  fetch("http://localhost:3000/volunteer", params)
    .then(volunteerInfo => {
      return volunteerInfo;
    });
    alert("Thank you for signing up! We will be in touch shortly.")
}

</script>

<template>
  <body>
   
    <div class="volunteer-container">
        <h1>Make A Difference Today</h1>
      <div class="inputs">
        <h3>First Name</h3>
        <input class="search-bar" placeholder="First Name" type="text">
        <h3>Last Name</h3>
        <input class="search-bar" placeholder="Last Name" type="text">
        <h3>Email</h3>
        <input class="search-bar" placeholder="email@email.com" type="text">
        <h3>Phone Number</h3>
        <input class="search-bar" placeholder="123-456-7890" type="text">
        </div>
        <button @click="volunteer()">Sign Me Up!</button>
      </div>
  </body>
</template>

<style scoped>
body {
    text-align: center;
  background-image: url(../assets/volunteer.jpg);
  background-position: top;
  background-size: cover;
  color: black;
  height: 100vh;
}
.volunteer-container {
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
}

button {
  background-color: gray;
  border: none;
  color: white;
  padding: 16px 32px;
  font-size: 16px;
  transition: 0.3s;
  align-items: center;
  margin: 8%;
}

button:hover {
  border: white solid 4px;
  background-color: #babd8d;
  color: white;
  border: black solid 4px;
}

.search-bar {
  height: 46px;
  border-radius: 48px;
  border: 0.5px solid lightgrey;
  width: 90%;
  padding-right: 40px;
  padding-left: 10px;
}

</style>
