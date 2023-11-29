var types = {
  ["Dispach"]: L.divIcon({
    html: '<i class="fa-solid fa-location-dot fa-2x"></i>',
    iconSize: [20, 20],
    className: 'map-icon-ping',
    offset: [-10, 0]
  })
}


customcrs = L.extend({}, L.CRS.Simple, {
  projection: L.Projection.LonLat,
  scale: function(zoom) {

      return Math.pow(2, zoom);
  },
  zoom: function(sc) {

      return Math.log(sc) / 0.6931471805599453;
  },
  distance: function(pos1, pos2) {
      var x_difference = pos2.lng - pos1.lng;
      var y_difference = pos2.lat - pos1.lat;
      return Math.sqrt(x_difference * x_difference + y_difference * y_difference);
  },
  transformation: new L.Transformation(0.02072, 117.3, -0.0205, 172.8),
  infinite: false
});
  
var map = L.map("map", {
  crs: customcrs,
  minZoom: 3,
  maxZoom: 5,
  zoom: 5,

  noWrap: true,
  continuousWorld: false,
  preferCanvas: true,

  center: [0, -1024],
  maxBoundsViscosity: 1.0
});

var customImageUrl = 'https://cdn.discordapp.com/attachments/1107385218467364864/1179480501011091556/EdOZjzF.jpg?ex=6579efd1&is=65677ad1&hm=4bd9e1a3f5f068f82c60ebde56e453a3eb0b49bf6afc120ff741b32653f1f8dc&';

var sw = map.unproject([0, 1024], 3 - 1);
var ne = map.unproject([1024, 0], 3 - 1);
var mapbounds = new L.LatLngBounds(sw, ne);
map.setView([-300, -1500], 4);
map.setMaxBounds(mapbounds);


map.attributionControl.setPrefix(false)
  
L.imageOverlay(customImageUrl, mapbounds).addTo(map);

map.on('dragend', function() {
  if (!mapbounds.contains(map.getCenter())) {
      map.panTo(mapbounds.getCenter(), { animate: false });
  }
});
var mapMarkers = L.layerGroup();

var marker2 = L.marker([65.55391, -137.08740], { icon: types["Dispach"] })
marker2.addTo(map)
marker2.addTo(mapMarkers)
marker2.bindPopup("<h1>" + name + "</h1><i>test</i>");