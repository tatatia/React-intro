import React from 'react';

class Table2 extends React.Component {
    render() {
        let cars = [
            { car: "Ravone", model: "R2", number: 6083 , bodynumber: 34567, color: "red" },
            { car: "Kia", model: "Soul", number: 8876, bodynumber: 49800, color: "yellow" },
            { car: "Skoda", model: "Fabia", number: 8811, bodynumber: 65444, color: "white" },
            { car: "Nisan", model: "Micra", number: 3332, bodynumber: 20074, color: "blue" },
            { car: "Kia2", model: "Rio", number: 1122, bodynumber: 66544, color: "ping" }
        ]
        return (
            <div className="work-books">
                <table>
                    <thead>
                        <tr>
                            <th>Car</th>
                            <th>Model</th>
                            <th>Number</th>
                            <th>Body number</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map(modelcar =>
                            <tr key={modelcar.car}>
                                <td>{modelcar.car}</td>
                                <td>{modelcar.model}</td>
                                <td>{modelcar.bodynumber}</td>
                                <td>{modelcar.number}</td>
                                <td>{modelcar.color}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table2