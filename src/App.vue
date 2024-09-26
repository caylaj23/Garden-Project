<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>

  

  <header>
   
    <div class="wrapper">
     

      <nav class="header">
        <RouterLink class="header" to="/">Home</RouterLink>
        <RouterLink class="recipes" to="/recipes">Recipes</RouterLink>
        <!-- <RouterLink class="signup" to="/signup">Sign Up</RouterLink>
        <RouterLink class="farmers"to="/farmers">Providers Signup</RouterLink> -->
      </nav>
    </div>
  </header>

  

  <RouterView />

</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-evenly;
}

.header, .recipes, .signup {
  color: #053B06;
}


</style>
