import React from 'react'
const Todos = ({todos, deleteTodo, updateTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                    <p key = {todo._id}>
                        <button onClick= {()  => { deleteTodo(todo._id)} }><i className="fas fa-times-circle"></i></button>
                        <span onClick={() => {updateTodo(todo)}}>  {todo.description} </span>
                    </p>
            )
        })
    ) : (<p> You have no TODOs left </p>)
    return (
        <div className = "todos">
            <p>Click a task to update</p>
            {todoList}
        </div>
    )
}

export default Todos