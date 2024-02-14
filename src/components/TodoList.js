import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
 
function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.test)){
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        // console.log(todo, ...todos);
    }

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} />
        </div>
    )
}

export default TodoList
