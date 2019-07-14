import React, { Component } from 'react'

/**
 * 实现一个组件
 * 点击按钮提示输入的表单数据 同时表单不提交
 */

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pwd: ''
        }
    }
    // 有两种解决办法
    // 非受控组件
    handleSubmit = (event) => {
        // 根据refs的标识，取到input的元素，进行输出
        const name = this.nameInput.value
        // alert(name) // 可以正常读到

        const {pwd} = this.state

        alert(`表单输入为：\n用户名：${name} 密码：${pwd}`)
        // 阻止表单的默认提交行为
        event.preventDefault()
    }

    // 受控组件
    handleChange = (event) => {
        // 相当于在操作组件的状态
        const pwd = event.target.value
        this.setState({pwd})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* 非受控组件 相当于在操作dom（读） */}
                用户名：<input type="text" ref={input => this.nameInput = input} />&nbsp;&nbsp;
                {/* 受控组件  更符合react的思想 */}
                密码：<input type="password" value={this.state.pwd} onChange={this.handleChange} />&nbsp;&nbsp;
                <input type="submit" value="登陆" />
            </form>
        )
    }
}

// 在实际开发中，都可以使用