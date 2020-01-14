import React from 'react';
const ListForm = props => {
      return (
        <form>
          <input
            onChange={props.handleTodo}
            type="text"
            name="todo"
            value={props.value}/>
          <button onClick={props.addHandle}>Add Items</button>
          <button onClick={props.clearHandleDelete}>Clear Finished Tasks</button>
        </form>
      );
    }  
  export default ListForm;
  