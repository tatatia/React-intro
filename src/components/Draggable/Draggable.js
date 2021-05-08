import React, {useState} from 'react'
import './css/Draggable.css'
import PropTypes from 'prop-types'

function Draggable({translate, tasksList}) {
    const [tasks, setTasks] = useState(tasksList)
    const [taskInFly, setTaskInFly] = useState("")

    const handleDragStart = (event, task) => {
        setTaskInFly(task)
    }

    const handleDragOver = event => {
        event.preventDefault()
        event.stopPropagation()
    }

    const handleDrop = (event, task) => {
        const tmpTasks = [...tasks]
        const fromIndex = tmpTasks.findIndex((elem) => elem === taskInFly)
        const toIndex = tmpTasks.findIndex((elem) => elem === task)
        tmpTasks.splice(fromIndex, 1)
        tmpTasks.splice(toIndex, 0, taskInFly)
        setTasks(tmpTasks)
    }

    return (
        <div className="work-books">
            <section className="tasks">
                <h1 className="tasks__title">{translate("Task list")}</h1>
                <ul className="tasks__list">
                    {tasks.map((task) =>
                        <li key={task} className="tasks__item"
                            draggable="true"
                            onDrop={event => handleDrop(event, task)}
                            onDragOver={event => handleDragOver(event)}
                            onDragStart={event => handleDragStart(event, task)}
                        > {translate(task)} </li>
                    )}
                </ul>
            </section>
        </div>
    )
}

Draggable.propTypes = {
    tasksList: PropTypes.array,
    lang: PropTypes.string
}
export default Draggable
