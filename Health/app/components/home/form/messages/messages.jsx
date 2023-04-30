import React, {useEffect, useState} from 'react';
import { useRouter } from 'expo-router';
import { View, Text, Button,FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { addChoice,removeChoice,options, initialState, colorChoose, optionsSelector, optionsSlice} from './messageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../../../../constants';



const Messages = () => {

    //dipatch the store
    const dispatch = useDispatch();

    //selector that selects the options provided to users
    const optionsSelect = useSelector(optionsSelector);

    const[count, setCount] = useState(0);    

    // style for each option to be diplayed 
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        item: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 30,
          borderBottomWidth: 1,
          borderBottomColor: '#CCCCCC55',
          
        },
        title: {
          textTransform: 'capitalize'
        }
      });
   
      //this dispatches addChoice to change color of option background when tapped
      const updateSelectTrue = (item) => {
        dispatch(addChoice({
            name: item,
            isSelect: true,
            color: colorChoose
        }));
      }


    //Item render for flatlist, uses the styles to display the option's name
      const ItemRenderer = ({ label, color}) =>{
        return(
        <View style={[styles.item, {backgroundColor: color}]}>
         <Text style={styles.title}>{label}</Text>
        </View>
        )};
      
     //renderItenm used to change color when the option is tapped
      const renderItem = ({ item, index })=>{
      const color = item.color;
        return(
      <TouchableOpacity  onPress={(event) => updateSelectTrue(item.name)}>
        <ItemRenderer index={index} label={item.name} color={color} />
      </TouchableOpacity>
      )};

    
    return(
        <SafeAreaView style={{flex : 1, backgroundColor: COLORS.lightWhite}}>
        <View>
             <FlatList
        data={optionsSelect}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
        </View>
     
        </SafeAreaView>
    );

};
export default Messages;





  
