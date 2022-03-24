


const Todos = ({todos, deleteToDo}) => {
  console.log(todos, deleteToDo)
  const todoList = todos.length ? (todos.map((todo) => {
    return(
      <div className="collection-item pink lighten-4" key={todo.id} onClick={() => {deleteToDo(todo.id)}}>
        <span >{todo.content}</span>
        
      </div>
    )
  }
  )) : (<p className="center">No to do's left...</p>)

  return(
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export {Todos}