import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import EditForm from "./EditForm";

class TaskItem extends Component {
    state = {
        editMode: false,
    }

    deleteHandler = (event, task) => {
        event.stopPropagation();
        this.props.onDeleteEvent(task);
    }

    editModeHandler = () => {
        this.setState({
            editMode: true
        })
    }

    statusHandler = (event, task) => {
        task.done = !task.done;
        this.props.onUpdateEvent(task)
    }

    render() {
        const task = this.props.task;

        return ((!this.state.editMode) ?
            <div className="todo-item">
                <input type="checkbox" checked={task.done} onChange={(event) => this.statusHandler(event, task)}/>
                <p className="done_task">{task.name}</p>
                <div className='todo-menu'>
                    <Button className="btn btn-light" id="todo-edit-button" onClick={this.editModeHandler}></Button>
                    <Button className="btn btn-light" id="todo-remove-button"
                            onClick={(event) => this.deleteHandler(event, task)}></Button>
                </div>
            </div> : <EditForm task={task} onUpdateEvent={this.props.onUpdateEvent}/>);
    }
}

export default TaskItem