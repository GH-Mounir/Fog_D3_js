// your-script.js

// Function to create a Leaflet map with clustering
function createMap() {
    // Create a Leaflet map centered at a specific location and zoom level
    var map = L.map('map').setView([36.8, 10.2], 10);

    // Add a tile layer to the map (using OpenStreetMap as the tile source)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Create a MarkerClusterGroup
    var markers = L.markerClusterGroup();

    // Load and add markers to the map based on your CSV data
    d3.csv("cell_towers.csv").then(function(data) {
        data.forEach(function(d) {
            // Determine marker color based on MNC
            var markerColor = getMarkerColor(+d.MNC);

            // Create a marker with the downloaded SVG icon
            var marker = L.marker([+d.Latitude, +d.Longitude], {
                icon: L.divIcon({
                    className: 'leaflet-div-icon',
                    html: '<img src="signal-solid.svg" style="width: 24px; height: 24px; color: ' + markerColor + ';" />',
                    iconSize: [24, 24], // Adjust icon size as needed
                    iconAnchor: [12, 24]
                })
            });

            // You can customize the marker popup content if needed
            marker.bindPopup("Area: " + d.Area + "<br>Cell: " + d.Cell + "<br>MNC: " + d.MNC);

            // Add the marker to the MarkerClusterGroup
            markers.addLayer(marker);
        });

        // Add the MarkerClusterGroup to the map
        map.addLayer(markers);
    });
}

// Call the function to create the map when the page is loaded
createMap();

// Function to determine marker color based on MNC
function getMarkerColor(mnc) {
    // Customize this function based on your requirements
    switch (mnc) {
        case 1:
            return 'orange';
        case 2:
            return 'blue';
        case 3:
            return 'red';
        case 54:
            return 'yellow';
        default:
            return 'gray';
    }
}