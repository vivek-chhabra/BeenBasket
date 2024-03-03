import { COLORS, SIZES } from '../../../constants';
import { StyleSheet } from 'react-native';

const common = {
    height: 40,
    paddingHorizontal: SIZES.size_15,
    backgroundColor: COLORS.primaryBlackHex,
    borderRadius: SIZES.size_10,
    justifyContent: 'center',
    alignItems: 'center'
};

const styles = StyleSheet.create({
    container: {
        padding: SIZES.size_15,
        borderRadius: SIZES.size_24,
        gap: SIZES.size_12,
        borderWidth: 1,
        borderColor: COLORS.primaryGreyHex,
        borderRadius: SIZES.size_24,
    },
    topContainer: {
        flexDirection: 'row',
        gap: SIZES.size_24,
        height: 110
    },
    imgStyle: {
        width: 110,
        height: '100%',
        borderRadius: SIZES.size_12
    },
    contentInfo: {
        height: '100%',
        justifyContent: 'space-around',
        flex: 1
    },
    headerTitle: {
        fontSize: SIZES.size_20,
        color: COLORS.secondaryLightGreyHex,
        fontWeight: '600'
    },
    ingredients: {
        fontSize: SIZES.size_12 + 2,
        color: COLORS.primaryLightGreyHex
    },
    roasted: {
        ...common,
        alignSelf: 'flex-start'
    },
    bottomContainer: {
        gap: SIZES.size_8
    },
    sizeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        alignItems: 'center'
    },
    size: {
        ...common,
        backgroundColor: COLORS.primaryBlackHex,
        minWidth: 80,
        height: '95%',
    },
    sizeAmt: {
        fontWeight: '600',
        fontSize: SIZES.size_20,
        color: COLORS.primaryWhiteHex,
        letterSpacing: 2
    },
    setQtyContainer: {
        height: 40,
        flexDirection: 'row',
        gap: SIZES.size_15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnStyle: {
        backgroundColor: COLORS.primaryOrangeHex,
        borderRadius: SIZES.size_8,
        width: 30,
        height: 30
    },
    icon: {
        width: '45%',
        height: '45%',
        tintColor: COLORS.primaryWhiteHex
    },
    quantity: {
        ...common,
        minWidth: 60,
        height: '100%',
        borderWidth: 1,
        borderColor: COLORS.primaryOrangeHex
    }
});

export default styles;
