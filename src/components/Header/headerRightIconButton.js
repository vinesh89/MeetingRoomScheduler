import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types'

const HeaderRightIconButton = (props) => {
    const {icon, size, onPress} = props;
    return(
        <TouchableOpacity onPress={onPress} style={{padding:10}}>
            <Icon name={icon} size={size} style={{ paddingRight: 10}} {...props} />
        </TouchableOpacity>
    )
}

HeaderRightIconButton.defaultProps = {
    size: 22
}

HeaderRightIconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    onPress: PropTypes.func.isRequired
}

export default HeaderRightIconButton;