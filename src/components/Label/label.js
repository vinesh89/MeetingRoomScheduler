import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Label = (props) => {
    return(
        <Text {...props}>{props.children}</Text>
    )
}

export default Label;
