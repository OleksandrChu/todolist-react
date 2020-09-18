import React, {Component} from 'react';
import './App.css';
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import Lists from "./components/Lists";
import ListForm from "./components/ListForm";

class App extends Component {
    state = {
        lists: [],
        currentList: {}
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/list')
            .then(response => response.json())
            .then(lists => {
                this.setState({
                    lists: lists
                })
            });
    }

    createTask = (task) => {
        task = {...task, listId: this.state.currentList.id};
        const options = {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch('http://localhost:5000/api/task', options)
            .then(res => res.json())
            .then(task => {
                this.setState({
                    currentList: {
                        id: this.state.currentList.id,
                        tasks: [...this.state.currentList.tasks, task]
                    }
                });
            });
    }

    createList = (list) => {
        const options = {
            method: 'POST',
            body: JSON.stringify(list),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch('http://localhost:5000/api/list', options)
            .then(res => res.json())
            .then(list => {
                this.setState({
                    lists: [...this.state.lists, list]
                });
            });
    }

    selectList = (list) => {
        this.setState({
            currentList: list.list
        })
    }

    deleteList = (todolist) => {
        const {list} = todolist;
        this.deleteRequest(`http://localhost:5000/api/list/${list.id}`)
            .then(response => this.observeDeleteResponse(response, {
                name: 'lists',
                target: '',
                model: list
            }));
    }

    deleteTask = (target) => {
        const {task} = target;
        this.deleteRequest(`http://localhost:5000/api/task/${task.id}`)
            .then(response => this.observeDeleteResponse(response, {
                name: 'currentList',
                target: 'tasks',
                model: task
            }));
    }

    updateTask = (target) => {
        const {task} = target;
        const options = {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(`http://localhost:5000/api/task/${task.id}`, options)
            .then(response => response.json())
            .then(updatedTask => {
                let currentList = this.state.currentList;
                currentList.tasks[currentList.tasks.indexOf(task)] = updatedTask;
                this.setState({
                    currentList: currentList
                })
            });
    }

    deleteRequest(url) {
        const deleteOption = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return fetch(url, deleteOption);
    }

    observeDeleteResponse(response, updateProps) {
        if (response.ok) {
            let state = this.state[updateProps.name];
            if (updateProps.target === '') {
                state.splice(state.indexOf(updateProps.model), 1);
            } else {
                let needUpdate = state[updateProps.target];
                needUpdate.splice(needUpdate.indexOf(updateProps.model), 1);
                state[updateProps.target] = needUpdate;
            }
            this.setState({
                [updateProps.name]: state
            })
        }
    }

    render() {
        return (
            <div className="App">
                <div className="sidebar">
                    <label>Your lists</label>
                    <Lists onClick={this.selectList} delete={this.deleteList} lists={this.state.lists}/>
                    <ListForm onSubmit={this.createList}/>
                </div>
                <section className="todo-container">
                    <Tasks
                        tasks={this.state.currentList.tasks}
                        onDeleteEvent={this.deleteTask}
                        onUpdateEvent={this.updateTask}
                    />
                    <TaskForm onSubmit={this.createTask}/>
                </section>
            </div>
        );
    }

}

export default App;
