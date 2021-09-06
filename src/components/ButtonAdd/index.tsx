import * as React from 'react';
import { styles } from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'; 
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps;

export const ButtonAdd = ({...rest}: Props) => {
  return(
    <RectButton style={styles.container}>
      <MaterialCommunityIcons 
      name="plus"
      color={theme.colors.heading}
      size={24}
      />
    </RectButton>
  );
};