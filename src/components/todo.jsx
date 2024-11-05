import React, {Component} from 'react';
import Add from './add';
import List from './list';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: ['上班', '吃午饭', '下班', '睡觉']
        }
    }

    addTodo = (todo) => {
        const {todos} = this.state;
        todos.unshift(todo);
        this.setState({
            todos
        })
    }

    render() {
        return (
            <div>
                <h2>React TodoList </h2>
                <Add addTodo={this.addTodo} todos={this.state.todos}/>
                <List todos={this.state.todos}/>
            </div>
        );
    }
}

export default Todo;