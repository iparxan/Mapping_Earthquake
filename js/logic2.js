// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 10);
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


// var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "name": "Coors Field",
//         "amenity": "Baseball Stadium",
//         "popupContent": "This is where the Rockies play!"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [-104.99404, 39.75621]
//     }
// };
// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport).addTo(map);
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "<h3>"+ feature.properties.city+ " "+ feature.properties.country + "</h3>" + "</h2>");
//     }

//   }).addTo(map);

  L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
      console.log(feature)
      
       
        
          return layer.bindPopup("<h2>"+ feature.properties.faa+ "<h3>" + feature.properties.name+"<h3>" +"<h2>");
          }
        }).addTo(map);



