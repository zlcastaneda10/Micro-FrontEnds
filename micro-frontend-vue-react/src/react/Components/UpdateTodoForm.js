import React, {Component} from 'react'

class UpdateTodoForm extends Component{
    
    constructor(){
        super();

        this.state = {
            description : '',
            type: 'task'
    
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (e) => {
        const {name, value} = e.target;
        let updatedTodo = this.props.updatedTodo
        updatedTodo.description = value
        this.setState({
            updatedTodo
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendUpdateTodo(this.state.updatedTodo)
        this.setState({
            description: ''
        })
    }

    render (){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                <div className='input'>
                    <input   id="input-a" type= 'text' placeholder = {this.props.updatedTodo.description} onChange= {this.handleChange} defaultValue = {this.props.updatedTodo.description} autocomplete='off'/>

                </div>

                </form>
            </div>
        )
    }
}

export  default UpdateTodoForm