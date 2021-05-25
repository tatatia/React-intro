import {FETCH_WEATHER_START, INIT_CITIES, FETCH_WEATHER_FINISH} from "./types"

export const fetchWeatherStart = (cityName) => ({type: FETCH_WEATHER_START, cityName})

export const fetchWeatherFinish = (weatherData) => ({type: FETCH_WEATHER_FINISH, weatherData})

export const initCities = (citiesList) => ({type: INIT_CITIES, citiesList})

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

const getWeatherData = async (cityName) => {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
    const data = await result.json()
    return {
        name: cityName,
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        windSpeed: data.wind.speed
    }
}

export const loadWeather = (cityName) => {
    return (dispatch) => {
        dispatch(fetchWeatherStart(cityName))
        getWeatherData(cityName).then((result) => {
            dispatch(fetchWeatherFinish(result))
        })
    }
}