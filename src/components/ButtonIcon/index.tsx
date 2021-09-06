import React from 'react';
import { Text, Image, View} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'; 

import DiscordImg from '../../assets/discord.png';
import { styles } from '../../components/ButtonIcon/styles';

type Props = RectButtonProps & {
    title: String
};

export const ButtonIcon = ({ title, ...rest }: Props) => {
    return(
        <RectButton 
        style={styles.container}
        {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.imageIcon} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    );
};