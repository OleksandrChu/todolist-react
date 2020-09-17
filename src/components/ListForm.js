import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ListForm extends Component {
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
                onSubmit={this.onSubmitHandler}>
                <Form.Control
                    type="text"
                    className="form-control"
                    required
                    placeholder="e.g., Gym training"
                    onChange={this.onChange}
                    value={this.state.name}/>
                <button type="submit" className="btn btn-light">&#59152; Add</button>
            </form>
        );
    }
}

export default ListForm