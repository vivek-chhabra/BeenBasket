import { View, Text } from 'react-native';
import React from 'react';

import styles from './customSizePicker.style';
import { SIZES } from '../../../constants';
import PrimaryButton from '../primaryButton/PrimaryButton';

export default function CustomSizePicker({
    sizes,
    containerStyle,
    style,
    activeSize,
    setActiveSize
}) {
    return (
        <View style={[styles.container, containerStyle]}>
            {sizes.map((size, idx) => (
                <PrimaryButton
                    key={`${size.size} - ${idx}`}
                    containerStyle={[
                        styles.sizeStyle(activeSize === size.size),
                        style
                    ]}
                    title={size.size}
                    handlePress={() => setActiveSize(size.size)}
                    titleStyle={styles.textStyle(activeSize === size.size)}
                />
            ))}
        </View>
    );
}
