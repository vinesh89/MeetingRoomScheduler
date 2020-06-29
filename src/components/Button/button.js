import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Theme, Fonts, Colors } from '../Theme/index';

const Button = (props) => {
    const { title, onPress } = props;
    return(
        <TouchableOpacity onPress={onPress} style={props.style}>
            <View style={props.style} {...props}>
                <Text style={styles.buttonTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonTitle: {
        color: Colors.white,
        fontWeight: Fonts.headerTitle.fontWeight,
        fontSize: Fonts.headerTitle.fontSize,
    }
})

export default Button;