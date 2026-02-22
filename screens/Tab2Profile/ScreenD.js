import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TabBarContext } from '../../components/TabBarContext';
import { useAuth } from '../../components/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ScreenB({ navigation, setCurrentTab }) {
  const [image, setImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const { setTabBarIcon } = useContext(TabBarContext);
  const { isLoggedIn } = useAuth();
  const { tabBarIcons } = useContext(TabBarContext);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const pickImage = async () => {
    if (!isLoggedIn) {
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      uploadImage(result.assets[0].uri);
    }
  };

  const [selectedButton, setSelectedButton] = useState(null);
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigation.navigate('Login');
  };

  const handlePress = (buttonIndex) => {
    if (selectedButton === buttonIndex) {

      setSelectedButton(null);
    } else {

      setSelectedButton(buttonIndex);
    }
  };

  const uploadImage = async (imageUri) => {
    setUploadStatus('กำลังอัพโหลด...');
    setUploadStatus('อัพโหลดสำเร็จ!');
    setTabBarIcon('เมณู', { uri: imageUri });
  };

  const handlePackageV2 = () => {
    navigation.navigate('PackageV2');
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleJobSeekerProfile = () => {
    navigation.navigate('JobSeekerProfile');
  };

  const handleJobWorkingprofile = () => {
    navigation.navigate('Workingprofile');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFB372', '#FFF4EB']}
        locations={[0.3, 0.7]}
        style={styles.background}
      />

      <View style={styles.area}>
        <Text style={styles.Text}>KoratLink</Text>

        <View style={styles.Area}>
          <Text style={styles.Text8}>ผู้ประกอบการ</Text>
        </View>

      </View>
      <View style={styles.area1}>
        <View>
          <TouchableOpacity style={styles.button4} onPress={handleJobWorkingprofile} >
            <View>
              <Image
                source={require('../../images/Logo/Group 272.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <View style={styles.space1}>
                <Text style={styles.Text7}>60%</Text>
              </View>
            </View>
            <View style={styles.space2}>
              <Text style={styles.Text5}>บริษัท ภูพบฟ้า จำกัด</Text>
              <Text style={styles.Text6}>ภาพรวม(Dashboard)  การนัดหมาย  เรซูเม่  ประวัติส่วนตัว</Text>
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={styles.Box1}>
            <View style={styles.Box5}>
              <View style={styles.Box8}>
                <TouchableOpacity style={styles.Box2} onPress={() => setCurrentTab(1)}>
                  <TouchableOpacity
                    style={[
                      styles.Box,
                      selectedButton === 1 && styles.selectedBox
                    ]}
                    onPress={() => setCurrentTab(1)}
                  >
                    <Image
                      source={require('../../images/profile/image (2).png')}
                      style={styles.logo1}
                      resizeMode="contain"
                    />
                    <View style={styles.Box9}>
                      <Text style={styles.separatorText}>โปรไฟล์ผู้หางานจาก KoratLink</Text>
                      <Text style={styles.separatorText}>ดาริน พิลาณี</Text>
                    </View>
                  </TouchableOpacity>
                  <Ionicons name="chevron-forward-outline" size={20} color="#626262" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.page0v1}>
            <View style={styles.page0v1_2}>
              <Text style={styles.separatorText2}>แพ็กเกจที่คุณกำลังใช้</Text>
            </View>
            <View style={styles.page0v1_1}>
              <View style={styles.BoxV1}>
                <View style={styles.Box9_1}>
                  <Text style={styles.Textframe5}>450</Text>
                  <View style={styles.Box8_1}>
                    <Text style={styles.Textframe9}>+ Vat 7% = 481.5</Text>
                  </View>
                </View>
                <View style={styles.Box3_1}>
                  <View style={styles.Box4_1}>
                    <View style={styles.Box5_1}>
                      <Text style={styles.Textframe6}>1 โฆษณา</Text>
                    </View>
                    <View style={styles.Box6_1}>
                      <Text style={styles.Textframe7}>เหลือ 5 วัน</Text>
                    </View>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.BoxV2} onPress={handlePackageV2}>
                <AntDesign name="pluscircle" size={50} color="#FFB472" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleJobSeekerProfile} >
            <View style={styles.space}>
              <Image
                source={require('../../images/Logo1/Gemini.png')}
                style={styles.logo2}
                resizeMode="contain"
              />
              <Text style={styles.Text4}>โปรไฟล์ผู้หางานใน KoratLink</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#626262" />
          </TouchableOpacity>


          <TouchableOpacity style={styles.button} >
            <View style={styles.space}>
              <Ionicons name="cash-outline" size={24} color="black" />
              <Text style={styles.Text4}>แพ็กเกจโฆษณาของคุณ</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#626262" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} >
            <View style={styles.space}>
              <Feather name="help-circle" size={24} color="#626262" />
              <Text style={styles.Text4}>ความช่วยเหลือและการสนับสนุน</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#626262" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <View style={styles.space}>
              <Ionicons name="settings-outline" size={24} color="#626262" />
              <Text style={styles.Text4}>การตั้งค่าและความเป็นส่วนตัว</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#626262" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogout} >
            <View style={styles.space}>
              <MaterialIcons name="logout" size={20} color="#626262" />
              <Text style={styles.Text4}>Logout</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#626262" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  area: {
    padding: 20,
    paddingTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  area1: {
    backgroundColor: '#FFFFFF',
    marginTop: -15,
    flex: 1
  },
  area2: {
    paddingTop: 340,
    alignItems: 'center',
  },
  space: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  space1: {
    top: -10,
    left: 13,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F5EFEC',
    borderRadius: 8,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  space2: {
    marginTop: -10,
    marginRight: 50
  },
  space3: {
    marginTop: -25,
  },
  space4: {
    marginTop: -18,
  },
  button: {
    borderWidth: 1,
    borderColor: '#F5EFEC',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 60,
    alignItems: 'center',
    padding: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button1: {
    borderWidth: 1,
    borderColor: '#F5EFEC',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 55,
    padding: 13,
  },
  button2: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDB589',
    marginVertical: 10,
    borderRadius: 50,
  },
  button3: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#CC9B86',
    borderRadius: 50,
  },
  button4: {
    flexDirection: 'row',
    padding: 20,
    marginTop: -10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: -10
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  circle1: {
    width: 30,
    height: 30,
    backgroundColor: '#ddd',
    borderRadius: 25,
    left: -30
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 25,
  },
  Text: {
    fontFamily: 'Poppins-ExtraBold',
    color: '#FFFFFF',
    fontSize: 18
  },
  Text1: {
    fontFamily: 'Sarabun-Medium',
    color: '#B8A79E',
    fontSize: 12
  },
  Text2: {
    fontFamily: 'Sarabun-SemiBold',
    color: '#FFFFFF',
    fontSize: 13
  },
  Text3: {
    fontFamily: 'Sarabun-SemiBold',
    color: '#CC9B86',
    fontSize: 13
  },
  Text4: {
    fontFamily: 'Sarabun-Medium',
    color: '#626262',
    fontSize: 13,
    marginLeft: 10
  },
  Text5: {
    fontFamily: 'Sarabun-SemiBold',
    fontSize: 16,
    color: '#4A4A4A',
  },
  Text6: {
    fontFamily: 'Sarabun-Medium',
    color: '#B8A79E',
    fontSize: 12,
  },
  Text7: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: '#DF8C62',
  },
  Text8: {
    fontSize: 10,
    fontFamily: 'Sarabun-Medium',
    color: '#DF8C62',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '60%',
  },
  dragIndicator: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 15,
  },
  dragLine: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
  },
  Box: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
  },
  Box1: {

  },
  Box2: {
    borderWidth: 1,
    borderColor: '#F5EFEC',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10
  },
  Box3: {
    backgroundColor: '#EB9D75',
    width: '80%',
    height: 50,
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#FF8749',
    borderRadius: 50,
  },
  Box4: {
    alignItems: 'center',
  },
  Box5: {

  },
  Box6: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -10,
  },
  Box7: {
    padding: 12,
  },
  Box9: {
    marginLeft: 15
  },
  Box10: {
    flexDirection: 'row',
  },
  separatorText: {
    color: '#333',
    fontSize: 13,
    fontFamily: 'Sarabun-Medium',
  },
  separatorText1: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Sarabun-Medium',
  },
  separatorText3: {
    color: '#DF8C62',
    fontFamily: 'Sarabun-Bold',
    fontSize: 13,
  },
  selectedBox: {
    backgroundColor: '#FFF5F0',
  },
  logo1: {
    width: 30,
    height: 30,
  },
  Area: {
    backgroundColor: '#FFFFFF',
    width: 100,
    height: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  logo2: {
    width: 24
  },
  BoxV1: {
    elevation: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 6, 
    borderRadius: 20, 
    borderWidth: 1,
    borderColor: '#FBEFE5',
    backgroundColor: '#fff',
    padding: 20,
    width: 170,
    height: 130,
    alignItems: 'center'
  },
  BoxV2: {
    elevation: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 6, 
    borderRadius: 20, 
    borderWidth: 1,
    borderColor: '#FBEFE5',
    backgroundColor: '#fff',
    padding: 20,
    width: 170,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Box9_1: {
    alignItems: 'center'
  },
  Textframe5: {
    color: '#4C4C4C',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    marginTop: -5
  },
  Box8_1: {
    marginTop: -10,
    marginBottom: 10
  },
  Textframe9: {
    color: '#CC9B86',
    fontFamily: 'Sarabun-Medium',
    fontSize: 12,
  },
  Box3_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Box4_1: {
    flexDirection: 'row',
  },
  Box5_1: {
    borderWidth: 1,
    borderColor: '#FBEFE5',
    paddingVertical: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    width: 75
  },
  Textframe6: {
    color: '#757575',
    fontFamily: 'Sarabun-Medium',
    fontSize: 10,
  },
  Textframe7: {
    color: '#C66060',
    fontFamily: 'Sarabun-Medium',
    fontSize: 10,
  },
  Box6_1: {
    borderWidth: 1,
    borderColor: '#FBEFE5',
    paddingVertical: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    width: 75
  },
  page0v1: {
    padding: 20,
  },
  page0v1_1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  page0v1_2:{
    marginBottom: 15
  },
  separatorText2:{
    color: '#4C4C4C',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  }
});