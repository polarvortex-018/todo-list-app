const TodoItem = ({ todo, onToggle, onRemove }) => {
    return (
        <tr>
            <td className={todo.completed ? 'completed' : ''}>{todo.text}</td>
            <td style={{ textAlign: 'center' }}>
                <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    onChange={() => onToggle(todo.id)} 
                />
            </td>
            <td style={{ textAlign: 'right' }}>
                <button onClick={() => onRemove(todo.id)}>Remove</button>
            </td>
        </tr>
    );
};

export default TodoItem;
