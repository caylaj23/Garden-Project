<script setup>
import resources from '@/components/resources.vue';
import { reactive } from 'vue';

let cardsDisplay = reactive([])

fetch('http://backend-garden-project.vercel.app:3000/resources')
.then((response) => {
    return response.json();
  })
.then(cards => {
    cardsDisplay.push(...cards)
    console.log(cards)
})
</script>




<template>
    <body>
    <h1>Additional Resources</h1>
<div class="cards">
<resources v-for="cards in cardsDisplay" :cards = "cards"></resources>
</div>


</body>
</template>


<style scoped>
h1 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5%;
}

body {
    text-align: center;
}

.cards {
    display: flex;
}
</style>