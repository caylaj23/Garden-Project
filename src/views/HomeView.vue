<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function startHere() {
  router.push('/map');
}
</script>

<template>
  <div class="layout">
    <h1>Welcome</h1>
    <h2>Our goal is to help you find fresh produce in your local area</h2>
    
      <div class="button-container">
      <button @click="startHere()" id="button">Start Here</button>
    </div>
    <div class="container">
      <img
        src="https://images.pexels.com/photos/5439/earth-space.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="earth"
      />
    </div>
  </div>
</template>

<style scoped>
h1,
h2 {
  font-family: Arial, Helvetica, sans-serif;
  color: #2e4057;
  text-align: center;
}

img {
  height: 100%;
  width: 100%;
}

#button {
  background-color: #ddd;
  border: none;
  color: black;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  transition: 0.3s;
  position: absolute;

}

#button:hover {
  background-color: #3e8e41;
  color: white;
}

.button-container {
  display: flex;
  
  justify-content: space-evenly;
  
}
</style>
