import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

export default function CoffeeBeanDetails({ route }) {
    const { data } = route.params;

    const {
        imagelink_portrait,
        roasted,
        special_ingredients,
        average_rating,
        ratings_count,
        prices,
        type,
        ingredients
    } = data;

    return (
        <ScrollView style={styles.container}>
            <Image source={imagelink_portrait} resizeMode='contain' style={styles.portrait}/>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex
    }
});
