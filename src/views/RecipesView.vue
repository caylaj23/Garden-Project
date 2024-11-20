<script setup>
import recipes from "@/components/recipes.vue";
import { reactive, ref } from "vue";
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();


let recipeDisplay = reactive([]);
let filteredRecipes = reactive([])


function changeRecipes(recipeType){
  recipeDisplay = recipeDisplay.filter((recipe) => recipe.type === recipeType)
}


function filterRecipes(event) {
  filteredRecipes = []
  if (event.target.value === "recipes") {
    filteredRecipes = recipeDisplay
    this.instance.proxy.$forceUpdate()
    return
  } else {
  recipeDisplay.forEach((recipe) => {
    if(recipe.recipetype === event.target.value) {
      console.log('hi')
      
      filteredRecipes.push(recipe)
      this.instance.proxy.$forceUpdate()
    }
  })
}

  console.log(filteredRecipes)
}


fetch("http:/backend-garden-project.vercel.app/localhost:3000/recipes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    recipeDisplay.push(...data);
    filteredRecipes.push(...data)
    console.log(data);
  });




</script>

<template>
    <h1>Recipes</h1>
      <select @change="filterRecipes($event)" name="recipes.type" id="recipes">
        <option value = 'recipes'>All Recipes</option>
        <option value = 'breakfast'>Breakfast</option>
        <option value = 'meat lovers'>Meat Lovers</option>
        <option value = 'vegan'>Vegan</option>
        <option value = 'healthy snacks'>Healthy Snacks</option>
        <option value = 'dessert'>Dessert</option>
      </select>

    <div class="food">
      <recipes  v-for="recipes in filteredRecipes" :recipes="recipes"></recipes>
    </div>
 
 
</template>

<style scoped>
h1 {
  font-size: 80px;
  margin: 5%;
}

body {
  color: black;
  background-color: #F5EFED;
  height: 100vh;
}

.food {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 60px;
  margin: 40px;
}

#recipes{
  margin-left: 40px;
}




</style>
