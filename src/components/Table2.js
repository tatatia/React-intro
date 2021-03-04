import React from 'react';

class Table2 extends React.Component {
    addNewElement(array) {
        let newArray = array.concat({
            car: "Tesla",
            model: "X",
            number: 7777,
            bodynumber: 55566,
            color: "green"
        })
        console.log(newArray)
    }

    removeElement(array) {
        let removeIndex = array.length - 1
        let newArray = array.filter((_, index) => {
            return index !== removeIndex
        })
        console.log(newArray)
    }

    bubbleSort(array, property) {
        for (let i = array.length - 1; i > 0; i--) {
            let counter = 0;
            for (let j = 0; j < i; j++) {
                if (array[j][property] > array[j + 1][property]) {
                    let tmp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = tmp;
                    counter++;
                }
            }
            if (counter === 0) {
                break;
            }
        }
        console.table(array)
    }

    sortByNumber(array) {
        let sortArray = array.sort((elem, elemNext) => elem.number > elemNext.number ? 1 : -1);
        console.log(sortArray)
    }

    addElementInObjects(array) {
        let newArray = array.map((elem) => {
            let newObj = {
                ...elem,
                motors: "marka",
                yearBodyNumber: {
                     ...elem.yearBodyNumber,
                        motor: 'random'
                 }
            }
            return newObj
        })
        console.log(newArray)
    }

    removeField(array, fieldCar) {
        let newArray = array.map((elem) => {
            let { [fieldCar]: remove, ...newObj } = elem
            return newObj
        })
        console.log(newArray)
    }

    render() {
        let cars = [
            {
                car: "Ravone",
                model: "R2",
                number: 6083,
                yearBodyNumber: {
                    graduation: 2017,
                    bodynumber: 34567
                },
                color: "red"
            },
            {
                car: "Kia",
                model: "Soul",
                number: 8876,
                yearBodyNumber: {
                    graduation: 2017,
                    bodynumber: 34567
                },
                color: "yellow"
            },
            {
                car: "Skoda",
                model: "Fabia",
                number: 8811,
                yearBodyNumber: {
                    graduation: 2017,
                    bodynumber: 34567
                },
                color: "white"
            },
            {
                car: "Nissan",
                model: "Micra",
                number: 3332,
                yearBodyNumber: {
                    graduation: 2017,
                    bodynumber: 34567
                },
                color: "blue"
            },
            {
                car: "Kia2",
                model: "Rio",
                number: 1122,
                yearBodyNumber: {
                    graduation: 2017,
                    bodynumber: 34567
                },
                color: "pink"
            }
        ]
        return (
            <div className="work-books">
                <button onClick={() => this.addNewElement(cars)}>Add new element</button>
                <button onClick={() => this.removeElement(cars)}>Delete element</button>
                <button onClick={() => this.bubbleSort(cars, "number")}>Bubble Sort</button>
                <button onClick={() => this.addElementInObjects(cars)}>Add new element in obj</button>
                <button onClick={() => this.removeField(cars)}>Delete element obj</button>
                <table>
                    <thead>
                        <tr>
                            <th>Car</th>
                            <th>Model</th>
                            <th><a href="#/" onClick={() => this.sortByNumber(cars)}>Number</a></th>
                            <th>Year and body number</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map(modelcar =>
                            <tr key={modelcar.car}>
                                <td>{modelcar.car}</td>
                                <td>{modelcar.model}</td>
                                <td>{modelcar.number}</td>
                                <td>{modelcar.yearBodyNumber.graduation},
                                    {modelcar.yearBodyNumber.bodynumber},
                                    {modelcar.bodynumber}</td>
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