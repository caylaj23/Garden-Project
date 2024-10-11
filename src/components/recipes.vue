<script setup>
const props = defineProps(["recipes"]);
</script>

<template>
  <body>
    
  
  <a :href="recipes.link" target="_blank">
    <div class="layout-container">
      <p>{{ recipes.name }}</p>
      <img :src="recipes.image" />
      <p>{{ recipes.description }}</p>
    </div>
  </a>
</body>
</template>

<style scoped>
body {
border: 2px solid #F4F9E9;

}
a {
    color: #F4F9E9;
    font-size: larger;
}
.layout-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
  height: 300px;
  width: 300px;
 border: 2px #F4F9E9 solid;
}
</style>
