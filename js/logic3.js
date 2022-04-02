// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

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

//accessing github data from json
let airportdata="https://raw.githubusercontent.com/iparxan/Mapping_Earthquake/main/majorAirports.json";
d3.json(airportdata).then (function(data){
console.log(data);

// // Creating a GeoJSON layer with the retrieved data.
//  L.geoJSON(data).addTo(map);
// });

L.geoJSON(data, {
  onEachFeature: function(feature, layer) {
    console.log(feature)
    if(feature.properties){
       return layer.bindPopup("<h2>"+ feature.properties.faa+ "<h3>" + feature.properties.name+"<h3>" +"<h2>");
    }
     
      
       
        }
      }).addTo(map);
    });





// function onEachFeature(feature, layer) 
// {
//       if(feature.properties){
//         var airportIDCode=feature.properties.faa;
//         var airportName=feature.properties.name;
//       }
//          layer.bindPopup("<h2>"+ airportIDCode + "<h3>" + airportName+"<h3>" +"<h2>");
//  };
// });