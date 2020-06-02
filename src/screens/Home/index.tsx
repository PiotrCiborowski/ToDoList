import React, { FC, Profiler } from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const Main = styled.View`
    backgroundColor: ${Colors.light};
`;

const Nick = styled.Text`
    margin: -10% 10%;
    font-size: 32px;
    font-weight: bold;
    color: ${Colors.black};
`;

const Lorem = styled.Text`
    margin: 15% 10%;
    font-size: 16px;
    text-align: justify;
    color: ${Colors.black};
`;

const ProfileImage = styled.Image`
    margin: 20% 10%;
    width: 175px;
    height: 175px;
    borderRadius: 100px;
`;

interface IWelcomeProps {
    nick: string;
}

const Welcome: FC<IWelcomeProps> = props => {
    return (
        <Main>
            <ProfileImage source={require('../../assets/profile.png')}/>
            <Nick>Connor{"\n"}Walsh{"\n"}26</Nick>
            <Lorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sem ac libero aliquet dictum. Ut ligula massa, mollis nec vehicula a, rutrum porta est. Nam libero neque, condimentum a odio sit amet, rutrum sollicitudin neque. Curabitur at urna dapibus, lacinia libero quis, mollis lorem. Suspendisse potenti. Ut varius facilisis leo, quis malesuada turpis sodales non. Morbi feugiat in massa eleifend commodo. Pellentesque hendrerit felis orci, facilisis tristique ligula faucibus nec. In maximus euismod mauris id interdum. Aenean interdum semper ante, ut egestas ex congue vitae.</Lorem>
        </Main>
    );
};

export default Welcome;