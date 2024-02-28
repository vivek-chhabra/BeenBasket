import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SIZES.size_10
    },
    containerStyle: {
        width: SIZES.size_36,
        height: SIZES.size_36,
        borderWidth: 1,
        borderColor: COLORS.secondaryDarkGreyHex,
        borderRadius: SIZES.size_10
    },
    iconStyle: {
        width: '50%',
        height: '50%'
    }
});

export default styles;
