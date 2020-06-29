import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HardwareBackButtonHandler = (props) => {
    const navigation = useNavigation();
    useEffect(() => {
        const onBackPress = () => {
            //console.log("Back Pressed: ", props);
            console.log("Back Pressed for: ", navigation);
            navigation.pop();
            return false;
        };
  
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
  
        return () =>
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])

    return(
        {...props.children}
    )
}

export default HardwareBackButtonHandler;