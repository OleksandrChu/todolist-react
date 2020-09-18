import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import TodoItem from "./TodoItem";

class EditForm extends Component {
    state = {name: '', cancel: false}

    onUpdateHandler = (event, task) => {
        event.preventDefault();
        this.props.onUpdateEvent(task);
        this.setState({name: '', cancel: true})
    }

    onCancelEvent = (event) => {
        event.preventDefault();
        this.setState({
            cancel: true
        })
    }

    render() {
        const task = this.props.task;

        return ((!this.state.cancel) ?
                <form
                    className="edit-container"
                    onSubmit={(event) => this.onUpdateHandler(event, task)}>
                    <Form.Control
                        type="text"
                        className="form-control"
                        required
                        value={task.name}/>
                    <button type="submit" className="btn btn-success">Save</button>
                    <button type="click" className="btn btn-danger" onClick={this.onCancelEvent}>cancel</button>
                </form> : <TodoItem task={task}/>
        );
    }
}

// onClick={(event) => this.onSaveChangesEvent(event, task.name)}

export default EditForm