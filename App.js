import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import CustomHeader from './components/common/customHeader/CustomHeader';
import AsyncStorageContext from './context/AsyncStorageContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, icons, images } from './constants';
import TabNavigator from './navigators/TabNavigator';
import DetailsScreen from './screens/DetailsScreen';
import { StatusBar } from 'expo-status-bar';
import PaymentsScreen from './screens/PaymentsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: COLORS.primaryBlackHex }}
        >
            <StatusBar style="light" backgroundColor={COLORS.primaryBlackHex} />
            <AsyncStorageContext>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Tabs"
                            component={TabNavigator}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="coffeeBeanDetails"
                            component={DetailsScreen}
                            options={{
                                headerShown: false,
                                animation: 'slide_from_right'
                            }}
                        />
                        <Stack.Screen
                            name="paymentScreen"
                            component={PaymentsScreen}
                            options={{
                                header: ({ navigation, route }) => (
                                    <CustomHeader
                                        iconLeft={icons.arrowLeft}
                                        containerStyle={{
                                            paddingHorizontal: SIZES.size_20,
                                            paddingVertical: SIZES.size_15,
                                            borderWidth: 0,
                                            backgroundColor:
                                                COLORS.primaryBlackHex
                                        }}
                                        isRightIconDisabled={true}
                                        headerTitle={'Payment'}
                                        style={{
                                            tintColor: null,
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: SIZES.size_10
                                        }}
                                        enableGoBackBtn={true}
                                    />
                                ),
                                animation: 'slide_from_bottom'
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </AsyncStorageContext>
        </SafeAreaView>
    );
}
