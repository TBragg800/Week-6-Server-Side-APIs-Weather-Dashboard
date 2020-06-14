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
    var userCity = $("#user-city").val().trim();
    var apiKey = "b15b2b973a104648ff62868774ec5427";
     

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCity + "&appid=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        console.log(response);

    });

});