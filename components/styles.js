import styled from "styled-components";
import { View, Image, Text, TextInput, TouchableOpacity, } from "react-native";
// import { Constants } from "expo-constants";

// const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444",

};

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    
    padding: 100px;
    background-color: ${primary};
    border-top-color: white;
    border-top-width: 25px ;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    margin-top: -80px;
    
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
    margin-top: 10px;
    
`;

export const PageLogo = styled.Image`
    width: 250px;
    height: 250px;
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const WelcomeImage = styled.Image`
    height: 300px;
    min-width: 100%;
    margin-top: 130px;
    width: 30px;
    
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;

    ${(props) => props.welcome == true &&`
       font-size: 35px;
    `}
    ${(props) => props.page == true &&`
       padding-top: 100px;
    `}
    ${(props) => props.take == true &&`
       padding-top: 10px;
    `}

`;

export const SubTitle  =styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
    ${(props) => props.welcome == true &&`
       margin-bottom: 5px;
       font-size: 30px;
    `}
`;

export const StyledFormArea = styled.View`
    width: 300px;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-top: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    border-radius: 5px;
    margin-top: 10px;
    height: 60px;
    ${(props) => props.google == true && `
       background-color: ${green};
       flex-direction: row;
       justify-content: center;
    `}
    ${(props) => props.continue == true && `
       background-color: ${green};
    `}
    ${(props) => props.LogOut == true && `
       background-color: ${red};
    `}
    ${(props) => props.start == true && `
       background-color: ${green};
       margin-top: 40px;
    `}
    ${(props) => props.back == true && `
       background-color: ${green};
       margin-top: 40px;
       
    `}
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
    text-align: center;
    ${(props) => props.google == true && `
       padding-left: 25px;
       padding-top: 3px;
       padding-right: 35px;
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: ${(props) => (props.type == 'SUCCESS' ? green : red)};
`;

export const Line = styled.Text`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-top: 10px;
    ${(props) => props.line == true && `
       margin-top: 100px;
    `}
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    color: ${tertiary};
    font-size: 15px;
    justify-content: center;
    align-items: center;
`;

export const TestLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TestLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
`;