import React from "react"

const API_KEY = "6b02c545271af73892d7bf7af1391535"

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: []
        }
    }

    getWeatherData = async (city) => {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        // console.log("res", result)
        const data = await result.json()
        // console.log("data", data)
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
            // console.log("before getWeatherData")
            // this.getWeatherData(element).then(result => {
            //     // console.log(element, result)
            //     this.setState({
            //         cities: [...this.state.cities, result]
            //     })
            // })
            // console.log("after getWeatherData")
            setTimeout(() => {
                console.log(element)
                console.log(this.state.cities)
                this.setState({
                    cities: [{ name: element }, ...this.state.cities]
                })
            }, index * 1000)
        });
        // const newCityNames = this.props.cities.map((cityName) => {
        //     return { name: cityName }
        // })
        // console.log(newCityNames)
        // this.setState({
        //     cities: newCityNames
        // })
    }

    loadWeather = (cityName) => {
        console.log(cityName)
        let pos = undefined
        for (let i = 0; i < this.state.cities.length; i++) {
            if (this.state.cities[i].name === cityName) {
                pos = i
                break
            }
        }
        console.log(pos)
        this.getWeatherData(cityName).then((result) => {
            console.log(result)
            const newCities = this.state.cities
            newCities[pos] = result
            this.setState({
                cities: newCities
            })
        })
    }

    render() {
        return (
            <div className="work-books">
                <table>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>FeelsLike</th>
                            <th>Humidity</th>
                            <th>Pressure</th>
                            <th>Sunrise</th>
                            <th>Sunset</th>
                            <th>Wind Speed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cities.map((city) =>
                            <tr key={city.name}>
                                <td> <button onClick={() => this.loadWeather(city.name)}>{city.name}</button></td>
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
export default Weather
