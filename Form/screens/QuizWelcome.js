import React, {useState} from "react";
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
} from '../../components/styles';
const {brand, darkLight, primary} = Colors;

const QuizWelcome = ({navigation}) => {

    
    return (
        <>
           <StatusBar style="darkLight" />
           <InnerContainer>
           
              
              <WelcomeContainer>
              <PageTitle take={true}>Take Assessment! To check health status</PageTitle>
              

                 <StyledFormArea>
                 
                     
                      
                      <StyledButton start={true} onPress={() => {navigation.navigate("App")}}>
                          
                          <ButtonText>Start</ButtonText>
                      </StyledButton>
                     
                  </StyledFormArea>
                  <Line line={true} />
                  <PageTitle page={true}>Chat with Doctor</PageTitle>

                  <StyledFormArea>
                 
                     
                     
                      
                      <StyledButton back={true} onPress={() => {navigation.navigate("")}}>
                          
                          <ButtonText>Chat</ButtonText>
                      </StyledButton>
                  </StyledFormArea>
                  
              </WelcomeContainer>
           </InnerContainer>
        </>
    );
};



export default QuizWelcome;