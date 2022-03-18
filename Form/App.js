import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { Quiz } from './screens';
import  QuizWelcome  from './screens/QuizWelcome'

const App = ({navigation}) => {

  return (
    <Quiz />
    // <QuizWelcome />
  );
};


export default App;