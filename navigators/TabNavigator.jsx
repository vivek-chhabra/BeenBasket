import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import { COLORS, SIZES, icons, images } from '../constants';
import { BlurView } from 'expo-blur';
import PrimaryButton from '../components/common/primaryButton/PrimaryButton';

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
                titleStyle={styles.titleStyle}
            />
        );
    };

    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: { display: 'none' },
                // tabBarBackground: () => (
                //     <BlurView
                //         intensity={10}
                //         style={{
                //             ...StyleSheet.absoluteFillObject,
                //             overflow: 'hidden',
                //             backgroundColor: 'transparent',
                //         }}
                //     />
                // ) 
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, focused, size }) =>
                        renderTabs('Home', focused, 'home')
                }}
            />
            <BottomTab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ color, focused, size }) =>
                        renderTabs('Cart', focused, 'cart')
                }}
            />
            <BottomTab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ color, focused, size }) =>
                        renderTabs('Favorite', focused, 'heart')
                }}
            />
            <BottomTab.Screen
                name="OrderHistory"
                component={OrderHistoryScreen}
                options={{
                    tabBarIcon: ({ color, focused, size }) =>
                        renderTabs('OrderHistory', focused, 'bell')
                }}
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
        elevation: 0,
        borderTopColor: 'transparent'
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