function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat : 41.892, lng : -46.012 },
    });
  
    new google.maps.Marker({
      position: { lat : 49.35384670547889, lng : -123.10022193015402},
      map,
      animation: google.maps.Animation.DROP,
    });
    marker.addListener("click", toggleBounce);
  }
function toggleBounce() {
  if (marker.getAnimation()  !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.DROP)
  }
  
}