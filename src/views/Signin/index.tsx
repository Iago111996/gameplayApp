import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';
import IllustrstionImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';



export const Signin = () => {
  const navigation = useNavigation();

function hendleSignin()  {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container} >

        <Image 
          source={IllustrstionImg} 
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
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Home')}
         />

      </View>
    </Background>
  );
};

