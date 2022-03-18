import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import  DateTimePicker from "@react-native-community/datetimepicker";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import axios from "axios";
import{
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

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));
    const[dob, setDob] = useState();
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    };


    const handleSignup = (credentials, setSubmitting) => {
        handleMessage(null);
        const url = 'https://dry-cove-89917.herokuapp.com/user/signup';

        axios.post(url, credentials)
             .then((response) => {
                 const result = response.data;
                 const {message, status, data} = result;

                 if (status !== 'Success') {
                     handleMessage(message, status);
                 }
                 else {
                     navigation.navigate("Welcome", {...data});
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




    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
           <StatusBar style="dark" />
           <InnerContainer>
              
              <PageTitle>XYZ</PageTitle>
              <SubTitle>Account Sign-up</SubTitle>

              {show && (
                  <DateTimePicker
                   testID="dateTimePicker"
                   value={date}
                   mode="date"
                   is24Hour={true}
                   display='default'
                   onChange={onChange}


                   />
              )}
              <Formik initialValues={{name: '', email: '', dateOfBirth: '', password: '',confirmPassword: ''}}
                  onSubmit={(values, {setSubmitting}) => {
                    values = {...values, dateOfBirth: dob};
                    if (values.email == '' || values.password == '' || values.name == '' || values.dateOfBirth == '' || values.confirmPassword == '') {
                        handleMessage("Please fill all the fields");
                        setSubmitting(false);
                    }
                    else if (values.password !== values.confirmPassword) {
                        handleMessage("Password do not match");
                        setSubmitting(false);
                    }
                    else {
                        handleSignup(values, setSubmitting);
                    }
                  }}>

                  {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => <StyledFormArea>
                      <MyTextInput 
                          label="Full-Name"
                          icon="person"
                          placeholder="Vaibhav Shukla"
                          placeholderTextColor={darkLight}
                          onChangeText={handleChange('name')}
                          onBlur={handleBlur('name')}
                          value={values.name}
                          
                      />

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
                          label="Date-of-Birth"
                          icon="calendar"
                          placeholder="YYYY-MM-DD"
                          placeholderTextColor={darkLight}
                          onChangeText={handleChange('dateOfBirth')}
                          onBlur={handleBlur('dateOfBirth')}
                          value={dob ? dob.toDateString() : ''}
                          isDate={true}
                          editable={false}
                          showDatePicker={showDatePicker}
                          
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

                       <MyTextInput 
                          label="Confirm-Password"
                          icon="lock"
                          placeholder="**********"
                          placeholderTextColor={darkLight}
                          onChangeText={handleChange('confirmPassword')}
                          onBlur={handleBlur('confirmPassword')}
                          value={values.confirmPassword}
                          secureTextEntry={hidePassword}
                          
                          isPassword={true}
                          hidePassword={hidePassword}
                          setHidePassword={setHidePassword}
                      />  
                      <MsgBox type={messageType}>{message}</MsgBox>

                      {!isSubmitting && <StyledButton onPress={handleSubmit}>
                          <ButtonText>Sign up</ButtonText>
                      </StyledButton>}
                      {isSubmitting && <StyledButton disabled={true}>
                          <ActivityIndicator size="large" color={primary} />
                      </StyledButton>}
                      <Line />
                      
                      <ExtraView>
                          <ExtraText>Already have an account?</ExtraText>
                          <TestLink onPress={() => navigation.navigate("Login")}>
                              <TestLinkContent>Login</TestLinkContent>
                          </TestLink>
                      </ExtraView>
                  </StyledFormArea>}
                  
              </Formik>
           </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, hidePassword, setHidePassword, isDate, showDatePicker, isPassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && (
                <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props} />
                </TouchableOpacity>
            )}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : "md-eye"} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );

};

export default Signup;