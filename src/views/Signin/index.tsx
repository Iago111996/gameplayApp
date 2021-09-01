import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import IllustrstionImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

export const Signin = () => {
  return (
    <View style={styles.container} >

      <StatusBar style="inverted" backgroundColor="transparent" translucent/>

      <Image 
        source={IllustrstionImg} 
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}
          e organize suas {`\n`}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
      </View>

      <ButtonIcon 
      title="Entrar com Discord"
      activeOpacity={0.7}
       />

    </View>
  );
};

