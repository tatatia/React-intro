import React from 'react'
import './css/Draggable.css'
import PropTypes from 'prop-types'

const translations = {
    "ua": {
        "title": "Список завдань",
        "task1": "Вивчити HTML",
        "task2": "Вивчити CSS",
        "task3": "Вивчити JavaScript",
        "task4": "Вивчити Python",
        "task5": "Вивчити React"
    },
    "en": {
        "title": "Task list",
        "task1": "learn HTML",
        "task2": "learn CSS",
        "task3": "learn JavaScript",
        "task4": "learn Python",
        "task5": "learn React"
    }
}

class Draggable extends React.Component {
    constructor(props) {
        super(props);
        const { tasks } = props;
        this.state = {
            tasks,
            taskInFly: ""
        }
    }

    handleDragStart = (event, task) => {
        this.setState({ taskInFly: task })
    }

    handleDragOver = event => {
        event.preventDefault()
        event.stopPropagation()
    }

    handleDrop = (event, task) => {
        const { tasks, taskInFly } = this.state;
        const tmpTasks = [...tasks]
        const fromIndex = tmpTasks.findIndex((elem) => elem === taskInFly)
        const toIndex = tmpTasks.findIndex((elem) => elem === task)
        tmpTasks.splice(fromIndex, 1)
        tmpTasks.splice(toIndex, 0, taskInFly)
        this.setState({ tasks: tmpTasks })
    }

    render() {
        const { tasks } = this.state;
        const { lang } = this.props;
        return (
            <div className="work-books">
                <section className="tasks">
                    <h1 className="tasks__title">{translations[lang]["title"]}</h1>
                    <ul className="tasks__list">
                        {tasks.map((task) =>
                            <li key={task} className="tasks__item"
                                draggable="true"
                                onDrop={event => this.handleDrop(event, task)}
                                onDragOver={event => this.handleDragOver(event)}
                                onDragStart={event => this.handleDragStart(event, task)}
                            > {task} </li>   
                        )}
                    </ul> 
                </section>
            </div>
        )
    }
}
Draggable.propTypes = {
    tasks: PropTypes.array,
    lang: PropTypes.string
}
export default Draggable
