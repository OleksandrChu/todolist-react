import React, {Component} from "react";
import TodoItem from "./TodoItem";

class Tasks extends Component {
    onDeleteHandler = (event, task) => {
        this.props.onDeleteEvent({
            task
        });
    }

    onUpdateHandler = (event, task) => {
        this.props.onUpdateEvent({
            task
        });
    }

    render() {
        return (this.props.tasks) ?
            (<div id="todo-body" className="todo-body">
                {this.props.tasks.map(t => <TodoItem
                    key={t.id}
                    task={t}
                    onDeleteEvent={(event)=> this.onDeleteHandler(event, t)}
                    onUpdateEvent={(event) => this.onUpdateHandler(event, t)}
                />)}
            </div>) : '';
    }
}

export default Tasks