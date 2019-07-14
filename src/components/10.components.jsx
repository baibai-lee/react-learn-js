import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * 问题：数据应该在那个组件中保存
 *      看数据是在某个组件使用（直接给该组件），还是某些组件使用（给共同的父组件）
 * 
 * 问题2：需要在子组件中修改父组件的状态？
 *      子组件中不能直接改变父组件的状态
 *      状态在哪个组件，更新状态的行为，就应该定义在哪个组件
 * 
 *  解决方案：在父组件中定义函数，传递给子组件
 * 
 *  */

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: ["吃饭", "睡觉", "打代码"]
        }
    }

    addTodo = (todo) => {
        // 取到state中的todos
        const { todos } = this.state
        // 向todos数组的最前面插入新值
        todos.unshift(todo)
        // 更新状态
        this.setState(todos)
    }

    render() {
        const { todos } = this.state
        // 向子组件传值的时候，不要传错了！
        return (
            <div>
                <h1>Simple TODO List</h1>
                <Add count={todos.length + 1} addTodo={this.addTodo} />
                <List todos={todos} />
            </div>

        );
    }
}

class Add extends Component {
    add = () => {
        // 取出input中的值 使用 refs 对 input 进行标识
        console.log(this.refs)
        console.log(this.todoInput)
        const todo = this.todoInput.value.trim()

        // 合法性检验
        if (!todo) return
        // 向列表中插入新值
        this.props.addTodo(todo)
        // 将输入框置空
        this.todoInput.value = ''

    }

    render() {
        return (
            <div>
                <input type="text" ref={input => this.todoInput = input} />
                <button onClick={this.add}>add#{this.props.count}</button>
            </div>

        );
    }
}

Add.propType = {
    count: PropTypes.number.isRequired,
    addTodo: PropTypes.func.isRequired
}

class List extends Component {
    render() {
        const { todos } = this.props
        return (
            <ul>
                {/* 请注意！！！此处todos.map是表达式！应当放在{}中！ */}
                {
                    todos.map((todo, index) => <li key={index}>{todo}</li>)
                }
            </ul>

        );
    }
}

List.propType = {
    todos: PropTypes.array.isRequired
}

/**
 * 组件化编写功能的流程
 *      1.拆分组件
 *      2.实现静态的组件 使用类的方式进行编写，实现类里的render
 *      3.实现动态组件
 *          1）实现初始化数据的动态显示（应当思考数据在那个组件里保存）
 *          2）实现交互功能
 */