import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { useForm, Controller } from 'react-hook-form';


const Name = ({name, control, errors}) => {

    return(
        <View>
        {/* This is for the first name field that is required, can only contain a-z and A-Z and 
        35 maximum characters */}
      <Text>{name}</Text>
      <Controller
        control={control}
        rules={{ required: true,
        pattern: /^[A-Za-z]+$/,
        maxLength: 35  }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            name={name}
          />
        )}
        name={name}
        defaultValue=""
      />
      {errors[name] && errors[name].type === 'pattern' && <Text>This field cannot contain numbers or special characters!</Text>}
      {errors[name] && errors[name].type === 'required' && <Text>This field is required!</Text>}
      {errors[name] && errors[name].type === 'maxLength' && <Text>Maximum length of 35 characters allowed!</Text>}
      </View>
    );

}

export default Name;