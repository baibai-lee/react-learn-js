import React from 'react'
import ReactDom from 'react-dom'
// import App from './components/app' // 基本组件
// import App from './components/04.jsx' // 列表渲染
// import App from './components/07.state' // 组件三大属性之state

// ReactDom.render(<App />, document.getElementById('root'))



// 以下为组件三大属性之props的代码

// import App from './components/08.props'
// let p1 = {
//     name: 'tom',
//     age: 30,
//     sex: '男'
// }, p2 = {
//     name: 'jane',
//     age: 12,
//     sex: '女'
// }
// ReactDom.render(<App {...p1} />, document.getElementById('root'))
// ReactDom.render(<App {...p2} />, document.getElementById('root'))

// import App from './components/09.refs' // 组件三大属性之refs
// ReactDom.render(<App />, document.getElementById('root'))

// import App from './components/10.components'
// ReactDom.render(<App />, document.getElementById('root'))
// 组件三大属性综合练习

// import App from './components/13.formData'
// ReactDom.render( < App / > , document.getElementById('root'))
// 表单数据收集的两种办法

// import App from './components/14.lifeCycle'
// ReactDom.render(<App msg="react太难了！"/>, document.getElementById('root'))
// 生命周期函数的一个练习


import App from './exercise/todolist/App'
import './exercise/todolist/index.css'

ReactDom.render( < App / > , document.getElementById('root'))