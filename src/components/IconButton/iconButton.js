import React from 'react';
import { TouchableOpacity } from 'react-native';

const IconButton = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
    )
}

export default IconButton;