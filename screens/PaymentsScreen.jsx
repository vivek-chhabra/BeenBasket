import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    Dimensions
} from 'react-native';

import BottomCartPaymentSection from '../components/common/bottomCartPaymentSection/BottomCartPaymentSection';
import GradientStyleContainer from '../components/common/gradientStyleContainer/GradientStyleContainer';
import { useAsyncStorage } from '../context/AsyncStorageContext';
import { COLORS, SIZES, icons, images } from '../constants';
import LottieView from 'lottie-react-native';

const height = Dimensions.get('window').height;
const paymentTypes = [
    { name: 'Wallet', url: icons.wallet, balance: '$ 120.50' },
    { name: 'Google Pay', url: images.gPay },
    { name: 'Apple Pay', url: images.applePay },
    { name: 'Amazon Pay', url: images.amazon }
];

const PaymentsScreen = ({ route, navigation }) => {
    const [selectedPayMethod, setSelectedPayMethod] = useState(paymentTypes[0]);
    const [showAnimation, setShowAnimation] = useState(false);

    const { removeKeyData } = useAsyncStorage();
    const { totalValue } = route?.params;

    const renderPaymentType = item => {
        return (
            <>
                <View style={styles.left}>
                    <Image
                        source={item.url}
                        style={[
                            styles.imgStyle,
                            item.name === 'Wallet' && {
                                tintColor: COLORS.primaryOrangeHex
                            }
                        ]}
                    />
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <Text style={styles.bal}>
                    {item.balance ? item.balance : ''}
                </Text>
            </>
        );
    };

    const proceedToPay = async () => {
        await removeKeyData('cart');
        setShowAnimation(true);
        setTimeout(() => {
            setShowAnimation(false);
            navigation.navigate('Tabs', { screen: 'Home' });
        }, 1200);
    };

    return (
        <>
            {showAnimation && (
                <View style={styles.lotteAnimationContainer}>
                    <LottieView
                        source={require('../assets/lottie/successful.json')}
                        autoPlay
                        loop={false}
                        style={styles.animationStyle}
                    />
                </View>
            )}
            <View style={styles.container}>
                <Image
                    source={images.card}
                    style={styles.card}
                    resizeMode="contain"
                />
                {paymentTypes.map((item, idx) => (
                    <Pressable
                        onPress={() => setSelectedPayMethod(item)}
                        style={{
                            borderWidth: 1,
                            borderColor: 'transparent'
                        }}
                        key={idx}
                    >
                        <GradientStyleContainer
                            key={idx}
                            containerStyle={styles.paymentRow(
                                item.name === selectedPayMethod.name
                            )}
                            contentContainer={renderPaymentType(item)}
                        />
                    </Pressable>
                ))}
                <BottomCartPaymentSection
                    buttonTitle={`Pay ${
                        selectedPayMethod.name === 'Wallet' ? 'from' : 'with'
                    } ${selectedPayMethod.name}`}
                    price={totalValue}
                    F
                    priceTitle="Price"
                    handlePress={proceedToPay}
                    containerStyle={{ right: 20, gap: 30 }}
                />
            </View>
        </>
    );
};

export default PaymentsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: SIZES.size_15,
        backgroundColor: COLORS.primaryBlackHex,
        paddingHorizontal: SIZES.size_18
    },
    paymentRow: currentMethod => ({
        padding: SIZES.size_15,
        paddingHorizontal: SIZES.size_20,
        width: '100%',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: currentMethod
            ? COLORS.primaryOrangeHex
            : COLORS.primaryGreyHex,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }),
    left: {
        flexDirection: 'row',
        gap: SIZES.size_10,
        alignItems: 'center'
    },
    imgStyle: {
        height: SIZES.size_24,
        width: SIZES.size_24,
        borderRadius: SIZES.size_4
    },
    title: {
        fontWeight: '700',
        color: COLORS.primaryWhiteHex,
        fontSize: SIZES.size_16
    },
    bal: {
        color: COLORS.primaryWhiteHex,
        fontWeight: '600'
    },
    card: {
        width: '100%',
        height: 220
    },
    lotteAnimationContainer: {
        flex: 1,
        height: height,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: COLORS.secondaryBlackRGBA2,
        justifyContent: 'center',
        bottom: 500
    },
    animationStyle: {
        flex: 1,
        bottom: 50
    }
});
