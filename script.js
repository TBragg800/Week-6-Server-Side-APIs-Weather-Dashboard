// button click to initiate search
// variable to obtain users desired city
// api key
// build query URL
// ajax response
// previous city searched must append and persist
// must parse data to get the city name, the date, an icon representation 
//   of weather conditions, the temperature, the humidity, the wind speed, 
//   and the UV index
//   append city data
// UV index must change class to display a color that indicates whether the 
//   conditions are favorable, moderate, or severe
// must parse data to get a 5-day forecast that displays the date, an icon 
//   representation of weather conditions, the temperature, and the humidity
//   append 5-day data
// local storage for when the user opens the weather dashboard
//   then the user is presented with the last searched city forecast



$("button").on("click", function() {
    var userCity = $(".thisCity").val().trim();
    var apiKey = "b15b2b973a104648ff62868774ec5427";
     
    var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userCity + "&appid=" + apiKey;
    var fiveDayQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCity + "&appid=" + apiKey;

    $.ajax({
        url:  currentQueryURL,
        method: "GET"
    }).then(function(response) {

        $(".city, .temp, .humidity, .wind, .uv-index").empty();

        var cityTime = new Date(response.dt * 1000);
        
        $(".city").append("<p>" + response.name + " (" + cityTime.toLocaleDateString("en-US") + ")" + "</p>");
        $(".city").append(`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".temp").append("<p>" + "Temperature: " + tempF.toFixed(2) + " °F" + "</p>");
        $(".humidity").append("<p>" + "Humidity: " + response.main.humidity + " %" + "</p>");
        $(".wind").append("<p>" + "Wind Speed: " + response.wind.speed + " MPH" + "</p>");

        var uviQueryURL = `https://api.openweathermap.org/data/2.5/uvi?appid=b15b2b973a104648ff62868774ec5427&lat=${response.coord.lat}&lon=${response.coord.lon}`;

        $.ajax({
            url:  uviQueryURL,
            method: "GET"
        }).then(function(response) {

            $(".uv-index").append("<p>" + "UV Index: " + "<span>" + response.value + "</span>" + "</p>");

            if (response.value < 3) {
                $("span").addClass("favorable");
            } else
            if (response.value < 8) {
                $("span").addClass("moderate");
            } else {
                $("span").addClass("severe");
            }
        
        });

        

    });


    $.ajax({
        url:  fiveDayQueryURL,
        method: "GET"
    }).then(function(response) {

        $(".5day").empty();

        $(".5day").append("<div class='card-body text-white bg-primary m-3 rounded float-left day1' style='max-width: 18rem;'>")
        var day1Time = new Date(response.list[3].dt * 1000);
        $(".day1").append("<h5>" + day1Time.toLocaleDateString("en-US") + "</h5>");
        $(".day1").append(`<img src="https://openweathermap.org/img/wn/${response.list[3].weather[0].icon}@2x.png">`);
        var day1TempF = (response.list[3].main.temp - 273.15) * 1.80 + 32;
        $(".day1").append("<p>" + "Temp: " + day1TempF.toFixed(2) + " °F" + "</p>");
        $(".day1").append("<p>" + "Humidity: " + response.list[3].main.humidity + " %" + "</p>");

        $(".5day").append("<div class='card-body text-white bg-primary m-3 rounded float-left day2' style='max-width: 18rem;'>")
        var day2Time = new Date(response.list[11].dt * 1000);
        $(".day2").append("<h5>" + day2Time.toLocaleDateString("en-US") + "</h5>");
        $(".day2").append(`<img src="https://openweathermap.org/img/wn/${response.list[11].weather[0].icon}@2x.png">`);
        var day2TempF = (response.list[11].main.temp - 273.15) * 1.80 + 32;
        $(".day2").append("<p>" + "Temp: " + day2TempF.toFixed(2) + " °F" + "</p>");
        $(".day2").append("<p>" + "Humidity: " + response.list[11].main.humidity + " %" + "</p>");

        $(".5day").append("<div class='card-body text-white bg-primary m-3 rounded float-left day3' style='max-width: 18rem;'>")
        var day3Time = new Date(response.list[19].dt * 1000);
        $(".day3").append("<h5>" + day3Time.toLocaleDateString("en-US") + "</h5>");
        $(".day3").append(`<img src="https://openweathermap.org/img/wn/${response.list[19].weather[0].icon}@2x.png">`);
        var day3TempF = (response.list[19].main.temp - 273.15) * 1.80 + 32;
        $(".day3").append("<p>" + "Temp: " + day3TempF.toFixed(2) + " °F" + "</p>");
        $(".day3").append("<p>" + "Humidity: " + response.list[19].main.humidity + " %" + "</p>");

        $(".5day").append("<div class='card-body text-white bg-primary m-3 rounded float-left day4' style='max-width: 18rem;'>")
        var day4Time = new Date(response.list[27].dt * 1000);
        $(".day4").append("<h5>" + day4Time.toLocaleDateString("en-US") + "</h5>");
        $(".day4").append(`<img src="https://openweathermap.org/img/wn/${response.list[27].weather[0].icon}@2x.png">`);
        var day4TempF = (response.list[27].main.temp - 273.15) * 1.80 + 32;
        $(".day4").append("<p>" + "Temp: " + day4TempF.toFixed(2) + " °F" + "</p>");
        $(".day4").append("<p>" + "Humidity: " + response.list[27].main.humidity + " %" + "</p>");

        $(".5day").append("<div class='card-body text-white bg-primary m-3 rounded float-left day5' style='max-width: 18rem;'>")
        var day5Time = new Date(response.list[35].dt * 1000);
        $(".day5").append("<h5>" + day5Time.toLocaleDateString("en-US") + "</h5>");
        $(".day5").append(`<img src="https://openweathermap.org/img/wn/${response.list[35].weather[0].icon}@2x.png">`);
        var day5TempF = (response.list[35].main.temp - 273.15) * 1.80 + 32;
        $(".day5").append("<p>" + "Temp: " + day5TempF.toFixed(2) + " °F" + "</p>");
        $(".day5").append("<p>" + "Humidity: " + response.list[35].main.humidity + " %" + "</p>");

    });

    localStorage.setItem("city", userCity);
    var prevCity = localStorage.getItem("city");
    $(".list-group").append("<button class='btn text-left list-group-item thisCity'>" + prevCity + "</button>")

    
    $("#user-city").val("");
});

