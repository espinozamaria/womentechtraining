$(function(){
  $('.carousel').carousel({
    interval: 3000,
    pause: false,
    // wrap:false,
    keyboard: false
  });
});

function myMap() {
  var uluru = {lat: 36.202447, lng: -120.103318};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
