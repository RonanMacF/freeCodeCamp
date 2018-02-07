
var lat, lon, URL;
var celcius = true;
var api = "https://fcc-weather-api.glitch.me/api/current?";
$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = "lat=" + position.coords.latitude;
      lon = "lon=" + position.coords.longitude;
      URL = api + lat + "&" + lon;
      getWeather(URL);
    });
  }
});

$("#tempButton").click(function() {
  celcius = !celcius;
    getWeather(URL);
    console.log("clicked in function");
});


function getWeather(URL) {
  $.ajax({
    url: URL,
    success: function(result) {
      $("#city").text(result.name + ", ");
      $("#region").text(result.sys.country);
      $("#weather").text(result.weather[0].description);
      if (celcius) {
        $("#temp").text(result.main.temp + String.fromCharCode(176) + "C");
      } else {
        $("#temp").text(
          result.main.temp * (9 / 5) + 32 + String.fromCharCode(176) + "F"
        );
      }

      $("#icon").html('<img src ="' + result.weather[0].icon + '">');
    }
  });
}
