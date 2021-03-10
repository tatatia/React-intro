import React from "react"

const API_KEY = "6b02c545271af73892d7bf7af1391535"

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

    }

    getWeatherData = async (city) => {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        // console.log("res", result)
        const data = await result.json()
        // console.log("data", data)
        return {
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
        // console.log("Weather", this.props.cities[0])
        // this.getWeatherData(this.props.cities[1]).then(result => {
        //     console.log("newResult", result)
        // })
        this.props.cities.forEach(element => {
            console.log("before getWeatherData")
            this.getWeatherData(element).then(result => {
                console.log(element, result)
            })
            console.log("after getWeatherData")
        });

    }


    render() {
        // console.log(this.props.cities, "city")
        return (

            <div className="work-books">
                <table>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cities.map((city) =>
                            <tr key={city}>
                                <td>{city}</td>
                                <td>24</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }
}
export default Weather