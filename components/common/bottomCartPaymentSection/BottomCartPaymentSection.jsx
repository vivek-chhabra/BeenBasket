import { View, Text } from 'react-native';
import React from 'react';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { COLORS } from '../../../constants';

import styles from './bottomCartPaymentSection.style';

export default function BottomCartPaymentSection({
    buttonTitle,
    priceTitle,
    price,
    containerStyle,
    handlePress
}) {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.priceContainer}>
                <Text style={styles.priceTitleText}>{priceTitle}</Text>{'\n'}
                <Text style={styles.priceAmt}>
                    <Text style={{ color: COLORS.primaryOrangeHex, }}>$</Text>{' '}
                    {price}
                </Text>
            </Text>
            <PrimaryButton
                title={buttonTitle}
                containerStyle={styles.buttonContainer}
                titleStyle={styles.buttonTitle}
                handlePress={handlePress}
            />
        </View>
    );
}
