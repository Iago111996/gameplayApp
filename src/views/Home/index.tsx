import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect/index';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { Appointments } from '../../components/Appointments';
import { ListDivider } from '../../components/ListDivider';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/auth.routes';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'AppointmentDetails'>;


export const Home: React.FC = () => {
    const navigation = useNavigation<homeScreenProp>();
    const [category, setCategory] = useState('');

    const handleCategorySelect = (categoryId: string) => {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    const handleAppointmentDetails = () => {
        navigation.navigate('AppointmentDetails');
    }

    const appointments =[
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',

        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '2',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        }
    ]

    return(
        <Background>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd />
                </View>

                <View>
                    <CategorySelect 
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                     />
                </View>

                <View style={styles.content}>
                    <ListHeader
                        title="Partidas agendadas"
                        subtitle="Total 6"
                     />

                    <FlatList 
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <Appointments
                             data={item}
                             onPress={handleAppointmentDetails}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.matches}
                    />

                </View>
            </View>
        </Background>
    );
};