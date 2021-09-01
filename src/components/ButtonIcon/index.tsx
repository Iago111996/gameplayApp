import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from '../../components/ButtonIcon/styles';

type Props = TouchableOpacityProps & {
    title: String
};

export const ButtonIcon = ({ title, ...rest } : Props) => {
    return(
        <TouchableOpacity 
        style={styles.container}
        {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.imageIcon} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};