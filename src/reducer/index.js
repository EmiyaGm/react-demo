import {combineReducers} from 'redux';
import {goods} from './goods';
import {dashboards} from "./dashboards";

export const rootReducer = combineReducers({
    goods,
    dashboards
});