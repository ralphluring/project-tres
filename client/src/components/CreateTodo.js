import React, { Component } from 'react';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }


handleInputChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
};

handleSubmit = event => {
    event.preventDefault();
    
    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);
    
    this.setState({
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: false
    })
}


render() {
    return (
        <div style={{marginTop: 10}}>
            <h3>Create New Todo</h3>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                            name="todo_description"
                            className="form-control"
                            value={this.state.todo_description}
                            onChange={this.handleInputChange}
                            />
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input 
                            type="text" 
                            name="todo_responsible"
                            className="form-control"
                            value={this.state.todo_responsible}
                            onChange={this.handleInputChange}
                            />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="todo_priority" 
                                id="priorityLow" 
                                value="Low"
                                checked={this.state.todo_priority==='Low'} 
                                onChange={this.handleInputChange}
                                />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="todo_priority" 
                                id="priorityMedium" 
                                value="Medium" 
                                checked={this.state.todo_priority==='Medium'} 
                                onChange={this.handleInputChange}
                                />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="todo_priority" 
                                id="priorityHigh" 
                                value="High" 
                                checked={this.state.todo_priority==='High'} 
                                onChange={this.handleInputChange}
                                />
                        <label className="form-check-label">High</label>
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
}