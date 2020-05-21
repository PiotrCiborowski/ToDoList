import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { TextInput } from 'react-native';

const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
`;

const CustomTextInput = styled.TextInput`
    border: 1px solid black;
    padding: 10px;
    color: black;
    width: 100%;
`;

const Form: FC = props => {
    const [nameInput, setNameInput] = useState<string>(''); //25:53 - https://web.microsoftstream.com/video/20d79845-4c2b-45fb-8621-bea20563a062
    return (
        <Wrapper>
            <CustomTextInput value={} onChange={} placeholder="Name"/>
            <CustomTextInput value={} onChange={} placeholder="Description"/>
        </Wrapper>
    )
};

export default Form;