import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from '../constants';

const CartScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primaryBlackHex}}>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
