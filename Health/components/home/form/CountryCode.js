import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CountryPicker from 'react-native-country-picker-modal';


const CountryCode = (props) => {

  const name ="Country Code";

  //states maintained by Country Code component 
  const [countryCode, setCountryCode] = useState("US");
  const [codeNumber, setCodeNumber] = useState("1");

  const setCode = (country) =>{
    //sets the state of CountryCode and passes the prop for the same to Form Component
    setCountryCode(country.cca2);
    props.handleCode(country.cca2);

    //sets the state of CodeNumber and passes the prop for the same to Form Component
    setCodeNumber(country.callingCode[0]);
    props.handleCodeNumber(country.callingCode[0]);
  } 


    return(
        <View>
        {/* This is for the Country Code(for Phone Number) field that is required from drop
        down. */}
      <Text>{name}</Text>
      <CountryPicker
                countryCode={countryCode}
                withCallingCode={true}
                withFilter={true}
                withFlag={true}
                withCountryNameButton={true}
                onSelect={setCode}
                containerButtonStyle={{ marginHorizontal: 2 }}

              />
      </View>
    );

}

export default CountryCode;