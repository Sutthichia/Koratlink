import React, { useState, useRef, useContext } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, View, Image, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const JobSeekerProfile = ({ navigation, setCurrentTab }) => {
  const [searchText, setSearchText] = useState('');
  const options = [
    { label: 'วิศวกร', label1: '53', image: require('../../images/occupation/engineer.jpg') },
    { label: 'ช่างซ่อมแอร์', label1: '53', image: require('../../images/occupation/Maintenance.jpg') },
    { label: 'นักบัญชี', label1: '53', image: require('../../images/occupation/Accountant.jpg') },
    { label: 'ส่งอาหาร', label1: '53', image: require('../../images/occupation/Delivery.jpg') },
    { label: 'แม่บ้าน', label1: '53', image: require('../../images/occupation/maid.jpg') },
  ];

  const options1 = [
    {
      logo: require('../../images/profile/image 2.png'),
      companyName: 'อนันต์ พิริยากร',
      jobTitle: '( อายุ 35 ปี )',
      views: 239,
      type: 'บริษัท',
      timeAgo: '1 ชั่วโมงที่แล้ว',
      tags1: 'พร้อมเริ่มงานทันที',
      tags2: 'ไม่มีประวัติอาชญากรรม',
      status: 'อ.เมืองนครราชสีมา',
      status1: 'ปริญญาตรีวิศวกรรมไฟฟ้า',
      status2: 'ตำแหน่งวิศวกรไฟฟ้า',
      status3: 'ประสบการณ์ทำงาน 6 ปี',
      salary: {
        min: 'ดูโปรไฟล์',
        max: 'ติดต่อ',
      },
    },
    {
      logo: require('../../images/profile/image 4.png'),
      companyName: 'อนุชา งามวงศ์',
      jobTitle: '( อายุ 25 ปี )',
      views: 239,
      type: 'ร้านค้า',
      timeAgo: '1 ชั่วโมงที่แล้ว',
      tags1: 'พร้อมเริ่มงานทันที',
      tags2: 'ไม่มีประวัติอาชญากรรม',
      status: 'อ.เมืองนครราชสีมา',
      status1: 'ปริญญาตรีวิศวกรรมไฟฟ้า',
      status2: 'ตำแหน่งวิศวกรไฟฟ้า',
      status3: 'ประสบการณ์ทำงาน 6 ปี',
      salary: {
        min: 'ดูโปรไฟล์',
        max: 'ติดต่อ',
      },
    },
    {
      logo: require('../../images/profile/image 6.png'),
      companyName: 'ดาริน พิลาณี',
      jobTitle: '( อายุ 28 ปี )',
      views: 239,
      type: 'ร้านค้า',
      timeAgo: '1 ชั่วโมงที่แล้ว',
      tags1: 'พร้อมเริ่มงานทันที',
      tags2: 'ไม่มีประวัติอาชญากรรม',
      status: 'อ.เมืองนครราชสีมา',
      status1: 'ปริญญาตรีวิศวกรรมไฟฟ้า',
      status2: 'ตำแหน่งวิศวกรไฟฟ้า',
      status3: 'ประสบการณ์ทำงาน 6 ปี',
      salary: {
        min: 'ดูโปรไฟล์',
        max: 'ติดต่อ',
      },
    },
    {
      logo: require('../../images/profile/image 5.png'),
      companyName: 'KoratLink',
      jobTitle: '( อายุ 31 ปี )',
      views: 239,
      type: 'ร้านค้า',
      timeAgo: '1 ชั่วโมงที่แล้ว',
      tags1: 'พร้อมเริ่มงานทันที',
      tags2: 'ไม่มีประวัติอาชญากรรม',
      status: 'อ.เมืองนครราชสีมา',
      status1: 'ปริญญาตรีวิศวกรรมไฟฟ้า',
      status2: 'ตำแหน่งวิศวกรไฟฟ้า',
      status3: 'ประสบการณ์ทำงาน 6 ปี',
      salary: {
        min: 'ดูโปรไฟล์',
        max: 'ติดต่อ',
      },
    },
    {
      logo: require('../../images/profile/image (4).png'),
      companyName: 'KoratLink',
      jobTitle: '( อายุ 31 ปี )',
      views: 239,
      type: 'ร้านค้า',
      timeAgo: '1 ชั่วโมงที่แล้ว',
      tags1: 'พร้อมเริ่มงานทันที',
      tags2: 'ไม่มีประวัติอาชญากรรม',
      status: 'อ.เมืองนครราชสีมา',
      status1: 'ปริญญาตรีวิศวกรรมไฟฟ้า',
      status2: 'ตำแหน่งวิศวกรไฟฟ้า',
      status3: 'ประสบการณ์ทำงาน 6 ปี',
      salary: {
        min: 'ดูโปรไฟล์',
        max: 'ติดต่อ',
      },
    },
  ]

  const handleProfilejob = () => {
    navigation.navigate('Personald่');
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1} >
        <TouchableOpacity style={styles.searchSection}>
          <Ionicons name="search-outline" size={15} color="#939393" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBox}
            placeholder="ค้นหาประเภทงาน"
            placeholderTextColor="#A3A3A3"
            value={searchText}
            onChangeText={setSearchText}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <TouchableOpacity style={styles.top6} >
          <View style={styles.top5}>
            <Ionicons name="briefcase-outline" size={24} color="#EAC7B8" />
            <View />
          </View>
          <Text style={styles.separatorText6}> ล่าสุด </Text>
        </TouchableOpacity>
        <View style={styles.top7} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {options.map((option, index) => (
            <TouchableOpacity key={index} style={styles.optionButton}>
              <Image source={option.image} style={styles.optionImage} />
              <Text style={styles.optionText1}>{option.label}</Text>
              <View style={styles.top4}>
                <Text style={styles.optionText}>{option.label1}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView>
        {options1.map((options1, index) => (
          <View key={index} style={styles.container4}>
            <TouchableOpacity style={styles.container5} onPress={handleProfilejob} >
              <View style={styles.container5_1}>
                <Image source={options1.logo} style={styles.logo} resizeMode="contain" />
                <View style={styles.container6}>
                  <View style={styles.container9} >
                    <Text style={styles.separatorText1}>{options1.companyName}</Text>
                    <Text style={styles.separatorText2}>{options1.jobTitle}</Text>
                  </View>
                  <View style={styles.container15}>
                    <View style={styles.container13}>
                      <Ionicons name="briefcase-outline" size={15} color="#CC9B86" />
                      <View style={styles.container14}>
                        <Text style={styles.separatorText5}>{options1.status2}</Text>
                      </View>
                    </View>
                    <View style={styles.container18}>
                      <View style={styles.container8}>
                        <Ionicons name="eye-outline" size={12} color="#CC9B86" />
                        <View style={styles.container17}>
                          <Text style={styles.separatorText3}>{options1.views} เข้าชม</Text>
                        </View>
                        <View style={styles.separatorLine1} />
                      </View>
                      <View style={styles.container8}>
                        <Ionicons name="time-outline" size={12} color="#CC9B86" />
                        <View style={styles.container17}>
                          <Text style={styles.separatorText3}>{options1.timeAgo}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.container16}>
                <View style={styles.urgent}>
                  <View style={styles.urgent1}>
                    <Text style={styles.separatorText111}>{options1.tags1}</Text>
                  </View>
                </View>
                <View style={styles.urgent}>
                  <View style={styles.urgent2}>
                    <Text style={styles.separatorText4}>{options1.tags2}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.container13_1}>
                <View >
                  <View style={styles.container13}>
                    <Ionicons name="location-outline" size={15} color="#CC9B86" />
                    <View style={styles.container14}>
                      <Text style={styles.separatorText5}>{options1.status}</Text>
                    </View>
                  </View>
                  <View style={styles.container13}>
                    <Ionicons name="school-outline" size={15} color="#CC9B86" />
                    <View style={styles.container14}>
                      <Text style={styles.separatorText5}>{options1.status1}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.container13_2} >
                  <View style={styles.container13}>
                    <Ionicons name="ribbon-outline" size={15} color="#CC9B86" />
                    <View style={styles.container14}>
                      <Text style={styles.separatorText5}>{options1.status3}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.container13_3}>
              <TouchableOpacity style={styles.container13_4} onPress={handleProfilejob}>
                <Text style={styles.separatorText6_1}>{options1.salary?.min}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.container13_5}
                onPress={() => {
                  navigation.navigate('แชท');
                  if (setCurrentTab) {
                    setCurrentTab(2); 
                  }
                }}
              >
                <Text style={styles.separatorText6_2}>{options1.salary?.max}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.separatorLine} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container1: {
    alignItems: 'center'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
  searchBox: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 11,
    fontFamily: 'Sarabun-Medium',
    color: '#333333',
  },
  container2: {
    flexDirection: 'row',
  },
  top6: {
    width: 90,
    alignItems: 'center',
  },
  top5: {
    width: 52,
    height: 52,
    backgroundColor: '#FFF4EB',
    borderColor: '#EAC7B8',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 5
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  icon1: {
    marginTop: -24,
    left: 20
  },
  separatorText6: {
    fontFamily: 'Sarabun-Bold',
    fontSize: 10,
    color: '#CA9479'
  },
  top7: {
    width: 1,
    backgroundColor: '#E2C7B9',
    height: 60,
    top: 10
  },
  optionButton: {
    padding: 10,
    alignItems: 'center',
    height: 90
  },
  optionImage: {
    width: 52,
    height: 52,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 5
  },
  optionText1: {
    fontSize: 10,
    fontFamily: 'Sarabun-Medium',
    color: '#666666',
  },
  top4: {
    top: -85,
    left: 18,
    backgroundColor: '#FF8749',
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: 'center',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'Sarabun-Medium'
  },
  container5: {
    padding: 20
  },
  container5_1: {
    flexDirection: 'row',
    marginBottom: 10
  },
  logo: {
    width: 47,
    height: 47,
  },
  container6: {
    marginLeft: 8
  },
  container9: {
    flexDirection: 'row',

  },
  separatorText1: {
    color: '#4A4A4A',
    fontFamily: 'Sarabun-Medium',
    fontSize: 15
  },
  container15: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  separatorText2: {
    color: '#969696',
    fontFamily: 'Inter_18pt-Medium',
    fontSize: 10,
    marginTop: 7,
    marginLeft: 5
  },
  container18: {
    flexDirection: 'row',
    marginLeft: -9
  },
  container8: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  container17: {
    marginLeft: 4
  },
  separatorText3: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 10,
    color: '#CC9B86'
  },
  separatorLine1: {
    height: 10,
    width: 1,
    backgroundColor: '#CC9B86',
    left: 8
  },
  container8: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  container17: {
    marginLeft: 4
  },
  separatorText3: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 10,
    color: '#CC9B86'
  },
  separatorText111: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 10,
    color: '#C66060'
  },
  urgent: {
    marginBottom: 10,

  },
  urgent1: {
    backgroundColor: '#F5E2E2',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    height: 22,
    borderRadius: 50,
    padding: 1.5,
  },
  separatorText6: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 10,
    color: '#C66060'
  },
  urgent2: {
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 50,
    height: 22,
    padding: 1.5,
  },
  separatorText4: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 10
  },
  container10: {
    flexDirection: 'row',
  },
  container13: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container13_1: {
    flexDirection: 'row',
  },
  container13_2: {
    marginLeft: 20
  },
  container13_3: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -25
  },
  container13_4: {
    width: '48%',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFB472',
    borderRadius: 50,
  },
  container13_5: {
    width: '48%',
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#FFB472',
    borderRadius: 50,
  },
  container14: {
    paddingHorizontal: 5,
  },
  container16: {
    flexDirection: 'row',
    right: 7,
    marginBottom: 5
  },
  separatorText5: {
    fontFamily: 'Sarabun-Regular',
    fontSize: 12,
    color: '#6D6D6D',
    marginLeft: 5
  },
  separatorText6_1: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 14,
    color: '#FFFFFF'
  },
  separatorText6_2: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 14,
    color: '#BE7C5A'
  },
  separatorText55: {
    fontFamily: 'Sarabun-Regular',
    fontSize: 12,
    color: '#BE7C5A',
    marginLeft: 5
  },
  separatorLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6D7CF',
    marginVertical: 1,
  },
});

export default JobSeekerProfile; 