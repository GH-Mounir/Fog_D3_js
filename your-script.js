// your-script.js

// Function to create a Leaflet map
function createMap() {
    // Create a Leaflet map centered at a specific location and zoom level
    var map = L.map('map').setView([36.8, 10.2], 10);

    // Add a tile layer to the map (using OpenStreetMap as the tile source)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a test marker to verify basic functionality
    L.marker([36.8, 10.2]).addTo(map).bindPopup("Test Marker");

    // Load and add markers to the map based on your CSV data
    d3.csv("cell_towers.csv").then(function(data) {
        console.log(data); // Log CSV data to the console for inspection
    });
}

// Call the function to create the map when the page is loaded
createMap();
