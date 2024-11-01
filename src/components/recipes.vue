<script setup>
import { reactive } from "vue";
const props = defineProps(["recipes"]);
</script>

<template>
    <div class="layout-container">
      <a :href="recipes.link" target="_blank"><img :src="recipes.image" /> </a>
      <div class="card">
        <h1>{{ recipes.name }}</h1>
        <p>{{ recipes.description }}</p>
        <a :href="recipes.link" target="_blank">
          <button>Go To Recipe</button>
        </a>
      </div>
    </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
}

.card {
  text-align: center;
  width: 200px;
  
}

img {
  height: 400px;
  width: 400px;
  border: 2px #f4f9e9 solid;
  margin-right: 40px;
}
button {
  background-color: gray;
  border: none;
  color: white;
  padding: 16px 32px;
  font-size: 16px;
  transition: 0.3s;
  align-items: center;
}

button:hover {
  border: white solid 4px;
  background-color: #babd8d;
  color: white;
  border: black solid 4px;
}
</style>
