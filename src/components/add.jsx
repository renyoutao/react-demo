import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addTodo: ''
        }
    }

    btnAdd = () => {
        const addTodoVal = this.state.addTodo
        if (!addTodoVal) {
            return
        }
        this.props.addTodo(addTodoVal);
        this.setState({
            addTodo: ''
        })
    }

    addTodoChange = (event) => {
        this.setState({
            addTodo: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.addTodo} onChange={this.addTodoChange}/>
                <button onClick={this.btnAdd}>add #{this.props.todos.length + 1}</button>
            </div>
        );
    }
}

Add.propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired
}

export default Add;