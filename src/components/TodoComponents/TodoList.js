import React from "react";
import ItemObj from "./Todo";

const TodoList = props => {
    return(
        <>
            {props.todoThings.map(todo => (
                <ItemObj 
                    key = {todo.id}
                    todo = {todo}
                    handleToggle = {props.handleToggle}
                />
            ))}
        </>
    )
}
export default TodoList;