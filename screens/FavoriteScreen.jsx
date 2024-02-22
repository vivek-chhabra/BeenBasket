import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const FavoriteScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primaryBlackHex }}>
            <Text>FavoriteScreen</Text>
        </View>
    );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
