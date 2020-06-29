import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HeaderRightIconButton = (props) => {
    const {icon, color, size, onPress} = props;
    return(
        <TouchableOpacity onPress={onPress} style={{padding:10}}>
            <Icon name={icon} size={size} style={{ paddingRight: 10}}/>
        </TouchableOpacity>
    )
}

export default HeaderRightIconButton;