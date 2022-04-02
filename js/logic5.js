// Create the map object with center and zoom level.


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 10,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
})
//.addTo(map);
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);


// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark,
    //"Satellite Streets": satelliteStreets
  };

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
});
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "torontoRoutes.json";

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data).addTo(map);
// });

// // Create a style for the lines.
// // let myStyle = {
// //     color: "#ffffa1",
// //     weight: 2
// // };

L.geoJSON(data,{
  color: "#ffffa1",
  weight: 2,
    onEachFeature:function(feature, layer){
        layer.bindPopup("<h3> Ariline: "+feature.properties.airline+ "</h3><hr><h3> Destination: "+feature.properties.dst+"</h3>")
      }
    }).addTo(map);
  });

  