import React, { Component } from 'react';
import Nav from './component/nav';
import Welcome from './page/welcome';
import Goods from './page/goods';
import Dashboards from './page/dashboards'
import './App.css';
import {Route} from 'react-router-dom';
import GridLayout from 'react-grid-layout';

const LIST = [{
    text: 'welcome',
    url: '/welcome'
}, {
    text: 'goods',
    url: '/goods'
},{
    text: 'dashboards',
    url: '/dashboards'
}];

class App extends Component {
    render() {
        var layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];
        return (
            <div className="App">
                <div className="nav_bar">
                    <Nav list={LIST} />
                </div>
                <div className="conent">
                    <Route path='/welcome' component={Welcome} />
                    <Route path='/goods' component={Goods} />
                    <Route path='/dashboards' component={Dashboards} />
                </div>
                <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                    <div key="a">a</div>
                    <div key="b">b</div>
                    <div key="c">c</div>
                </GridLayout>
            </div>
        );
    }
}

export default App;
