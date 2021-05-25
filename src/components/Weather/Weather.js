import React, {useEffect, useState} from "react"
import loader from "../../assets/images/loader.gif"
import PropTypes from 'prop-types'
import {useTranslation} from "react-i18next"
import {useDispatch, useSelector} from "react-redux"
import {initCities, loadWeather} from "../../store/weather/actions"


function Weather({citiesList}) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.weatherReducer)
    const {t} = useTranslation()
    const cities = state.cities
    const isLoading = state.isLoading

    useEffect(() => {
        dispatch(initCities(citiesList))
    }, [])

    const loadWeatherHandler = (cityName) => {
        loadWeather(cityName)(dispatch)
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
                            <button onClick={() => loadWeatherHandler(city.name)}>{t("weather." + city.name)}</button>
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
