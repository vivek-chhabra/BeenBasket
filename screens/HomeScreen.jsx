import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Find the best coffee for you</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
        paddingHorizontal: SIZES.size_24
    },
    headerTitle: {
        color: COLORS.primaryWhiteHex,
        fontWeight: 'bold',
        fontSize: SIZES.size_30,
        width: 250,
        maxWidth: 300,
    }
});
