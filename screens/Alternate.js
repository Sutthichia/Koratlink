import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Alternate = ({ navigation, route }) => {
  const { setCurrentTab } = route.params;
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };
  const handleSkip = () => {
    navigation.navigate('Home');
  };
  const handlePress = () => {
    setCurrentTab(2);
    navigation.navigate('Main', { screen: 'TabNavigator2', params: { screen: 'Guest Home' } });
  };
  const handleLogin3 = () => {
    navigation.navigate('Login1');
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['#FFB472',  '#FEB878', '#FCC78E','#F8D8A6','#F7E0B2','#F5EBC2']}
      style={styles.container}
    >
      <View style={styles.TextUp}>
        <View style={styles.TextUp3}>
          <Text style={styles.separatorText1}> KoratLink </Text>
        </View>
        <View style={styles.TextUp3}>
          <Text style={styles.separatorText3}> เลือกประเภทบัญชีของคุณ </Text>
        </View>
        <View style={styles.top9}>
          <TouchableOpacity style={styles.top10} onPress={handleLogin} >
            <Image
              source={require('../images/icon/1.png')}
              style={styles.logo4}
              resizeMode="contain"
            />
            <Text style={styles.separatorText9}>หางานและฝากโปรไฟล์</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.top10} onPress={handleLogin3}>
            <Image
              source={require('../images/icon/2.png')}
              style={styles.logo4}
              resizeMode="contain"
            />
            <Text style={styles.separatorText9}>ผู้ประกอบการบริษัท</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  container1: {
    marginTop: 100,
  },
  container2: {
    flexDirection: 'row',
  },
  container3: {
    width: 100,
    height: 104,
    backgroundColor: '#F0B596'
  },
  container4: {

  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    width: 500, 
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginLeft: 7
  },
  logo4: {
    marginBottom: 11,
  },
  TextUp: {
    alignItems: 'center',
    marginTop: 120
  },
  TextUp3: {
    marginBottom: 50,
  },
  separatorText: {
    fontFamily: 'Sarabun-MediumItalic',
    fontSize: 10,
    color: "#FFFFFF"
  },
  TextUp1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  separatorLine: {
    borderBottomWidth: 1, 
    borderBottomColor: '#FFFFFF',
    width: 280,  
    marginVertical: 1, 
  },
  separatorLine1: {
    borderBottomWidth: 150, 
    borderBottomColor: '#FFFFFF',  
    width: 100,
    marginVertical: 1, 
    opacity: 0.5,
    borderRadius: 20,
    marginBottom: 10,
  },
  separatorText2: {
    marginHorizontal: 1,
    fontFamily: 'Sarabun-MediumItalic',
    fontSize: 11,
    color: "#FFFFFF",
    marginBottom: 50,
  },
  separatorText1: {
    fontSize: 48,
    fontFamily: 'Poppins-ExtraBold',
    color: '#FFFFFF'
  },
  separatorText3:{
    fontFamily: 'Sarabun-Medium',
    color: "#FFFFFF",
    fontSize: 16,
  },
  top9: {
    flexDirection: 'row',
    marginTop: -20,
  },
  top10: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  logo3: {
    width: 80,
    height: 80,
  },
  separatorText9: {
    fontFamily: 'Sarabun-SemiBold',
    fontSize: 14,
    color: '#FFFFFF'
  },
});

export default Alternate;