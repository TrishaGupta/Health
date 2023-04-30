
import { NativeRouter, Route, Link } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home';
import Messages from './components/home/form/messages/messages';



const  Index = ({navigation}) => {

return(
            <Home navigation={navigation}/>
);

};
export default Index;