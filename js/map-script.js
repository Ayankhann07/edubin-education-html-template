function basicmap() {
  var mapOptions = {
    zoom: 15,
    scrollwheel: false,
    center: new google.maps.LatLng(23.2547, 77.4126), // Updated: All Saints College, Bhopal
    styles: [ /* keep your Snazzy Maps style here */ ]
  };

  var mapElement = document.getElementById('contact-map');
  var map = new google.maps.Map(mapElement, mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(23.2547, 77.4126), // Same updated coords for marker
    map: map,
    title: 'All Saints College, Bhopal'
  });
}

if ($('#contact-map').length != 0) {
  google.maps.event.addDomListener(window, 'load', basicmap);
}