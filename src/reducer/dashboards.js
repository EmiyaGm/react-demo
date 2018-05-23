import {handleActions} from 'redux-actions';

export const dashboards = handleActions({
    REQUEST_DASHBOARDS: (state, action) => ({
        ...state,
        isFetching: true
    }),
    RECEIVE_DASHBOARDS: (state, action) => ({
        ...state,
        isFetching: false,
        data: action.payload
    })
}, {
    isFetching: false,
    data: []
});