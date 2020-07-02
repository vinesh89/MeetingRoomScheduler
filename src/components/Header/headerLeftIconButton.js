import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types'

const HeaderLeftIconButton = (props) => {
    const {icon, color, size, onPress} = props;
    return(
        <TouchableOpacity onPress={onPress} style={{padding:10}}>
            <Icon name={icon} color={color} size={size} />
        </TouchableOpacity>
    )
}

HeaderLeftIconButton.defaltProps = {
    size: 22
}

HeaderLeftIconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    onPress: PropTypes.func.isRequired
}

export default HeaderLeftIconButton;