import { Text, Image } from 'react-native';
import Ripple from 'react-native-material-ripple';
import React from 'react';

import styles from './primaryButton.style';

export default function PrimaryButton({
    children,
    iconUrl,
    handlePress,
    title,
    activeContainerStyle,
    activeTitleStyle = {},
    color,
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
        >
            {iconUrl ? (
                <Image
                    source={iconUrl}
                    resizeMode="contain"
                    style={[defaultTitleStyle, titleStyle, activeTitleStyle]}
                />
            ) : (
                <Text style={[defaultTitleStyle, titleStyle, activeTitleStyle]}>
                    title
                </Text>
            )}
        </Ripple>
    );
}
