import React from 'react'

const translations = {
    "ua": {
        "name": "Ім'я",
        "birthdays": "Рік народження",
        "scoolYears": "Шкільні роки",
        "workyears": "Pобочий рік",
        "height": "Ріст",
        "city": "Місто",
        "bubbleSort": "Сортуння бульбашкою по росту",
        "sortSchoolYear": "Сортування по шкільних роках",
        "addNewElement": "Добавити новий елемент",
        "deleteElement": "Видалити елемент",
        "addElementObj": "Додати елемент obj"
    },
    "en": {
        "name": "Name",
        "birthdays": "Birthdays",
        "scoolYears": "Scool years",
        "workyears": "Work years",
        "height": "Height",
        "city": "City",
        "bubbleSort": "Bubble Sort Height",
        "sortSchoolYear": "Sort school year",
        "addNewElement": "Add new element",
        "deleteElement": "Delete element",
        "addElementObj": "Add element obj"
    }
}

class Biography extends React.Component {
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

    sortByHeightHandlerBubble = () => {
        const notSortedPeople = this.state.people
        const sortedPeople = this.bubbleSort(notSortedPeople, "height")
        this.setState({ people: sortedPeople })
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
    }

    handleOnError = () => {
    }

    render() {
        const { people } = this.state
        const { lang } = this.props

        return (
            <div className="work-books">
                <button onClick={this.sortByHeightHandlerBubble}>{translations[lang]["bubbleSort"]}</button>
                <button onClick={this.sortByYearHandler}>{translations[lang]["sortSchoolYear"]}</button>
                <button onClick={this.addNewElement}>{translations[lang]["addNewElement"]}</button>
                <button onClick={this.elementRemove}>{translations[lang]["deleteElement"]}</button>
                <button onClick={this.addNewElementInObjects}>{translations[lang]["addElementObj"]}</button>
                <table>
                    <thead>
                        <tr>
                            <th>{translations[lang]["name"]}</th>
                            <th><a href="#/" onClick={this.sortByYearHandler}>{translations[lang]["birthdays"]}</a></th>
                            <th>{translations[lang]["scoolYears"]}</th>
                            <th>{translations[lang]["workyears"]}</th>
                            <th><a href="#/" onClick={this.sortByHeightHandler}>{translations[lang]["height"]}</a></th>
                            <th>{translations[lang]["city"]}</th>
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
                <img src="https://i.artfile.ru/2560x1648_1101855_[www.ArtFile.ru].jpg"
                    onError={this.handleOnError}
                    onLoad={this.handleImageLoaded}
                />
            </div>
        )
    }
}
export default Biography