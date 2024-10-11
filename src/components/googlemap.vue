<script setup>
import { reactive, ref } from "vue";


// const circleOptions = 
//  {
//         strokeColor: "#FF0000",
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: "#FF0000",
//         fillOpacity: 0.35,
// }

// let radius = ({lat:38.26093731737776, lng: -85.8189028846559}) 
// navigator.geolocation.getCurrentPosition((position) => {
//   radius.value = {lat: position.coords.latitude, lng: position.coords.longitude};
//   console.log(radius.value)
// });

const center = { lat: 38.2469, lng: -85.7664 };
let markersArray = reactive([]);

fetch("http://localhost:3000/map")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((location) => {
      markersArray.push({
        id: location.locationid,
        position: {
          lat: Number(location.latitude),
          lng: Number(location.longitude),
          label: location.name,
        },
      });
    });
    console.log(markersArray);
  });



</script>

<template>
  <GMapMap
    :center="{ lat: 38.2469, lng: -85.7664 }"
    :zoom="13"
    map-type-id="terrain"
    style="width: 100vw; height: 900px"
    :options="{
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true
      }"
  >
    <GMapMarker
      :key="marker.id"
      v-for="marker in markersArray"
      :position="marker.position"
         :clickable="true"
          @click="openInfoWindow(marker.id)"
          
    />
    <GMapCircle
        :radius="6"
        :center="{lat:38.26093731737776, lng: -85.8189028846559}"
        :options = "circleOptions"/>
        
  </GMapMap>
  
</template>

<style scoped>

</style>
