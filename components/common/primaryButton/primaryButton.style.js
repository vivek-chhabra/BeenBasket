import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: COLORS.primaryLightGreyHex,
        borderRadius: SIZES.size_8,
        backgroundColor: COLORS.primaryOrangeHex,
        height: SIZES.size_36 + 4,
        width: 100,
    },
    title: {
        color: COLORS.primaryWhiteHex,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: SIZES.size_12
    },
    iconContainer: {
        width: SIZES.size_28,
        height: SIZES.size_28,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        width: SIZES.size_24,
        height: SIZES.size_24,
        tintColor: COLORS.primaryLightGreyHex
    }
});

export default styles;
