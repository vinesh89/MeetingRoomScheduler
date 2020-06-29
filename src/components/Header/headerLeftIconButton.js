import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HeaderLeftIconButton = (props) => {
    const {icon, color, size, onPress} = props;
    return(
        <TouchableOpacity onPress={onPress} style={{padding:10}}>
            <Icon name={icon} color={color} size={size} />
        </TouchableOpacity>
    )
}

export default HeaderLeftIconButton;