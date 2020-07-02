import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../Theme/index';
import PropTypes from 'prop-types';

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

HeaderTitle.propTypes = {
    title: PropTypes.string.isRequired
}