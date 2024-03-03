import Ripple from 'react-native-material-ripple';
import { Text, Image } from 'react-native';
import React from 'react';

import { COLORS } from '../../../constants';
import styles from './primaryButton.style';

export default function PrimaryButton({
    activeTitleStyle = {},
    iconUrl,
    handlePress,
    title,
    titleStyle,
    containerStyle
}) {
    const defaultContainerStyle = iconUrl
        ? styles.iconContainer
        : styles.titleContainer;

    const defaultTitleStyle = iconUrl ? styles.iconStyle : styles.title;

    return (
        <Ripple
            style={[defaultContainerStyle, containerStyle]}
            onPress={handlePress}
            rippleColor={COLORS.primaryWhiteHex}
        >
            {iconUrl ? (
                <Image
                    source={iconUrl}
                    resizeMode="contain"
                    style={[defaultTitleStyle, titleStyle, activeTitleStyle]}
                />
            ) : (
                <Text style={[defaultTitleStyle, titleStyle, activeTitleStyle]}>
                    {title}
                </Text>
            )}
        </Ripple>
    );
}
