import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const CheckJob = ({ navigation,setCurrentTab }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const colorValue = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.2,
            duration: 500,
            useNativeDriver: false,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
          }),
        ]),
        Animated.timing(colorValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const interpolatedColor = colorValue.interpolate({
    inputRange: [0, 5],
    outputRange: ['#C8E6C9', '#66BB6A',]
  });

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [{ scale: scaleValue }],
              backgroundColor: interpolatedColor
            }
          ]}
        />
        <View style={styles.Area}>
          <Ionicons name="checkmark-sharp" size={80} color="#FFFFFF" />
        </View>
      </View>
      <View style={styles.Area1}>
        <Text style={styles.paragraph1}>ส่งใบสมัครสำเร็จ</Text>
        <Text style={styles.paragraph2}>โอกาสของคุณเริ่มต้นแล้ว ขอให้โชคดีค่ะ!</Text>
        <View style={styles.Area2}>
          <Text style={styles.paragraph3}>เราจะดำเนินการแจ้งผลการสมัครโดยเร็วที่สุดผ่านแอปพลิเคชัน </Text>
          <Text style={styles.paragraph5}>KoratLink</Text>
        </View>
        <Text style={styles.paragraph4}>คุณสามารถติดตามสถานะการสมัครได้ที่นี่</Text>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.loginButton}
          onPress={() => {
            navigation.navigate('แชท');
            if (setCurrentTab) {
              setCurrentTab(1); 
            }
          }}>
          <Text style={styles.loginButtonText}>ดูสถานะการสมัครงาน</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('หน้าหลัก')}>
          <Text style={styles.customButtonText}>กลับสู่หน้าหลัก</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.top}>
        <Image
          source={require('../../../images/Union.png')}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  container1: {
    alignItems: 'center',
  },
  container2: {
    alignItems: 'center',
    padding: 20
  },
  Area: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4CD964',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -110
  },
  Area1: {
    alignItems: 'center',
    marginTop: 40
  },
  Area2: {
    flexDirection: 'row',
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  logo: {
    width: 500,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginLeft: 7
  },
  TextUp: {
    alignItems: 'center',
    marginTop: -11
  },
  separatorText: {
    fontFamily: 'Sarabun-MediumItalic',
    fontSize: 10,
    color: "#BF7C5B"
  },
  TextUp1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  separatorLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6D7CF',
    width: 280,
    marginVertical: 1,
  },
  separatorText2: {
    marginHorizontal: 1,
    fontFamily: 'Sarabun-MediumItalic',
    fontSize: 11,
    color: "#BF7C5B"
  },
  loginButton: {
    backgroundColor: '#FFB472',
    paddingVertical: 12,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Sarabun-Medium'
  },
  customButton: {
    borderWidth: 1,
    borderColor: '#E5B197',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  customButtonText: {
    fontFamily: 'Sarabun-Medium',
    color: '#E5B197',
    fontSize: 15
  },
  paragraph1: {
    fontSize: 22,
    color: '#57AD66',
    fontFamily: 'Sarabun-SemiBold',
  },
  paragraph2: {
    fontSize: 14,
    color: '#7EBF89',
    fontFamily: 'Sarabun-SemiBold',
    marginBottom: 15
  },
  paragraph3: {
    fontSize: 12,
    color: '#7D7D7D',
    fontFamily: 'Sarabun-Medium',
  },
  paragraph4: {
    fontSize: 12,
    color: '#7D7D7D',
    fontFamily: 'Sarabun-Medium',
  },
  paragraph5: {
    fontSize: 12,
    color: '#EAA571',
    fontFamily: 'Sarabun-Medium',
  },
});

export default CheckJob;