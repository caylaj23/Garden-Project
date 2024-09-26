<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()








</script>

<script>
export default {
  name: 'App',
  data() {
    return {
      center: {lat: 51.093048, lng: 6.842120},
    }
  }
}

</script>

<template>

<GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100vw; height: 900px"
  >
  </GMapMap>








</template>








<style scoped>





</style>