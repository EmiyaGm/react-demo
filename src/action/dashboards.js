import {createAction} from 'redux-actions';

const DASHBOARDS = [{
    name: '默认看板',
    id: 'dashboard1'
}, {
    name: '测试看板',
    id: 'dashboard2'
}, {
    name: '新建看板',
    id: 'dashboard3'
}];

const requestDashboards = createAction('REQUEST_DASHBOARDS');
const receiveDashboards = createAction('RECEIVE_DASHBOARDS');

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DASHBOARDS);
        }, 1500);
    });
};

export const getDashboards = () => async dispatch => {
    dispatch(requestDashboards());
    let dashboards = await fetchData();
    dispatch(receiveDashboards(dashboards));
};