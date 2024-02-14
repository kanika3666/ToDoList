import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { RiCloseLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";


function Todo(todos, completeTodo) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

  return TodoList.map((todo, index) => (
    <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseLine />
                <FaRegEdit />
            </div>
 
    </div>
  ))
}

export default Todo
