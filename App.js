import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image, ScrollView, Text } from 'react-native';
import React from 'react';

import TabNavigator from './navigators/TabNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, icons, images } from './constants';
import CustomHeader from './components/common/customHeader/CustomHeader';
import profile from './assets/favicon.png';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: COLORS.primaryBlackHex }}
        >
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Tabs"
                        component={TabNavigator}
                        options={{
                            header: () => (
                                <CustomHeader
                                    iconLeft={icons.menu}
                                    iconRight={images.profile}
                                    containerStyle={{
                                        paddingHorizontal: 15,
                                        paddingVertical: 10,
                                        borderWidth: 0,
                                        right: 5
                                    }}
                                    style={{ tintColor: null, borderRadius: 9 }}
                                />
                            )
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
