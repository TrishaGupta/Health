import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


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

return(
     <Stack initialRouteName="home" options={{headerShown:false}}>
        <Stack.Screen name = "home" options={{headerShown:false
        }}/>
        </Stack>);

}
export default Layout;