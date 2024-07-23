const btn = document.getElementById("getweather");
const api_id = "bd5e378503939ddaee76f12ad7a97608";
const city_id = document.getElementById("city");
const NAME = document.getElementById("Name");
const temperature = document.getElementById("temperature");
const conditions = document.getElementById("conditions");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
let cityName ;
btn.addEventListener("click", async() =>{
    cityName = city_id.value;
        if(city){
            try{
                const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_id}&units=metric;`);
                const jsondata = await data.json();
                console.log(jsondata);
                display_weather(jsondata);
            }
            catch (error) {
                alert("Invalid city");
            }
        } 
        else{
            alert("Invalid city");
        } 
});
function display_weather(jsondata){
    NAME.textContent = jsondata.name;
    temperature.textContent =` Temperature: ${Math.ceil(jsondata.main.temp - 273)}°C`;
    conditions.textContent = `Conditions: ${jsondata.weather[0].description}`;
    humidity.textContent = `Humidity: ${jsondata.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${jsondata.wind.speed} Km/hr`;
}