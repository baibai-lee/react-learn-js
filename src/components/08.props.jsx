import React, { Component } from 'react';
import PropTypes from 'prop-types'

// 需求：自定义一个用来显示个人信息的组件，说明：
//     1.如果性别没有指定，默认为男
//     2.如果年龄没有指定，默认为18

class App extends Component {
    render() {
        return (
            <ul>
                <li>姓名：{this.props.name}</li>
                <li>年龄：{this.props.age}</li>
                <li>性别：{this.props.sex}</li>
            </ul>
        );
    }
}

App.defaultProps = {
    sex: '男',
    age: 18
}

App.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default App