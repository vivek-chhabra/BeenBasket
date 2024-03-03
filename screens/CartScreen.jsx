import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import BottomCartPaymentSection from '../components/common/bottomCartPaymentSection/BottomCartPaymentSection';
import { useAsyncStorage } from '../context/AsyncStorageContext';
import EmptyList from '../components/common/emptyList/EmptyList';
import CartItem from '../components/common/cartItem/CartItem';
import { COLORS, SIZES } from '../constants';

const CartScreen = ({ navigation }) => {
    const [cartList, setCartList] = useState([]);

    const { getData } = useAsyncStorage();

    const getTotal = () => {
        let totalAmt = 0;
        for (let item of cartList) {
            for (let size of item.sizes) {
                totalAmt += size.price * size.quantity;
            }
        }
        return totalAmt;
    };

    useLayoutEffect(() => {
        (async () => {
            const cartList = await getData('cart');
            setCartList(cartList);
        })();
    });

    return cartList?.length ? (
        <ScrollView contentContainerStyle={styles.container}>
            {cartList.map((item, idx) => (
                <CartItem data={item} key={`${idx} - ${item.name}`} />
            ))}
            <BottomCartPaymentSection
                buttonTitle="Pay"
                handlePress={() =>
                    navigation.navigate('paymentScreen', {
                        totalValue: getTotal().toFixed(2)
                    })
                }
                priceTitle="Total Price"
                price={getTotal().toFixed(2)}
                containerStyle={{
                    bottom: 80,
                    width: '110%',
                    paddingHorizontal: SIZES.size_20
                }}
            />
        </ScrollView>
    ) : (
        <EmptyList title="Cart is Empty" />
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
        paddingHorizontal: SIZES.size_15,
        flexDirection: 'column',
        gap: SIZES.size_20
    }
});
