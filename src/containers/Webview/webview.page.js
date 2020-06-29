import React, {useRef, useLayoutEffect} from 'react';
import {Text} from 'react-native';
import { WebView } from 'react-native-webview';
import HeaderLeftIconButton from '../../components/Header/headerLeftIconButton';
import HardwareBackButtonHandler from '../../components/HardwareBackButton/hardwareBackButtonHandler';

const WebViewScreen = ({route, navigation}) => {
    console.log("Link: ", route.params.link);
    const webviewRef = useRef();
    let loadedStateChangeOnce = 0;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderLeftIconButton 
                    icon="chevron-left"
                    color="blue"
                    size={26}
                    onPress={() => navigation.popToTop()}
                />
            ),
            headerRight: () => (
                <Text></Text>
            ),
        });
    }, [navigation]);

    return(
        <HardwareBackButtonHandler disable={true}>
            <WebView
                ref={webviewRef}
                source={{uri: route.params.link}}
                originWhitelist={['http://*', 'https://*', 'intent://*']}
                onNavigationStateChange={navState => {
                    console.log("NavState: ", navState);
                    if(loadedStateChangeOnce === 0){
                        loadedStateChangeOnce++;
                        const newURL = navState.url.split(";")[4].split("=")[1];
                        console.log("New URL: ", newURL);
                        const redirectTo = 'window.location = "' + newURL + '"';
                        webviewRef.current.injectJavaScript(redirectTo);
                    }
                }}
            />
        </HardwareBackButtonHandler>
    )
}

export default WebViewScreen;