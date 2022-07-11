const baseUrl = 'https://62cbd7c0a0800529309fbffc.mockapi.io/tasks';

export const getTasksList = () =>
    fetch(baseUrl)
    .then(response => response.json())


export const createTask = taskData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(taskData)
    });

export const updateTask = (taskId, updatedTaskData) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(updatedTaskData)
    });

export const deleteTask = (taskId) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    });