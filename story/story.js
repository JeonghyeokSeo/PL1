let marker;
let points = [];

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat : 41.892, lng : -46.012 },
    });
    
    const lineSymbol = {
      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
      scale: 7,
      strokeColor: "#00008B",
    };

    //Points for the markers and the route poly line
    const cities = [
      ["Vancouver", 49.35384670547889, -123.10022193015402],
      ["Seatle" , 47.60599405111063, -122.34088114604468],
      ["Chicago", 41.87354091314642, -87.62897238907448],
      ["Boston", 42.35696508639847, -71.06092252201881],
      ["New York", 40.727336967532864, -73.99206199292796],
      ["Montreal", 45.50841423728526, -73.58130546092235],
      ["Toronto", 43.64466243553393, -79.38698960947418],
      ["Zurich", 47.376514091350934, 8.54044676493272],
      ["London", 51.5089916248246, -0.12687045235293043],
      ["Porto", 41.14402366962618, -8.607948294424936],
      ["Lisbon", 38.72358716622662, -9.140336301740069],
      ["Madrid", 40.42009859660522, -3.7035746445081608],
      ["Granada", 37.17721289938646, -3.5988122219545646],
      ["Barcelona", 41.38612529422221, 2.1694486010519394],
      ["Toulouse", 43.60434527083977, 1.4425384952508142],
      ["Montpellier", 43.61067771262344, 3.874871756054064],
      ["Avignon", 43.94931993738307, 4.805068307756644],
      ["Marseille", 43.29643115362406, 5.371247571829417],
      ["Lyon", 45.76401693819585, 4.835739786871722],
      ["Paris", 48.856825438291075, 2.352214721809873],
      ["Berlin", 52.52097473991668, 13.406033455954336],
      ["Vienna", 48.20732662573079, 16.37498329281878],
      ["Budapest", 47.49762844797976, 19.04272607926892],
      ["Zagreb", 45.816665771055256, 15.987672488862355],
      ["Dubrovnik", 42.650592800592065, 18.09486446993712],
      ["Mostar", 43.34391822260603, 17.81059716644244],
      ["Sarajevo", 43.85532026878192, 18.408602379962893],
      ["Belgrade", 44.813719020302884, 20.454362527894382],
      ["Athens", 37.98424527507398, 23.728922705140562],
      ["Santorini", 36.39309208364547, 25.456291988396277],
      ["Istanbul", 41.010732210336506, 28.97344570582138]

    ];
    

    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];
  
      marker = new google.maps.Marker({
        position: { lat: city[1], lng: city[2] },
        map,
        title: city[0],
        animation: google.maps.Animation.DROP,
      }); 

      //Add point to list
      points.push({lat: city[1], lng: city[2]})


    };  

    //Draw polyline anf add animatied symbol
    const route = new google.maps.Polyline({
      path: points,
      geodesic: true,
      strokeColor: "#2F4F4F",
      strokeOpacity: 1.5,
      strokeWeight: 3,
      icons: [
        {
          icon: lineSymbol,
          offset: "50%",
        },
      ],
      map: map,
    });
    
    route.setMap(map)
    marker.addListener("click", toggleDrop);
    animatedSymbol(route);
  };
  

//Function for pin drop animation
function toggleDrop() {
  if (marker.getAnimation()  !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.DROP)
  } 
}

//function for arrow moving animation
function animatedSymbol(route) {
  let count = 0;

  window.setInterval(() => {
    count = (count + 1 ) % 200;

    const icons = route.get("icons");

    icons[0].offset = count / 2 + "%";
    route.set("icons", icons);
  }, 40);
};