import {Component} from 'react'
import {Todos} from './todos'
import {AddToDo} from './addTodo'

class App extends Component {

  state = {
    todos: [
      {id:1, content: "Drink green tea"},
      {id:2, content: "read my new Dalai Lama Books"},
      {id:3, content: "Write on my diary"}
    ]
  }

  deleteToDo = (id) => {
    console.log("delete ", id)
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id //not being equal to the condition
    })
    this.setState({
      todos: todos
    })
  }

  addToDo = (todo) => {
    console.log(todo)
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  today = new Date().toLocaleDateString("en-US", this.options)

  render () {
  return (
    <div className="container center">
      
      <h1 className="teal-text text-accent-3">Stay Focused</h1>
      <h6>Today is: {this.today}</h6>
      
      <h3 className="blue-text">To Do List</h3>
      <Todos todos={this.state.todos} deleteToDo={this.deleteToDo}/>
      <AddToDo addToDo={this.addToDo}/>
    </div>
  );
  }
}

export default App;
