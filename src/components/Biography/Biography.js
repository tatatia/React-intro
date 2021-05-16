import React, {useState} from 'react'
import {withTranslation} from "react-i18next";

function Biography({t, peopleDefault}) {
    const [people, setPeople] = useState(peopleDefault)
    const [newElem, setNewElem] = useState(
        {
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
        })

    const addNewElement = () => {
        setPeople([...people, newElem])
    }


    const addNewElementInObjects = () => {
        const peopleNewData = addElementInObjects(people)
        setPeople(peopleNewData)
    }

    const addElementInObjects = (array) => {
        return array.map((elem) => {
            return {
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
        })
    }

    const sortByHeightHandlerBubble = () => {
        const sortedPeople = bubbleSort(people, "height")
        setPeople(sortedPeople)
    }

    const bubbleSort = (array, property) => {
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

    const sortByYearHandler = () => {
        const sortedPeople = sortByYear(people, "shcool")
        setPeople(sortedPeople)
    }

    const sortByYear = (array) => {
        const cloneArray = array.map((elem) => elem)
        const sortArray = cloneArray.sort((elem, elemNext) => {
            return elem.events.birthday.year > elemNext.events.birthday.year ? 1 : -1
        })
        return sortArray
    }

    const sortByHeightHandler = () => {
        const sortedPeople = sortByHeight(people, "height")
        setPeople(sortedPeople)
    }

    const sortByHeight = (array) => {
        return [...array]
            .sort((elem, elemNext) => elem.height > elemNext.height ? 1 : -1)
            .reverse()
    }

    const elementRemove = () => {
        const newPeople = removeElement(people)
        setPeople(newPeople)
    }

    const removeElement = (array) => {
        const removeIndex = array.length - 1
        const newArray = array
            .filter((_, index) => {
                return index !== removeIndex
            })
        return newArray
    }

    const handleImageLoaded = () => {
    }

    const handleOnError = () => {
    }
    return (
        <div className="work-books">
            <button onClick={sortByHeightHandlerBubble}>{t("biography.bubbleSort")}</button>
            <button onClick={sortByYearHandler}>{t("biography.sortSchoolYear")}</button>
            <button onClick={addNewElement}>{t("biography.addNewElement")}</button>
            <button onClick={elementRemove}>{t("biography.deleteElement")}</button>
            <button onClick={addNewElementInObjects}>{t("biography.addElementObj")}</button>
            <table>
                <thead>
                <tr>
                    <th>{t("biography.name")}</th>
                    <th><a href="#/" onClick={sortByYearHandler}>{t("biography.birthdays")}</a></th>
                    <th>{t("biography.scoolYears")}</th>
                    <th>{t("biography.workyears")}</th>
                    <th><a href="#/" onClick={sortByHeightHandler}>{t("biography.height")}</a></th>
                    <th>{t("biography.city")}</th>
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
                 onError={handleOnError}
                 onLoad={handleImageLoaded}
            />
        </div>
    )
}

export default withTranslation()(Biography)