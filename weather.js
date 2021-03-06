$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    var currentTemp = data.currently.temperature;
    var currentSummary = data.currently.summary;
    var dailySummary = data.hourly.summary;
    var currentIcon = data.currently.icon;

    var todayIcon = data.daily.data[0].icon;
    var tomorrowIcon = data.daily.data[1].icon;
    var dayafterIcon = data.daily.data[2].icon;

    var todayMin = data.daily.data[0].apparentTemperatureMin
    var todayMax = data.daily.data[0].apparentTemperatureMax
    var tomorrowMin = data.daily.data[1].apparentTemperatureMin
    var tomorrowMax = data.daily.data[1].apparentTemperatureMax
    var dayafterMin = data.daily.data[2].apparentTemperatureMin
    var dayafterMax = data.daily.data[2].apparentTemperatureMax

    // test if statement
    //var currentIcon = "snow";
     if (currentIcon == "rain") {
        var currentImage = '<img src="SVG/Cloud-Rain.svg">';
      } else if (currentIcon == "clear-day") {
        var currentImage = '<img src="SVG/Sun.svg">';
      } else if (currentIcon == "clear-night") {
        var currentImage = '<img src="SVG/Moon.svg">';
      } else if (currentIcon == "snow") {
        var currentImage = '<img src="SVG/Snowflake.svg">';
      } else if (currentIcon == "sleet") {
        var currentImage = '<img src="SVG/Cloud-Snow.svg">';
      } else if (currentIcon == "wind") {
        var currentImage = '<img src="SVG/Wind.svg">';
      } else if (currentIcon == "fog") {
        var currentImage = '<img src="SVG/Cloud-Fog.svg">';
      } else if (currentIcon == "cloudy") {
        var currentImage = '<img src="SVG/Cloud.svg">';
      } else if (currentIcon == "partly-cloudy-day") {
        var currentImage = '<img src="SVG/Cloud-Sun.svg">';
      } else if (currentIcon == "partly-cloudy-night") {
        var currentImage = '<img src="SVG/Cloud-Moon.svg">';
      } else {
        var currentImage = "Unknown"
      }

    var markup = '<div class="row"><div class="col-xs-4"><h3 class="text-center">Current Weather Near You:</h3></div><div class="col-xs-8"><h3 class="text-center">Upcoming Weather</h3></div></div><div class="row"><div class="col-xs-4"><table class="table-bordered table-hover"><tbody><tr><td class="table-body-bold">Temperature</td><td>' + currentTemp + '<img id="fahrenheit" src="SVG/Degrees-Fahrenheit.svg"></tr><tr><td class="table-body-bold">Current Summary</td><td>' + currentSummary + currentImage + '</td></tr><tr><td class="table-body-bold">Daily Summary</td><td>' + dailySummary + '</tbody></table></div><div class="col-xs-8"><table class="table-bordered text-center"><thead><tr><td class="equal-width"><h4>Today</h4></td><td class="equal-width"><h4>Tomorrow</h4></td><td class="equal-width"><h4>The Day After</h4></td></tr></thead><tbody><tr><td>' + todayIcon + '</td><td>' + tomorrowIcon + '</td><td>' + dayafterIcon + '</td></tr><td>High: ' + todayMax + '<br>Low: ' + todayMin + '</td><td>High: ' + tomorrowMax + '<br>Low: ' + tomorrowMin + '</td><td>High: ' + dayafterMax + '<br>Low: ' + dayafterMin + '</td></tr></tbody></table></div></div>'
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});