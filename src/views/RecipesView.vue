<script setup>
import recipes from "@/components/recipes.vue";
import { reactive, ref } from "vue";

let recipeDisplay = reactive([]);

fetch("http://localhost:3000/recipes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    recipeDisplay.push(...data);
    console.log(data);
  });
</script>

<template>
  <body>
    <div class="header">
      <h1>Recipes</h1>
    </div>
    <div class="food">
      <recipes v-for="recipes in recipeDisplay" :recipes="recipes"></recipes>
    </div>
  </body>
</template>

<style scoped>

body {
    background-color: #153243;
    
}   
.header {
  width: 100%;
}
.food {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

h1 {
    color: #F4F9E9;
  text-align: center;
  padding: 50px;
}
</style>
