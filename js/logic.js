// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//   center: [36.1733, -120.1794],
//   zoom: 7
// });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 10,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
}).addTo(map);
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// var marker = L.marker([51.5, -0.09]).addTo(map);
// var marker=L.marker([37.4848, -122.2281]).addTo(map);

// L.circle([34.0522, -118.2437], {
//   radius: 50000,
//   color:"black",
//   fillcolor:"#ffffa1"
// }).addTo(map);

// L.circleMarker([34.0522, -118.2437]).addTo(map);


// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);
// Get data from cities.js
// let cityData = cities;
// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city);
//   L.circleMarker(city.location,{
// radius: city.population/100000,

//   }).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>").addTo(map);
  
  
//  });

// Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790]
// ];


// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "red"
// }).addTo(map);

// // Coordinates for each point to be used in the polyline.
// let multipleLine = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// Create a polyline using the line coordinates and make the line yellow.
// L.polyline(multipleLine, {
//   color: "purple"
// }).addTo(map);

let multicities=[
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];
var lineSymbol = {
  path: 'M 0,-1 0,1',
  strokeOpacity: 1,
  scale: 4
};

L.polyline(multicities,{
  color:"blue",
  icons: [{
    icon: lineSymbol,
    offset: '0',
    repeat: '200px'
  }],
  strokeOpacity: 0.5,
  weight:4
 }).addTo(map);



