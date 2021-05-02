import React from 'react'
import './css/Draggable.css'
import PropTypes from 'prop-types'


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
        const { tasks } = this.state
        const { translate } = this.props
        return (
            <div className="work-books">
                <section className="tasks">
                    <h1 className="tasks__title">{translate("Task list")}</h1>
                    <ul className="tasks__list">
                        {tasks.map((task) =>
                            <li key={task} className="tasks__item"
                                draggable="true"
                                onDrop={event => this.handleDrop(event, task)}
                                onDragOver={event => this.handleDragOver(event)}
                                onDragStart={event => this.handleDragStart(event, task)}
                            > {translate(task)} </li>
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
