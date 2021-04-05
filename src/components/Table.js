import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newElem: {
                name: "Oleh",
                events: {
                    birthday: {
                        day: 22,
                        moon: "February",
                        year: 1883
                    },
                    school: 1890,
                    work: 1920
                },
                height: 178
            },
            people: props.people
        }
    }

    addNewElement = () => {
        const newPerson = this.state.newElem
        this.setState({ people: [...this.state.people, newPerson] })
    }

    // addNewElement(array) {
    //     const newArray = array.concat({
    //         name: "oleh",
    //         year: 1688,
    //         height: 169
    //     })
    //     return newArray
    // }

    sortByHeightHandlerBubble = () => {
        const notSortedPeople = this.state.people
        const sortedPeople = this.bubbleSort(notSortedPeople, "height")
        this.setState({ people: sortedPeople })
        // this.setState({ people: this.bubbleSort(this.state.people, "height") }) або так
    }

    sortByYearHandler = () => {
        const notSortedPeople = this.state.people
        const sortedPeople = this.sortByYear(notSortedPeople, "shcool")
        this.setState({ people: sortedPeople })
    }

    sortByHeightHandler = () => {
        const notSortedPeople = this.state.people
        const sortedPeople = this.sortByHeight(notSortedPeople, "height")
        this.setState({ people: sortedPeople })
    }

    sortByYear(array) {
        const cloneArray = array.map((elem) => elem)
        const sortArray = cloneArray.sort((elem, elemNext) => {
            return elem.events.birthday.year > elemNext.events.birthday.year ? 1 : -1
        })
        return sortArray
    }

    elementRemove = () => {
        const removePeople = this.state.people
        const newPeople = this.removeElement(removePeople)
        this.setState({ people: newPeople })
    }

    sortByHeight(array) {
        const sortHeightArray = [...array]
            .sort((elem, elemNext) => elem.height > elemNext.height ? 1 : -1)
            .reverse()
        return sortHeightArray
    }

    removeElement(array) {
        const removeIndex = array.length - 1
        const newArray = array
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
        const newArray = array.map(({ name, ...rest }) => rest)
        return newArray
    }

    removeField(array, fieldName) {
        const newArray = array.map((elem) => {
            const { [fieldName]: remove, ...newObj } = elem
            return newObj
        })
        return newArray
    }

    addNewElementInObjects = () => {
        const people = this.state.people
        const peopleNewData = this.addElementInObjects(people)
        this.setState({ people: peopleNewData })
    }

    addElementInObjects(array) {
        const newArray = array.map((elem) => {
            const newObj = {
                ...elem,
                city: "ua",
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
        const newArray = array.map((elem) => {
            return elem[key]
        })
        return newArray
    }

    handleImageLoaded = () => {
        // alert("Loaded")
    }

    handleOnError = () => {
        // alert("Error")
    }

    render() {
        const { people } = this.state

        // let newPeople = this.addElementInObjects(people)
        // console.log("people", people)
        // console.log("newPeople", newPeople)

        // let newElemKey = this.selectObjectsElementByKey(people, "name")
        // console.log("name", people)
        // console.log("newElemKey", newElemKey)

        // let newNameField = this.removeNameField(people)
        // console.log("name", people)
        // console.log("newNameField", newNameField)

        // let newField = this.removeField(people, "events")
        // console.log("people", people)
        // console.log("newField", newField)

        // let newElem = this.removeElement(people)
        // console.log("people", people)
        // console.log("newElem", newElem)

        // let newAddElem = this.addNewElement(people)
        // console.log("people", people)
        // console.log("newAddElem", newAddElem)

        // let sortBubble = this.bubbleSort(people, "height")
        // console.log("people", people)
        // console.log("newBubleSortInHeight", sortBubble)

        // let sortHeight = this.sortByHeight(people)
        // console.log("people", people)
        // console.log("newSort", sortHeight)

        // let sortedByYear = this.sortByYear(people)
        // console.log("people", people)
        // console.log("sortedByYear", sortedByYear)

        // this.removeField(people, "height")
        // this.addElementInObjects(people)
        // this.selectObjectsElementByKey(people, "name")
        // this.selectObjectsElementByKey(people, "events")

        return (
            <div className="work-books">
                <button onClick={this.sortByHeightHandlerBubble}>Bubble Sort Height</button>
                {/* <button onClick={() => this.bubbleSort(people, "height")}>Bubble Sort Height</button> */}
                <button onClick={this.sortByYearHandler}>Sort school year</button>
                {/* <button onClick={() => this.bubbleSort(people, "year")}>Bubble Sort Year</button> */}
                <button onClick={this.addNewElement}>Add new element</button>
                <button onClick={this.elementRemove}>Delete element</button>
                {/* <button onClick={() => this.removeElement(people)}>Delete element</button> */}
                <button onClick={this.addNewElementInObjects}>Add element obj</button>
                {/* <button onClick={() => this.addElementInObjects(people)}>Add element obj</button> */}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th><a href="#/" onClick={this.sortByYearHandler}>Birthdays</a></th>
                            {/* <th><a href="#/" onClick={() => this.sortByYear(people)}>Birthdays</a></th> */}
                            <th>Scool years</th>
                            <th>Work years</th>
                            <th><a href="#/" onClick={this.sortByHeightHandler}>Height</a></th>
                            {/* <th><a href="#/" onClick={() => this.sortByHeight(people)}>Height</a></th> */}
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map(person =>
                            <tr key={person.name}>
                                <td>{person.name}</td>
                                <td>{person.events && <>
                                    {person.events.birthday.day},
                                    {person.events.birthday.moon},
                                    {person.events.birthday.year}</>}
                                    {!person.events && <>-</>}
                                </td>
                                <td>{(person.events && person.events.school) ? person.events.school : "-"}</td>
                                <td>{(person.events && person.events.work) ? person.events.work : "-"}</td>
                                <td>{person.height}</td>
                                <td>{person.city}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <img src="https://art-holst.com.ua/wp-content/uploads/thumb_l_27943-768x768.jpg"
                    onError={this.handleOnError}
                    onLoad={this.handleImageLoaded}
                />
            </div>
        )
    }
}
export default Table