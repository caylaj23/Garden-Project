<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function startHere() {
  router.push("/map");
}
</script>

<template>
  <body>
    <div class="welcome">
      <h1>Welcome</h1>
      <h2>Our goal is to help you find fresh produce in your local area</h2>
      <br>
        <button @click="startHere()">Start Here</button>
   
    </div>
  </body>
</template>

<style scoped>

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-image: url('../assets/earth.jpg');
  height: 100vh;
  width: 100vw;
}
.welcome {
  height: 300px;
  width: 800px;
  background-color: #6D5959;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
  
}

h1,
h2 {
  font-family: 'garamond';
  color: white;
}



button {
  background-color: #C0C0C0;
  border: none;
  color: black;
  padding: 16px 32px;
  font-size: 16px;
  transition: 0.3s;
}

button:hover {
  border: black solid 4px;
  background-color: #F2E863;
  color: black;
}




</style>
