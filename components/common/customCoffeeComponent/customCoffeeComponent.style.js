import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 245,
        gap: SIZES.size_8
    },
    image: {
        width: '100%',
        height: 140,
        borderRadius: SIZES.size_15
    },
    bottomPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        top: 5
    },
    iconContainer: {
        backgroundColor: COLORS.primaryOrangeHex,
        borderRadius: SIZES.size_8,
        width: 32,
        height: 32,
        opacity: 0.8
    },
    iconStyle: {
        width: '40%',
        height: '40%',
        tintColor: COLORS.primaryWhiteHex
    },
    priceStyle: {
        color: COLORS.primaryOrangeHex,
        fontWeight: '600',
        fontSize: SIZES.size_18,
        borderWidth: 1,
        borderColor: COLORS.primaryOrangeHex,
        flex: 1,
        padding: 5,
        borderRadius: SIZES.size_10,
        paddingLeft: SIZES.size_10,
        opacity: 0.8
    }
});

export default styles;
