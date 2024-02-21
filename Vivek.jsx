import { View, Text, Image } from "react-native";
import React from "react";

export default function Vivek({image}) {
  return (
    <View>
      <Image source={image} resizeMode='contain' width={50} height={50}/>
    </View>
  );
}
