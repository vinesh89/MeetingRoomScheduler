import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {Colors} from '../Theme';

const TextField = (props) => {
    return(
        <View style={styles.container}>
            <Text {...props} style={styles.title}>{props.title}</Text>
            <TextInput 
                {...props}
                style={styles.textField}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
    },
    title: {
        color: Colors.light,
    },
    textField: {
        padding: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    }
});

export default TextField;