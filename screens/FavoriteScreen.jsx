import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { COLORS, SIZES, icons, images } from '../constants';
import React, { useState } from 'react';
import BGImageInfo from '../components/common/BGImageInfo/BGImageInfo';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useAsyncStorage } from '../context/AsyncStorageContext';

const FavoriteScreen = () => {
    const [favoriteList, setFavoriteList] = useState([]);

    const { getData } = useAsyncStorage();

    const getFavList = async () => {
        const favList = await getData('favorite');
        setFavoriteList(favList);
    };

    useFocusEffect(
        React.useCallback(() => {
            getFavList();
        }, [])
    );

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsHorizontalScrollIndicator={false}
        >
            {favoriteList.map((favItem, idx) => (
                <BGImageInfo
                    data={favItem}
                    isLeftIconDisabled={true}
                    isFavoriteStyle={true}
                    key={`${idx} - ${favItem.description}`}
                    doNavigate={true}
                />
            ))}
        </ScrollView>
    );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primaryBlackHex,
        paddingHorizontal: SIZES.size_15,
        paddingBottom: 100,
        gap: SIZES.size_20
    }
});
