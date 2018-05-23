import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../action/dashboards';

class Dashboards extends Component {
    componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(actions.getDashboards());
    }
    render() {
        return this.props.isFetching ? (<h1>Loading…</h1>) : (
            <ul className="dashboards">
                {
                    this.props.dashboards.map((ele, idx) => (
                        <li key={idx} style={{marginBottom: 20, listStyle: 'none'}}>
                            <span>看板名称：{ele.name}</span> |
                            <span>看板ID：{ele.id}</span> |
                        </li>
                    ))
                }
            </ul>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    isFetching: state.dashboards.isFetching,
    dashboards: state.dashboards.data
});

export default connect(mapStateToProps)(Dashboards);