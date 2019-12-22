import React, { Component } from 'react';
import Todos from './Components/Todos'
import AddTodoForm from './Components/AddTodoForm'
import UpdateTodoForm from './Components/UpdateTodoForm'

class App extends Component{
    state = {
        todos: [
        ],
        update: false,
      }

      componentDidMount(){
        this.fetchTodos();
      }

      fetchTodos(){
        fetch('http://localhost:4000/api/tasks')
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          this.setState({todos : data})
        })
      }

      addTodo = (todo) => {
        fetch('http://localhost:4000/api/tasks', {
          method: 'POST',
          body: JSON.stringify(todo),
          headers: {
              'Accept': 'application/json',
              'Content-Type' :  'application/json'
          }
        })
        .then(res => res.json())
        .then(res => {
          todo._id = res._id;
          let todos = [...this.state.todos, todo];
          this.setState({
              todos
            });
          })
          .catch(err => console.log(err));
      }
       
      deleteTodo = (id) =>{
        if(confirm ('Are you sure you want to delete it ?')){
          fetch(`http://localhost:4000/api/tasks/${id}`,{
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
  
          })
          .then(res => res.json())
          .then(data => console.log(data));
  
          const todos = this.state.todos.filter(todo => {
            return todo._id !== id
          });

          this.setState({
            todos
          })
        }
      }

      updateTodo = (todo) =>{
        console.log(this.state.update)
        this.setState({ update : true})
        this.setState({updated: todo})

      }

      sendUpdateTodo = (todo) => {
        this.setState({ update : false})
        fetch(`http://localhost:4000/api/tasks/${todo._id}`, {
          method: 'PUT',
          body: JSON.stringify(todo),
          headers: {
              'Accept': 'application/json',
              'Content-Type' :  'application/json'
          }
        })
        .then(res => res.json())
        .catch(err => console.log(err));
      }



    render(){
        return (
            <div className="App">
              
                {this.state.update?<UpdateTodoForm updatedTodo = {this.state.updated} sendUpdateTodo = {this.sendUpdateTodo}/>:<AddTodoForm addTodo = {this.addTodo}/>}
                <Todos todos ={this.state.todos} deleteTodo={this.deleteTodo} updateTodo = {this.updateTodo}/>
          </div>
        );
    }
}

export default App