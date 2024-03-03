import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    EmptyCartContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.primaryBlackHex
    },
    LottieStyle: {
        height: 300
    },
    LottieText: {
        fontSize: SIZES.size_18,
        color: '#ffc08fb9',
        textAlign: 'center',
        width: 300,
        alignSelf: 'center',
        marginBottom: 100,
        fontWeight: '700'
    }
});

export default styles;
