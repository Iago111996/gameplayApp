import React from 'react';
import { Background } from '../../components/Background';
import { View } from 'react-native';
import { Profile } from '../../components/Profile';
import { styles } from './styles';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';


export const Home = () => {
    return(
        <Background>
            <View style={styles.container}>
                <View style={styles.header}>
                     <Profile />
                     <ButtonAdd />
                </View>
            </View>

            <View>
                <CategorySelect />
            </View>
        </Background>
    );
};