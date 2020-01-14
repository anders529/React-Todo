import React from "react"
import Todo from "./Todo"

const TodoList = props => {
    return(
        <div>
            {props.todostuff.map(todo => (
                <Todo key = {todo.id}
                      todo = {todo}
                      handleCompletedObjects = {props.handleCompletedObjects}/>
            ))}
        </div>
    )
}
export default TodoList