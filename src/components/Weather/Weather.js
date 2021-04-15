import React from "react"
import loader from "./images/loader.gif"
import PropTypes from 'prop-types'

const API_KEY = "6b02c545271af73892d7bf7af1391535"

const translations = {
    "ua": {
        "City": "Місто",
        "Temperature": "Температура",
        "FeelsLike": "Відчуття, як",
        "Humidity": "Вологість",
        "Pressure": "Тиск",
        "Sunrise": "Схід сонця",
        "Sunset": "Захід сонця",
        "Wind Speed": "Швидкість вітру",
        "Zaporizhzhia": "Запоріжжя",
        "Zhytomyr": "Житомир",
        "Ivano-Frankivsk": "Івано-франківськ",
        "Kropyvnytskyi": "Кропивницький",
        "Kyiv": "Київ"
    },
    "en": {
        "City": "City",
        "Temperature": "Temperature",
        "FeelsLike": "FeelsLike",
        "Humidity": "Humidity",
        "Pressure": "Pressure",
        "Sunrise": "Sunrise",
        "Sunset": "Sunset",
        "Wind Speed": "Wind Speed",
        "Zaporizhzhia": "Zaporizhzhia",
        "Zhytomyr": "Zhytomyr",
        "Ivano-Frankivsk": "Ivano-Frankivsk",
        "Kropyvnytskyi": "Kropyvnytskyi",
        "Kyiv": "Kyiv"
    }
}

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: [],
            isLoading: false
        }
    }

    getWeatherData = async (city) => {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        const data = await result.json()
        return {
            name: city,
            temperature: data.main.temp,
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            windSpeed: data.wind.speed
        }
    }

    componentDidMount() {
        this.props.cities.forEach((element, index) => {
            // this.getWeatherData(element).then(result => {
            //     this.setState({
            //         cities: [...this.state.cities, result]
            //     })
            // })
            setTimeout(() => {
                this.setState({
                    cities: [{ name: element }, ...this.state.cities]
                })
            }, index * 1000)
            // this.setState(({ cities }) => ({ cities: [{ name: element }, ...cities] }))
        });
        // const newCityNames = this.props.cities.map((cityName) => {
        //     return { name: cityName }
        // })
        // this.setState({
        //     cities: newCityNames
        // })
    }

    loadWeather = (cityName) => {
        this.setState({ isLoading: true })
        console.log(cityName)
        let pos = undefined
        for (let i = 0; i < this.state.cities.length; i++) {
            if (this.state.cities[i].name == cityName) {
                pos = i
                break
            }
        }
        this.getWeatherData(cityName).then((result) => {
            const newCities = this.state.cities
            newCities[pos] = result
            this.setState({
                cities: newCities
            })
            this.setState({ isLoading: false })
        })
    }

    render() {
        const { isLoading, cities } = this.state;
        const { lang } = this.props;
        return (
            <div className="work-books">
                {isLoading && <img className="loader" alt="loader" src={loader} />}
                <table>
                    <thead>
                        <tr>
                            <th>{translations[lang]["City"]}</th>
                            <th>{translations[lang]["Temperature"]}</th>
                            <th>{translations[lang]["FeelsLike"]}</th>
                            <th>{translations[lang]["Humidity"]}</th>
                            <th>{translations[lang]["Pressure"]}</th>
                            <th>{translations[lang]["Sunrise"]}</th>
                            <th>{translations[lang]["Sunset"]}</th>
                            <th>{translations[lang]["Wind Speed"]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cities.map((city) =>
                            <tr key={city.name}>
                                <td> <button onClick={() => this.loadWeather(city.name)}>{translations[lang][city.name]}</button></td>
                                <td>{city.temperature}</td>
                                {/* <input type={city.temperature} onInput = {this.getWeatherData}/>*/}
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
}
Weather.propTypes = {
    cities: PropTypes.array.isRequired,
    lang: PropTypes.string
}
export default Weather
