import React, {Component} from "react";
import TodoItem from "./TodoItem";

class Tasks extends Component {
    onDeleteHandler = (event, task) => {
        this.props.onDeleteEvent({
            task
        });
    }

    render() {
        return (this.props.tasks) ?
            (<div id="todo-body" className="todo-body">
                {this.props.tasks.map(t => <TodoItem task={t} onDeleteEvent={(event)=> this.onDeleteHandler(event, t)}/>)}
            </div>) : '';
    }
}

export default Tasks