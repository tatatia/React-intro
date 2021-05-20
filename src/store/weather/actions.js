import {FETCH_WEATHER_START, INIT_CITIES, FETCH_WEATHER_FINISH} from "./types"

export const fetchWeatherStart = (cityName) => ({type: FETCH_WEATHER_START, cityName})

export const fetchWeatherFinish = (weatherData) => ({type: FETCH_WEATHER_FINISH, weatherData})

export const initCities = (citiesList) =>({type: INIT_CITIES, citiesList})

