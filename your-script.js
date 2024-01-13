// your-script.js

// Function to create a Leaflet map
function createMap() {
    // Create a Leaflet map centered at a specific location and zoom level
    var map = L.map('map').setView([36.8, 10.2], 10);

    // Add a tile layer to the map (using OpenStreetMap as the tile source)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Load and add markers to the map based on your CSV data
    d3.csv("cell_towers.csv").then(function(data) {
        data.forEach(function(d) {
            // Check for the presence of 'country'
            const country = d.hasOwnProperty('country') ? d.country : null;

            // Add a marker to the map
            L.marker([+d.Latitude, +d.Longitude]).addTo(map)
                .bindPopup("Area: " + d.Area + "<br>Cell: " + d.Cell + "<br>Country: " + country);
        });
    });
}

// Call the function to create the map when the page is loaded
createMap();

