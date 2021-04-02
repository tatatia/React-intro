import React from 'react'
import './Draggable.css'

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
        return (
            <div className="work-books">
                <section className="tasks">
                    <h1 className="tasks__title">Task list</h1>
                    <ul className="tasks__list">
                        {this.state.tasks.map((task) =>
                            <li key={task} className="tasks__item"
                                draggable="true"
                                onDrop={event => this.handleDrop(event, task)}
                                onDragOver={event => this.handleDragOver(event)}
                                onDragStart={event => this.handleDragStart(event, task)}
                            >{task}</li>
                        )}
                    </ul>
                </section>
            </div>
        )
    }
}
export default Draggable
