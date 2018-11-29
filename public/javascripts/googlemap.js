
function startMap(center) {

  var location = { 
    lat: 0,
    lng:0
  };


  const BCN = {
  	lat:  40.3923653,
  	lng: -3.6985298};
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: {lat:40.416, lng:-3.7037}
    }
  );


  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Click to zoom'
  });

  map.addListener("click", function(e) {
    saveLocations(e.latLng.lng(),e.latLng.lat());
    window.chosenLocation = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(), 
    };
      marker.setPosition(chosenLocation);
  });


  function saveLocations(longitude,latitude){
    //add to DB 
    lng = document.getElementById('longitude').value = longitude;
    ltd = document.getElementById('latitude').value = latitude;
    } 
  

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



//////TO ADD WHAT IS IN THE CHEKBOX  TO THE DB
// $(document).ready(function() {
//   $(".myChoice").click(function(event) {




// startMap();

geolocalize().then(myLocation => startMap(myLocation))
