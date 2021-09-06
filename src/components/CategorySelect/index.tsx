import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';


export const CategorySelect = () => {
  return(
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingRight: 40 }}
    style={styles.container}>

    </ScrollView>
  );
};