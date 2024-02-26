import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        width: 165,
        height: 245,
        gap: SIZES.size_4
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
        backgroundColor: COLORS.secondaryDarkGreyHex,
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
    successIconStyle: {
        width: '190%',
        height: '190%',
        tintColor: COLORS.primarySuccessGreenHex
    },
    contentStyle: {
        color: COLORS.secondaryLightGreyHex,
        fontSize: SIZES.size_16,
        fontWeight: '600',
        marginTop: SIZES.size_4
    },
    specialIng: {
        color: COLORS.primaryLightGreyHex,
        fontSize: SIZES.size_12,
        flexWrap: 'wrap'
    },
    priceStyle: {
        color: COLORS.primaryOrangeHex,
        fontWeight: '900',
        fontSize: SIZES.size_16,
        borderWidth: 1,
        borderColor: COLORS.secondaryGreyHex,
        flex: 1,
        padding: 5,
        borderRadius: SIZES.size_10,
        paddingLeft: SIZES.size_10,
        opacity: 0.8,
    },
    ratings: {
        flexDirection: 'row',
        gap: SIZES.size_8,
        position: 'absolute',
        top: 0,
        right: 0,
        paddingHorizontal: SIZES.size_12,
        paddingVertical: SIZES.size_4,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 65,
        backgroundColor: '#000000b1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    starStyle: {
        width: 10,
        height: 10,
        tintColor: COLORS.primaryOrangeHex
    },
    averageRatings: {
        color: COLORS.primaryWhiteHex,
        fontWeight: '900',
        fontSize: SIZES.size_12
    },
});

export default styles;
