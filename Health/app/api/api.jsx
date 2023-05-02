import database from '../../firebase';
import { Database, postsRef } from "firebase/database";
import {ref, set, push, update} from "firebase/database";



//submitChoices to submit the choices by the users
export const submitChoices = (key, choices) => {
  
    return new Promise(function(resolve, reject){
     
      const dbRef = ref(database, 'users/'+ key);
      console.log(dbRef);
      update(dbRef, {Choices: choices});
})
};


//used to create a new user    
export const submitUser = (id, firstName, lastName, contactNumber, choices) => {
   
    return new Promise(function(resolve, reject){
        
        let key;
        if(id != null){
            
            key = id;
        }
        else{
            key = push(ref(database, 'users/')).key;
            global.key = key;
        

            set(ref(database, 'users/'+ key), {
                FirstName: firstName,
                LastName: lastName,
                ContactNumber: contactNumber,
                Choices: choices
              }).catch(error =>{
                console.log(error);
              });
        }
    });

};