import React, { useState, useRef } from 'react';
import { View, Text, Image, Animated, StyleSheet, TouchableOpacity, Switch, Button, TextInput } from 'react-native';
import JobDetailsScreen from '../../../screens/Tab1User/add-on/JobDetailsScreen'
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import Ionicons from '@expo/vector-icons/Ionicons';

const Process2 = ({ route, navigation }) => {
  const { job } = route.params;
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState('');
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const dropdownHeight1 = useRef(new Animated.Value(0)).current;
  const dropdownHeight2 = useRef(new Animated.Value(0)).current;
  const dropdownHeight3 = useRef(new Animated.Value(0)).current;

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const handleSkip = () => {
    navigation.navigate('CheckJob');
  };

  const pickImage1 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage1(result.assets[0].uri);
    }
  };

  const pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage3(result.assets[0].uri);
    }
  };

  const pickPdf2 = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    });

    if (result.type !== 'cancel') {
      setImage2(result.uri);
    }
  };

  const toggleSwitch1 = () => {
    setIsEnabled1(previousState => !previousState);
    Animated.timing(dropdownHeight1, {
      toValue: isEnabled1 ? 0 : 150,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const toggleSwitch2 = () => {
    setIsEnabled2(previousState => !previousState);
    Animated.timing(dropdownHeight2, {
      toValue: isEnabled2 ? 0 : 150,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const toggleSwitch3 = () => {
    setIsEnabled3(previousState => !previousState);
    Animated.timing(dropdownHeight3, {
      toValue: isEnabled3 ? 0 : 150,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.space1}>
          <View style={styles.space2}>
            <Image source={job.logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.space3} >
              <Text style={styles.jobTitle}>{job.jobTitle}</Text>
              <Text style={styles.companyName}>{job.companyName}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={toggleModal}
          >
            <Text style={styles.buttonText}>ดูรายละเอียด</Text>
          </TouchableOpacity>
          <JobDetailsScreen isModalVisible={isModalVisible} toggleModal={toggleModal} />

        </View>
      </View>
      <View style={styles.separatorLine} />
      <View style={styles.container3}>
        <View>
          <View style={styles.container2}>
            <Text style={styles.buttonText}>สำเนาบัตรประชาชน</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#4CD964' }}
              thumbColor={isEnabled1 ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
              style={styles.switch}
            />
          </View>
          <Animated.View style={[styles.dropdown, { height: dropdownHeight1 }]}>
            <TouchableOpacity
              style={styles.button1}
              onPress={pickImage1}
            >
              <Ionicons name="cloud-upload-outline" size={50} color="#F3C6AF" />
              <Text style={styles.buttonText1}>ดูรายละเอียด</Text>
              <Text style={styles.buttonText2}>เลือกไฟล์</Text>
            </TouchableOpacity>
            {image1 && <Image source={{ uri: image1 }} style={{ width: 200, height: 200 }} />}
          </Animated.View>
        </View>
        <View>
          <View style={styles.container2}>
            <Text style={styles.buttonText}>วุฒิการศึกษา</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#4CD964' }}
              thumbColor={isEnabled2 ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
              style={styles.switch}
            />
          </View>
          <Animated.View style={[styles.dropdown, { height: dropdownHeight2 }]}>
            <TouchableOpacity
              style={styles.button1}
              onPress={pickPdf2}
            >
              <Ionicons name="cloud-upload-outline" size={50} color="#F3C6AF" />
              <Text style={styles.buttonText1}>ดูรายละเอียด</Text>
              <Text style={styles.buttonText2}>เลือกไฟล์</Text>
            </TouchableOpacity>
            {image2 && <Text>PDF ที่เลือก: {image2}</Text>}
          </Animated.View>
        </View>
        <View>
          <View style={styles.container2}>
            <Text style={styles.buttonText}>Portfolio</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#4CD964' }}
              thumbColor={isEnabled3 ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch3}
              value={isEnabled3}
              style={styles.switch}
            />
          </View>
          <Animated.View style={[styles.dropdown1, { height: dropdownHeight3 }]}>
            <View>
              <TouchableOpacity
                style={styles.button1}
                onPress={pickImage2}
              >
                <Ionicons name="cloud-upload-outline" size={50} color="#F3C6AF" />
                <Text style={styles.buttonText1}>ดูรายละเอียด</Text>
                <Text style={styles.buttonText2}>เลือกไฟล์</Text>
              </TouchableOpacity>

            </View>
            {image3 && <Image source={{ uri: image3 }} style={{ width: 200, height: 200 }} />}
          </Animated.View>
          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
            <Text style={styles.separatorText1}> หรือแนบ Link ผลงาน </Text>
            <View style={styles.separator} />
          </View>
          <View style={styles.container2}>
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={setText}
              placeholder="วาง URL ของคุณที่นี่"
              placeholderTextColor="#DBB29D"
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.bottomBar1}>
          <TouchableOpacity style={styles.applyButton} onPress={handleSkip}>
            <Text style={styles.applyButtonText}>ส่งใบสมัคร</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  container1: {
    padding: 20,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container3: {
    padding: 20,
    marginTop: -20
  },
  space1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  space2: {
    flexDirection: 'row',
  },
  space3: {
    marginLeft: 10
  },
  logo: {
    width: 45,
    height: 35,
  },
  jobTitle: {
    color: '#4A4A4A',
    fontFamily: 'Sarabun-SemiBold',
    fontSize: 16
  },
  companyName: {
    fontSize: 12,
    color: '#969696',
  },
  button: {
    backgroundColor: '#FFF4EB',
    padding: 5,
    borderRadius: 50,
    marginTop: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E0E0E0',
    marginBottom: -30,
    marginTop: 5,
    color: '#DBB29D',
    fontFamily: 'Sarabun-Medium',
    fontSize: 11,
  },
  button1: {
    padding: 5,
    borderRadius: 50,
    marginTop: 10,
    alignItems: 'center',
  },
  separatorLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6D7CF',
    width: '100%',
    marginTop: -10
  },
  dropdown: {
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    width: '100%',
    marginTop: -5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown1: {
    overflow: 'hidden',
    width: '100%',
    marginTop: -5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 12,
    color: '#6D6D6D'
  },
  buttonText1: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 12,
    color: '#6D6D6D'
  },
  buttonText2: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 10,
    color: '#DF8C62',
    textDecorationLine: 'underline',
  },
  bottomBar: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomBar1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  backButton: {
    width: '35%',
    height: 50,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#FF8749',
    borderRadius: 50,
  },
  backButtonText: {
    fontSize: 15,
    fontFamily: 'Sarabun-SemiBold',
    color: '#EAA17C'
  },
  applyButton: {
    backgroundColor: '#FFB472',
    width: '100%',
    height: 50,
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
  applyButtonText: {
    fontSize: 15,
    fontFamily: 'Sarabun-SemiBold',
    color: '#FFFFFF'
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
});

export default Process2;