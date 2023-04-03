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
  // contains the countryCode state which is changed by CountryCode Component
  const [countryCode , setCountryCode] = useState("US");
  //contains the CodeNumber state whiche is changed by countrycode component
  const [codeNumber, setCodeNumber] = useState("1");
  //used to keep the state of the final phone number of the format = "+" + "country code" + "phone number"
  const [finalNumber, setFinalNumber] = useState("");
 
  const {
    control,
    handleSubmit,
    formState : {errors}
  } = useForm();

  const handleCodeNumber = (newNumberCode) => {
    setCodeNumber(newNumberCode);
    //console.log(codeNumber);
  };

  const handleCode = (newCode) => {
    setCountryCode(newCode);
   // console.log(countryCode);
  };
  
  const onSubmit = (data) => {
    console.log(data);

    //stores the final number in finalNumber
    const number = "+" + codeNumber+ data["Phone Number"];
    setFinalNumber(number);
  };


  return (
    <View>
     {/* First Name Component */}
     <Name name="First Name" control={control} errors={errors}/>
     {/* Last Name Component */}
     <Name name="Last Name" control={control} errors={errors}/>

     {/* Phone Number Component */}
     <View style={{flexDirection:'row'}}>
     <CountryCode name ="Country Code" handleCode={handleCode} handleCodeNumber={handleCodeNumber}/>
     <Number name ="Phone Number" control={control} errors={errors} />
     <Text>{finalNumber}</Text>

    </View>

    <Button onPress={handleSubmit(onSubmit)} title="Login" />
    </View>
  );
}

export default Form; 