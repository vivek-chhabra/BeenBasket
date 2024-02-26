import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';

import GradientStyleContainer from '../gradientStyleContainer/GradientStyleContainer';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { COLORS, icons } from '../../../constants';
import styles from './customCoffeeComponent.style';
import Ripple from 'react-native-material-ripple';
import { useAsyncStorage } from '../../../context/AsyncStorageContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CustomCoffeeComponent({ containerStyle, data }) {
    const [isSuccess, setIsSuccess] = useState(false);

    const navigation = useNavigation();

    const { setData, getData } = useAsyncStorage();

    const {
        imagelink_square,
        name,
        special_ingredient,
        average_rating,
        prices,
        roasted,
        id
    } = data;

    const addToCart = async () => {
        await setData(
            'cart',
            {
                id,
                name,
                special_ingredient,
                roasted,
                imagelink_square,
                sizes: [{ ...prices[2], quantity: 1 }]
            },
            () => {
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false);
                }, 1280);
            }
        );
    };

    const handlePress = () => {
        navigation.navigate('coffeeBeanDetails', { data });
    };

    return (
        <GradientStyleContainer
            containerStyle={[styles.container, containerStyle]}
            contentContainer={
                <>
                    <Ripple
                        onPress={handlePress}
                        rippleColor={COLORS.primaryLightGreyHex}
                    >
                        <View>
                            <Image
                                source={imagelink_square}
                                resizeMode="cover"
                                style={styles.image}
                            />
                            <View style={styles.ratings}>
                                <Image
                                    source={icons.star}
                                    style={styles.starStyle}
                                />
                                <Text style={styles.averageRatings}>
                                    {average_rating}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.contentStyle}>{name}</Text>
                        <Text style={styles.specialIng}>
                            {special_ingredient}
                        </Text>
                    </Ripple>
                    <View style={styles.bottomPrice}>
                        <Text style={styles.priceStyle}>
                            $
                            <Text
                                style={[
                                    styles.priceStyle,
                                    { color: COLORS.secondaryLightGreyHex }
                                ]}
                            >
                                {' '}
                                {prices[2].price}
                            </Text>
                        </Text>
                        <PrimaryButton
                            iconUrl={isSuccess ? icons.success : icons.add}
                            containerStyle={styles.iconContainer}
                            titleStyle={
                                isSuccess
                                    ? styles.successIconStyle
                                    : styles.iconStyle
                            }
                            handlePress={addToCart}
                        />
                    </View>
                </>
            }
        />
    );
}
