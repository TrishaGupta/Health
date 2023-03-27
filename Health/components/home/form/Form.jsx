import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';

import { icons, SIZES } from '../../../constants';
import styles from './Form.style';

const Form = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState : {errors}
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <View>
      <Text>
        Hello
      </Text>
    </View>
  )
}

export default Form; 