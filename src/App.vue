<script setup>

import { RouterLink, RouterView, useRouter } from "vue-router";
const router = useRouter()

function providerButton(){
  router.push('/farmers')
  console.log('hello')
}


</script>


<template>
  <div class="wrapper">
    <header>
      <nav>
                <RouterLink class="menu" to="/">Home</RouterLink>
                <RouterLink class="menu" to="/map">Find Produce</RouterLink>
                <RouterLink class="menu" to="/recipes">Recipes</RouterLink>
        <RouterLink class="menu" to="/resources">Resources</RouterLink>
        <div class="signup-Button">
        <p>Food Provider?<span><button @click="providerButton()">Sign up here</button></span></p>
      </div>
      </nav>
    </header>

  </div>

  <RouterView />
</template>

<style scoped>

.signup-button {
  display: flex;
  justify-content: end;
}
p {
  font-size: medium;
  color: white;
}

header {
  background-color: #BABD8D;
  height: 15%;
}


nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: x-large;
  padding: 20px;
}


nav .menu {
  color: white;
  position: relative;
  display: flex;
  transition: 0.4s;
}

nav .menu:hover {
  background-color:gray;
  padding: 1.5%;
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
  background-color: #FFFFFF;
  color: black;
  border: black solid 4px;
}

</style>
