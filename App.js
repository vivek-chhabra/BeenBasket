import React, { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View, Modal, Image } from "react-native";
import CustomBtn from "./components/CustomBtn";
import { StatusBar } from "expo-status-bar";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.one}>vivek</Text>
            <Text style={styles.two}>vivek</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        textAlign: 'center'
    },
    one: {
        width: 200,
        backgroundColor: 'red',
        textAlign: 'center'
    },
    two: {
        width: 200,
        backgroundColor: 'red',
        textAlign: 'center'
    },
});
