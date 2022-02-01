function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 1,
      center: { lat : 41.892, lng : -46.012 },
    });
  
    new google.maps.Marker({
      position: { lat : 49.35384670547889, lng : -123.10022193015402},
      map,
      title: "Vancouver",
    });
  }