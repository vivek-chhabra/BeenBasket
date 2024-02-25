import { View, Text, Image } from 'react-native';
import React from 'react';

import GradientStyleContainer from '../gradientStyleContainer/GradientStyleContainer';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { COLORS, SIZES, icons } from '../../../constants';
import styles from './customCoffeeComponent.style';
import Ripple from 'react-native-material-ripple';

export default function CustomCoffeeComponent({
    handlePress,
    containerStyle,
    data
}) {
    const {
        imagelink_square,
        imagelink_portrait,
        name,
        special_ingredient,
        average_rating
    } = data;

    return (
        <GradientStyleContainer
            containerStyle={containerStyle}
            contentContainer={
                <Ripple onPress={handlePress} style={[styles.container]}>
                    <Image
                        source={imagelink_square}
                        resizeMode="cover"
                        style={styles.image}
                    />
                    <Text
                        style={{
                            color: COLORS.secondaryLightGreyHex,
                            fontSize: SIZES.size_18,
                            fontWeight: '600'
                        }}
                    >
                        {name}
                    </Text>
                    <Text
                        style={{
                            color: COLORS.primaryLightGreyHex,
                            fontSize: SIZES.size_13,
                            flexWrap: 'wrap',
                            bottom: SIZES.size_4
                        }}
                    >
                        {special_ingredient}
                    </Text>
                    <View style={styles.bottomPrice}>
                        <Text style={styles.priceStyle}>
                            $
                            <Text
                                style={[
                                    styles.priceStyle,
                                    { color: COLORS.primaryWhiteHex }
                                ]}
                            >
                                {' '}
                                4.20
                            </Text>
                        </Text>
                        <PrimaryButton
                            iconUrl={icons.add}
                            containerStyle={styles.iconContainer}
                            titleStyle={styles.iconStyle}
                        />
                    </View>
                </Ripple>
            }
        />
    );
}
