import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/auth.routes';

import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Signin: React.FC = () => {
  const navigation = useNavigation<homeScreenProp>();

const hendleSignin = () =>{
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container} >

        <Image 
          source={IllustrationImg} 
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>
        </View>

        <ButtonIcon 
        title="Entrar com Discord"
        onPress={hendleSignin}
         />

      </View>
    </Background>
  );
};

