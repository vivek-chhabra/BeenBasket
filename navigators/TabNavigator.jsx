import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import React from 'react';

import PrimaryButton from '../components/common/primaryButton/PrimaryButton';
import CustomHeader from '../components/common/customHeader/CustomHeader';
import { COLORS, SIZES, icons, images } from '../constants';
import FavoriteScreen from '../screens/FavoriteScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

const BottomTab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
    const activeTitleStyle = focused =>
        focused && { tintColor: COLORS.primaryOrangeHex };

    const renderTabs = (navigate, focused, icon) => {
        return (
            <PrimaryButton
                iconUrl={icons[icon]}
                activeTitleStyle={activeTitleStyle(focused)}
                containerStyle={styles.titleContainerStyle}
                handlePress={() => navigation.navigate(navigate)}
            />
        );
    };

    return (
        <BottomTab.Navigator
            screenOptions={{
                header: ({ route }) => (
                    <CustomHeader
                        iconLeft={icons.menu}
                        iconRight={images.profile}
                        containerStyle={{
                            paddingHorizontal: SIZES.size_20,
                            paddingVertical: SIZES.size_15,
                            borderWidth: 0,
                            backgroundColor: COLORS.primaryBlackHex
                        }}
                        headerTitle={
                            route.params.screenName === 'Home'
                                ? ''
                                : route.params.screenName
                        }
                        style={{
                            tintColor: null,
                            width: '100%',
                            height: '100%',
                            borderRadius: SIZES.size_10
                        }}
                        enableGoBackBtn={false}
                    />
                ),
                tabBarHideOnKeyboard: true,
                tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: { display: 'none' },
                tabBarBackground: () => (
                    <BlurView
                        intensity={30}
                        tint="dark"
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            overflow: 'hidden',
                            backgroundColor: 'transparent'
                        }}
                    />
                )
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        renderTabs('Home', focused, 'home')
                }}
                initialParams={{ screenName: 'Home' }}
            />
            <BottomTab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        renderTabs('Cart', focused, 'cart')
                }}
                initialParams={{ screenName: 'Cart' }}
            />
            <BottomTab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    headerTitle: 'Favorites',
                    tabBarIcon: ({ focused }) =>
                        renderTabs('Favorite', focused, 'heart')
                }}
                initialParams={{ screenName: 'Favorite' }}
            />
        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        backgroundColor: COLORS.primaryBlackRGBA,
        position: 'absolute',
        borderTopWidth: 0,
        elevation: 0
    },
    blurViewStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});

export default TabNavigator;
