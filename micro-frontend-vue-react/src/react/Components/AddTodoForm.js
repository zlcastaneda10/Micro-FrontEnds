import React, {Component} from 'react'

class AddTodoForm extends Component{
    
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
        this.setState({
            description: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            description: ''
        })
    }


    render (){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>

                <div className='input'>
                    <input  id="input-a" type= 'text' onChange= {this.handleChange} value = {this.state.description} autocomplete='off'/>
                    <label htmlFor="input-a"> What do you want to do? </label>
                </div>
                </form>
            </div>
        )
    }
}

export  default AddTodoForm