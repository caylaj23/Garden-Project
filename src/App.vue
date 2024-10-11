<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header>
    <div class="wrapper">
      <header>
        <nav>
        <RouterLink class="menu" to="/">Home</RouterLink>
        <RouterLink class="menu" to="/map">Map</RouterLink>
        <RouterLink id="recipes" class="menu" to="/recipes">Recipes</RouterLink>
        <RouterLink class="menu" to="/farmers">Farmer Signup</RouterLink>
        </nav>
      </header>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

nav {
  display: flex;
 justify-content: space-evenly;
 align-items: center;
}

.menu {
font-size: larger;
border: 3px #6D5959 solid;
}

nav .menu {
  color: black;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  display: flex;
  transition: .4s;
}
nav .menu.active, nav .menu:hover {
background-color: #F2E863;
border-bottom-color: #6D5959;
}

.recipes {
position: relative;
display: inline-block;
}

</style>
