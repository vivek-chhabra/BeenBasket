import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';

import GradientStyleContainer from '../gradientStyleContainer/GradientStyleContainer';
import { useAsyncStorage } from '../../../context/AsyncStorageContext';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { COLORS, icons } from '../../../constants';
import styles from './customCoffeeComponent.style';
import { addToCart } from '../../../utils/utils';

export default function CustomCoffeeComponent({ containerStyle, data }) {
    const [isSuccess, setIsSuccess] = useState(false);

    const navigation = useNavigation();
    const { setData } = useAsyncStorage();

    const {
        imagelink_square,
        name,
        special_ingredient,
        average_rating,
        prices,
        roasted,
        id,
    } = data;

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
                            handlePress={() => {
                                addToCart(
                                    setData,
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
                                    },
                                    'Item Already in the Cart'
                                );
                            }}
                        />
                    </View>
                </>
            }
        />
    );
}
