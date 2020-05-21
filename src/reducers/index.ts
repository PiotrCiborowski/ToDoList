import { combineReducers } from 'redux';

import todoList, { IToDoListReducer } from './todolistReducer';

export default combineReducers({
    todoList
});

export interface IState {
    todoList: IToDoListReducer;
}