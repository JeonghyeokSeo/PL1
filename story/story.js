function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 1,
      center: { lat : 41.892, lng : -46.012 },
    });
  
    new google.maps.Marker({
      position: "London",
      map,
      title: "First",
    });
  }