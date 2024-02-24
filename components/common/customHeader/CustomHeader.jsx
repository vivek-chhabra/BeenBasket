import { View, Text } from 'react-native';
import React from 'react';

import styles from './customHeader.style';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { COLORS, SIZES } from '../../../constants';
import GradientStyleContainer from '../gradientStyleContainer/GradientStyleContainer';

export default function CustomHeader({
    iconLeft,
    iconRight,
    containerStyle,
    style
}) {
    return (
        <View style={[styles.headerContainer, containerStyle]}>
            <GradientStyleContainer
                contentContainer={
                    <PrimaryButton
                        containerStyle={[styles.containerStyle]}
                        titleStyle={styles.iconStyle}
                        iconUrl={iconLeft}
                    />
                }
                containerStyle={{ padding: 0, borderRadius: SIZES.size_10 }}
            />
            <PrimaryButton
                containerStyle={[styles.containerStyle]}
                titleStyle={[
                    styles.iconStyle,
                    {
                        width: '100%',
                        height: '100%',
                        borderRadius: SIZES.size_10
                    },
                    style
                ]}
                iconUrl={iconRight}
            />
        </View>
    );
}
