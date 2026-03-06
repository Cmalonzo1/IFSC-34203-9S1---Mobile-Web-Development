async function fetchWeather(){
    const url = `https://api.open-meteo.com/v1/forecast?latitude=34.7253&longitude=-92.3379&daily=temperature_2m_min,temperature_2m_max,weather_code&timezone=America%2FChicago&forecast_days=1&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`

    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`Error ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (e){
        console.error('Error fetching weather data: ', e);
        return null;
    }
}

function displayWeather(data) {
    if (!data) {
        document.querySelector('.weather').innerHTML = '<p>Failed to load weather</p>';
        return;
    }

    const minTemp = data.current.temperature_2m_min;
    const maxTemp = data.current.temperature_2m_max;

    document.querySelector('.weather').innerHTML = `
        <p>Temperature: ${minTemp} &#8594 ${maxTemp}</p>
    `;
}

tener('DOMContentLoaded', async () => {
    const weatherData = await fetchWeather();
    displayWeather(weatherData);
});