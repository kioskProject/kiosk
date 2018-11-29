




function startMap(center) {
  const BCN = {
  	lat:  40.3923653,
  	lng: -3.6985298};
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: center
    }
  );

  window.kiosk.forEach(place => {
    new google.maps.Marker({
      position: {
        lat:place.location.latitude,
        lng:place.location.longitude
      },
      map: map,
      title: place.name
    });
  })
}

//////////// LO DE ABAJO
marker.addListener('click', function() {
  map.setZoom(8);
  map.setCenter(marker.getPosition());
});

//////
$(document).ready(function() {
  $(".myClass").click(function(event) {
    //ADD TO BD
  
  });
});


geolocalize().then(you => startMap(you))
