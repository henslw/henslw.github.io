$.getJSON("https://api.countapi.xyz/hit/www.henslw.io/visits", function(response) {
    $("#visits").text(response.value);
});