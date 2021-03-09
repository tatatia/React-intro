import React from "react"

class Weather extends React.Component {
    render() {
        console.log(this.props.cities, "city")
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