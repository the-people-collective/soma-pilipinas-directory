var somaMap = L.map('map').setView([37.778119, -122.409379], 14.5);
var pageData = window.__PAGE_DATA__;
var mapData = pageData.map;
var at = atob(mapData.sk);

// Display Map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + at, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: at
}).addTo(somaMap);

// SoMA Boundaries
var boundary = L.polygon([
  [37.789285, -122.401519],  // 2nd & Market
  [37.781838, -122.392188],  // 2nd & Brannan
  [37.769194, -122.408056],  // Division & Brannan
  [37.769533, -122.410867],  // 11th & Brannan
  [37.775555, -122.418753]   // 11th & Market
], {
  // options
})
.addTo(somaMap)
.bindPopup('Welcome to SoMA Pilipinas!');

// create function that makes markers with pop up
var setMarker = function setMarker (point, type) {
  var metadata = point.metadata;
  var website = !metadata.website ? 'No website :(' : '<a href='+ metadata.website +'>' + metadata.website + '</a>';
  var address = !metadata.address ? 'No address :(' : metadata.address;

  var popupContent = '<p>' + point.name + '</p>' + '<p>' + type + '</p>' + '<p>' + website + '</p>' + '<p>' + address + '</p>';
  var popupOptions = {};
  L.marker([
    point.latitude,
    point.longitude
  ])
  .addTo(somaMap)
  .bindPopup(
    popupContent,
    popupOptions
  );
};


// Add Cultural Markers
var landmarks = pageData.points_of_interest.landmarks;

for (var i = 0; i < landmarks.length; i++) {
  var landmark = landmarks[i];
  setMarker(landmark, 'Cultural Site')
}

// Add Businesses
var businesses = pageData.points_of_interest.businesses;

for (var i = 0; i < businesses.length; i++) {
  var business = businesses[i];
  setMarker(business, "Business")
}

// Add Bounds (Recenter map, if user scrolls to location outside SoMa Boundaries)
somaMap.setMaxBounds(boundary.getBounds());