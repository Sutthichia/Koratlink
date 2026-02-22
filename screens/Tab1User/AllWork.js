import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView, Image, TouchableWithoutFeedback, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFavoriteJobs } from '../../components/FavoriteJobContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Filter from './add-on/Filter';

const RangeSlider = ({ minDistance, maxDistance, onMinChange, onMaxChange }) => {
  return (
    <View style={styles.sliderLabel}>
      <Text style={styles.sliderLabel}>ระยะทางต่ำสุด: {minDistance} กม.</Text>
      <Slider
        style={styles.distanceSlider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={minDistance}
        onValueChange={onMinChange}
        minimumTrackTintColor="#FF894B"
        maximumTrackTintColor="#D3D3D3"
        thumbTintColor="#FF894B"
      />
      <Text style={styles.sliderLabel}>ระยะทางสูงสุด: {maxDistance} กม.</Text>
      <Slider
        style={styles.distanceSlider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={maxDistance}
        onValueChange={onMaxChange}
        minimumTrackTintColor="#FF894B"
        maximumTrackTintColor="#D3D3D3"
        thumbTintColor="#FF894B"
      />
    </View>
  );
};

const AllWork = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [minDistance, setMinDistance] = useState(0);
  const [maxDistance, setMaxDistance] = useState(100);

  const [options, setOptions] = useState([
    { id: 0, label: 'งานทั้งหมด' }, 
    { id: 1, label: 'งานใกล้ฉัน', dropdownItems: ['ใกล้ฉัน', 'ไกล้ที่สุด'] },
    { id: 7, label: 'ระยะทาง', dropdownItems: [] },
    { id: 2, label: 'ประเภทงาน', dropdownItems: ['งานไอที', 'งานวิศวะ'] },
    { id: 3, label: 'เลือกเงินเดือน', dropdownItems: [] },
    { id: 4, label: 'รูปแบบการทำงาน', dropdownItems: ['เต็มเวลา', 'พาร์ทไทม์'] },
    { id: 5, label: 'วุฒิการศึกษา', dropdownItems: ['มัธยม', 'ปริญญาตรี', 'ปริญญาโท'] },
    { id: 6, label: 'ตัวกรองเพิ่มเติม' }, 
  ]);

  useEffect(() => {
    setSelectedOption(options[0]);
  }, []);

  const handleOptionPress = (option) => {
    if (option.id === 0) {
      setSearchText('');
      setFilteredJobs(jobListings);
      setDropdownVisible(false);
      setSelectedOption(option);
    } else {
      if (selectedOption?.id === option.id) {
        setDropdownVisible(false);
      } else {
        setSelectedOption(option);
        setDropdownVisible(true);
      }
    }
  };

  const { favoriteJobs, addFavoriteJob, removeFavoriteJob } = useFavoriteJobs();

  const handleDropdownSelect = (item) => {
    setOptions(prevOptions => prevOptions.map(o =>
      o.id === selectedOption.id ? { ...o, label: item } : o
    ));
    setDropdownVisible(false);
  };

  const handleSalaryConfirm = () => {
    const salaryLabel = minSalary && maxSalary
      ? `${minSalary} บาท - ${maxSalary} บาท`
      : minSalary
        ? `>${minSalary} บาท`
        : maxSalary
          ? `<${maxSalary} บาท`
          : 'เลือกเงินเดือน';
    setOptions(prevOptions => prevOptions.map(o =>
      o.id === 3 ? { ...o, label: salaryLabel } : o
    ));
    setDropdownVisible(false);
  };

  const handleDistanceConfirm = () => {
    const distanceLabel = `${minDistance} - ${maxDistance} กม.`;
    setOptions(prevOptions => prevOptions.map(o =>
      o.id === 7 ? { ...o, label: distanceLabel } : o
    ));
    setDropdownVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isModalVisible1, setModalVisible1] = useState(false);

  const handleJobFavorite = (job) => {
    if (favoriteJobs.some(favJob => favJob.id === job.id)) {
      removeFavoriteJob(job.id);
      setModalMessage('เอารายการออกเรียบร้อยแล้ว');
    } else {
      addFavoriteJob(job);
      setModalMessage('บันทึกรายการแล้ว');
    }
    setModalVisible(true);

    setTimeout(() => {
      setModalVisible(false);
    }, 800);
  };

  const handleJobPress = (job) => {
    navigation.navigate('JobDetails', { job }); 
  };

  const [jobListings, setJobListings] = useState([
    {
      id: 1,
      logo: require('../../images/Logo1/image.png'),
      companyName: 'Digital Product Designer',
      jobTitle: 'HIGH HOUSE BUILDING',
      views: 239,
      type: 'บริษัท',
      timeAgo: '1 ชั่วโมงที่แล้ว',
      tags1: 'รับสมัครด่วน',
      tags2: 'เหลือเพียง 1 อัตรา',
      tags3: 'รับคนมีประสบการณ์เท่านั้น',
      status: 'สมัครงานนี้ก่อนใคร',
      location: {
        name: 'เมืองนครราชสีมา',
        distance: 3.2
      },
      salary: {
        min: 20000,
        max: 30000
      },
      age: {
        min: 20,
        max: 45
      },
      education: 'วุฒิ ป.ตรีในสาขาที่เกี่ยวข้อง'
    },
    {
      id: 2,
      logo: require('../../images/Logo1/image-4.png'),
      companyName: 'UX/UI Designer for Web/App',
      jobTitle: 'Thai Beverage Plc',
      views: 239,
      type: 'ร้านค้า',
      timeAgo: '1 ชั่วโมงที่แล้ว',
      tags1: 'รับสมัครด่วน',
      tags2: 'เหลือเพียง 1 อัตรา',
      tags3: 'รับคนมีประสบการณ์เท่านั้น',
      status: 'สมัครงานนี้ก่อนใคร',
      location: {
        name: 'เมืองนครราชสีมา',
        distance: 3.2
      },
      salary: {
        min: 20000,
        max: 30000
      },
      age: {
        min: 20,
        max: 45
      },
      education: 'วุฒิ ป.ตรีในสาขาที่เกี่ยวข้อง'
    },
    {
      id: 3,
      logo: require('../../images/Logo1/image-6.png'),
      companyName: 'UXUI designer (Contract 6 months)',
      jobTitle: 'HIGH HOUSE BUILDING',
      views: 239,
      type: 'ร้านค้า',
      timeAgo: '1 ชั่วโมงที่แล้ว',
      tags1: 'รับสมัครด่วน',
      tags2: 'เหลือเพียง 1 อัตรา',
      tags3: 'รับคนมีประสบการณ์เท่านั้น',
      status: 'สมัครงานนี้ก่อนใคร',
      location: {
        name: 'เมืองนครราชสีมา',
        distance: 3.2
      },
      salary: {
        min: 20000,
        max: 30000
      },
      age: {
        min: 20,
        max: 45
      },
      education: 'วุฒิ ป.ตรีในสาขาที่เกี่ยวข้อง'
    },
    {
      id: 4,
      logo: require('../../images/Logo1/image-1.png'),
      companyName: 'Customer Experience & UX UI',
      jobTitle: 'HIGH HOUSE BUILDING',
      views: 239,
      type: 'ร้านค้า',
      timeAgo: '1 ชั่วโมงที่แล้ว',
      tags1: 'รับสมัครด่วน',
      tags2: 'เหลือเพียง 1 อัตรา',
      tags3: 'รับคนมีประสบการณ์เท่านั้น',
      status: 'สมัครงานนี้ก่อนใคร',
      location: {
        name: 'เมืองนครราชสีมา',
        distance: 3.2
      },
      salary: {
        min: 20000,
        max: 30000
      },
      age: {
        min: 20,
        max: 45
      },
      education: 'วุฒิ ป.ตรีในสาขาที่เกี่ยวข้อง'
    },
    {
      id: 5,
      logo: require('../../images/Logo1/image.png'),
      companyName: 'UXUI',
      jobTitle: 'HIGH',
      views: 239,
      type: 'บริษัท',
      timeAgo: '1 ชั่วโมงที่แล้ว',
      tags1: 'รับสมัครด่วน',
      tags2: 'เหลือเพียง 1 อัตรา',
      tags3: 'รับคนมีประสบการณ์เท่านั้น',
      status: 'สมัครงานนี้ก่อนใคร',
      location: {
        name: 'เมืองนครราชสีมา',
        distance: 3.2
      },
      salary: {
        min: 20000,
        max: 30000
      },
      age: {
        min: 20,
        max: 45
      },
      education: 'วุฒิ ป.ตรีในสาขาที่เกี่ยวข้อง'
    },
    {
      id: 6,
      logo: require('../../images/Logo/image.png'),
      companyName: 'เจ้าหน้าที่บัญชี สาขาจอหอ',
      jobTitle: 'HIGH HOUSE BUILDING',
      views: 239,
      type: 'บริษัท',
      timeAgo: '1 ชั่วโมงที่แล้ว',
      tags1: 'รับสมัครด่วน',
      tags2: 'เหลือเพียง 1 อัตรา',
      tags3: 'รับคนมีประสบการณ์เท่านั้น',
      status: 'สมัครงานนี้ก่อนใคร',
      location: {
        name: 'เมืองนครราชสีมา',
        distance: 3.2
      },
      salary: {
        min: 20000,
        max: 30000
      },
      age: {
        min: 20,
        max: 45
      },
      education: 'วุฒิ ป.ตรีในสาขาที่เกี่ยวข้อง'
    },
  ]);

  const [filteredJobs, setFilteredJobs] = useState(jobListings);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = jobListings.filter(job =>
      job.companyName.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredJobs(filtered);
  };
  
  const toggleModal = () => {
    setModalVisible1(!isModalVisible1);
  };
  
  const handleSkip = () => {
    navigation.navigate('Fillter'); 
  };
  const handleWarn = () => {
    navigation.navigate('Warn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FFB472', '#FFFFFF']}
        locations={[0.1, 0.5]}
        style={styles.background}
      />
      <View style={styles.header}>
        <Text style={styles.separatorText}>KoratLink</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={handleWarn} >
          <Ionicons name="notifications-outline" size={20} color="#FFFFFF" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchSection}>
        <Ionicons name="search-outline" size={15} color="#939393" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBox}
          placeholder="ค้นหางานจากประสบการณ์ทำงาน / ค้นหาจากวุฒิการศึกษา..."
          placeholderTextColor="#A3A3A3"
          value={searchText}
          onChangeText={handleSearch} 
        />
        <TouchableOpacity onPress={handleSkip} >
          <AntDesign name="bars" size={22} color="#939393" style={styles.searchIcon1} />
        </TouchableOpacity>
      </View>
      <View style={styles.background1}>
        <View style={styles.background2}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.menuContentContainer}
          >
            {options.map((option, index) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionButton,
                  selectedOption?.id === option.id && styles.selectedOptionButton,
                ]}
                onPress={() => {
                  if (option.id === 0) {
                    setSearchText('');
                    setFilteredJobs(jobListings);
                    setDropdownVisible(false);
                    handleOptionPress(option);
                  }
                  else if (option.id === 6) {
                    navigation.navigate('Fillter');
                  }
                  else {
                    handleOptionPress(option);
                  }
                }}
              >
                <Text
                  style={[
                    styles.optionText1,
                    selectedOption?.id === option.id && styles.selectedOptionText,
                  ]}
                >
                  {option.label}
                </Text>
                {option.dropdownItems && option.dropdownItems.length > 0 ? (
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={20}
                    color={selectedOption?.id === option.id ? '#FFFFFF' : '#726D6B'}
                    style={styles.optionIcon}
                  />
                ) : null}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {dropdownVisible && (
        <TouchableWithoutFeedback onPress={() => setDropdownVisible(false)}>
          <View style={styles.dropdownOverlay}>
            <View style={styles.dropdown}>
              {selectedOption.id === 3 && (
                <View>
                  <Text style={styles.separatorText}>KoratLink</Text>
                  <TextInput
                    style={styles.salaryInput}
                    placeholder="เงินเดือนเริ่มต้น (บาท)"
                    keyboardType="numeric"
                    value={minSalary}
                    onChangeText={setMinSalary}
                  />
                  <Text style={styles.separatorText}>KoratLink</Text>
                  <TextInput
                    style={styles.salaryInput}
                    placeholder="เงินเดือนสูงสุด (บาท)"
                    keyboardType="numeric"
                    value={maxSalary}
                    onChangeText={setMaxSalary}
                  />
                  <TouchableOpacity style={styles.confirmButton} onPress={handleSalaryConfirm}>
                    <Text style={styles.confirmButtonText}>ใช่</Text>
                  </TouchableOpacity>
                </View>
              )}
              {selectedOption.id === 7 && (
                <View>
                  <RangeSlider
                    minDistance={minDistance}
                    maxDistance={maxDistance}
                    onMinChange={setMinDistance}
                    onMaxChange={setMaxDistance}
                  />
                  <TouchableOpacity style={styles.confirmButton} onPress={handleDistanceConfirm}>
                    <Text style={styles.confirmButtonText}>ใช่</Text>
                  </TouchableOpacity>
                </View>
              )}
              {selectedOption.id !== 3 && selectedOption.id !== 7 && selectedOption.dropdownItems && (
                selectedOption.dropdownItems.map((item, idx) => (
                  <TouchableOpacity key={idx} style={styles.dropdownItem} onPress={() => handleDropdownSelect(item)}>
                    <Text style={styles.dropdownText}>{item}</Text>
                  </TouchableOpacity>
                ))
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>{modalMessage}</Text>
          </View>
        </View>
      </Modal>
      <View style={styles.space}>
        <Text style={styles.Text}>งานทั้งหมด (22,545)</Text>
        <View style={styles.space1}>
          
        </View>
        <TouchableOpacity 
          style={styles.button} 
          onPress={toggleModal}
        >
        <Text style={styles.Text111}>จัดเรียงตาม</Text>
          <Text style={styles.Text11}>:</Text>
          <Text style={styles.Text}>ใหม่ล่าสุด</Text> 
        </TouchableOpacity>
      </View>
      <Filter isModalVisible1={isModalVisible1} toggleModal={toggleModal} />
      <View style={styles.top1} />
      <ScrollView style={styles.container2}>
        {filteredJobs.map(job => (
          <View key={job.id} style={styles.container4}>
            <TouchableOpacity style={styles.container5} onPress={() => handleJobPress(job)} >
              <Image source={job.logo} style={styles.logo} resizeMode="contain" />
              <View style={styles.container6}>
                <View style={styles.container9} >
                  <Text style={styles.separatorText1}>{job.companyName}</Text>
                </View>
                <TouchableOpacity onPress={() => handleJobFavorite(job)} style={styles.Bottom} >
                    <MaterialCommunityIcons
                      name={favoriteJobs.some(favJob => favJob.id === job.id) ? 'bookmark' : 'bookmark-outline'}
                      size={24}
                      color={favoriteJobs.some(favJob => favJob.id === job.id) ? 'red' : '#A6A6A6'}
                    />
                  </TouchableOpacity>
                <View style={styles.container15}>
                  <Text style={styles.separatorText2}>{job.jobTitle}</Text>
                  <View style={styles.container18}>
                    <View style={styles.container8}>
                      <Ionicons name="eye-outline" size={12} color="#CC9B86" />
                      <View style={styles.container17}>
                        <Text style={styles.separatorText3}>{job.views} เข้าชม</Text>
                      </View>
                      <View style={styles.separatorLine1} />
                    </View>
                    <View style={styles.container8}>
                      <Ionicons name="time-outline" size={12} color="#CC9B86" />
                      <View style={styles.container17}>
                        <Text style={styles.separatorText3}>{job.timeAgo}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.container16}>
                  <View style={styles.urgent}>
                    <View style={styles.urgent1}>
                      <Text style={styles.separatorText6}>{job.tags1}</Text>
                    </View>
                  </View>
                  <View style={styles.urgent}>
                    <View style={styles.urgent2}>
                      <Text style={styles.separatorText4}>{job.tags2}</Text>
                    </View>
                  </View>
                  <View style={styles.urgent}>
                    <View style={styles.urgent2}>
                      <Text style={styles.separatorText4}>{job.tags3}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.container10}>
                  <View>
                    <View style={styles.container13}>
                      <Ionicons name="location-outline" size={15} color="#CC9B86" />
                      <View style={styles.container14}>
                        <Text style={styles.separatorText5}>{job.location.name} ({job.location.distance} km)</Text>
                      </View>
                    </View>
                    <View style={styles.container13}>
                      <Ionicons name="cash-outline" size={15} color="#CC9B86" />
                      <View style={styles.container14}>
                        <Text style={styles.separatorText5}>{job.salary.min} - {job.salary.max} บาท</Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <View style={styles.container13}>
                      <Ionicons name="reload-circle-outline" size={15} color="#CC9B86" />
                      <View style={styles.container14}>
                        <Text style={styles.separatorText5}>อายุ {job.age.min} - {job.age.max} ปี</Text>
                      </View>
                    </View>
                    <View style={styles.container13}>
                      <Ionicons name="school-outline" size={15} color="#CC9B86" />
                      <View style={styles.container14}>
                        <Text style={styles.separatorText5}>{job.education}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <Text style={styles.separatorText11}>{job.status}</Text>
            <View style={styles.separatorLine} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: 'center',
  },
  container2: {
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  container3: {
    alignItems: 'center',
  },
  container4: {

  },
  space: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 8,
    marginBottom: -10
  },
  space2: {
    flexDirection: 'row',

  },
  button: {
    flexDirection: 'row',
  },
  Text: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 11,
    color: '#EB9D75'
  },
  Text11:{
    fontFamily: 'Sarabun-Medium',
    fontSize: 11,
    color: '#EB9D75'
  },
  Text111:{
    fontFamily: 'Sarabun-Medium',
    fontSize: 11,
    color: '#726D6B'
  },
  container5: {
    flexDirection: 'row',
    padding: 15
  },
  container6: {
    marginLeft: 8
  },
  container7: {
    flexDirection: 'row',

  },
  container8: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  container9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container10: {
    flexDirection: 'row',
  },
  container11: {
    flexDirection: 'row',
  },
  container12: {
    flexDirection: 'row',
  },
  container13: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container14: {
    paddingHorizontal: 5,
  },
  container15: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  container16: {
    flexDirection: 'row',
    right: 7
  },
  container18: {
    flexDirection: 'row',
    marginLeft: 40
  },
  container17: {
    marginLeft: 4
  },
  urgent1: {
    backgroundColor: '#F5E2E2',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    height: 22,
    borderRadius: 50,
    padding: 1.5,
  },
  urgent: {
    marginBottom: 10,

  },
  urgent2: {
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 50,
    height: 22,
    padding: 1.5,
  },
  Bottom: {
    marginLeft: 300,
    marginTop:-25
  },
  separatorLine: {
    borderBottomWidth: 1,  
    borderBottomColor: '#E6D7CF', 
    marginVertical: 1,  
  },
  separatorLine1: {
    height: 10,
    width: 1,
    backgroundColor: '#CC9B86',
    left: 8
  },
  logo: {
    width: 45,
    height: 35,
  },
  top1: {
    backgroundColor: '#F2EBE5',
    width: '100%',
    height: 1
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  background1: {
    width: '100%',
    marginTop: -20
  },
  background2: {
    height: 55,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separatorText: {
    fontFamily: 'Inter_18pt-ExtraBold',
    fontSize: 18,
    color: '#FFFFFF',
    paddingRight: 250
  },
  separatorText1: {
    color: '#4A4A4A',
    fontFamily: 'Sarabun-Medium',
    fontSize: 15
  },
  separatorText2: {
    color: '#969696',
    fontFamily: 'Inter_18pt-Medium',
    fontSize: 10
  },
  separatorText3: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 10,
    color: '#CC9B86'
  },
  separatorText4: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 10
  },
  separatorText5: {
    fontFamily: 'Sarabun-Regular',
    fontSize: 12,
    color: '#6D6D6D'
  },
  separatorText6: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 10,
    color: '#C66060'
  },
  separatorText11:{
    color: '#FFFFFF',
    fontSize:0.5,
    top: -10
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: '#fff',
    marginTop: 15,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  searchIcon1: {
    paddingRight: 10,
  },
  searchBox: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 11,
    fontFamily: 'Sarabun-Medium',
    color: '#333333',
  },
  icon: {
    marginHorizontal: 5,
  },
  optionButton: {
    margin: 12,
    padding: 6,
    height: 30,
    backgroundColor: '#FFF4EB',
    marginHorizontal: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedOptionButton: {
    backgroundColor: '#FFB472',
  },
  optionText1: {
    fontSize: 11,
    fontFamily: 'Sarabun-Medium',
  },
  selectedOptionText: {
    color: '#FFFFFF',
  },
  menuContentContainer: {
    paddingLeft: 15,
  },
  optionIcon: {
    marginLeft: 1,
    left: 3
  },
  dropdownOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
  },
  dropdown: {
    backgroundColor: '#F7F7F7',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 170,
    width: '85%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    padding: 10,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1, 
    borderBottomColor: '#EEEEEE',
  },
  dropdownText: {
    fontSize: 16,
    color: '#222222',
    fontFamily: 'Sarabun-Medium',
  },
  salaryInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  confirmButton: {
    backgroundColor: '#FF894B',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
  },
  sliderLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333333',

  },
  distanceSlider: {
    width: 300,
    height: 40,

  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default AllWork;