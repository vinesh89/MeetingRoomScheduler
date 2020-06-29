import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../Theme/index';

const HeaderTitle = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default HeaderTitle;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:"center",
    },
    title: {
        textAlign:"center",
        fontSize: Fonts.headerTitle.fontSize,
        fontWeight: Fonts.headerTitle.fontWeight
    }
});