import * as actionTypes from './types/todolistTypes';
import { ISingleElementList } from '../entities/todoSingleEl';

export const setNewElemToDoList = (newElem: ISingleElementList) => ({
    type: actionTypes.SET_NEW_ELEM,
    newElem
})