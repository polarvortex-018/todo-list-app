import './app.css';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './containers/TodoList';

const App = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
        const newTodo = {
            id: Date.now(), // unique ID
            text: input,
            completed: false
        };
        dispatch({ type: 'ADD_TODO', payload: newTodo });
        setInput('');
    }
};


    return (
        <div>
            <h1>Todo List App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add</button>
            </form>
            <TodoList />
        </div>
    );
};

export default App;