import { Stack, useRouter } from 'expo-router';
import { View, ScrollView, SafeAreaView, Text, Button} from 'react-native';
import { COLORS, icons, images, SIZES} from '../constants';
import {
    ScreenHeaderBtn, Form
} from '../app/components';


const Home = () => {
    const router = useRouter();

    return(
      
    <SafeAreaView style={{flex : 1, backgroundColor: COLORS.lightWhite}}>
   <Stack.Screen
   options={{
    headerStyle : {backgroundColor: COLORS.lightWhite},
    headerShadowVisible: false,
    headerLeft: () => (
        <ScreenHeaderBtn iconUrl={icons.menu} dimension = "60%"/>
    ),
    headerRight: () => (
        <ScreenHeaderBtn iconUrl= {images.profile} dimension="100%"/>
    ),
    headerTitle: "home"
   }}
   />

   <ScrollView showsVerticalScrollIndicator={false}>
    <View
    style={{
        flex: 1, 
        padding: SIZES.medium
    }}>
        <Form/>
 
        
    </View>
   </ScrollView>
    </SafeAreaView>
   
    )

}

export default Home;