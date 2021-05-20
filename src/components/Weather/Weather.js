import React, {useEffect, useState} from "react"
import loader from "../../assets/images/loader.gif"
import PropTypes from 'prop-types'
import {useTranslation} from "react-i18next"
import {useDispatch, useSelector} from "react-redux";
import {fetchWeatherFinish, fetchWeatherStart, initCities} from "../../store/weather/actions";

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

function Weather({citiesList}) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.weatherReducer)
    const {t} = useTranslation()
    const cities = state.cities
    const isLoading = state.isLoading

    useEffect(() => {
        dispatch(initCities(citiesList))
    }, [])

    const loadWeather = (cityName) => {
        dispatch(fetchWeatherStart(cityName))
        getWeatherData(cityName).then((result) => {
            dispatch(fetchWeatherFinish(result))
        })
    }

    return (
        <div className="work-books">
            {isLoading && <img className="loader" alt="loader" src={loader}/>}
            <table>
                <thead>
                <tr>
                    <th>{t("weather.City")}</th>
                    <th>{t("weather.Temperature")}</th>
                    <th>{t("weather.FeelsLike")}</th>
                    <th>{t("weather.Humidity")}</th>
                    <th>{t("weather.Pressure")}</th>
                    <th>{t("weather.Sunrise")}</th>
                    <th>{t("weather.Sunset")}</th>
                    <th>{t("weather.Wind Speed")}</th>
                </tr>
                </thead>
                <tbody>
                {cities.map((city) =>
                    <tr key={city.name}>
                        <td>
                            <button onClick={() => loadWeather(city.name)}>{t("weather." + city.name)}</button>
                        </td>
                        <td>{city.temperature}</td>
                        <td>{city.feelsLike}</td>
                        <td>{city.humidity}</td>
                        <td>{city.pressure}</td>
                        <td>{city.sunrise}</td>
                        <td>{city.sunset}</td>
                        <td>{city.windSpeed}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

Weather.propTypes = {
    citiesList: PropTypes.array.isRequired,
}

export default Weather
