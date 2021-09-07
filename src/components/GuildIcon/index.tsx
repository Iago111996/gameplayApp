import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

export const GuildIcon = () => {
  const uri = 'https://w7.pngwing.com/pngs/191/229/png-transparent-computer-icons-discord-logo-judgment-apocalypse-survival-simulation-discord-face-logo-computer-wallpaper.png';
  return (
    <Image 
      source={{ uri }}
      resizeMode="cover"
      style={styles.image}
    />
  );
};
