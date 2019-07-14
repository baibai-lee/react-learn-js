import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props)
        // 初始化状态
        this.state = {
            isLikeMe: false
        }

        // 将新增的方法的this强制绑定为组件对象
        this.handleClick = this.handleClick.bind(this)
        // 也可以在组件jsx中使用，如下，但是每次渲染都会重新执行，效率较低
        // <h2 onClick={this.handleClick.bind(this)}>{isLikeMe ? '我喜欢你' : '你喜欢我'}</h2>

        // 以上仍然不是最终的解决方案 可使用箭头函数,如下：
        // handleClick = () => {
        //     // 得到状态
        //     const isLikeMe = !this.state.isLikeMe
        //     // 更新状态
        //     this.setState({ isLikeMe })
        // }
    }

    handleClick() {
        // 得到状态
        const isLikeMe = !this.state.isLikeMe
        // 更新状态
        this.setState({ isLikeMe })
    }

    // 上面的写法是错误的，内部的this默认不是组件对象，而是undefined，无法取到state



    render() {
        const { isLikeMe } = this.state

        return (
            <h2 onClick={this.handleClick}>{isLikeMe ? '我喜欢你' : '你喜欢我'}</h2 >
        );
    }
}

// 组件中使用状态，就不能使用工厂函数模式创建
// 但是工厂函数效率相对较高