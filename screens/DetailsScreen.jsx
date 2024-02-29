import { Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import BottomCartPaymentSection from '../components/common/bottomCartPaymentSection/BottomCartPaymentSection';
import CustomSizePicker from '../components/common/customSizePicker/CustomSizePicker';
import BGImageInfo from '../components/common/BGImageInfo/BGImageInfo';
import { useAsyncStorage } from '../context/AsyncStorageContext';
import { COLORS, SIZES } from '../constants';
import { addToCart } from '../utils/utils';

export default function CoffeeBeanDetails({ route }) {
    const { data } = route.params;

    const [activeSize, setActiveSize] = useState(data.prices[2]);

    const { setData } = useAsyncStorage();

    const {
        imagelink_square,
        id,
        roasted,
        special_ingredient,
        prices,
        type,
        name,
    } = data;

    const addItemToCart = () => {
        addToCart(
            setData,
            {
                id,
                name,
                special_ingredient,
                roasted,
                imagelink_square,
                sizes: [activeSize]
            },
            undefined,
            `${type} with this size is already added in the cart`
        );
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <BGImageInfo
                    data={data}
                    isFavoriteStyle={false}
                />

                <Text style={styles.sizeText}>Sizes</Text>
                <CustomSizePicker
                    sizes={prices}
                    activeSize={activeSize}
                    setActiveSize={setActiveSize}
                    containerStyle={{
                        paddingHorizontal: SIZES.size_15,
                        paddingBottom: 100
                    }}
                />
            </ScrollView>
            <BottomCartPaymentSection
                handlePress={addItemToCart}
                buttonTitle="Add to Cart"
                price={activeSize.price}
                priceTitle="Price"
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
        paddingBottom: 80
    },
    sizeText: {
        fontSize: SIZES.size_18,
        fontWeight: '600',
        color: COLORS.secondaryLightGreyHex,
        paddingHorizontal: SIZES.size_15,
        marginBottom: SIZES.size_10
    }
});
