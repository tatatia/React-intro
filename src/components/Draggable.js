import React from 'react'
import './Draggable.css'

class Draggable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: props.tasks,
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
        let array = this.state.tasks
        let fromIndex = array.findIndex((elem) => elem === this.state.taskInFly)
        let toIndex = array.findIndex((elem) => elem === task)
        array.splice(fromIndex, 1)
        array.splice(toIndex, 0, this.state.taskInFly)
        this.setState({ tasks: array })
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
