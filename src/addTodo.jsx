import {Component} from 'react'

class AddToDo extends Component {

  state = {
    content: "",
    label:""
  }



  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.addToDo(this.state)
    this.setState({
      content: ""
    })
  }

  render() {
    return(
      <div>
        <label>Add new To Do: </label>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.content}/>
        </form>
      </div>
    )
  }
}
export {AddToDo}