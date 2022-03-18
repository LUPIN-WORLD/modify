import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import { Colors } from '../components/styles';
import App from '../Form/App';
import {COLORS} from '../Form/constants/theme';
import { Quiz } from '../Form/screens';
import QuizWelcome from '../Form/screens/QuizWelcome';
import Appointment from '../Form/screens/Appointment';

const {primary, tertiary} = Colors;
const {secondary} = Colors;


const Stack = createStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent'
                },
                headerTintColor: tertiary,
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 10,
                    
                },
            }}
            initialRouteName="Login"
            >
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Signup' component={Signup} />
                <Stack.Screen options={{headerTintColor: primary}} name='Welcome' component={Welcome} />
                <Stack.Screen options={{headerShown: false}} name='App' component={App} />
                <Stack.Screen options={{headerShown: false}} name='Quiz' component={Quiz} />
                <Stack.Screen options={{headerShown: false}} name='QuizWelcome' component={QuizWelcome} />
                <Stack.Screen options={{headerShown: false}} name='Appointment' component={Appointment} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;