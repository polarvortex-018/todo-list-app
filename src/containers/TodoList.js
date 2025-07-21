import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../components/TodoItem';
import { toggleTodo, removeTodo } from '../redux/actions';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleRemove = (id) => {
        dispatch(removeTodo(id));
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <table>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>Task</th>
                        <th style={{ textAlign: 'center' }}>Done</th>
                        <th style={{ textAlign: 'center' }}>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            onToggle={handleToggle} 
                            onRemove={handleRemove}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
