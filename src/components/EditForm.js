import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import TodoItem from "./TodoItem";

class EditForm extends Component {
    state = {}

    onSaveChangesEvent = (event) => {
        event.preventDefault();
        this.setState({
            save: true
        })
    }

    onCancelChangesEvent = (event) => {
        event.preventDefault();
        this.setState({
            save: true
        })
    }

    render() {
        const task = this.props.task;
        return ( (!this.state.save) ?
                <div
                    className="edit-container"
                    onSubmit={this.onSubmitHandler}>
                    <Form.Control
                        type="text"
                        className="form-control"
                        required
                        onChange={this.onChange}
                        value={task.name}/>
                    <button type="click" className="btn btn-success" onClick={this.onSaveChangesEvent}>Save</button>
                    <button type="click" className="btn btn-danger" onClick={this.onCancelChangesEvent}>cancel</button>
                </div> : <TodoItem task={task}/>
        );
    }
}

export default EditForm