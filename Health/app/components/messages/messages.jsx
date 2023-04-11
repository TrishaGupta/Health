import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';


const Messages = () => {

    const router = useRouter();

    return(
        <View>
            <Text>Message</Text>
        </View>
    );

};

export default Messages;