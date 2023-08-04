import React from 'react'
import { Todo } from '../Model';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos}: Props) => {
  return (
    <form className='todos__single'>
        <span className="todos__single--text"></span>
        <div>
            <li>{todo.todo}</li>

        </div>
    </form>
  )
}

export default SingleTodo;