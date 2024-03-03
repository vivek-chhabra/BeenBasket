import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import styles from './gradientStyleContainer.style';
import { COLORS } from '../../../constants';

export default function GradientStyleContainer({
    containerStyle,
    contentContainer,
    showBackground = true
}) {
    return (
        <LinearGradient
            colors={
                showBackground
                    ? [COLORS.secondaryDarkGreyHex, COLORS.primaryBlackHex]
                    : ['transparent', 'transparent']
            }
            style={[styles.container, containerStyle]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            {contentContainer}
        </LinearGradient>
    );
}
