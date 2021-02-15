import React from 'react';


// people.sort((elem, elemNext) => elem.year > elemNext.year ? 1 : -1);

// people.reverse() // розвернуло масив

// people
//     .filter((element) => element.year > 1990)
//     .map((element, index) => {
//         let year = element.year+1
//         return {
//             i: index,
//             name2: element.name, 
//             newYear: year
//         }
//     })
//     .filter((el) => el.id != 1)



// people.concat({name: "test", age: 123})

// function sortByAge() {
//     people.sort((a, b) => a.age > b.age ? 1 : -1);
// }
// sortByAge(people)


class Table extends React.Component {
    addNewElement(array){
        let newArray = array.concat({name:"oleh", year: 1888, height: 169})
        console.log(newArray)
    }
    render() {
        let people = [
            { name: "Taras", year: 1993, height: 170 },
            { name: "Ivan", year: 2010, height: 130 },
            { name: "Tanya", year: 1990, height: 160 },
            { name: "Tony", year: 1965, height: 165 }
        ]

        return (
            <div className="work-books">
            <a href="#" onClick={()=>this.addNewElement(people)}>Add new element</a>
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