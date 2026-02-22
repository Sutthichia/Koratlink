import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useAuth } from '../components/AuthContext';
import Ionicons from '@expo/vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  const { login, resetPassword, isUserLoggedIn } = useAuth();
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  
  const resetErrorMessage = () => {
    setErrorMessage('');
  };

  const handleLogin = () => {
    if (!emailOrUsername || !password) {
      setErrorMessage('กรุณากรอกอีเมลหรือเบอร์โทรศัพท์ และรหัสผ่าน');
      return;
    }
    
    const users = [
      { username: 'user01', password: '123456878Milk' },
      { username: 'user02', password: 'Password123' },
      { username: '1', password: '1' }
    ];

    const user = users.find(
      (u) => (u.username === emailOrUsername && u.password === password)
    );

    if (!user) {
      setErrorMessage('อีเมลหรือชื่อบัญชี หรือรหัสผ่านไม่ถูกต้อง');
      return;
    }

    login(user);
    resetErrorMessage();
    navigation.navigate('Main');
  };

  const handleSkip = () => {
    navigation.navigate('Main');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };
  
  const handleForgetPassword = () => {
    navigation.navigate('ForgetPassword')
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

  useEffect(() => {
    if (isUserLoggedIn()) {
      setEmailOrUsername('');
      setPassword('');
      setName('');
    }
  }, [isUserLoggedIn()]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.customButton2} onPress={handleSkip}>
        <Text style={styles.customButtonText4}>ข้าม</Text>
      </TouchableOpacity>
      <Image
        source={require('../images/Union.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.Up}>
        <Text style={styles.separatorText}> หางานโคราช </Text>
      </View>
      <Text style={styles.title}>KoratLink</Text>
      <TextInput
        style={[styles.input, { paddingLeft: 30, fontFamily: 'Sarabun-Medium', fontSize: 12 }]}
        placeholder="หมายเลขโทรศัพท์มือถือหรืออีเมล"
        value={emailOrUsername}
        onChangeText={setEmailOrUsername}
        placeholderTextColor="#A9A9A9"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { paddingLeft: 30, fontFamily: 'Sarabun-Medium', fontSize: 12 }]}
          placeholder="รหัสผ่าน"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#A9A9A9"
        />
        {password ? ( // แสดงลูกตาเฉพาะเมื่อมีการกรอกข้อมูลในรหัสผ่าน
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setPasswordVisible(!isPasswordVisible)} // สลับการแสดงรหัสผ่าน
          >
            <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
          </TouchableOpacity>
        ) : null}
      </View>
      <TouchableOpacity style={styles.customButton} onPress={handleLogin}>
        <Text style={styles.customButtonText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.customButton1} onPress={handleForgetPassword}>
        <Text style={styles.customButtonText1}>ลืมรหัสผ่าน?</Text>
      </TouchableOpacity>
      <View style={styles.errorContainer}>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      </View>
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.separatorText1}> หรือเข้าสู่ระบบด้วย </Text>
        <View style={styles.separator} />
      </View>
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
      <TouchableOpacity style={styles.loginButton1} onPress={handleSignUp}>
        <Text style={styles.customButtonText3}>หากคุณยังไม่มีบัญชีผู้ใช้?</Text>
        <Text style={styles.customButtonText2}>ลงทะเบียน</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton1} onPress={handleSignUp}>
            <Ionicons name="shield-half-outline" size={18} color="#EAA571" />
            <Text style={styles.signupLinkText}>นโยบายและข้อตกลงการใช้บริการ KoratLink</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter_18pt-ExtraBold',
    marginBottom: 40,
    color: '#EB9D75',
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
  errorContainer: {
    height: 20,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    fontSize: 14,
    fontFamily: 'Sarabun-Medium',
  },
  logo: {
    width: 500,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginLeft: 5,
  },
  logo1: {
    width: 22,
    height: 22,
  },
  separatorText: {
    marginHorizontal: 1,
    fontFamily: 'Sarabun-MediumItalic',
    fontSize: 10,
    color: '#BF7C5B',
  },
  Up: {
    marginTop: -9,
  },
  customButton: {
    backgroundColor: '#FFB472',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  customButton1: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  customButton2: {
    backgroundColor: '#E5E5E5',
    borderRadius: 50,
    marginVertical: 10,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '4%',
    top: -30,
    left: 135
  },
  customButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Sarabun-Medium',
  },
  customButtonText1: {
    color: '#EAA17C',
    fontSize: 13,
    fontFamily: 'Sarabun-Medium',
  },
  customButtonText2: {
    color: '#EAA17C',
    fontSize: 13,
    fontFamily: 'Sarabun-Medium',
    marginLeft: 5
  },
  customButtonText22: {
    color: '#6B6B6B',
    fontSize: 13,
    fontFamily: 'Sarabun-Medium',
  },
  customButtonText3: {
    color: '#6B6B6B',
    fontSize: 13,
    fontFamily: 'Sarabun-Medium',
  },
  customButtonText4: {
    color: '#747474',
    fontSize: 12,
    fontFamily: 'Sarabun-Medium',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',    
    marginTop: 20,
    width: '100%',
  },
  socialButton: {
    backgroundColor: '#FFF4EB',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginHorizontal: 25,
  },
  socialText: {
    color: '#333',
    fontSize: 16,
    fontFamily: 'Sarabun-Medium',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E5EC',
  },
  separatorText1: {
    marginHorizontal: 10,
    fontFamily: 'Sarabun-Medium',
    fontSize: 12,
    color: '#6B6B6B'
  },
  loginButton1:{
    flexDirection: 'row',
    alignItems: 'center',
    top:80,
    marginBottom: 11,
  },
  signupLinkText:{
    fontSize: 12,
    fontFamily: 'Sarabun-Medium',
    color: '#EAA571',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 25,
    top:18
  },
});

export default LoginScreen;
