import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image, ScrollView } from 'react-native';
import React from 'react';

import TabNavigator from './navigators/TabNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './constants';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Tabs"
                        component={TabNavigator}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
