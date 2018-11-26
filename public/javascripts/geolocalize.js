
let center = {};



const geolocalize = () => {
  return new Promise((resolve, reject) => {
      if (!navigator.geolocation) reject('No geolocation available');
      navigator.geolocation.getCurrentPosition( (pos) => {
         center = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        resolve(center);
      }, reject)
  });
}





console.log('Browser does not support geolocation.');