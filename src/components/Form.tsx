import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { TextInput, Button } from 'react-native';

import { useDispatch } from 'react-redux';

import { setNewElemToDoList } from '../actions/todolistActions';
import { ISingleElementList } from '../entities/todoSingleEl';

import Colors from '../constans/Colors';

const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
`;

const CustomTextInput = styled.TextInput`
    border: 1px solid black;
    padding: 10px;
    margin: 0 0 20px 0;
    color: black;
    width: 100%;
`;

type setNewElemToDoList = ReturnType<typeof setNewElemToDoList>;

const Form: FC<{switchView(formView: boolean)}> = props => {
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState<string>('');
    const [descInput, setDescInput] = useState<string>('');

    const nameValueChange = (txt) => {
        setNameInput(txt.nativeEvent.text);
    }
    
    const descValueChange = (txt) => {
        setDescInput(txt.nativeEvent.text);
    }

    const saveData = () => {
        dispatch<setNewElemToDoList>(setNewElemToDoList({
            name: nameInput,
            description: descInput
        } as ISingleElementList
        ));
        props.switchView(false)
    }

    return (
        <Wrapper>
            <CustomTextInput value={nameInput} onChange={nameValueChange} placeholder="Name"/>
            <CustomTextInput value={descInput} onChange={descValueChange} placeholder="Description"/>
            <Button title="Save" onPress={saveData}/>
        </Wrapper>
    )
};

export default Form;