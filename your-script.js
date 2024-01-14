function createMap() {
    var map = L.map('map').setView([36.8, 10.2], 10);

    // Change base map style to Stamen Toner
    L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
        attribution: '© Stamen Design'
    }).addTo(map);

    // Create an object to store marker clusters based on MNC values
    var markerClusters = {};

    // Load and add markers to the map based on your CSV data
    d3.csv("cell_towers.csv").then(function(data) {
        data.forEach(function(d) {
            var markerColor = getMarkerColor(+d.MNC);

            var marker = L.marker([+d.Latitude, +d.Longitude], {
                icon: L.divIcon({
                    className: 'leaflet-div-icon',
                    html: '<div class="marker-dot" style="background-color: ' + markerColor + ';"></div>',
                    iconSize: [12, 12],
                    iconAnchor: [6, 6]
                })
            });

            marker.bindPopup("Area: " + d.Area + "<br>Cell: " + d.Cell + "<br>MNC: " + d.MNC);

            // Create a marker cluster for each MNC value
            if (!markerClusters[d.MNC]) {
                markerClusters[d.MNC] = L.markerClusterGroup();
            }

            // Add the marker to the appropriate cluster
            markerClusters[d.MNC].addLayer(marker);
        });

        // Add marker clusters to the map
        for (var mnc in markerClusters) {
            map.addLayer(markerClusters[mnc]);
        }

        // Create a layer control
        var overlayMaps = {};
        for (var mnc in markerClusters) {
            overlayMaps["MNC " + mnc] = markerClusters[mnc];
        }

        L.control.layers(null, overlayMaps).addTo(map);
    });
}

createMap();

function getMarkerColor(mnc) {
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
