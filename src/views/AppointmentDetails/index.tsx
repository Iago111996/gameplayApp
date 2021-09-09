import * as React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { styles } from './styles';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader';


export const AppointmentDetails = () => {

  return (
    <Background>
      <View style={styles.container}>
        <Header
          title="Detalhes"
          action={
            <BorderlessButton>
              <Fontisto
               name="share"
               size={24}
               color={theme.colors.primary}
               />
            </BorderlessButton>
          }
         />

        <ImageBackground
          source={BannerImg} 
          style={styles.imgBackground}
        >
          <View style={styles.content}> 
          <Text style={styles.imgTitle}>
           League of Legends
          </Text>
          <Text style={styles.imgSubtitle}>
           É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
          </View>
        </ImageBackground>

        <ListHeader 
          title="Jogadores"
          subtitle="Total 3"
        />

      </View>
    </Background>
  );
};

