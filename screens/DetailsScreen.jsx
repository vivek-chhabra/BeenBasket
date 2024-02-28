import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../constants';
import BGImageInfo from '../components/common/BGImageInfo/BGImageInfo';
import { StatusBar } from 'expo-status-bar';
import CustomSizePicker from '../components/common/customSizePicker/CustomSizePicker';

export default function CoffeeBeanDetails({ route }) {
    const { data } = route.params;

    const [activeSize, setActiveSize] = useState(data.prices[0].size);

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

            <Text style={styles.sizeText}>Sizes</Text>
            <CustomSizePicker
                sizes={prices}
                activeSize={activeSize}
                setActiveSize={setActiveSize}
                containerStyle={{ paddingHorizontal: SIZES.size_15 }}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex
    },
    sizeText: {
        fontSize: SIZES.size_18,
        fontWeight: '600',
        color: COLORS.secondaryLightGreyHex,
        paddingHorizontal: SIZES.size_15,
        marginBottom: SIZES.size_10
    }
});
