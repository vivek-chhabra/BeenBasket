import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import BGImageInfo from '../components/common/BGImageInfo/BGImageInfo';
import { StatusBar } from 'expo-status-bar';

export default function CoffeeBeanDetails({ route }) {
    const { data } = route.params;

    const {
        imagelink_portrait,
        roasted,
        special_ingredient,
        average_rating,
        ratings_count,
        prices,
        type,
        ingredients,
        name,
        description
    } = data;

    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent backgroundColor="#62424200" style="light" />
            <BGImageInfo
                data={{
                    imagelink_portrait,
                    roasted,
                    special_ingredient,
                    average_rating,
                    ratings_count,
                    prices,
                    type,
                    ingredients,
                    name,
                    description
                }}
                isFavoriteStyle={false}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex
    }
});
