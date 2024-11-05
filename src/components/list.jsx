import React, {Component} from 'react';
import PropTypes from 'prop-types'

class List extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        );
    }
}

List.propTypes = {
    todos: PropTypes.array.isRequired
}

export default List;