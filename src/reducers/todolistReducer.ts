import * as actionTypes from '../actions/types/todolistTypes';
import { ISingleElementList } from '../entities/todoSingleEl';

export interface IToDoListReducer {
    todoList: ISingleElementList[];
}

const defaultState = (): IToDoListReducer => ({
    todoList: [{
        name: '[TEST]Pierwszy',
        description: 'Pierwszy description'
    },
    {
        name: '[TEST]Drugi',
        description: 'Drugi description'
    }]
});

export default (state = defaultState(), action: any): IToDoListReducer => {
    switch (action.type) {
        case actionTypes.SET_NEW_ELEM: {
            return {
                ...state,
                todoList: [...state.todoList, action.newElem]
            };
        }
        default: {
            return state;
        }
    }
};