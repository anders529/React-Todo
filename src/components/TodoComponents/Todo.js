import React from 'react';

const ItemObj = props => {
    return (
        <div style={props.todo.done ? {textDecoration: 'line-through'} : null} 
             onClick={() => props.handleToggle(props.todo.id)}> 
             {props.todo.task}
        </div>
    )
}
export default ItemObj;