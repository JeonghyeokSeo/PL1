let marker;

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat : 41.892, lng : -46.012 },
    });
    
    cities = [
      ["Vancouver", 49.35384670547889, -123.10022193015402],
      ["Seatle" , 47.60599405111063, -122.34088114604468]
    ]

    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];
  
      marker = new google.maps.Marker({
        position: { lat: city[1], lng: city[2] },
        map,
        title: city[0],
        animation: google.maps.Animation.DROP,
      });

      marker.addListener("click", toggleBounce);
    }
  }


function toggleBounce() {
  if (marker.getAnimation()  !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.DROP)
  }
  
}