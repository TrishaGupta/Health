import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { useForm, Controller } from 'react-hook-form';


const Number = ({name, control, errors}) => {

    return(
        <View>
        {/* This is for the phone number field that is required, can only contain 0-9 and 
        10 maximum numbers */}
      <Text>{name}</Text>
      <Controller
        control={control}
        rules={{ required: true,
        pattern: /^[0-9]{10}/,
        maxLength: 10  }}
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
      {errors[name] && errors[name].type === 'pattern' && <Text>This field can only contain numbers!</Text>}
      {errors[name] && errors[name].type === 'required' && <Text>This field is required!</Text>}
      {errors[name] && errors[name].type === 'maxLength' && <Text>Enter a valid phone number!</Text>}
      </View>
    );

}

export default Number;