import { View } from 'react-native';
import React from 'react';

import GradientStyleContainer from '../gradientStyleContainer/GradientStyleContainer';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { SIZES } from '../../../constants';
import styles from './customHeader.style';

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
            <GradientStyleContainer
                contentContainer={
                    <PrimaryButton
                        containerStyle={[styles.containerStyle]}
                        titleStyle={[styles.iconStyle, style]}
                        iconUrl={iconRight}
                    />
                }
                containerStyle={{ padding: 0, borderRadius: SIZES.size_10 }}
            />
        </View>
    );
}
