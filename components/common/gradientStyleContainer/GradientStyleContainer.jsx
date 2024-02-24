import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import React from 'react';

import styles from './gradientStyleContainer.style';
import { COLORS } from '../../../constants';

export default function GradientStyleContainer({ Children, containerStyle, contentContainer }) {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                style={[styles.container, containerStyle]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                {contentContainer}
            </LinearGradient>
        </View>
    );
}
