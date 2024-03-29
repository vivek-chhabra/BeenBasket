import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import React from 'react';

import GradientStyleContainer from '../gradientStyleContainer/GradientStyleContainer';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { SIZES } from '../../../constants';
import styles from './customHeader.style';

export default function CustomHeader({
    iconLeft,
    iconRight,
    containerStyle,
    style,
    handleLeft,
    handleRight,
    isLeftIconDisabled,
    isRightIconDisabled,
    headerTitle = '',
    enableGoBackBtn = true
}) {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={[styles.headerContainer, containerStyle]}>
            <GradientStyleContainer
                contentContainer={
                    !isLeftIconDisabled && (
                        <PrimaryButton
                            containerStyle={[styles.containerStyle]}
                            titleStyle={styles.iconStyle}
                            iconUrl={iconLeft}
                            handlePress={
                                enableGoBackBtn
                                    ? () => navigation.goBack()
                                    : handleLeft && handleLeft
                            }
                        />
                    )
                }
                containerStyle={{ padding: 0, borderRadius: SIZES.size_10 }}
            />
            {headerTitle && (
                <Text style={styles.headerTitle}>{headerTitle}</Text>
            )}
            <GradientStyleContainer
                contentContainer={
                    !isRightIconDisabled && (
                        <PrimaryButton
                            containerStyle={[styles.containerStyle]}
                            titleStyle={[styles.iconStyle, style]}
                            iconUrl={iconRight}
                            handlePress={handleRight && handleRight}
                        />
                    )
                }
                containerStyle={{ padding: 0, borderRadius: SIZES.size_10 }}
            />
        </View>
    );
}
