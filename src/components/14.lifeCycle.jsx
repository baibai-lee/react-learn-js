import React from 'react'
import PropTypes from 'prop-types'
import ReactDom from 'react-dom'

/**
 * 自定义一个组件
 *      让指定的文本做显示/隐藏的动画
 *      切换时间为2S
 *      点击按钮从界面中移除组件
 */

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            opacity: 1
        }
    }

    componentDidMount() {
        let { opacity } = this.state
        this.intervalId = setInterval(() => {
            console.log("定时器正在执行")

            opacity < 0 ? opacity = 1 : opacity -= 0.1
            this.setState({ opacity })

        }, 200);

        // 定时器在使用后如果不清理会有内存泄漏的风险！
    }

    componentWillUnmount() {
        // 组件的即将被卸载的生命周期回调，在此处清除定时器
        clearInterval(this.intervalId)
    }
    

    destoryComponent = () => {
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }

    render() {
        const { opacity } = this.state
        return (
            <div>
                <h2 style={{ opacity }}>{this.props.msg}</h2>
                <button onClick={this.destoryComponent}>不活了！</button>
            </div>
        )
    }
}

App.propsType = {
    msg: PropTypes.string.isRequired
}

export default App