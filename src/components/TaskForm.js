import React, {Component} from "react";
import Form from "react-bootstrap/Form";

class TaskForm extends Component {
    state = {name: ''}

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            name: this.state.name
        });
        this.setState({name: ''})
    }

    onChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    render() {
        return (
            <form
                className="todo-input-form"
                name="todo-form"
                onSubmit={this.onSubmitHandler}>
                <Form.Control
                    type="text"
                    name="title"
                    className="form-control"
                    required
                    placeholder="e.g., Buy bread"
                    onChange={this.onChange}
                    value={this.state.name}/>
                <button type="submit" name="todo-submit" className="btn btn-danger">Add task</button>
            </form>
        );
    }
}

export default TaskForm