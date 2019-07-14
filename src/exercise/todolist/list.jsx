import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // 尝试将todoFlags放在this下，发现其中数据更新后不会触发render函数，因此必须将flags放在state中
            // 在componentWillUpdate 直接操作了state，似乎会有特殊的影响
            todoFlags: [],
            todoItemValue: '',
            index: 0
        }
    }

    // 删除list元素
    handleTodoDel = (event) => {
        this.props.delItemFromTodo(event.target.className)
    }

    handleDoneDel = (event) => {
        this.props.delItemFromDone(event.target.className)
    }

    // 处理 点击正在进行
    handleTodoChange = (event) => {
        // 应当先向done中添加元素，然后再删除todo中的元素，否则会造成下标找不到对应元素
        let index = +event.target.className
        // 向done中添加元素
        this.props.addItemToDone(this.props.todolist[index])
        // 从todo中删除元素
        this.props.delItemFromTodo(index)
    }

    handleDoneChange = (event) => {
        let index = +event.target.className
        this.props.reAddItemToTodo(this.props.donelist[index])
        this.props.delItemFromDone(index)
    }

    // 处理点击 正在进行 元素的内容
    handleTodoContentClick = (event) => {
        // 取出span的值
        let index = +event.target.className
        // console.log(index)
        let currentValue = this.props.todolist[index]
        // console.log(currentValue)

        let todoFlags = this.state.todoFlags
        todoFlags[index] = false
        this.setState({
            // 将span的值设置为input的值
            todoItemValue: currentValue,
            // 将当前显示设置为input
            todoFlags
        })
    }

    handleTodoContentBlur = (event) => {
        // 取出此时input中的值
        let currentValue = this.state.todoItemValue
        // 将值放入todolist中
        let index = +event.target.className
        this.props.todolist[index] = currentValue

        // 更新
        let todoFlags = this.state.todoFlags
        todoFlags[index] = true
        // 将当前显示设置为span
        this.setState({ todoFlags })
    }

    handleTodoContentInputChange = (event) => {
        const todoItemValue = event.target.value
        this.setState({ todoItemValue })
    }

    componentWillMount() {
        console.log(this.props)
        // 此处将正在进行的列表元素初始化显示为span
        let todoFlags = []
        for (let i = 0; i < this.props.todolist.length; i++) {
            todoFlags.push(true)
        }
        this.setState({ todoFlags })
    }

    componentWillUpdate() {
        let todoFlags = this.state.todoFlags
        let todolist = this.props.todolist

        // 此判断保证在更新时，flag中的元素均为true，且长度与todolist长度一致
        if (todoFlags.length < todolist.length) {
            for (let i = 0; i < todolist.length - todoFlags.length; i++) {
                todoFlags.push(true)
            }
            // eslint-disable-next-line
        } else this.state.todoFlags = todoFlags.slice(0, todolist.length)

        // 在此处直接操作了state，同时页面也发生了变化
        // 猜测是因为当前的生命周期函数在执行后，刚好会执行render，因此直接操作的state也会对应的反映到页面上
    }

    render() {
        let { todolist, donelist } = this.props
        return (
            <section className="main-list-container" >
                <section className="main-list">

                    <h2>正在进行<span className='listcount'>{todolist.length}</span></h2>
                    <ul>
                        {
                            todolist.map((item, index) =>
                                (
                                    <li draggable="true" key={index} className='todolist'>
                                        <input type="checkbox" className={index} checked="" onChange={this.handleTodoChange} />
                                        {
                                            // 此处是一个三元运算符，控制显示span和input
                                            this.state.todoFlags[index]
                                                ?
                                                <span className={index} onClick={this.handleTodoContentClick}>{item}</span>
                                                :
                                                <input className={index} style={{ width: '400px' }}
                                                    autoFocus='autofocus'
                                                    value={this.state.todoItemValue}
                                                    onChange={this.handleTodoContentInputChange}
                                                    onBlur={this.handleTodoContentBlur}
                                                />
                                            // input需要添加autofocus属性，
                                            // 否则点击文本后，不会默认获取焦点，有可能导致无法失去焦点，也就不会使得input自动变为span
                                        }
                                        {/* eslint-disable-next-line */}
                                        <a className={index} onClick={this.handleTodoDel}>-</a>
                                    </li>
                                )
                            )
                        }
                    </ul>

                    <h2>已经完成<span className='listcount'>{donelist.length}</span ></h2>
                    <ul>
                        {
                            donelist.map((item, index) =>
                                (
                                    <li key={index} className='donelist'>
                                        <input type="checkbox" className={index} checked="checked" onChange={this.handleDoneChange} />
                                        <span>{item}</span>
                                        {/* eslint-disable-next-line */}
                                        <a className={index} onClick={this.handleDoneDel}>-</a>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </section>
            </section>
        );
    }
}

List.propTypes = {
    todolist: PropTypes.array.isRequired,
    donelist: PropTypes.array.isRequired,
    addItemToDone: PropTypes.func.isRequired,
    reAddItemToTodo: PropTypes.func.isRequired,
    delItemFromTodo: PropTypes.func.isRequired,
    delItemFromDone: PropTypes.func.isRequired
}