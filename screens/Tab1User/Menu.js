import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const OptionsScreen = ({ navigation }) => {
  const { logout, resetErrorMessage, resetPassword } = useAuth(); 

  const handleLogout = () => {
    logout();
    resetErrorMessage();
    resetPassword();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          <Image
            source={require('../../images/profile/image (2).png')}
            style={styles.logo3}
            resizeMode="contain"
          />
          <Text style={styles.title}>ดาริน พิลาณี</Text>
          <Text style={styles.title}>Product Owner | UX Researcher </Text>
        </View>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.backgroundColor}>
          <View>
            <Text style={styles.title}>ติดต่อเรา</Text>
            <Ionicons name="stats-chart-outline" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backgroundColor}>
          <Text style={styles.title}>ความช่วยเหลือและการสนับสนุน</Text>
          <Ionicons name="stats-chart-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.backgroundColor}>
          <Text style={styles.title}>การตั้งค่าและความเป็นส่วนตัว</Text>
          <Ionicons name="stats-chart-outline" size={24} color="black" />
        </TouchableOpacity>

      </View>

      <Button title="Logout" onPress={handleLogout} />
      <TouchableOpacity style={styles.backgroundColor} onPress={handleLogout}>
        <Text style={styles.title}>ออกจากระบบ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default OptionsScreen;
