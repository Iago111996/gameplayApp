import * as React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styles } from './styles';

import { Category } from '../Category';
import { categories } from '../../utils/categories';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean,
}

export const CategorySelect = ({ 
  categorySelected,
  setCategory,
  hasCheckBox = false,
 }: Props) => {
  return(
     <ScrollView
     horizontal
     style={styles.container}  
     showsHorizontalScrollIndicator={false}  
     contentContainerStyle={{ paddingRight: 40 }}
   >
     {
       categories.map(category => (
         <Category 
           key={category.id}
           title={category.title}
           icon={category.icon}
           checked={category.id === categorySelected}
           onPress={() => setCategory(category.id)}
           hasCheckBox={hasCheckBox}
         />
       ))
     }
   </ScrollView>
  );
};