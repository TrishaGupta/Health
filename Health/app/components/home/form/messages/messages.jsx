import React, {useEffect, useState} from 'react';
import { View, Text, Button,FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { addChoice,removeChoice, optionsSelector,  colorNotChoosen} from './messageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../../../../constants';
import { addUserChoices } from './messagesApi';


export let choices = [];

const Messages = ({navigation}) => {

    //dipatch the store
    const dispatch = useDispatch();

    //selector that selects the options provided to users
    const optionsSelect = useSelector(optionsSelector);

    //count holds the number of selected values 
    const[count, setCount] = useState(0); 
    //if the toucahble opacity should be disabled or not 
    const [disabled, setDisabled] = useState(false);
    //holds the current color of the current option
    const [colorB, setColorB ] = useState(colorNotChoosen);
    
   
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
   
      //event handler to select or deselect the option
      const updateSelectTrue = (item, color) => {
      const index = optionsSelect.findIndex((option) => option.name === item);
      
        if (optionsSelect[index].isSelect) {
          dispatch(removeChoice({ 
            name: item,
            isSelect: false,
           
           }));
        } else {
          dispatch(addChoice({
            name: item,
            isSelect: true,
          
           }));
        }
      
        setColorB(color);
        
      };

      //used to update count when isSelect is updated 
      useEffect(() => {
        const selectedCount = optionsSelect.reduce(
          (count, option) => count + (option.isSelect ? 1 : 0),
          0
        );
        setCount(selectedCount);
      }, [optionsSelect]);


      //used to update disabled value when count is updated 
      useEffect(() => {
        if(count<=2)
          setDisabled(false);
        else 
          setDisabled(true);
      }, [count]);
     

    //Item render for flatlist, uses the styles to display the option's name
      const ItemRenderer = ({ label, color}) =>{
        return(
        <View style={[styles.item, {backgroundColor: color}]}>
         <Text style={styles.title}>{label}</Text>
        </View>
        )};
      
     //renderItem used to change color when the option is tapped
      const renderItem = ({ item, index })=>{
      const color = item.color;
      const isDisabled = disabled && !optionsSelect[index].isSelect;;   

       //the option disables touch when 3 have alredy been selected and it is not one of them
      return(
        <TouchableOpacity  onPress={(event) => updateSelectTrue(item.name, color)} disabled={isDisabled}>
          <ItemRenderer index={index} label={item.name} color={color} />
        </TouchableOpacity>
      )};


      const messageHandler = () =>{
        choices = optionsSelect.filter(option => option.isSelect).map(option => option.name);
        
        const data = {choices: choices}
        
        dispatch(addUserChoices(data));
      };

    
    return(
        <SafeAreaView style={{flex : 1, backgroundColor: COLORS.lightWhite}}>
        <View>
             <FlatList
        data={optionsSelect}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        />

        <Button onPress={messageHandler} title='Next'></Button>
        </View>
        </SafeAreaView>
    );

};
export default Messages;





  
