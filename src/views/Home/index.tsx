import React from 'react';
import { Background } from '../../components/Background';
import { View } from 'react-native';
import { Profile } from '../../components/Profile';
import { styles } from './styles';


export const Home = () => {
    return(
        <Background>
            <View style={styles.container}>
                <View style={styles.header}>
                     <Profile />
                </View>
            </View>
        </Background>
    );
};