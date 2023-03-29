import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CountryPicker from 'react-native-country-picker-modal';


const CountryCode = ({name, control, errors},props) => {

  const [countryCode, setCountryCode] = useState('US');

    return(
        <View>
        {/* This is for the Country Code(for Phone Number) field that is required from drop
        down. */}
      <Text>{name}</Text>
      <CountryPicker
                countryCode={countryCode}
                withFilter
                withFlag
                withCountryNameButton
                onSelect={(country) => setCountryCode(country.cca2)}
                containerButtonStyle={{ marginHorizontal: 2 }}

              />
      </View>
    );

}

export default CountryCode;