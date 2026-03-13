url_imperial = 'https://api.open-meteo.com/v1/forecast?latitude=34.7253&longitude=-92.3379&current=weather_code,temperature_2m,cloud_cover,is_day&timezone=America%2FChicago&forecast_days=1&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch&forecast_hours=1&past_hours=1'

url_metric = 'https://api.open-meteo.com/v1/forecast?latitude=34.7253&longitude=-92.3379&current=weather_code,temperature_2m,cloud_cover,is_day&timezone=America%2FChicago&forecast_days=1&forecast_hours=1&past_hours=1'

async function fetchWeather() {
    const url = url_imperial;
    try{
        const response = await fetch(url);
        const data = await response.json();

        

        console.log(data.current.temperature_2m);
    } catch (error){
        console.error("Could not fetch weather data: ", error);
    }


}

fetchWeather();