import React, { Component } from 'react';

// 需求：自定义一个组件，说明：
//     1.点击按钮，提示第一个框输入的值
// 2.第二个输入框失去焦点时，提示这个输入框中的值

export default class App extends Component {

    showInput = () => {
        // const input = this.refs.content
        // alert(input.value)

        console.log(this.refs)
        alert(this.input.value)
    }
    handleBlur = (event) => {
        // 对元素自身进行操作，可使用事件对象
        alert(event.target.value)
    }

    render() {
        return (
            <div>
                {/* ref相当于一个dom元素的标识 */}
                {/* 此种方法很简便，但是官方不推荐使用 */}
                <input type="text" ref="content" />&nbsp;&nbsp;

                <input type="text" ref={input => this.input = input} />&nbsp;&nbsp;

                <button onClick={this.showInput}>提示输入</button>&nbsp;&nbsp;
                <input type="text" placeholder="失去焦点提示输入" onBlur={this.handleBlur} />

            </div>

        );
    }
}