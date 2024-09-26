<script setup>
import googlemap from '@/components/googlemap.vue';


</script>



<template>
    <body>
        <h1>Where To?</h1>
        <div class="map-container">
           <googlemap></googlemap>




        </div>
        
    



</body>
</template>



<style scoped>
body {
    text-align: center;
    background-color: #E9B872;
    height: 100vh;
}

.map-container {
    border: 3px solid black;
}


</style>