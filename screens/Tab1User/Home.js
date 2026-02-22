import React, { useState, useRef, useContext } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TabBarContext } from '../../components/TabBarContext';
import Feather from '@expo/vector-icons/Feather';

const ScreenA = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const scrollViewRef = useRef(null);
  const { tabBarIcons } = useContext(TabBarContext);
  const options = [
    { label: 'วิศวกร', label1: '53', image: require('../../images/occupation/engineer.jpg') },
    { label: 'ช่างซ่อมแอร์', label1: '53', image: require('../../images/occupation/Maintenance.jpg') },
    { label: 'นักบัญชี', label1: '53', image: require('../../images/occupation/Accountant.jpg') },
    { label: 'ส่งอาหาร', label1: '53', image: require('../../images/occupation/Delivery.jpg') },
    { label: 'แม่บ้าน', label1: '53', image: require('../../images/occupation/maid.jpg') },
  ];

  const koratConnextData = [
    {
      image: require('../../images/icon/image-3_1.png'),
      text: 'โคราชกินอะไรดี',
      textStyle: styles.separatorText9,
    },
    {
      image: require('../../images/icon/image_2.png'),
      text: 'ที่เที่ยวโคราช',
      textStyle: styles.separatorText9,
    },
    {
      image: require('../../images/icon/image-1_1.png'),
      text: 'Marketplace',
      textStyle: styles.separatorText10,
    },
    {
      image: require('../../images/icon/image-2_1.png'),
      text: 'ชาวโคราชบอกต่อ',
      textStyle: styles.separatorText9,
    },
  ];

  const Publicrelationsnews = [
    {
      image: require('../../images/advert/image-1.png'),
    },
    {
      image: require('../../images/advert/image.png'),
    },
    {
      image: require('../../images/advert/image.png'),
    },
    {
      image: require('../../images/advert/image.png'),
    },
  ]

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSkip = () => {
    navigation.navigate('งานทั้งหมด');
  };
  const handleWarn = () => {
    navigation.navigate('Warn');
  };

  const handleFillter = () => {
    navigation.navigate('Fillter');
  };
  const handleAddhistory = () => {
    navigation.navigate('Addhistory');
  };
  
  const options1 = [
    {
      logo: require('../../images/Logo/image.png'),
      companyName: 'แม่บ้านประจำศูนย์อาหาร..',
      jobTitle: 'HIGH HOUSE BUILDING',
      views: 239,
      type: 'บริษัท',
      timeAgo: '1 ชั่วโมงที่แล้ว',
      tags1: 'พร้อมเริ่มงานทันที',
      tags2: 'ไม่มีประวัติอาชญากรรม',
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
      education: 'ประสบการณ์ทำงาน 6 ปี'
    },
    {
      logo: require('../../images/Logo/image.png'),
      companyName: 'แม่บ้านประจำศูนย์อาหาร..',
      jobTitle: 'HIGH HOUSE BUILDING',
      views: 239,
      type: 'ร้านค้า',
      timeAgo: '1 ชั่วโมงที่แล้ว',
      tags1: 'พร้อมเริ่มงานทันที',
      tags2: 'ไม่มีประวัติอาชญากรรม',
      status: 'ดูรายการสมัคร',
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
      education: 'ประสบการณ์ทำงาน 6 ปี'
    },
  ]
  
  return (
    <SafeAreaView style={styles.container} >
      <LinearGradient
        colors={['#FFB472', '#FFFFFF']}
        locations={[0.1, 0.5]}
        style={styles.background}
      />
      <View style={styles.TextUp}>
        <Text style={styles.separatorText}> KoratLink </Text>
        <TouchableOpacity style={styles.TextUp1} onPress={handleWarn} >
          <Ionicons name="notifications-outline" size={20} color="#FFFFFF" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.searchSection} onPress={handleSkip} >
        <Ionicons name="search-outline" size={15} color="#939393" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBox}
          placeholder="ค้นหางานจากประสบการณ์ทำงาน / ค้นหาจากวุฒิการศึกษา..."
          placeholderTextColor="#A3A3A3"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={handleFillter} >
          <AntDesign name="bars" size={22} color="#939393" style={styles.searchIcon1} />
        </TouchableOpacity>
      </TouchableOpacity>

      <ScrollView
        style={styles.contentScrollView}
        contentContainerStyle={styles.container1Content}
        ref={scrollViewRef}
      >
        <View style={styles.container1}>
          <Image
            source={require('../../images/Union.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.top}>
            <Text style={styles.separatorText1}> หางานโคราช </Text>
          </View>
          <View style={styles.top1}>
            <TouchableOpacity style={styles.top2}>
              <Text style={styles.separatorText2}> 2,589 </Text>
              <Text style={styles.separatorText3}> งานทั้งหมด </Text>
            </TouchableOpacity>
            <View style={styles.top3} />
            <TouchableOpacity style={styles.top2}>
              <Text style={styles.separatorText2}> 1,589 </Text>
              <Text style={styles.separatorText3}> จำนวนผู้สมัครงาน </Text>
            </TouchableOpacity>
            <View style={styles.top3} />
            <View style={styles.top2}>
              <Text style={styles.separatorText2}> 1,102 </Text>
              <Text style={styles.separatorText3}> จำนวนคนได้งาน </Text>
            </View>
          </View>
          <View style={styles.container4}>
            <View style={styles.top8}>
              <Text style={styles.separatorText7}>korat Connext</Text>
              <Image
                source={require('../../images/occupation/Line 94.png')}
                style={styles.logo2}
                resizeMode="contain"
              />
              <Text style={styles.separatorText8}>ดูทั้งหมด</Text>
            </View>
            <View style={styles.top9}>
              {koratConnextData.map((item, index) => (
                <TouchableOpacity key={index} style={styles.top10}>
                  <Image source={item.image} style={styles.logo3} resizeMode="contain" />
                  <Text style={item.textStyle}>{item.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.top8}>
              <Image
                source={require('../../images/occupation/Line 93.png')}
                style={styles.logo2_1}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={styles.container3}>
            <View style={styles.TextUp2}>
              <Text style={styles.separatorText4}> ฝากประวัติหางานได้ที่นี่ </Text>
              <TouchableOpacity onPress={handleAddhistory}>
                <Text style={styles.separatorText5}> ดูทั้งหมด </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container2}>
              <TouchableOpacity style={styles.top6} onPress={handleAddhistory} >
                <View style={styles.top5}>

                  <Image
                    source={require('../../images/profile/image (4).png')}
                    style={styles.image}
                  />
                  <View />
                </View>
                <Ionicons name="add-circle" size={24} color="#FF935B" style={styles.icon1} />
                <Text style={styles.separatorText6}> เพิ่มประวัติ </Text>
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
          </View>
          
          <View style={styles.top11}>
            <Image
              source={require('../../images/occupation/Line 93.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.newContent}>
          <View style={styles.TextUp3}>
            <Text style={styles.separatorText11}> ฝากประวัติหางานได้ที่นี่ </Text>
            <TouchableOpacity >
              <Text style={styles.separatorText12}> ดูทั้งหมด </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menuContentContainer}
          style={styles.newContent1}>
          {Publicrelationsnews.map((item, index) => (
            <TouchableOpacity key={index} style={styles.top12}>
              <Image source={item.image} style={styles.logo4} resizeMode="contain" />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.newContent}>
          <View style={styles.TextUp3}>
            <Text style={styles.separatorText13}> งานที่มีผู้สนใจมากที่สุดในสัปดาห์นี้ </Text>
            <Text style={styles.separatorText12}> ดูทั้งหมด </Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menuContentContainer}
          style={styles.newContent1}>
        {options1.map((options1, index) => (
          <View style={styles.container44}>
            <TouchableOpacity  style={styles.container5} >
              <Image source={options1.logo} style={styles.logo1} resizeMode="contain" />
              <View style={styles.container6}>
                <View style={styles.container9} >
                  <Text style={styles.separatorText1111}>{options1.companyName}</Text>
                </View>
                <TouchableOpacity  style={styles.Bottom} >
                  <Feather name="bookmark" size={20} color="black" />
                  </TouchableOpacity>
                <View style={styles.container15}>
                <Text style={styles.separatorText21}>{options1.jobTitle}</Text>
                  <View style={styles.container18}>
                    <View style={styles.container8}>
                      <Ionicons name="eye-outline" size={12} color="#CC9B86" />
                      <View style={styles.container17}>
                        <Text style={styles.separatorText31}>{options1.views} เข้าชม</Text>
                      </View>
                      <View style={styles.separatorLine11} />
                    </View>
                    <View style={styles.container8}>
                      <Ionicons name="time-outline" size={12} color="#CC9B86" />
                      <View style={styles.container17}>
                        <Text style={styles.separatorText31}>{options1.timeAgo}</Text>
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
                      <Text style={styles.separatorText41}>{options1.tags2}</Text>
                    </View>
                  </View>

                </View>
                <View style={styles.container10}>
                  <View>
                    <View style={styles.container13}>
                      <Ionicons name="location-outline" size={15} color="#CC9B86" />
                      <View style={styles.container14}>
                        <Text style={styles.separatorText51}>{options1.location?.name} ({options1.location?.distance} km)</Text>
                      </View>
                    </View>
                    <View style={styles.container13}>
                      <Ionicons name="cash-outline" size={15} color="#CC9B86" />
                      <View style={styles.container14}>
                        <Text style={styles.separatorText51}>{options1.salary?.min} - {options1.salary?.max} บาท</Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <View style={styles.container13}>
                      <Ionicons name="reload-circle-outline" size={15} color="#CC9B86" />
                      <View style={styles.container14}>
                        <Text style={styles.separatorText51}>อายุ {options1.age?.min} - {options1.age?.max} ปี</Text>
                      </View>
                    </View>
                    <View style={styles.container13}>
                      <Ionicons name="school-outline" size={15} color="#CC9B86" />
                      <View style={styles.container14}>
                        <Text style={styles.separatorText51}>{options1.education}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.newContent2}>
          <View style={styles.TextUp3}>
            <Text style={styles.separatorText13}> งานที่แนะนำ                                   </Text>
            <Text style={styles.separatorText12}> ดูทั้งหมด </Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menuContentContainer}
          style={styles.newContent1}>
        {options1.map((options1, index) => (
          <View style={styles.container44}>
            <TouchableOpacity  style={styles.container5} >
              <Image source={options1.logo} style={styles.logo1} resizeMode="contain" />
              <View style={styles.container6}>
                <View style={styles.container9} >
                  <Text style={styles.separatorText1111}>{options1.companyName}</Text>
                </View>
                <TouchableOpacity  style={styles.Bottom} >
                  <Feather name="bookmark" size={20} color="black" />
                  </TouchableOpacity>
                <View style={styles.container15}>
                <Text style={styles.separatorText21}>{options1.jobTitle}</Text>
                  <View style={styles.container18}>
                    <View style={styles.container8}>
                      <Ionicons name="eye-outline" size={12} color="#CC9B86" />
                      <View style={styles.container17}>
                        <Text style={styles.separatorText31}>{options1.views} เข้าชม</Text>
                      </View>
                      <View style={styles.separatorLine11} />
                    </View>
                    <View style={styles.container8}>
                      <Ionicons name="time-outline" size={12} color="#CC9B86" />
                      <View style={styles.container17}>
                        <Text style={styles.separatorText31}>{options1.timeAgo}</Text>
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
                      <Text style={styles.separatorText41}>{options1.tags2}</Text>
                    </View>
                  </View>

                </View>
                <View style={styles.container10}>
                  <View>
                    <View style={styles.container13}>
                      <Ionicons name="location-outline" size={15} color="#CC9B86" />
                      <View style={styles.container14}>
                        <Text style={styles.separatorText51}>{options1.location?.name} ({options1.location?.distance} km)</Text>
                      </View>
                    </View>
                    <View style={styles.container13}>
                      <Ionicons name="cash-outline" size={15} color="#CC9B86" />
                      <View style={styles.container14}>
                        <Text style={styles.separatorText51}>{options1.salary?.min} - {options1.salary?.max} บาท</Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <View style={styles.container13}>
                      <Ionicons name="reload-circle-outline" size={15} color="#CC9B86" />
                      <View style={styles.container14}>
                        <Text style={styles.separatorText51}>อายุ {options1.age?.min} - {options1.age?.max} ปี</Text>
                      </View>
                    </View>
                    <View style={styles.container13}>
                      <Ionicons name="school-outline" size={15} color="#CC9B86" />
                      <View style={styles.container14}>
                        <Text style={styles.separatorText51}>{options1.education}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
  contentScrollView: {
    flex: 1,
    width: '100%',
  },
  container1: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  container1Content: {
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
  },
  container3: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF4EB',
    borderColor: '#E6D6CE',
    borderWidth: 0.5,
    marginTop: 20,
    height: 142
  },
  container4: {
    marginTop: 4
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
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
  logo: {
    width: 500,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginLeft: 7,
    marginTop: 10
  },
  logo2: {
    width: '60%',
    height: 10
  },
  logo2_1: {
    width: '90%',
    height: 10
  },
  logo3: {
    width: 80,
    height: 80,
  },
  logo4: {
    width: 200,
    height: 114,
    borderRadius: 10,
  },
  optionImage: {
    width: 52,
    height: 52,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 5
  },
  TextUp: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  TextUp1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextUp2: {
    flexDirection: 'row',
    alignItems: 'center',
    top: -5
  },
  TextUp3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  separatorText: {
    fontFamily: 'Inter_18pt-ExtraBold',
    fontSize: 18,
    color: "#FFFFFF",
    paddingRight: 250
  },
  separatorText1: {
    fontFamily: 'Sarabun-MediumItalic',
    fontSize: 10,
    color: "#BF7C5B"
  },
  separatorText2: {
    fontFamily: 'Inter_18pt-Bold',
    fontSize: 20,
    color: "#BF7C5B"
  },
  separatorText3: {
    fontFamily: 'Sarabun-Bold',
    fontSize: 10,
    color: "#BF7C5B"
  },
  separatorText4: {
    fontFamily: 'Sarabun-ExtraBold',
    fontSize: 12,
    color: "#BF7C5B",
    paddingRight: 210
  },
  separatorText5: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 10,
    color: "#BF7C5B"
  },
  separatorText6: {
    fontFamily: 'Sarabun-Bold',
    fontSize: 10,
    color: '#CA9479'
  },
  separatorText7: {
    fontFamily: 'Inter_18pt-Bold',
    color: '#5B5B5B',
    fontSize: 12,
  },
  separatorText8: {
    fontFamily: 'Sarabun-Bold',
    color: '#CA9479',
    fontSize: 10,
    left: 4
  },
  separatorText9: {
    fontFamily: 'NotoSansThai_ExtraCondensed-SemiBold',
    fontSize: 12,
  },
  separatorText10: {
    fontFamily: 'Inter_18pt-SemiBold',
    fontSize: 12,
  },
  separatorText11: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 12,
    color: "#5B5B5B",
    paddingRight: 210
  },
  separatorText12: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 10,
    color: "#BE7C5A"
  },
  separatorText13: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 12,
    color: "#5B5B5B",
    paddingRight: 160
  },
  icon: {
    marginHorizontal: 5,
  },
  icon1: {
    marginTop: -24,
    left: 20
  },
  top: {
    alignItems: 'center',
    marginTop: -11
  },
  top1: {
    flexDirection: 'row',
    marginTop: 10
  },
  top2: {
    width: 135,
    alignItems: 'center',
  },
  top3: {
    width: 2,
    backgroundColor: '#E2C7B9'
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
  top5: {
    width: 52,
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 5
  },
  top6: {
    width: 90,
    alignItems: 'center',
  },
  top7: {
    width: 2,
    backgroundColor: '#E2C7B9',
    height: 60,
    top: 10
  },
  top8: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  top9: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top10: {
    alignItems: 'center',
  },
  top11: {
    marginTop: -15
  },
  top12: {
    marginHorizontal: 10,
  },
  optionButton: {
    padding: 10,
    alignItems: 'center',
    height: 90
  },
  optionText: {
    color: '#E2C7B9',
    fontSize: 10,
    fontFamily: 'Sarabun-Medium'
  },
  optionText1: {
    fontSize: 10,
    fontFamily: 'Sarabun-Medium',
    color: '#666666',
  },
  newContent: {
    padding: 18,
    marginTop: -25,
    backgroundColor: '#FFFFFF'
  },
  newContent2:{
    padding: 18,
    marginTop: -20,
    backgroundColor: '#FFFFFF'
  },
  newContent1: {
    flexDirection: 'row',
    marginTop: -10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF'
  },
  menuContentContainer: {
    paddingLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  
  container5: {
    flexDirection: 'row',
    padding: 15,
    borderWidth: 1,
    borderColor: '#F2EBE5',
    borderRadius: 17,
    marginLeft:10
  },
  logo1: {
    width: 45,
    height: 35,
  },
  container6: {
    marginLeft: 8
  },
  container9: {
    flexDirection: 'row',

  },
  separatorText1111: {
    color: '#4A4A4A',
    fontFamily: 'Sarabun-Medium',
    fontSize: 15
  },
  Bottom: {
    marginLeft: 300,
    marginTop:-25
  },
  container15: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  separatorText21: {
    color: '#969696',
    fontFamily: 'Inter_18pt-Medium',
    fontSize: 10
  },
  container18: {
    flexDirection: 'row',
    marginLeft: -9
  },
  separatorText31: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 10,
    color: '#CC9B86'
  },
  separatorLine11: {
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
  separatorText41: {
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
  container14: {
    paddingHorizontal: 5,
  },
  container16: {
    flexDirection: 'row',
    right: 7
  },
  separatorText51: {
    fontFamily: 'Sarabun-Regular',
    fontSize: 12,
    color: '#6D6D6D',
    marginLeft: 5
  },
  separatorText55: {
    fontFamily: 'Sarabun-Regular',
    fontSize: 12,
    color: '#BE7C5A',
    marginLeft: 5
  },
});

export default ScreenA; 