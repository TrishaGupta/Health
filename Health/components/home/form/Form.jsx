import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Button} from 'react-native';
import { useRouter } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';

import Name from './Name';
import Number from './Number';
import CountryCode from './CountryCode';


import { icons, SIZES } from '../../../constants';
import styles from './Form.style';
import  containerStyle  from './Form.style';
         

const Form = () => {

  const router = useRouter();

 
  const {
    control,
    handleSubmit,
    formState : {errors}
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View>
     {/* First Name Component */}
     <Name name="First Name" control={control} errors={errors}/>
     {/* Last Name Component */}
     <Name name="Last Name" control={control} errors={errors}/>

     {/* Phone Number Component */}
     <View style={{flexDirection:'row'}}>
     <CountryCode name ="Country Code" control={control} errors={errors}/>
     <Number name ="Phone Number" control={control} errors={errors} />
    </View>

    <Button onPress={handleSubmit(onSubmit)} title="Login" />
    </View>
  );
}

export default Form; 