import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
// import TodoForm from "./components/TodoForm";

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      todo: [
        {task: "Finish Lambda",
         id: 0,
         complete: false},
        
        {task: "Get A Job in Web Dev",
         id: 1,
         complete: false},
         
        {task: "Invest in Stock",
         id: 2,
         complete: false},

        {task: "Buy A Home",
         id: 3,
         complete: false}
      ],
      todo: ""
    }
  }

    addContent = event => {
      event.prevenDefault();
      const newItem = {task: this.state.todo, completed: false, id: Date.now()}
      this.setState({
        todostuff: [...this.state.todos, newItem],
        todo: ""
      })
    }

    handleContent = event => {
      this.setState({[event.target.name]:event.target.value})
    }

    handleCompletedObjects = id => {
      const finished = this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo
        }
        else { return todo}
      })
      this.setState({finished})
    }
    
  render() {
    return (
      <div className="todolist">
        <h2>The To Do app.</h2>
        <TodoList todo={this.state.todos} handleCompletedObjects={this.handleCompletedObjects}/>
        {/* <TodoForm
          value={this.state.todo}
          addContent={this.addContent}
          handleContent={this.handleContent}/> */}
      </div>
    );
  }
}

export default App;
