import React, { FC, useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { IState } from '../reducers';
import { IToDoListReducer } from '../reducers/todolistReducer';

import { ISingleElementList } from '../entities/todoSingleEl';

const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
`;

const SingleElList = styled.View`
    border: 1px solid black;
    margin: 0 0 20px 0;
`;

const ToDoList: FC = props => {
    const todoListState = useSelector<IState, IToDoListReducer>(state => state.todoList)
    return (
        <Wrapper>
            {todoListState.todoList.map((elem: ISingleElementList, index: number) => 
                <SingleElList key={index}>
                    <Text>{elem.name}</Text>
                    <Text>{elem.description}</Text>
                </SingleElList>
            )}
        </Wrapper>
    )
};

export default ToDoList;