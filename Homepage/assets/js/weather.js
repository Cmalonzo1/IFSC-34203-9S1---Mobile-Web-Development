url_imperial = 'https://api.open-meteo.com/v1/forecast?latitude=34.7253&longitude=-92.3379&current=weather_code,temperature_2m,cloud_cover,is_day&timezone=America%2FChicago&forecast_days=1&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch&forecast_hours=1&past_hours=1'

url_metric = 'https://api.open-meteo.com/v1/forecast?latitude=34.7253&longitude=-92.3379&current=weather_code,temperature_2m,cloud_cover,is_day&timezone=America%2FChicago&forecast_days=1&forecast_hours=1&past_hours=1'

const temp = document.getElementById('temperature');

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

async function fetchWeather(latitude, longitude) {
    
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=weather_code,temperature_2m,cloud_cover,is_day&timezone=${encodeURIComponent(timezone)}&forecast_days=1&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch&forecast_hours=1&past_hours=1`;

    try{ 
        const response = await fetch(url);
        const data = await response.json();
        temp.innerHTML = Math.round(data.current.temperature_2m) + data.current_units.temperature_2m;
        console.log(data.current.weather_code);
    } catch (error){
        console.error("Could not fetch weather data: ", error);
    }
}

/*
navigator.geolocation.getCurrentPosition((position) => {

    const {latitude, longitude} = position.coords;
    localStorage.setItem('geoLocation', JSON.stringify({latitude, longitude}));

    fetchWeather(latitude, longitude);

}, (error) => {
    fetchWeather(34.7253, -92.3379);
}
); 
*/

fetchWeather(34.7253, -92.3379);