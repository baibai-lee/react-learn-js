import React, { Component } from 'react';

export default class App extends Component {
    render() {
        const names = ['jquery', 'zepto', 'angular', 'vue', 'react'];

        return (
            <div>
                <ul>
                    {names.map((name,index) => <li key={index}>{name}</li>)}
                </ul>
            </div>
        );
    }
}