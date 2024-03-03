import { View } from 'react-native';
import React from 'react';

import PrimaryButton from '../primaryButton/PrimaryButton';
import styles from './customSizePicker.style';

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
                        styles.sizeStyle(activeSize.size === size.size),
                        style
                    ]}
                    title={size.size}
                    handlePress={() => {
                        setActiveSize(size);
                    }}
                    titleStyle={styles.textStyle(activeSize.size === size.size)}
                />
            ))}
        </View>
    );
}
