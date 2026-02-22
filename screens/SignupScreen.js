import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'; 
import Ionicons from '@expo/vector-icons/Ionicons';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState(''); 
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const handleSignUp = () => {
    console.log('สมัครสมาชิก:', { fullName, emailOrPhone, password });
    navigation.navigate('Login'); 
  };
  const navigation = useNavigation();

  const handleRegistration = () => {
    navigation.navigate('NowShowing'); 
  };
  
  const handleLogin = () => {
    navigation.navigate('LoginScreen'); 
  };

  const openFacebookForm = () => {
    Linking.openURL('https://www.facebook.com/form-url'); 
  };

  const openGoogleForm = () => {
    Linking.openURL('https://www.google.com/form-url'); 
  };

  const openAppleForm = () => {
    Linking.openURL('https://www.apple.com/form-url'); 
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/Union.png')}
        style={styles.logo}
      />
      <View style={styles.Up}>
        <Text style={styles.separatorText}> หางานโคราช </Text>
      </View>
      <Text style={styles.title}>KoratLink</Text>
      <TextInput
        style={[styles.input, { paddingLeft: 30, fontFamily: 'Sarabun-Medium', fontSize: 12 }]}
        placeholder="ชื่อ-นามสกุล"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={[styles.input, { paddingLeft: 30, fontFamily: 'Sarabun-Medium', fontSize: 12 }]}
        placeholder="หมายเลขโทรศัพท์มือถือหรืออีเมล"
        value={contact}
        onChangeText={setContact}
      />

      <TextInput
        style={[styles.input, { paddingLeft: 30, fontFamily: 'Sarabun-Medium', fontSize: 12 }]}
        placeholder="รหัสผ่าน"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setAgreedToTerms(!agreedToTerms)}
      >
        <View style={[styles.checkbox, agreedToTerms && styles.checkboxChecked]}>
          {agreedToTerms && ( 
            <AntDesign name="checksquare" size={17} color="#FF8749" />
          )}
        </View>
        <Text style={styles.checkboxText}>
          ฉันยอมรับข้อกำหนดการให้บริการและนโยบายความเป็นส่วนตัว
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, !agreedToTerms && styles.buttonDisabled]}
        onPress={handleRegistration}
        disabled={!agreedToTerms}
      >
        <Text style={styles.buttonText}>ลงทะเบียน</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:50 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
        <Text style={{ marginHorizontal: 10 }}> หรือลงทะเบียนด้วย </Text>
        <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
      </View>
      <View style={{flexDirection: 'row',top:40}}>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={openFacebookForm}>
          <Image
            source={require('../images/icon/Logo Google.png')}
            style={styles.logo1}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={openGoogleForm}>
          <Image
            source={require('../images/icon/Logo.png')}
            style={styles.logo1}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={openAppleForm}>
          <Image
            source={require('../images/icon/Logo (1).png')}
            style={styles.logo1}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      </View>  
  
      <TouchableOpacity style={styles.loginButton1} onPress={handleSignUp}>
        <Text style={styles.customButtonText3}>หากคุณยังไม่มีบัญชีผู้ใช้?</Text>
        <Text style={styles.customButtonText2}>ลงทะเบียน</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton1} >
            <Ionicons name="shield-half-outline" size={18} color="#EAA571" />
            <Text style={styles.signupLinkText1}>นโยบายและข้อตกลงการใช้บริการ KoratLink</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 500,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginLeft: 5,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 50,
    backgroundColor: '#FFFAF6',
    fontSize: 16,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    marginTop: 20
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    
  },
  checkboxText: {
    flex: 1,
    fontSize: 11,
  },
  button: {
    backgroundColor: '#FF8749',
    paddingVertical: 15,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  socialButton: {
    alignItems: 'center',
    borderColor: '#ddd',
    marginTop: 15,
    justifyContent: 'center',
    marginRight:20,
    marginLeft:20
  },
  socialIcon: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 14,
    color: '#333',
  },
  signupLinkText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginLeft: 5,
  },
  socialButton1:{
    top:190
  },
  Up: {
    marginTop: -9,
  },
  separatorText: {
    marginHorizontal: 1,
    fontFamily: 'Sarabun-MediumItalic',
    fontSize: 10,
    color: '#BF7C5B',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter_18pt-ExtraBold',
    marginBottom: 40,
    color: '#EB9D75',
  },
  socialButton: {
    backgroundColor: '#FFF4EB',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginHorizontal: 25,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',  
    alignItems: 'center',     
    marginTop: 20,
    width: '100%',
  },
  logo1: {
    width: 22,
    height: 22,
  },
  loginButton1:{
    flexDirection: 'row',
    alignItems: 'center',
    top:80,
    marginBottom: 11,
  },
  customButtonText3: {
    color: '#6B6B6B',
    fontSize: 13,
    fontFamily: 'Sarabun-Medium',
  },
  customButtonText2:{
    color: '#EAA17C',
    fontSize: 13,
    fontFamily: 'Sarabun-Medium',
    marginLeft: 5
  },
  loginButton1:{
    flexDirection: 'row',
    alignItems: 'center',
    top:80,
    marginBottom: 11,
  },
  signupLinkText1:{
    fontSize: 12,
    fontFamily: 'Sarabun-Medium',
    color: '#EAA571',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});

export default RegistrationScreen;
