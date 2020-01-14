import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import ListForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {

constructor() {
  super();
  this.state = {
    todoThings: [],
    todo: ""
  }
}
  addContent = event => {
    event.preventDefault();
    const newItem = {
              task: this.state.todo, 
              completed: false, 
              id: Date.now()};
    this.setState({
      todoThings: [...this.state.todoThings, newItem],
      todo:""
    });
  };
  handleContent = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleCompletedObjects = id => {
    let todoThings = this.state.todoThings.slice();
    todoThings = todoThings.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
        return todo
      }
      else { return todo}
    })
    this.setState({todoThings})
  }

  handleDelete = event => {
    event.preventDefault();
    let todoThings = this.state.todoThings.filter(todo => !todo.done);
    this.setState({todoThings});
};
render() {
  return (
    <div className="todolist">
      <h2>The To Do app.</h2>
        <ListForm
                value={this.state.todo}
                handleTodo={this.handleContent}
                addHandle={this.addContent}
                clearHandleDelete={this.handleDelete}/>
        <TodoList 
                todoThings={this.state.todoThings}
                handleToggle={this.handleCompletedObjects}
                />
    </div>
  );
}
}

export default App;
