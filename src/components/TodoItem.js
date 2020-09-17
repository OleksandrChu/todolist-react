import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import EditForm from "./EditForm";

class TaskItem extends Component {
    state = {
        isEdit: false,
    }

    onDeleteHandler = (event, task) => {
        event.stopPropagation();
        this.props.onDeleteEvent({
            task: task
        });
    }

    edit = () => {
        this.setState({
            isEdit: true
        })
        console.log(this.state.isEdit)
    }

    render() {
        const task = this.props.task;
        return ((!this.state.isEdit) ?
            <div className="todo-item">
                <input type="checkbox" checked={task.done}/>
                <p className="done_task">{task.name}</p>
                <div className='todo-menu'>
                    <Button className="btn btn-light" id="todo-edit-button" onClick={this.edit}></Button>
                    <Button className="btn btn-light" id="todo-remove-button"
                            onClick={(event) => this.onDeleteHandler(event, task)}></Button>
                </div>
            </div> : <EditForm task={task}/>);
    }
}

export default TaskItem