import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';

import GradientStyleContainer from '../gradientStyleContainer/GradientStyleContainer';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useAsyncStorage } from '../../../context/AsyncStorageContext';
import { COLORS, SIZES, icons } from '../../../constants';
import CustomHeader from '../customHeader/CustomHeader';
import styles from './BGImageInfo.style';
import { BlurView } from 'expo-blur';
import {
    filterData,
    isPresentInArray,
    truncateText
} from '../../../utils/utils';

export default function BGImageInfo({
    data,
    isLeftIconDisabled = false,
    containerStyle,
    isFavoriteStyle = false,
    doNavigate = false
}) {
    const [toggleDescription, setToggleDescription] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    const { setData, getData } = useAsyncStorage();
    const navigation = useNavigation();

    const {
        imagelink_portrait,
        roasted,
        special_ingredient,
        average_rating,
        ratings_count,
        type,
        ingredients,
        name,
        description
    } = data;
    const isCoffee = type === 'Coffee';

    const checkFav = async () => {
        const favList = (await getData('favorite')) || [];
        setIsFavorite(isPresentInArray(data, favList));
    };

    const addToFavorite = async () => {
        await setData('favorite', data);
        checkFav();
    };

    const handleNavigate = () => {
        navigation.navigate('coffeeBeanDetails', { data });
    };

    useLayoutEffect(
        React.useCallback(() => {
            checkFav();
        }, [])
    );

    return (
        <ScrollView
            style={[styles.container, containerStyle]}
            showsVerticalScrollIndicator={false}
        >
            <Pressable
                style={styles.BGImageContainer(isFavoriteStyle)}
                onPress={doNavigate ? handleNavigate : null}
            >
                <Image
                    source={imagelink_portrait}
                    resizeMode="cover"
                    resizeMethod="center"
                    style={[
                        styles.BGImage,
                        isFavoriteStyle && { aspectRatio: 20 / 30 }
                    ]}
                />
                <CustomHeader
                    iconLeft={icons.arrowLeft}
                    iconRight={icons.heart}
                    style={isFavorite && { tintColor: COLORS.primaryRedHex }}
                    containerStyle={[
                        styles.headerContainer,
                        { paddingHorizontal: SIZES.size_18 }
                    ]}
                    isLeftIconDisabled={isLeftIconDisabled}
                    handleRight={addToFavorite}
                />
                <BlurView
                    style={styles.imgBottomContent(isFavoriteStyle)}
                    intensity={50}
                    tint="dark"
                >
                    <View style={styles.bottomLeft}>
                        <View style={styles.coffeeBeanContainer}>
                            <Text style={styles.coffeeBeanTitle}>{name}</Text>
                            <Text style={styles.specialIng}>
                                {special_ingredient}
                            </Text>
                        </View>
                        <View style={styles.ratingsContainer}>
                            <Image
                                source={icons.star}
                                resizeMode="contain"
                                style={styles.star}
                            />
                            <Text style={styles.rating}>{average_rating}</Text>
                            <Text style={styles.ratingCount}>
                                ({ratings_count})
                            </Text>
                        </View>
                    </View>
                    <View style={{ gap: SIZES.size_12 + 2 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                gap: SIZES.size_15
                            }}
                        >
                            <GradientStyleContainer
                                containerStyle={styles.typeContainerStyle}
                                contentContainer={
                                    <View style={styles.type}>
                                        <Image
                                            source={
                                                isCoffee
                                                    ? icons.beans
                                                    : icons.bean
                                            }
                                            style={{
                                                width: isCoffee
                                                    ? SIZES.size_30
                                                    : SIZES.size_24 - 3,
                                                height: isCoffee
                                                    ? SIZES.size_30
                                                    : SIZES.size_24 - 3,
                                                alignSelf: 'center',
                                                tintColor:
                                                    COLORS.primaryOrangeHex
                                            }}
                                            resizeMode="contain"
                                        />
                                        <Text
                                            style={[
                                                styles.typeImgText,
                                                { bottom: isCoffee && 4 }
                                            ]}
                                        >
                                            {type}
                                        </Text>
                                    </View>
                                }
                            />
                            <GradientStyleContainer
                                containerStyle={styles.typeContainerStyle}
                                contentContainer={
                                    <>
                                        <Image
                                            source={
                                                isCoffee
                                                    ? icons.drop
                                                    : icons.navigation
                                            }
                                            style={styles.typeImgStyle}
                                            resizeMode="contain"
                                        />
                                        <Text style={[styles.typeImgText]}>
                                            {ingredients}
                                        </Text>
                                    </>
                                }
                            />
                        </View>
                        <GradientStyleContainer
                            containerStyle={styles.roastedContainer}
                            contentContainer={
                                <Text style={styles.roasted}>{roasted}</Text>
                            }
                        />
                    </View>
                </BlurView>
            </Pressable>
            <GradientStyleContainer
                showBackground={isFavoriteStyle}
                contentContainer={
                    <>
                        <Text style={styles.descriptionTitle}>Description</Text>
                        <Text style={styles.descriptionText(toggleDescription)}>
                            <Text>
                                {toggleDescription
                                    ? truncateText(
                                          description,
                                          isFavoriteStyle ? 250 : 280,
                                          false
                                      )
                                    : description}{' '}
                            </Text>
                            <Text
                                onPress={() =>
                                    setToggleDescription(!toggleDescription)
                                }
                                style={styles.readMore}
                            >
                                ...
                                {toggleDescription ? 'Read More' : 'Read Less'}
                            </Text>
                        </Text>
                    </>
                }
                containerStyle={styles.descriptionContainer(
                    isFavoriteStyle,
                    toggleDescription
                )}
            />
        </ScrollView>
    );
}
