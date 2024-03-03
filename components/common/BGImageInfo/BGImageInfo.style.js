import { COLORS, SIZES } from '../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1
    },
    BGImageContainer: isFavoriteStyle => ({
        width: '100%',
        aspectRatio: 20 / 25,
        borderBottomRightRadius: !isFavoriteStyle ? SIZES.size_24 : 0,
        borderBottomLeftRadius: !isFavoriteStyle ? SIZES.size_24 : 0,
        borderTopLeftRadius: isFavoriteStyle ? SIZES.size_24 : 0,
        borderTopRightRadius: isFavoriteStyle ? SIZES.size_24 : 0,
        overflow: 'hidden'
    }),
    headerContainer: {
        position: 'absolute',
        top: 10,
        right: 0
    },

    // bottom image content
    imgBottomContent: isFavoriteStyle => ({
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        paddingHorizontal: SIZES.size_20,
        paddingVertical: SIZES.size_18,
        borderRadius: SIZES.size_24,
        backgroundColor: 'transparent',
        borderBottomRightRadius: isFavoriteStyle ? 0 : SIZES.size_24,
        borderBottomLeftRadius: isFavoriteStyle ? 0 : SIZES.size_24
    }),
    bottomLeft: {
        gap: SIZES.size_30,
        justifyContent: 'center'
    },
    coffeeBeanTitle: {
        fontWeight: '800',
        fontSize: SIZES.size_24 - 2,
        color: COLORS.primaryWhiteHex
    },
    specialIng: {
        fontSize: SIZES.size_12 + 1,
        color: COLORS.secondaryLightGreyHex,
        fontWeight: 'bold'
    },
    ratingsContainer: {
        flexDirection: 'row',
        gap: SIZES.size_8 - 2,
        alignItems: 'center'
    },
    star: {
        width: SIZES.size_15,
        height: SIZES.size_15,
        tintColor: COLORS.primaryOrangeHex
    },
    rating: {
        fontWeight: '800',
        fontSize: SIZES.size_16,
        color: COLORS.primaryWhiteHex
    },
    ratingCount: {
        color: COLORS.secondaryLightGreyHex,
        fontSize: SIZES.size_12,
        fontWeight: 'bold'
    },
    roastedContainer: {
        borderRadius: SIZES.size_10,
        width: 125,
    },
    roasted: {
        color: COLORS.primaryWhiteHex,
        fontSize: SIZES.size_12,
        fontWeight: '500',
        textAlign: 'center'
    },
    typeContainerStyle: {
        width: 55,
        height: 55,
        borderRadius: SIZES.size_10,
        padding: 0,
        justifyContent: 'center',
    },
    typeImgStyle: {
        width: SIZES.size_20,
        height: SIZES.size_20,
        alignSelf: 'center',
        tintColor: COLORS.primaryOrangeHex,
        bottom: 2
    },
    typeImgText: {
        alignSelf: 'center',
        color: COLORS.primaryWhiteHex,
        fontSize: 10,
        fontWeight: '600',
        letterSpacing: 1
    },
    bottomRight: {
        gap: 20
    },

    // description style
    descriptionContainer: isFavoriteStyle => ({
        gap: SIZES.size_10,
        borderTopRightRadius: isFavoriteStyle ? 0 : SIZES.size_24,
        borderTopLeftRadius: isFavoriteStyle ? 0 : SIZES.size_24,
    }),
    descriptionTitle: {
        color: COLORS.secondaryLightGreyHex,
        fontWeight: 'bold',
        fontSize: SIZES.size_16 + 1
    },
    descriptionText: toggleDescription => ({
        color: COLORS.secondaryLightGreyHex,
        fontSize: SIZES.size_15 - 1,
    }),
    readMore: {
        padding: SIZES.size_20,
        fontWeight: '600',
        fontSize: SIZES.size_15 - 1,
        color: COLORS.primaryOrangeHex,
        letterSpacing: 1
    }
});

export default styles;
