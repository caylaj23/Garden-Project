<script setup>
import { onMounted, ref, reactive, getCurrentInstance} from "vue";
 
let markersArray = reactive([]);
let map;
const props = defineProps(['userLocation'])

 //geocoding api
async function initMap() {
  const position = { lat: 38.2469, lng: -85.7664 };

  const { Map,InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const infoWindow = new InfoWindow()

  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

markersArray.forEach(location => {
  console.log(location)
  var contentString =  '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    `<h1 id="firstHeading" class="firstHeading">${location.position.label}</h1>`+
    '<div id="bodyContent">' +
    `<p>${location.address}</p>` +
    `<img style="height: 100px; width: 100px" src="${location.image}">`+
    "<br>"+
    '<p>ingredients</p>' + 
    '<br>' +
    `<p>${location.ingredients}</p>`
    "<a href='" + location.url + "' target='_blank'>More Details</a><br>";
    "<br/>" +
   
    "</div>" +
    "</div>";
    

    const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: location.position.label,
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: {lat: location.position.lat, lng: location.position.lng},
    title: location.position.label,
  });

  marker.addListener("click", ({ domEvent, latLng }) => {
      const { target } = domEvent;

      infoWindow.close();
      infoWindow.setContent(contentString);
      infoWindow.open(marker.map, marker);
    });
})

 new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: props.userLocation,
      radius: 2000,
    });
}


function goToLocation(){
    console.log("hello")
}
fetch("http://backend-garden-project.vercel.app:3000/map")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    data.forEach((location) => {
      markersArray.push({
        id: location.locationid,
        address: location.address,
        position: {
          lat: Number(location.latitude),
          lng: Number(location.longitude),
          label: location.name,
        },
        image: location.image,
        type: location.type,
        url: location.url,
      ingredients: location.array_agg.join(', ')
        //ingredients at this location
      });
    });
    console.log(markersArray);
    initMap()
  });
</script>

<template>
  <div id="map" style="width: 1100px; height: 950px"></div>
</template>

<style scoped></style>
