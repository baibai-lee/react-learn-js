import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoInput: ''
        }
    }

    handleSubmit = (event) => {
        // 取到input中的值
        let todoInput = this.state.todoInput.trim()

        // 添加进正在进行的数组
        this.props.addItemToTodo(todoInput)

        // 将输入框置空
        this.setState({ todoInput: '' })
        // 阻止默认行为
        event.preventDefault()
    }

    handleChange = (event) => {
        const todoInput = event.target.value
        this.setState({ todoInput })
    }

    render() {
        return (
            <header>
                <section className="header-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>ToDoList</label>
                        <input type="text" placeholder="  添加ToDo" value={this.state.todoInput} onChange={this.handleChange} />
                    </form>
                </section>
            </header>
        );
    }
}

Header.propTypes = {
    addItemToTodo: PropTypes.func.isRequired
}