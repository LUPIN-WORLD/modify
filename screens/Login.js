import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { View, ActivityIndicator } from "react-native";
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import axios from "axios";
import * as Google from 'expo-google-app-auth';
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TestLink,
    TestLinkContent,
} from '../components/styles';
const {brand, darkLight, primary} = Colors;



const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const [googleSubmitting, setGoogleSubmitting] = useState(false);

    const handleLogin = (credentials, setSubmitting) => {
        handleMessage(null);
        const url = 'https://dry-cove-89917.herokuapp.com/user/signin';

        axios.post(url, credentials)
             .then((response) => {
                 const result = response.data;
                 const {message, status, data} = result;

                 if (status !== 'Success') {
                     handleMessage(message, status);
                 }
                 else {
                     navigation.navigate("Welcome", { ...data[0] });
                 }
                 setSubmitting(false);
             })
             .catch(error => {
            console.log(error.JSON());
            setSubmitting(false);
            handleMessage("An Error occurred, Please check your network and try again");
        })
    }

    const handleMessage = (message, type = 'Failed') => {
        setMessage(message);
        setMessageType(type);

    }

    const handleGoogleSignin = () => {
        setGoogleSubmitting(true);
        const config = {
            iosClientId: '450597248482-ijj5p11871q4t84f9aig12838edj5rir.apps.googleusercontent.com',
            androidClientId: '450597248482-ka5d7di9icokgao9tpeokh707orceod3.apps.googleusercontent.com',
            scopes: ['profile','email']
    }
    Google
       .logInAsync(config)
       .then((result) => {
           const {type, user} = result;
           if (type == 'success') {
               const {email, name, photoUrl} = user;
               handleMessage('Google Signin successful', 'Success');
               setTimeout(() => navigation.navigate('Welcome', {email, name, photoUrl}), 1000);

           }
           else {
               handleMessage('An error occurred');
           }
           setGoogleSubmitting(false);
       })
       .catch(error => {
           console.log(error);
           handleMessage("Check your connection and try again");
           setGoogleSubmitting(false);
       })

    
    }




    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
           <StatusBar style="dark" />
           <InnerContainer>
              <PageLogo resizeMode="cover" source={require('../assets/image/kiran.png')} />
              <PageTitle> Kiran </PageTitle>
              <SubTitle>Account Login</SubTitle>
              <Formik initialValues={{ email: '', password: ''}}
                  onSubmit={(values, {setSubmitting}) => {
                      if (values.email == '' || values.password == '') {
                          handleMessage("Please fill all the fields");
                          setSubmitting(false);
                      }
                      else {
                          handleLogin(values, setSubmitting);
                      }
                  }}>

                  {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => <StyledFormArea>
                      <MyTextInput 
                          label="Email Address"
                          icon="mail"
                          placeholder="andyj@gmail.com"
                          placeholderTextColor={darkLight}
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          value={values.email}
                          keyboardType="email-address"
                      />

                       <MyTextInput 
                          label="Password"
                          icon="lock"
                          placeholder="**********"
                          placeholderTextColor={darkLight}
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          value={values.password}
                          secureTextEntry={hidePassword}
                          
                          isPassword={true}
                          hidePassword={hidePassword}
                          setHidePassword={setHidePassword}
                      />
                      <MsgBox type={messageType}>{message}</MsgBox>

                      {!isSubmitting && <StyledButton onPress={handleSubmit}>
                          <ButtonText>Login</ButtonText>
                      </StyledButton>}
                      {isSubmitting && <StyledButton disabled={true}>
                          <ActivityIndicator size="large" color={primary} />
                      </StyledButton>}
                      <Line />
                      {!googleSubmitting && (
                          <StyledButton google={true} onPress={handleGoogleSignin}>
                          <Fontisto name="google" color={primary} size={25} />
                          <ButtonText google={true}>Sign in with Google</ButtonText>
                      </StyledButton>
                      )}
                      {googleSubmitting && (
                          <StyledButton google={true} disabled={true}>
                              <ActivityIndicator size="large" color={primary} />
                      </StyledButton>
                      )}
                      <ExtraView>
                          <ExtraText>Don't have an account already?</ExtraText>
                          <TestLink onPress={() => navigation.navigate("Signup")}>
                              <TestLinkContent>Sign up</TestLinkContent>
                          </TestLink>
                      </ExtraView>
                  </StyledFormArea>}
                  
              </Formik>
           </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, hidePassword, setHidePassword, isPassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : "md-eye"} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );

};

export default Login;