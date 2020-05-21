import React, { FC, useState } from 'react';
import { Button, Text, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

import Form from '../../components/Form';
import ToDoList from '../../components/ToDoList';

const List = ({navigation}) => {
    const [formView, setFormView] = useState<boolean>(false);


    return (
        <View>
            {formView ? (
                <Form />
            ) : (
                <ToDoList />
            )}
        </View>
    );
};

export default List;

/*interface IWelcomeProps {
    myProps: string;
}

const Welcome: FC<IWelcomeProps> = props => {
    return (
        <ScrollView contentContainerStyle={{backgroundColor: '#A9DDF2'}}>
            <WelcomeText>List for {props.myProps}</WelcomeText>
        </ScrollView>
    );
};

export default Welcome;*/