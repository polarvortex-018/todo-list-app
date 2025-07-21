export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }, // Fixed: wrap in object
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: { id }, // Fixed: wrap in object
});
