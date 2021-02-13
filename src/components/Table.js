import React from 'react';

class Table extends React.Component {
    render() {
        let arr = [
            { name: "Taras", year: 1993 },
            { name: "Ivan", year: 2010 },
            { name: "Tanya", year: 1990 },
            { name: "Tony", year: 1965 }
        ]
        return (
            <div className="work-books">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map(item => <tr><td>{item.name}</td><td>{item.year}</td></tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table