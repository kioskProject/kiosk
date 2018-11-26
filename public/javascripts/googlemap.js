// AQUÍ ABAJO VA API GOOGLE


function startMap(center) {
  const ironhackBCN = {
  	lat:  40.3923653,
  	lng: -3.6985298};
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: center
    }
  );
  
}

geolocalize().then(you => startMap(you))
