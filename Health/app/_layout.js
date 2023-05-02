//import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { createStackNavigator } from '@react-navigation/stack';

import { configureStore, createReducer, combineReducers } from '@reduxjs/toolkit';
import { Text } from 'react-native';

import Home from './home';
import Messages from './components/home/form/messages/messages';
import Form  from './components/home/form/Form';
import Index from '../app/index'
import Test from '../app/components/home/form/test/test';

import { userReducer } from './components/home/formSlice';
import { optionsSlice} from './components/home/form/messages/messageSlice';


const Stack = createStackNavigator();


SplashScreen.preventAutoHideAsync();



const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

/* useCallback is used to cache the function and it only re-renders it of fontsLoaded in the 
dependency array changes */

const onLayoutRootView = useCallback(async() => {
    if(fontsLoaded){
        await SplashScreen.hideAsync();
    }
}, [fontsLoaded])

if(!fontsLoaded){
    return null;
}

const rootReducer = combineReducers({
    options: optionsSlice.reducer,
    users: userReducer
});

const store = configureStore({
    reducer: rootReducer
});


return(
    <Provider store={store}>
    <Stack.Navigator>
    <Stack.Screen name = "index" component={Index} options={{headerShown:false}}/>
    <Stack.Screen name = "home" component={Home} options={{headerShown:false}}/>
    <Stack.Screen name= "components/home/form/messages/messages" component={Messages} options={{headerShown: false}}/>
    <Stack.Screen name= "components/home/form/form" component={Form}/>
    <Stack.Screen name= "components/home/form/test/test" component={Test}/>
  
    </Stack.Navigator>
    </Provider>
   
    );

}
export default Layout;
