

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