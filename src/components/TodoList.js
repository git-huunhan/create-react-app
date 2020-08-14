import React, { memo } from 'react'

import Todo from './Todo'

const TodoList = memo(props => {
    const { listTodos } = props
    return (
        <section className="main">
            <ul className="todo-list">
                {
                    listTodos.map((todo, index) => <Todo index={index} key={todo.id} todo={todo} {...props} />)
                }
            </ul>

        </section>
    )
})

export default TodoList