import React, { Component } from 'react';
import List from './list'
import Header from './header'
import Footer from './footer'


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // todolist: ['1', '2', '3', '4', '5', '6'],
            // donelist: ['5', '6', '7', '8', '9']   
            todolist: [1, 2],
            donelist: [2]
        }
    }

    addItemToTodo = (item) => {
        if (!item) return
        let { todolist } = this.state
        todolist.unshift(item)
        this.setState({ todolist })
    }

    addItemToDone = (item) => {
        // console.log(item)
        if (!item) return
        let { donelist } = this.state
        donelist.push(item)
        this.setState({ donelist })
    }

    reAddItemToTodo = (item) => {
        let { todolist } = this.state
        todolist.push(item)
        this.setState({ todolist })
    }
    delItemFromTodo = (index) => {
        let { todolist } = this.state
        todolist.splice(index, 1)
        this.setState(todolist)
    }

    delItemFromDone = (index) => {
        let { donelist } = this.state
        donelist.splice(index, 1)
        this.setState(donelist)
    }

    clearAll = () => {
        this.setState({ todolist: [], donelist: [] })
    }

    componentDidUpdate() {
        localStorage.setItem('todolist', JSON.stringify(this.state.todolist))
        localStorage.setItem('donelist', JSON.stringify(this.state.donelist))
    }

    componentWillMount() {
        let todolist = JSON.parse(localStorage.getItem('todolist'))
        let donelist = JSON.parse(localStorage.getItem('donelist'))

        // 此处有坑！
        // 在第一次打开本页面时，localStorage为null，读出的list也为null，会抛出TypeError
        // 需要做检测后才可以setState

        this.setState({
            todolist: todolist ? todolist : [],
            donelist: donelist ? donelist : []
        })
    }
    render() {
        return (
            <div>
                <Header addItemToTodo={this.addItemToTodo} />
                <List todolist={this.state.todolist} donelist={this.state.donelist} {...{ addItemToDone: this.addItemToDone, reAddItemToTodo: this.reAddItemToTodo, delItemFromTodo: this.delItemFromTodo, delItemFromDone: this.delItemFromDone }} />
                {/* <List {...this.state} {...{ addItemToDone: this.addItemToDone, reAddItemToTodo: this.reAddItemToTodo, delItemFromTodo: this.delItemFromTodo, delItemFromDone: this.delItemFromDone }} /> */}
                <Footer clearAll={this.clearAll} />
            </div>
        );
    }
}
