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

    removeElement(array) {
        let removeIndex = array.length - 1
        let newArray = array.filter((_, index) => {
            return index !== removeIndex
        })
        console.log(newArray)
    }

    bubbleSort(people, property) {
        for (let i = people.length - 1; i > 0; i--) {
            let counter = 0;
            for (let j = 0; j < i; j++) {
                if (people[j][property] > people[j + 1][property]) {
                    let tmp = people[j];
                    people[j] = people[j + 1];
                    people[j + 1] = tmp;
                    counter++;
                }
            }
            if (counter === 0) {
                break;
            }
        }
        console.table(people)
    }

    removeNameField(array) {
        let newArray = array.map(({ name, ...rest }) => rest)
        console.log(newArray)
    }

    removeField(array, fieldName) {
        let newArray = array.map((elem) => {
            let { [fieldName]: remove, ...newObj } = elem
            return newObj
        })
        console.log(newArray)
    }

    addElementInObjects(array) {
        let newArray = array.map((elem) => {
            let newObj = {
                ...elem,
                country: "ua",
                events: {
                    ...elem.events,
                    birthday: {
                        ...elem.events.birthday,
                        city: 'random'
                    }
                }
            }
            return newObj
        })
        console.log(newArray)
    }

    selectObjectsElementByKey(array, key) {
        let newArray = array.map((elem) => {
            return elem[key]
        })
        console.log(newArray)
    }

    render() {
        let people = [
            {
                name: "Taras",
                events: {
                    birthday: {
                        day: 1,
                        moon: "May",
                        year: 1993
                    },
                    school: 2008,
                    work: 2009
                },
                height: 170
            },
            {
                name: "Ivan",
                events: {
                    birthday: {
                        day: 14,
                        moon: "August",
                        year: 2010
                    },
                    school: 2017,
                },
                height: 130
            },
            {
                name: "Tanya",
                events: {
                    birthday: {
                        day: 6,
                        moon: "March",
                        year: 1990
                    },
                    school: 1997,
                    work: 2009
                },
                height: 160
            },
            {
                name: "Tony",
                events: {
                    birthday: {
                        day: 6,
                        moon: "January",
                        year: 1965
                    },
                    school: 1972,
                    work: 1988
                },
                height: 165
            }
        ]

        this.removeNameField(people)
        this.removeField(people, "events")
        this.removeField(people, "height")
        this.addElementInObjects(people)
        this.selectObjectsElementByKey(people, "name")
        this.selectObjectsElementByKey(people, "events")
        this.selectObjectsElementByKey(people, "events2")

        return (
            <div className="work-books">
                <button onClick={() => this.bubbleSort(people, "height")}>Bubble Sort Height</button>
                <button onClick={() => this.bubbleSort(people, "year")}>Bubble Sort Year</button>
                <button onClick={() => this.addNewElement(people)}>Add new element</button>
                <button onClick={() => this.removeElement(people)}>Delete element</button>
                <button onClick={() => this.removeNameField(people)}>Delete element obj</button>
                <button onClick={() => this.addElementInObjects(people)}>Add element obj</button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th><a href="#/" onClick={() => this.sortByYear(people)}>Birthdays</a></th>
                            <th>Scool years</th>
                            <th>Work years</th>
                            <th><a href="#/" onClick={() => this.sortByHeight(people)}>Height</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map(person =>
                            <tr key={person.name}>
                                <td>{person.name}</td>
                                <td>{person.events.birthday.day},
                                    {person.events.birthday.moon},
                                    {person.events.birthday.year}</td>
                                <td>{person.events.school}</td>
                                <td>{(person.events.work) ? person.events.work : "-"}</td>
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