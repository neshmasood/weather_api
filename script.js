// Open Weather Map API

const apiKey = "3f6e7a6134de5e7ef8a7eb89c516d06a";


$("form").on("submit", (event) => {
        event.preventDefault();
        const userInput = $('input[type="text"]').val();

$.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?zip=${userInput},us&appid=${apiKey}&units=imperial`,
    
}).then(
(data) => {
    $("#city").html(data.name);
    $("#temp").html(data.main.temp);
    $("#weather").html(data.weather[0].description);

    console.log(data); 

},
(error) => {
    console.log("bad, no good: ", error);
}
);
});