import React, { useState, createContext } from "react";
import database from '../../firebase';
import { Database, postsRef } from "firebase/database";
import {ref, set, push} from "firebase/database";
import firebase from "firebase/app";






/*
const [Id , setId] = useState('');
const [firstName, setFirstname] = useState('');
const [lastName, setLastName] = useState('');
const [contactNumber, setContactNumber] = useState('');


const saveUser  = (Id, firstName, lastName, contactNumber) => {
    console.log(contactNumber);
    submitUser(Id, firstName, lastName, contactNumber)
    .then(result => {
        setId('');
        setFirstname('');
        setLastName('');
        setContactNumber('');
    })
    .catch(error => {
        console.log(error);
    })
};
*/
export const submitUser = (id, firstName, lastName, contactNumber) => {
   
    return new Promise(function(resolve, reject){
        
        let key;
        if(id != null){
            
            key = id;
        }
        else{
            
            key = push(ref(database, 'users/')).key;

            set(ref(database, 'users/'+ key), {
                FirstName: firstName,
                LastName: lastName,
                ContactNumber: contactNumber
              }).catch(error =>{
                console.log(error);
              });
        }
    });

};




