import React, { useRef, useLayoutEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HeaderLeftIconButtom from '../../components/Header/headerLeftIconButton';
import { RNCamera } from 'react-native-camera';
import Routes from '../../routes';
import _ from 'lodash';

const Camera = ({navigation}) => {
    const cameraRef = useRef();
    let getResultOnce = 0;

    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <HeaderLeftIconButtom 
                onPress={() => navigation.goBack()} 
                icon="chevron-left"
                color="blue"
                size={26}
            />
          ),
          headerRight: () => (
            <Text></Text>
          ),
        });
      }, [navigation]);

    return(
        <View style={styles.container}>
            <RNCamera
                ref={cameraRef}
                captureAudio={false}
                style={styles.preview}
                barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}
                onBarCodeRead={(barcode) => {
                    if(!_.isEmpty(barcode['data']) && getResultOnce === 0){
                        getResultOnce++;
                        //alert('QRCode Result: ' + barcode['data']);
                        navigation.navigate(Routes.WEBVIEW.route, {link: barcode['data']});
                    }
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});

export default Camera;
