import React, { FC } from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const Scroller = styled.ScrollView`
    backgroundColor: ${Colors.light};
`;

const ImageText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    text-align: justify;
    color: ${Colors.black};
`;

const FirstImage = styled.Image`
    margin: 20% 10% -20%;
    width: 300px;
    height: 300px;
    borderRadius: 20px;
`;

interface IWelcomeProps {
    myProps: string;
}

const Welcome: FC<IWelcomeProps> = props => {
    return (
        <Scroller /*contentContainerStyle={{backgroundColor: '#A9DDF2', alignItems: 'center'}}*/>
            <FirstImage source={require('../../assets/imageText.png')}/>
            <ImageText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tortor ultrices, rutrum felis nec, scelerisque dolor. Sed tempor sagittis lorem. Phasellus luctus lacinia gravida. Sed orci diam, ornare finibus pellentesque ut, tempus dapibus quam. In id metus quis tortor lacinia scelerisque ut eu nisl. Maecenas laoreet nulla a laoreet congue. Aliquam sit amet nunc augue.
            {"\n"}
            In viverra, mi nec eleifend euismod, est odio dignissim leo, et faucibus nisl dui nec risus. Quisque accumsan mauris ac dui viverra, eget consectetur eros sollicitudin. Morbi tincidunt justo nec enim accumsan, consectetur egestas magna congue. Phasellus augue elit, tempus non commodo in, fermentum ut ante. Maecenas sit amet mauris a eros interdum rhoncus euismod quis tellus. Curabitur vel erat iaculis, laoreet enim in, mollis ipsum. Cras vel turpis eget quam dictum scelerisque quis vel erat.
            {"\n"}
            In eleifend mollis nisl, sit amet blandit arcu viverra et. Nam sagittis ligula ut egestas luctus. Curabitur magna metus, egestas dictum mi eget, tincidunt gravida ante. Aenean rhoncus leo ut convallis imperdiet. Sed ut metus eu lectus ultrices semper. Maecenas ligula turpis, imperdiet sit amet suscipit nec, tincidunt euismod mi. Nullam sed sapien ac est semper tempor. Praesent a vulputate massa. Pellentesque lacinia felis eu nibh scelerisque egestas quis vel ligula. Praesent dictum quam quis enim consequat, a consequat sem condimentum. Sed non varius est. Nulla felis diam, convallis ac fringilla a, consectetur et ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer mi leo, vestibulum in quam ac, scelerisque bibendum ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.</ImageText>
        </Scroller>
    );
};

export default Welcome;