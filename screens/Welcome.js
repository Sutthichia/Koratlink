import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Linking,Animated,ActivityIndicator } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  
  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };
  const handleSkip = () => {
    navigation.navigate('Home');
  };
  const handleLogin3 = () => {
    navigation.navigate('Alternate');
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Alternate');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);
  
  

  return (
    <View style={styles.container}>
      <View style ={styles.top}>
        <Image
          source={require('../images/Union.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.TextUp}>
          <Text style={styles.separatorText}> หางานโคราช </Text>
          <View style={styles.TextUp1}>
            <FontAwesome6 name="diamond" size={5} color="#E6D7CF" />
            <View style={styles.separatorLine} />
            <FontAwesome6 name="diamond" size={5} color="#E6D7CF" />
          </View>
          <Text style={styles.separatorText2}> “ลอดประตูชุมพล 2 ครั้ง ได้กลับมาทำงานอยู่โคราชบ้านเอง” </Text>
        </View>
      </View>
      <View style={styles.TextUp3}>
        <Text style={styles.separatorText1}> KoratLink </Text>
      </View>
      <ActivityIndicator size="large" color="#FFB472" style={styles.loader} />
      <View style={styles.TextUp4}>
      <Text style={styles.titleText}>กรุณารอสักครู่</Text>
      </View>
      <View style={styles.loginButton2}>
        <View style={styles.loginButton3}>
          <Text style={styles.signupLinkText1}>เราใส่ใจความปลอดภัยของคุณ{"\n"}ข้อมูลของคุณจะถูกเก็บไว้อย่างปลอดภัย</Text>
        </View>
        
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 25,
  },
  top:{
    marginTop: 100
  },
  logo: {
    width: 500, 
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginLeft: 7
  },
  TextUp:{
    alignItems: 'center',
    marginTop: -11
  },
  TextUp1:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  TextUp3:{
    marginTop: -100

  },
  TextUp4:{
    marginTop: 30
  },
  loginButton: {
    backgroundColor: '#FFB472',
    paddingVertical: 12,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
  },
  loginButton1:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  loginButton3:{
    top:-20,
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  loginButton2:{
    width: '100%',
    justifyContent: 'space-between', 
    alignItems: 'center',
    top:-10
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Sarabun-Bold'
  },
  separatorText: {
    fontFamily: 'Sarabun-MediumItalic',
    fontSize: 10,
    color: "#FFB472"
  },
  separatorText2: {
    marginHorizontal: 1,
    fontFamily: 'Sarabun-MediumItalic',
    fontSize: 11,
    color: "#FFB472"
  },
  separatorText1:{
    fontSize: 48,
    fontFamily: 'Inter_18pt-ExtraBold',
    color: '#FFB472'
  },
  signupLinkText1: {
    fontSize: 12,
    fontFamily: 'Sarabun-Regular',
    color: '#6D6D6D',
    textAlign: 'center',
  },
  titleText:{
    fontFamily: 'Sarabun-Regular',
    color: '#FFB472',
  },
  signupLinkText: {
    fontSize: 12,
    fontFamily: 'Sarabun-Medium',
    color: '#EAA571',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  separatorLine: {
    borderBottomWidth: 1, 
    borderBottomColor: '#FFB472',  
    width: 280,  
    marginVertical: 1,  
  },
  customButtonText:{
    fontFamily: 'Sarabun-Bold',
    color: '#EAA571'
  },
  customButton:{
    borderWidth: 1,
    borderColor: '#EB9D75',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  loader: {
    marginTop: 10,
  },
});

export default Login;
