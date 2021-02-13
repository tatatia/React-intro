import React from 'react';

class Table extends React.Component {
    render() {
        let people = [
            { name: "Taras", year: 1993, height: 170 },
            { name: "Ivan", year: 2010, height: 130 },
            { name: "Tanya", year: 1990, height: 160 },
            { name: "Tony", year: 1965, height: 165 }
        ]
        return (
            <div className="work-books">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Year</th>
                            <th>Height</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map(person =>
                            <tr>
                                <td>{person.name}</td>
                                <td>{person.year}</td>
                                <td>{person.height}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table