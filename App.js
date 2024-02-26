import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';

import CustomHeader from './components/common/customHeader/CustomHeader';
import AsyncStorageContext from './context/AsyncStorageContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, icons, images } from './constants';
import TabNavigator from './navigators/TabNavigator';
import DetailsScreen from './screens/DetailsScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
    const [isFontsLoaded, setIsFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
                'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
                'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
                'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
                'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
                'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
                'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
                'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
                'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf')
            });
            setIsFontsLoaded(true);
        }

        loadFonts();
    }, []);

    if (!isFontsLoaded) return;

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: COLORS.primaryBlackHex }}
        >
            <StatusBar style="light" />
            <AsyncStorageContext>
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
                                            paddingHorizontal: 10,
                                            paddingVertical: 6,
                                            borderWidth: 0,
                                            right: 5
                                        }}
                                        style={{
                                            tintColor: null,
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: SIZES.size_10
                                        }}
                                    />
                                )
                            }}
                        />
                        <Stack.Screen
                            name="coffeeBeanDetails"
                            component={DetailsScreen}
                            options={{
                                header: () => (
                                    <CustomHeader
                                        iconLeft={icons.arrowLeft}
                                        iconRight={icons.heart}
                                        containerStyle={{
                                            paddingHorizontal: 10,
                                            paddingVertical: 6,
                                            borderWidth: 0,
                                            right: 5
                                        }}
                                        style={{
                                            tintColor: COLORS.primaryRedHex
                                        }}
                                    />
                                )
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </AsyncStorageContext>
        </SafeAreaView>
    );
}
