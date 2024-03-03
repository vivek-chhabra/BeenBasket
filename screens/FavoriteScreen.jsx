import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import BGImageInfo from '../components/common/BGImageInfo/BGImageInfo';
import EmptyList from '../components/common/emptyList/EmptyList';
import { useAsyncStorage } from '../context/AsyncStorageContext';
import { COLORS, SIZES } from '../constants';

const FavoriteScreen = () => {
    const [favoriteList, setFavoriteList] = useState([]);

    const { getData } = useAsyncStorage();

    const getFavList = async () => {
        const favList = (await getData('favorite')) || [];
        setFavoriteList(favList);
    };

    useLayoutEffect(
        React.useCallback(() => {
            getFavList();
        }, [])
    );

    return (
        <ScrollView
            contentContainerStyle={styles.container(!favoriteList.length)}
            showsHorizontalScrollIndicator={false}
        >
            {favoriteList.length ? (
                favoriteList.map((favItem, idx) => (
                    <BGImageInfo
                        data={favItem}
                        isLeftIconDisabled={true}
                        isFavoriteStyle={true}
                        key={`${idx} - ${favItem.description}`}
                        doNavigate={true}
                    />
                ))
            ) : (
                <EmptyList title="oh! Looks like your favorites list is feeling a bit lonely..." />
            )}
        </ScrollView>
    );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
    container: isListEmpty => ({
        backgroundColor: COLORS.primaryBlackHex,
        paddingHorizontal: SIZES.size_15,
        paddingBottom: 100,
        gap: SIZES.size_20,
        flex: isListEmpty ? 1 : null
    })
});
