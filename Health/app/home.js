import { Stack, useRouter } from 'expo-router';
import { View, ScrollView, SafeAreaView, Text, Button} from 'react-native';
import { COLORS, icons, images, SIZES} from '../constants';
import {
    ScreenHeaderBtn, Form
} from '../app/components';
import { NavigationContainer } from '@react-navigation/native';


const Home = ({navigation}) => {
    const router = useRouter();


    const handleSubmit = () =>{
       // router.push("/components/home/form/messages/messages");
       navigation.navigate('components/home/form/messages/messages');
    };

    return(
    
    <SafeAreaView style={{flex : 1, backgroundColor: COLORS.lightWhite}}>
    

   <ScrollView showsVerticalScrollIndicator={false}>
    <View
    style={{
        flex: 1, 
        padding: SIZES.medium
    }}>
        <Form navigation={navigation}/>
        <Button onPress={handleSubmit} title="Open" />
        
    </View>
   </ScrollView>
    </SafeAreaView>

    )

}

export default Home;