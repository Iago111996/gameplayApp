import * as React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { categories } from '../../utils/categories';
import { GuildIcon } from '../GuildIcon';

export type GuildProps ={ 
  id: string,
  name: string,
  icon: null | string,
  owner: boolean,
}

export type AppointmentsProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string,
  description: string,
}

type Props = RectButtonProps & {
  data: AppointmentsProps;
}

export const Appointments = ({ data, ...rest}: Props) => {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on} = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              { data.guild.name }
            </Text>
            <Text style={styles.category}>
              { category.title }
            </Text>
          </View>
          
          <View style={styles.footer}>
            <View style={styles.dataInfo}>
              <CalendarSvg />

              <Text style={styles.date}>
                {data.date}
              </Text>
            </View>
          

            <View style={styles.playerInfo}>
              <PlayerSvg fill={owner ? primary : on} />

              <Text style={[
                styles.player, {color: owner ? primary : on}
                ]}>
                { owner ? 'Anfitrião' : 'Visitante' }
              </Text>
            </View>
            </View>
        </View>
      </View>
    </RectButton>
  );
};