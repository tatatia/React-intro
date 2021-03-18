import React from 'react';


class Table extends React.Component {
    addNewElement(array) {
        let newArray = array.concat({
            name: "oleh",
            year: 1888,
            height: 169
        })
        return newArray
    }

    sortByYear(array) {
        let cloneArray = array.map((elem) => elem)
        let sortArray = cloneArray.sort((elem, elemNext) => {
            return elem.events.birthday.year > elemNext.events.birthday.year ? 1 : -1
        });
        return sortArray
    }

    sortByHeight(array) {
        let sortHeightArray = [...array]
            .sort((elem, elemNext) => elem.height > elemNext.height ? 1 : -1)
            .reverse()
        return sortHeightArray
    }

    removeElement(array) {
        let removeIndex = array.length - 1
        let newArray = array
            .filter((_, index) => {
                return index !== removeIndex
            })
        return newArray
    }

    bubbleSort(array, property) {
        let cloneArray = array.map((elem) => elem)
        for (let i = cloneArray.length - 1; i > 0; i--) {
            let counter = 0;
            for (let j = 0; j < i; j++) {
                if (cloneArray[j][property] > cloneArray[j + 1][property]) {
                    let tmp = cloneArray[j];
                    cloneArray[j] = cloneArray[j + 1];
                    cloneArray[j + 1] = tmp;
                    counter++;
                }
            }
            if (counter === 0) {
                break;
            }
        }
        return cloneArray
    }

    removeNameField(array) {
        let newArray = array.map(({ name, ...rest }) => rest)
        return newArray
    }

    removeField(array, fieldName) {
        let newArray = array.map((elem) => {
            let { [fieldName]: remove, ...newObj } = elem
            return newObj
        })
        return newArray
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
        return newArray
    }

    selectObjectsElementByKey(array, key) {
        let newArray = array.map((elem) => {
            return elem[key]
        })
        return newArray
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

        let newPeople = this.addElementInObjects(people)
        console.log("people", people)
        console.log("newPeople", newPeople)

        let newElemKey = this.selectObjectsElementByKey(people, "name")
        console.log("name", people)
        console.log("newElemKey", newElemKey)

        let newNameField = this.removeNameField(people)
        console.log("name", people)
        console.log("newNameField", newNameField)

        let newField = this.removeField(people, "events")
        console.log("people", people)
        console.log("newField", newField)

        let newElem = this.removeElement(people)
        console.log("people", people)
        console.log("newElem", newElem)

        let newAddElem = this.addNewElement(people)
        console.log("people", people)
        console.log("newAddElem", newAddElem)

        let sortBubble = this.bubbleSort(people, "height")
        console.log("people", people)
        console.log("newBubleSortInHeight", sortBubble)

        let sortHeight = this.sortByHeight(people)
        console.log("people", people)
        console.log("newSort", sortHeight)

        let sortedByYear = this.sortByYear(people)
        console.log("people", people)
        console.log("sortedByYear", sortedByYear)

        this.removeField(people, "height")
        this.addElementInObjects(people)
        this.selectObjectsElementByKey(people, "name")
        this.selectObjectsElementByKey(people, "events")

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
