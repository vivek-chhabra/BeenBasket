import { Text, View } from 'react-native';
import React from 'react';

import LottieView from 'lottie-react-native';
import styles from './emptyList.style';

const EmptyList = ({ title }) => {
    return (
        <View style={styles.EmptyCartContainer}>
            <LottieView
                style={styles.LottieStyle}
                source={require('../../../assets/lottie/coffeecup.json')}
                autoPlay
                loop
            />
            <Text style={styles.LottieText}>{title}</Text>
        </View>
    );
};

export default EmptyList;
