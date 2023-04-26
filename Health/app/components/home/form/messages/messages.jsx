import React, {useEffect, useState} from 'react';
import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';


const Messages = () => {

    const router = useRouter();


    
    return(
    
        <View>
            <Text>Message</Text>
            <Text></Text>
            <Button title="Push" />
        </View>
        
     
    );

};
export default Messages;

