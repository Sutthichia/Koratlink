import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [input, setInput] = useState('');
  const navigation = useNavigation();

  const handleContinue = () => {
    console.log('Input:', input);
  };

  const handleLogin = () => {
    navigation.navigate('ResetPassword');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ค้นหาบัญชีของคุณ</Text>
        <Text style={styles.subtitle}>ป้อนหมายเลขโทรศัพท์มือถือหรืออีเมลของคุณ</Text>
        <TextInput
          style={styles.input}
          placeholder="หมายเลขโทรศัพท์มือถือหรืออีเมล"
          value={input}
          onChangeText={setInput}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ดำเนินการต่อ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    color: '#6D6D6D',
    marginBottom: 10,
    fontFamily: 'Sarabun-Bold'
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: '#6D6D6D',
    fontFamily: 'Sarabun-Medium'
  },
  input: {
    borderRadius: 50,
    paddingHorizontal: 14,
    marginBottom: 40,
    width: '100%',
    height: 50,
    backgroundColor: '#F5F9FE',
  },
  button: {
    backgroundColor: '#FF8749',
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Sarabun-Bold'
  },
});

export default ForgotPasswordScreen;