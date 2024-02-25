import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants';
import React from 'react';

const FavoriteScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primaryBlackHex }}>
            <Text>FavoriteScreen</Text>
        </View>
    );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
