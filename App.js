import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from './src/routes';
import HeaderTitle from './src/components/Header/headerTitle';
import Scheduler from './src/containers/Scheduler/scheduler.page';
import Camera from './src/containers/Camera/camera.page';
import WebView from './src/containers/Webview/webview.page';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import configureStore from "./src/store/store";

let { store, persistor } = configureStore();

const Stack = createStackNavigator();

const App = () => {
  const { SCHEDULER, CAMERA, WEBVIEW } = ROUTES;
  
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={SCHEDULER.route}>
              <Stack.Screen 
                name={SCHEDULER.route} 
                component={Scheduler}
                options={{
                  headerTitle: () => <HeaderTitle title={SCHEDULER.title} />,
                }}
              />
              <Stack.Screen 
                name={CAMERA.route} 
                component={Camera}
                options={{
                  headerTitle: () => <HeaderTitle title={CAMERA.title} />,
                }}
              />
              <Stack.Screen 
                name={WEBVIEW.route} 
                component={WebView}
                options={{
                  headerTitle: () => <HeaderTitle title={WEBVIEW.title} />,
                }}
              />
            </Stack.Navigator>  
          </NavigationContainer>
        </PersistGate>
    </Provider>
  );
}

export default App;