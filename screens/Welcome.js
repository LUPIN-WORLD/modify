import React from "react";
import { StatusBar } from "expo-status-bar";

import{
    
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Colors,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar,
} from '../components/styles';
const {brand, darkLight, primary} = Colors;

const Welcome = ({navigation, route}) => {

    const {name, email, photoUrl} = route.params;
    const AvatarImg = photoUrl ? {uri: photoUrl} : require('../assets/image/kiran.png');

    
    return (
        <>
           <StatusBar style="darkLight" />
           <InnerContainer>
           <WelcomeImage resizeMode="cover" source={require('../assets/image/india.png')} />
              
              <WelcomeContainer>
              <PageTitle welcome={true}>Welcome! </PageTitle>
              <SubTitle welcome={true}>{name || 'Name'}</SubTitle>
              <SubTitle welcome={true}>{email || 'Email'}</SubTitle>

                 <StyledFormArea>
                 {/* <Avatar resizeMode="cover" source={require('../assets/image/kiran.png')} /> */}
                 <Avatar resizeMode="cover" source={AvatarImg} />
                     
                      <Line />
                      {/* <StyledButton onPress={() => {navigation.navigate("Login")}}> */}
                      <StyledButton continue={true} onPress={() => {navigation.navigate("QuizWelcome")}}>
                          
                          <ButtonText>Continue 🚆 </ButtonText>
                      </StyledButton>
                      <StyledButton LogOut={true}
                       onPress={() => {navigation.navigate("Login")}}>
                          {/* onPress={ClearLogin}> */}
                          
                          <ButtonText>Log Out</ButtonText>
                      </StyledButton>
                  </StyledFormArea>
                  
              </WelcomeContainer>
           </InnerContainer>
        </>
    );
};



export default Welcome;