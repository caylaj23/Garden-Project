<script setup>
const props = defineProps(["cards"]);
</script>

<template>
  <div class="card-container">
    <h1 id="name">{{ cards.name }}</h1>
    <a :href="cards.link" target="_blank">
      <img :src="cards.image" alt="" />
    </a>
    <a :href="cards.link" target="_blank">
      <button>Go To Site</button>
    </a>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
}
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px black solid;
  width: 600px;
  margin: 5%;
}

img {
  width: 100%;
}

button {
  background-color: gray;
  border: none;
  color: white;
  padding: 13px 32px;
  font-size: 16px;
  transition: 0.3s;
  align-items: center;
  margin: 25px;
}

button:hover {
  border: white solid 4px;
  background-color: #babd8d;
  color: white;
  border: black solid 4px;
}
</style>
