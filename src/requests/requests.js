const deleteOption = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
}

function getLists() {
    return fetch("http://localhost:5000/api/list/")
        .then(res => res.json())
}

function postTask(task) {
    const options = {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch('http://localhost:5000/api/task', options)
        .then(res => res.json());
}

function deleteTask(task) {
    return fetch(`http://localhost:5000/api/task/${task.id}`, deleteOption);
}

function updateTask(task) {
    const options = {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`http://localhost:5000/api/task/${task.id}`, options)
        .then(res => res.json());
}

function createList(list) {
    const options = {
        method: 'POST',
        body: JSON.stringify(list),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch('http://localhost:5000/api/list', options)
        .then(res => res.json());
}

function deleteList(list) {
    return fetch(`http://localhost:5000/api/list/${list.id}`, deleteOption);
}
