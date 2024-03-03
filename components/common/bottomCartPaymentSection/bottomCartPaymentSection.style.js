import { COLORS, SIZES } from '../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.primaryBlackHex,
        paddingHorizontal: SIZES.size_15
    },
    priceContainer: {
        flexDirection: 'column',
        textAlign: 'center'
    },
    priceTitleText: {
        fontSize: SIZES.size_15,
        fontWeight: '600',
        marginBottom: SIZES.size_8,
        color: COLORS.primaryLightGreyHex,
    },
    priceAmt: {
        fontWeight: '800',
        fontSize: SIZES.size_24 - 1,
        color: COLORS.secondaryLightGreyHex,
    },
    buttonContainer: {
        width: 240,
        height: 60,
        borderRadius: SIZES.size_20,
        backgroundColor: COLORS.primaryOrangeHex,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTitle: {
        fontSize: SIZES.size_20,
        fontWeight: '700',
        letterSpacing: 1
    }
});

export default styles;
