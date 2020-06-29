import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const NetworkStatus = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.Text}>
                You are currently offline,
            </Text>
            <Text style={styles.Text}>
                Please check your network connection and try again later.
            </Text>
        </View>
    )
}

export const NetworkError = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Failed to get data, please check your network connection and try again.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center'
    }
});