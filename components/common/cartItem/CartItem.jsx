import { View, Text, Image } from 'react-native';
import React from 'react';

import GradientStyleContainer from '../gradientStyleContainer/GradientStyleContainer';
import { useAsyncStorage } from '../../../context/AsyncStorageContext';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { COLORS, SIZES, icons } from '../../../constants';
import { addToCart } from '../../../utils/utils';
import styles from './cartItem.style';

export default function CartItem({ data }) {
    const { imagelink_square, name, roasted, sizes, special_ingredient } = data;

    const { setData } = useAsyncStorage();

    const updateQty = async (currQty, idx) => {
        sizes[idx] = { ...sizes[idx], quantity: currQty };
        addToCart(setData, {
            ...data,
            sizes
        });
    };

    const renderSizeRow = (size, idx) => {
        return (
            <View style={styles.sizeRow} key={idx}>
                <View style={styles.size}>
                    <Text
                        style={{
                            color: COLORS.secondaryLightGreyHex,
                            fontWeight: '500',
                            fontSize: SIZES.size_18
                        }}
                    >
                        {size.size}
                    </Text>
                </View>
                <Text style={styles.sizeAmt}>
                    <Text style={{ color: COLORS.primaryOrangeHex }}>$</Text>
                    {(size.price * size.quantity).toFixed(2)}
                </Text>
                <View style={styles.setQtyContainer}>
                    <PrimaryButton
                        iconUrl={icons.minus}
                        handlePress={() => updateQty(size.quantity - 1, idx)}
                        containerStyle={styles.btnStyle}
                        titleStyle={styles.icon}
                    />
                    <View style={styles.quantity}>
                        <Text
                            style={{
                                color: COLORS.primaryWhiteHex,
                                fontSize: SIZES.size_18
                            }}
                        >
                            {size.quantity}
                        </Text>
                    </View>
                    <PrimaryButton
                        iconUrl={icons.add}
                        handlePress={() => updateQty(size.quantity + 1, idx)}
                        containerStyle={styles.btnStyle}
                        titleStyle={styles.icon}
                    />
                </View>
            </View>
        );
    };

    return (
        <GradientStyleContainer
            containerStyle={styles.container}
            contentContainer={
                <>
                    <View style={styles.topContainer}>
                        <Image
                            source={imagelink_square}
                            style={styles.imgStyle}
                            resizeMode="cover"
                        />
                        <View style={styles.contentInfo}>
                            <View>
                                <Text style={styles.headerTitle}>{name}</Text>
                                <Text style={styles.ingredients}>
                                    {special_ingredient}
                                </Text>
                            </View>
                            <View style={styles.roasted}>
                                <Text
                                    style={{
                                        color: COLORS.primaryLightGreyHex,
                                        fontWeight: '800',
                                        flexDirection: 'row'
                                    }}
                                >
                                    {roasted}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        {sizes.map((size, idx) => renderSizeRow(size, idx))}
                    </View>
                </>
            }
        />
    );
}
