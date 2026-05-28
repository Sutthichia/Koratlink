import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [input, setInput] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();

  const handleContinue = () => {
    console.log('Input:', input);
    console.log('New Password:', newPassword);
  };

  const handlePasswordChange = () => {
    Alert.alert(
      'เปลี่ยนรหัสผ่านแล้ว',
      'รหัสผ่านของคุณได้ถูกเปลี่ยนแล้ว',
      [
        {
          text: 'ตกลง',
          onPress: () => navigation.navigate('Home')
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>เปลี่ยนรหัสผ่านของคุณ</Text>
        <Text style={styles.subtitle}>
          รหัสผ่านของคุณต้องมีความยาวอย่างน้อย 6 อักขระและประกอบด้วยตัวเลข ตัวอักษร และอักขระพิเศษ (!$@%)
        </Text>
        <TextInput
          style={styles.input}
          placeholder="รหัสผ่านใหม่"
          value={input}
          onChangeText={setInput}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="พิมพ์รหัสผ่านใหม่อีกครั้ง"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handlePasswordChange}>
          <Text style={styles.buttonText}>เปลี่ยนรหัสผ่าน</Text>
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
    marginBottom: 20,
    width: '100%',
    height: 50,
    backgroundColor: '#F5F9FE',
  },
  button: {
    backgroundColor: '#FF8749',
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Sarabun-Bold'
  },
});

export default ForgotPasswordScreen;
