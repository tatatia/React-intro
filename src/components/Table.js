import React from 'react';


class Table extends React.Component {
    addNewElement(array) {
        let newArray = array.concat({
            name: "oleh",
            year: 1888,
            height: 169
        })
        console.log(newArray)
    }

    sortByYear(people) {
        let sortArray = people.sort((elem, elemNext) => elem.year > elemNext.year ? 1 : -1);
        console.log(sortArray)
    }

    sortByHeight(people) {
        let sortHeightArray = people
            .sort((elem, elemNext) => elem.height > elemNext.height ? 1 : -1)
            .reverse()
        console.log(sortHeightArray)
    }

    removeElement3(array) {
        array.pop()
        console.log(array)
    }

    removeElement2(array) {
        let startIndex = array.length - 1
        array.splice(startIndex, 1)
        console.log(array)
    }

    removeElement(array) {
        let removeIndex = array.length - 1
        let newArray = array.filter((_, index) => {
            return index !== removeIndex
        })
        console.log(newArray)
    }

    render() {
        let people = [
            { name: "Taras", year: 1993, height: 170 },
            { name: "Ivan", year: 2010, height: 130 },
            { name: "Tanya", year: 1990, height: 160 },
            { name: "Tony", year: 1965, height: 165 }
        ]

        people.forEach((elem, index) => {
            console.log(elem, index)
        })
        for(let i = 0; i < people.length; i++){
            console.log(people[i], i)
        }


        return (
            <div className="work-books">
                <button onClick={() => this.addNewElement(people)}>Add new element</button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th><a href="#/" onClick={() => this.sortByYear(people)}>Year</a></th>
                            <th><a href="#/" onClick={() => this.sortByHeight(people)}>Height</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map(person =>
                            <tr key={person.name}>
                                <td>{person.name}</td>
                                <td>{person.year}</td>
                                <td>{person.height}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <button onClick={() => this.removeElement(people)}>Delete element</button>
            </div>
        )
    }
}
export default Table