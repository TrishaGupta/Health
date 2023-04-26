import { Redirect } from 'expo-router';
import Home from './home';
import { userReducer } from './components/home/formSlice';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const  Index = () => {

    const store = configureStore({
        reducer: userReducer
    });

return(
    <Provider store={store}>
    <Home />
    </Provider >
     
);

};
export default Index;