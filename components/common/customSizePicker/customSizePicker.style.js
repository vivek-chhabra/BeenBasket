import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sizeStyle: selected => ({
        width: 100,
        height: 40,
        borderRadius: SIZES.size_10,
        backgroundColor: COLORS.primaryDarkGreyHex,
        borderWidth: 1,
        borderColor: selected
            ? COLORS.primaryOrangeHex
            : COLORS.primaryDarkGreyHex,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    textStyle: selected => ({
        fontSize: SIZES.size_16,
        fontWeight: '600',
        color: selected ? COLORS.primaryOrangeHex : COLORS.secondaryLightGreyHex
    })
});

export default styles;
