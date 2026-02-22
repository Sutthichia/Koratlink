import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Switch, TouchableOpacity, StyleSheet, FlatList, Linking, ScrollView, Dimensions, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const Promotiondetails = ({ navigation, route }) => {



  const handleSkip = () => {
    navigation.navigate('Main');
  };
  const handleRegisterProfile = () => {
    navigation.navigate('RegisterProfile');
  };
  const handleSignUp1 = () => {
    navigation.navigate('SignupScreen1');
  };
  const handleAdvertisingprocess = () => {
   
    navigation.goBack();
  };

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [selectedButtons, setSelectedButtons] = useState([]);

  const toggleButton = (index) => {
    if (selectedButtons.includes(index)) {

      setSelectedButtons(selectedButtons.filter((btn) => btn !== index));
    } else {

      setSelectedButtons([...selectedButtons, index]);
    }
  };
  const handleMinSalaryChange = (amount) => {
    setMinSalary((prevSalary) => Math.max(0, prevSalary + amount));
  };

  const handleMaxSalaryChange = (amount) => {
    setMaxSalary((prevSalary) => Math.max(minSalary, prevSalary + amount));
  };

  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(12000);
  const [searchText, setSearchText] = useState('');
  const [distance, setDistance] = useState(10);
  const sliderWidth = Dimensions.get('window').width - 60;

  const jobData = [
    { label: 'งานโปรแกรมเมอร์', items1: ['งานโปรแกรมเมอร์', 'ผู้ดูแลระบบเครือข่าย',], items2: ['งานโทรคมนาคม', 'วิศวกรซอฟต์แวร์',] },
    { label: 'งานโปรแกรมเมอร์', items1: ['งานโปรแกรมเมอร์', 'ผู้ดูแลระบบเครือข่าย',], items2: ['งานโทรคมนาคม', 'วิศวกรซอฟต์แวร์',] },
    { label: 'งานโปรแกรมเมอร์', items1: ['งานโปรแกรมเมอร์', 'ผู้ดูแลระบบเครือข่าย',], items2: ['งานโทรคมนาคม', 'วิศวกรซอฟต์แวร์',] },
    { label: 'งานโปรแกรมเมอร์', items1: ['งานโปรแกรมเมอร์', 'ผู้ดูแลระบบเครือข่าย',], items2: ['งานโทรคมนาคม', 'วิศวกรซอฟต์แวร์',] },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container4}>
        <View style={styles.container4_1}>
          <View style={styles.container6}>
            <View style={styles.container5}>
              {['เลือกอาชีพ', 'สวัสดิการ', 'ประเภทงาน', 'ระยะห่าง'].map((label, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.button,
                    selectedButtons.includes(index) && styles.selectedButton,
                  ]}
                  onPress={() => toggleButton(index)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      selectedButtons.includes(index) && styles.selectedButtonText,
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.container5_1}>
              {['รูปแบบการทำงาน', 'เงินเดือน',].map((label, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.button1,
                    selectedButtons.includes(index) && styles.selectedButton,
                  ]}
                  onPress={() => toggleButton(index)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      selectedButtons.includes(index) && styles.selectedButtonText,
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.separatorLine1} />
          <View style={styles.separatorLine2} >
            <Text style={styles.Textframe1}>
              เงินเดือน : <Text style={{ color: '#6D6D6D' }}>( เลือกเงินเดือนที่คุณต้องการ หรือระบุด้วยตนเอง )</Text>
            </Text>
            <View style={styles.salaryBox1}>
              <View style={styles.salaryBox2}>
                <Text style={styles.label}>เงินเดือนเริ่มต้น (บาท)</Text>
                <View style={styles.salaryBox}>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => handleMinSalaryChange(-1000)}>
                      <Ionicons name="remove-circle-outline" size={24} color="#A3A3A3" />
                    </TouchableOpacity>
                    <Text style={styles.salaryText}>{minSalary.toLocaleString()}</Text>
                    <TouchableOpacity onPress={() => handleMinSalaryChange(1000)}>
                      <Ionicons name="add-circle-outline" size={24} color="#A3A3A3" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.salaryBox2}>
                <Text style={styles.label}>สูงสุด (บาท)</Text>
                <View style={styles.salaryBox}>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => handleMaxSalaryChange(-1000)}>
                      <Ionicons name="remove-circle-outline" size={24} color="#A3A3A3" />
                    </TouchableOpacity>
                    <Text style={styles.salaryText}>{maxSalary.toLocaleString()}</Text>
                    <TouchableOpacity onPress={() => handleMaxSalaryChange(1000)}>
                      <Ionicons name="add-circle-outline" size={24} color="#A3A3A3" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.separatorLine1} />
          <View style={styles.separatorLine2} >
            <View style={styles.separatorLine3}>
              <Text style={styles.Textframe1}>
                เลือกงานตามอำเภอ
              </Text>
              <View style={styles.salaryBox2}>
                <View style={styles.searchContainer}>
                  <Icon name="search" size={20} color="#888" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="ค้นหาอำเภอที่ต้องการ"
                    placeholderTextColor="#888"
                  />
                </View>
              </View>
            </View>
            <View style={styles.container5_2}>
              {['เมืองนครราชสีมา', 'อำเภอสีคิ้ว', 'อำเภอสูงเนิน', 'อำเภอโนนสูง'].map((label, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.button3,
                    selectedButtons.includes(index) && styles.selectedButton,
                  ]}
                  onPress={() => toggleButton(index)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      selectedButtons.includes(index) && styles.selectedButtonText,
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.separatorLine1} />
          <View style={styles.separatorLine2} >
            <Text style={styles.Textframe1}>
              ระยะห่างจากคุณ : <Text style={{ color: '#6D6D6D' }}>( เลือกจากตำแหน่งปัจจุบันของคุณ )</Text>
            </Text>
            <View>
              <View style={styles.sliderContainer}>
                <Text style={[styles.distanceLabel, { left: (distance / 100) * sliderWidth }]}>
                  {distance} km.
                </Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={100}
                  step={1}
                  value={distance}
                  onValueChange={(value) => setDistance(Math.round(value))}
                  minimumTrackTintColor="#FF8749"
                  maximumTrackTintColor="#EAEAEA"
                  thumbTintColor="#FF8749"
                />
              </View>
              <View style={styles.screen1_1}>
                <Ionicons name="navigate" size={20} color="#EDB589" />
                <View style={styles.screen1_2}>
                  <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>กองบิน1 ถนนเดชอุดม ต.หนองไผ่ล้อม อ.เมืองนครราชสีมา จ.นครราชสีมา 30000</Text>
                  <Image
                    source={require('../../../images/Logo/Line 29.png')}
                    style={styles.logo4}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.separatorLine1} />
          <View style={styles.separatorLine2} >
            <View style={styles.separatorLine3}>
              <Text style={styles.Textframe1}>
                รูปแบบการทำงาน : <Text style={{ color: '#6D6D6D' }}>( เลือกรูปแบบการทำงานที่คุณต้องการ )</Text>
              </Text>
            </View>
            <View style={styles.container5_2}>
              {['งานประจำ', 'งานพาร์ทไทม์', 'งานรายวัน', 'ฟรีแลนซ์', 'ฝึกงาน'].map((label, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.button4,
                    selectedButtons.includes(index) && styles.selectedButton,
                  ]}
                  onPress={() => toggleButton(index)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      selectedButtons.includes(index) && styles.selectedButtonText,
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.separatorLine1} />
          <View style={styles.separatorLine2} >
            <View style={styles.separatorLine3}>
              <Text style={styles.Textframe1}>
                เลือกงานตามอำเภอ
              </Text>
              <View style={styles.salaryBox2}>
                <View style={styles.searchContainer}>
                  <Icon name="search" size={20} color="#888" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="ค้นหาอำเภอที่ต้องการ"
                    placeholderTextColor="#888"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.salaryBox2_1}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
              {jobData.map((data, index) => (
                <View key={index} style={styles.item}>
                  <Text style={styles.Textframe1_2}>{data.label} {data.count ? `(${data.count})` : ''}</Text>
                  <View style={styles.item1}>
                    <View>
                      {data.items1 && data.items1.map((item, i) => (
                        <Text key={i} style={styles.Textframe1_1} >{item}</Text>
                      ))}
                    </View>
                    <View>
                      {data.items2 && data.items2.map((item, i) => (
                        <Text key={i} style={styles.Textframe1_1_1} >{item}</Text>
                      ))}
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.separatorLine1} />
          <View style={styles.separatorLine2} >
            <View style={styles.separatorLine3}>
              <Text style={styles.Textframe1}>
                เลือกงานตามอำเภอ
              </Text>
              <View style={styles.salaryBox2}>
                <View style={styles.searchContainer}>
                  <Icon name="search" size={20} color="#888" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="ค้นหาอำเภอที่ต้องการ"
                    placeholderTextColor="#888"
                  />
                </View>
              </View>
            </View>
            <View style={styles.container5_2}>
              {['ค่าอาหาร', 'ค่าเดินทาง', 'ค่ารักษาพยาบาล', 'ที่พักฟรี', 'ยูนิฟอร์ม์มฟรี'].map((label, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.button5,
                    selectedButtons.includes(index) && styles.selectedButton,
                  ]}
                  onPress={() => toggleButton(index)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      selectedButtons.includes(index) && styles.selectedButtonText,
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.separatorLine1} />
        </View>
      </ScrollView>
      <View style={styles.screen}>
        <View style={styles.screen1}>
        <TouchableOpacity style={styles.screen3}>
            <Text style={styles.screenText1}>ล้างตัวเลือกทั้งหมด</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screen2} onPress={handleAdvertisingprocess}>
            <Text style={styles.screenText}>บันทึกการค้นหา</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  item: {
    paddingLeft: 20,
    marginBottom: 20
  },
  item1: {
    flexDirection: 'row',
  },
  scrollView: {
    flexDirection: 'row',
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  container4_1: {
    height: 1000
  },
  container5_1: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: - 10
  },
  container5_2: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  screen: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  screen1: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
  },
  screen1_1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  screen2: {
    backgroundColor: '#FFB472',
    width: 230,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  screen3: {
    backgroundColor: '#F3F3F3',
    width: 135,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  screenText: {
    color: '#FFFFFF',
    fontFamily: 'Sarabun-SemiBold',
    fontSize: 13,
  },
  screenText1:{
    color: '#6D6D6D',
    fontFamily: 'Sarabun-SemiBold',
    fontSize: 13,
  },
  button: {
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#FFB472',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  button1: {
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#FFB472',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginRight: 10
  },
  button3: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#FFB472',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 10
  },
  button4: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#FFB472',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 10
  },
  button5: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#FFB472',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 10
  },
  selectedButton: {
    backgroundColor: '#FFB472',
    borderColor: '#FF8749',
  },
  buttonText: {
    color: '#4A4A4A',
    fontSize: 12,
    fontFamily: 'Sarabun-Medium',
  },
  Textframe1_1: {
    color: '#868686',
    fontSize: 12,
    fontFamily: 'Sarabun-Medium',
  },
  Textframe1_1_1: {
    color: '#868686',
    fontSize: 12,
    fontFamily: 'Sarabun-Medium',
    marginLeft: 10
  },
  Textframe1_2: {
    color: '#DF8C62',
    fontSize: 12,
    fontFamily: 'Sarabun-Medium',
  },
  selectedButtonText: {
    color: '#FFFFFF',
  },
  separatorLine1: {
    borderBottomWidth: 2,
    borderBottomColor: '#F1F1F1',
  },
  separatorLine2: {
    padding: 20,
    marginBottom: -10
  },
  separatorLine3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  Textframe1: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 13,
    color: '#DF8C62',
    marginBottom: 5
  },
  salaryBox1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 13,
    color: '#DF8C62'
  },
  distanceLabel: {
    fontFamily: 'Sarabun-SemiBold',
    fontSize: 13,
    color: '#DF8C62'
  },
  pageText1_1_1: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 10,
    color: '#6D6D6D'
  },
  salaryBox: {
    width: 175,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 15,
    backgroundColor: '#F3F3F3',
    paddingVertical: 3,
    width: 200
  },
  salaryBox2_1: {

  },
  icon: {
    marginRight: 8, 
  },
  input: {
    flex: 1,
    fontSize: 10,
    color: '#ACACAC',
    fontFamily: 'Sarabun-Medium',
  },
  categoryContainer: {
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    width: 250, 
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  subItemText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
});

export default Promotiondetails;
