import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Pressable,
    FlatList
} from 'react-native';

import CustomCoffeeComponent from '../components/common/customCoffeeComponent/CustomCoffeeComponent';
import PrimaryButton from '../components/common/primaryButton/PrimaryButton';
import { COLORS, SIZES, icons } from '../constants';
import { filterData } from '../utils/utils';
import CoffeeData from '../data/coffeeData';
import BeansData from '../data/beansData';

const HomeScreen = () => {
    const [query, setQuery] = useState('');
    const [categories, setCategories] = useState([]);
    const [coffeeList, setCoffeeList] = useState(CoffeeData);
    const [activeCategory, setActiveCategory] = useState('All');

    const getCategoryData = cate => {
        setActiveCategory(cate);
        filterCoffeeData(cate);
    };

    const handleSearch = () => {
        const coffeeResult = filterData('name', query, coffeeList);
        setCoffeeList(coffeeResult);
    };

    const handleCrossIcon = () => {
        setQuery('');
        getCategoryData('All');
    };

    const filterCoffeeData = category => {
        const filteredCoffeeList =
            category === 'All'
                ? CoffeeData
                : filterData('name', category, CoffeeData);
        setCoffeeList(filteredCoffeeList);
    };

    useEffect(() => {
        const categoriesSet = new Set();
        const cate = CoffeeData.filter(cate => {
            if (categoriesSet.has(cate.name)) {
                return false;
            } else categoriesSet.add(cate.name);
        });
        setCategories(['All', ...categoriesSet]);
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerTitle}>Find the best coffee for you</Text>
            <View style={styles.searchField}>
                <PrimaryButton
                    iconUrl={icons.search}
                    containerStyle={styles.iconStyle}
                    titleStyle={[
                        query && { tintColor: COLORS.primaryOrangeHex },
                        { width: 20, height: 20 }
                    ]}
                    handlePress={handleSearch}
                />
                <TextInput
                    placeholder="Find Your Coffee..."
                    placeholderTextColor={COLORS.secondaryLightGreyHex}
                    style={[
                        styles.input,
                        query && { color: COLORS.primaryOrangeHex }
                    ]}
                    cursorColor={COLORS.secondaryLightGreyHex}
                    onChangeText={text => setQuery(text)}
                    value={query}
                />
                <PrimaryButton
                    iconUrl={icons.cross}
                    containerStyle={[
                        styles.iconStyle,
                        {
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            borderTopRightRadius: SIZES.size_15,
                            borderBottomRightRadius: SIZES.size_15
                        }
                    ]}
                    titleStyle={[
                        !query && { tintColor: COLORS.secondaryDarkGreyHex },
                        { width: 15, height: 15 }
                    ]}
                    handlePress={!query || handleCrossIcon}
                />
            </View>
            <ScrollView
                contentContainerStyle={styles.categoryStyle}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {categories.map((cate, idx) => (
                    <Pressable
                        key={`${cate} ${idx}`}
                        onPress={() => getCategoryData(cate)}
                        style={{ height: 30 }}
                    >
                        <Text
                            style={[
                                styles.cateStyle,
                                activeCategory === cate && {
                                    color: COLORS.primaryOrangeHex
                                }
                            ]}
                        >
                            {cate}
                        </Text>
                        <View
                            style={[
                                styles.dot,
                                activeCategory === cate && {
                                    backgroundColor: COLORS.primaryOrangeHex
                                }
                            ]}
                        ></View>
                    </Pressable>
                ))}
            </ScrollView>

            {coffeeList.length ? (
                <FlatList
                    data={coffeeList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <CustomCoffeeComponent data={item} />
                    )}
                    contentContainerStyle={styles.coffeeContainerStyle}
                />
            ) : (
                <Text style={styles.noCoffee}>No Coffee Found...</Text>
            )}

            <Text style={styles.beanHeaderStyle}>Coffee Beans</Text>
            <FlatList
                data={BeansData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CustomCoffeeComponent data={item} />}
                contentContainerStyle={styles.beansContainerStyle}
            />
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex
    },
    headerTitle: {
        color: COLORS.primaryWhiteHex,
        fontWeight: 'bold',
        fontSize: SIZES.size_30,
        width: 300,
        fontFamily: 'Poppins-Bold',
        paddingHorizontal: SIZES.size_20
    },
    searchField: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        marginTop: SIZES.size_18,
        marginLeft: 20,
        paddingHorizontal: SIZES.size_20,
        alignSelf: 'flex-end'
    },
    input: {
        backgroundColor: COLORS.secondaryDarkGreyHex,
        color: COLORS.secondaryLightGreyHex,
        height: '100%',
        flex: 1,
        paddingLeft: SIZES.size_4
    },
    iconStyle: {
        backgroundColor: COLORS.secondaryDarkGreyHex,
        height: 45,
        width: 45,
        borderTopLeftRadius: SIZES.size_15,
        borderBottomLeftRadius: SIZES.size_15
    },
    categoryStyle: {
        flexDirection: 'row',
        marginTop: SIZES.size_18,
        paddingLeft: SIZES.size_20,
        gap: SIZES.size_20,
        height: SIZES.size_30,
        paddingRight: SIZES.size_20
    },
    cateStyle: {
        color: COLORS.primaryLightGreyHex,
        fontWeight: 'bold'
    },
    dot: {
        width: SIZES.size_8 - 1,
        height: SIZES.size_8 - 1,
        borderRadius: SIZES.size_15,
        backgroundColor: COLORS.primaryLightGreyHex,
        alignSelf: 'center',
        marginTop: SIZES.size_4
    },
    coffeeContainerStyle: {
        flexDirection: 'row',
        marginTop: SIZES.size_12,
        paddingHorizontal: 5
    },
    beansContainerStyle: {
        marginBottom: 85,
        paddingHorizontal: 5
    },
    beanHeaderStyle: {
        color: COLORS.primaryWhiteHex,
        fontWeight: '500',
        fontSize: SIZES.size_20,
        paddingHorizontal: SIZES.size_20,
        marginTop: SIZES.size_10
    },
    noCoffee: {
        paddingVertical: 10,
        textAlign: 'center',
        color: COLORS.secondaryLightGreyHex + '80',
        fontWeight: '600',
        borderRadius: SIZES.size_15,
        fontSize: SIZES.size_16,
        marginHorizontal: 20,
        marginVertical: SIZES.size_36 + 40
    }
});
