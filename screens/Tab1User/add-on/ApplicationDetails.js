import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Switch, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import JobDetailsScreen from '../../../screens/Tab1User/add-on/JobDetailsScreen'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';

const ApplicationDetails = ({ route }) => {
  const { job } = route.params;
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const imagesData = [
    { source: require('../../../images/icon/Group199.png'), name: 'Figma' },
    { source: require('../../../images/icon/Group200.png'), name: 'Adobe XD' },
    { source: require('../../../images/icon/Group201.png'), name: 'InVision' },
    { source: require('../../../images/icon/Group202.png'), name: 'Sketch' },
    { source: require('../../../images/icon/Group203.png'), name: 'Jira' },
  ];

  const imagesData1 = [
    { source: require('../../../images/icon/image.png'), },
    { source: require('../../../images/icon/image-1.png'), },
    { source: require('../../../images/icon/image-2.png'), },
  ];

  const imagesData2 = [
    { source: require('../../../images/icon/image-3.png'), },
    { source: require('../../../images/icon/image-4.png'), },
    { source: require('../../../images/icon/image-5.png'), },
  ];

  const handleApplyJob = (job) => {
    navigation.navigate('Process2', { job });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.space1}>
          <View style={styles.space2} >
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

        </View>
        <JobDetailsScreen isModalVisible={isModalVisible} toggleModal={toggleModal} />
        <View style={styles.space}>
          <Text style={styles.Text}>สมัครงานโดยใช้ข้อมูลจากประวัติส่วนตัว (Resume)</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#4CD964' }}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
          />
        </View>
      </View>
      <View style={styles.separatorLine} />
      <ScrollView>
        <View style={styles.container20}>
          <View style={styles.container0}>
            <View style={styles.container20_1}>
              <View style={styles.container20_2}>
                <Feather name="map-pin" size={12} color="#CC9B86" />
                <Text style={[styles.pageText1_1, { marginLeft: 5 }]}>กองบิน 1 ต.หนองไผ่ล้อมอ.เมืองนครราชสีมาจ.นครราชสีมา30000</Text>
              </View>
              <View style={styles.container20_2}>
                <View style={styles.container20_5}>
                  <Ionicons name="mail-outline" size={15} color="#CC9B86" />
                  <Text style={[styles.pageText1_1, { marginLeft: 5 }]}>darinpila@gmail.com</Text>
                </View>
                <View style={styles.container20_5}>
                  <Ionicons name="call-outline" size={15} color="#CC9B86" />
                  <Text style={[styles.pageText1_1, { marginLeft: 5 }]}>063-4567890</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <SimpleLineIcons name="user" size={13} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>ประวัติ</Text>
              </View>
            </View>
            <View style={styles.container20_1_1}>
              <View style={styles.container20_2}>
                <Text style={[styles.pageText1_1, { marginLeft: 5 }]}>นางสาวดาริณ พิลาณี  อายุ 27 ปี เกิดวันพุธ ที่ 24 เดือน กุมภาพันธ์ พ.ศ.2540 เชื้อชาติ ไทย  สัญชาติ ไทย  ศาสนา พุทธ</Text>
              </View>
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <Ionicons name="star-outline" size={13} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>คุณสมบัติเพิ่มเติม</Text>
              </View>
            </View>
            <View style={styles.container20_1_1}>
              <View style={styles.container20_2}>
                <View style={styles.container20_5_1}>
                  <Text style={styles.pageText1_3}>พร้อมเริ่มงานทันที</Text>
                </View>
                <View style={[styles.container20_5_1, { marginLeft: 5 }]}>
                  <Text style={styles.pageText1_3}>ไม่มีประวัติอาชญากรรม</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <SimpleLineIcons name="user" size={13} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>แนะนำตัวเอง</Text>
              </View>
            </View>
            <View style={styles.container20_1_1}>
              <View style={styles.container20_2}>
                <Text style={styles.pageText1_1}>นักออกแบบประสบการณ์ผู้ใช้และส่วนต่อประสานที่มีความเชี่ยวชาญในการสร้างผลิตภัณฑ์ดิจิทัลที่ใช้งานง่ายและสวยงาม พร้อมด้วยทักษะการเป็น Product Owner</Text>
              </View>
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <Ionicons name="school-outline" size={13} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>การศึกษา</Text>
              </View>
            </View>
            <View style={styles.container20_1_1}>
              <View style={styles.container20_2}>
                <Text style={styles.pageText1_1}>ปริญญาตรี สาขาการออกแบบอินเทอร์แอคทีฟ</Text>
              </View>
              <View style={styles.container20_2}>
                <Text style={styles.pageText1_1}>มหาวิทยาลัยชื่อดัง | 2555 - 2559</Text>
              </View>
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <MaterialIcons name="translate" size={13} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>ระดับภาษา</Text>
              </View>
            </View>
            <View style={styles.container20_1_1}>
              <View style={styles.container20V1}>
                <View style={styles.BoxV2}>
                  <Text style={styles.pageText1_1}>English</Text>
                </View>
                <View style={styles.BoxV1}>
                  <View style={styles.BoxV4}>
                  </View>
                </View>
                <View style={styles.BoxV2}>
                  <Text style={styles.pageText1_1}>ดีมาก</Text>
                </View>
              </View>
              <View style={styles.container20V1}>
                <View style={styles.BoxV2}>
                  <Text style={styles.pageText1_1}>Thai</Text>
                </View>
                <View style={styles.BoxV1}>
                  <View style={styles.BoxV5}>
                  </View>
                </View>
                <View style={styles.BoxV2}>
                  <Text style={styles.pageText1_1}>ชำนาญ</Text>
                </View>
              </View>
              <View style={styles.container20V1}>
                <View style={styles.BoxV2}>
                  <Text style={styles.pageText1_1}>Chinese</Text>
                </View>
                <View style={styles.BoxV1}>
                  <View style={styles.BoxV6}>
                  </View>
                </View>
                <View style={styles.BoxV2}>
                  <Text style={styles.pageText1_1}>พอใช้</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <Ionicons name="star-outline" size={13} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>ทักษะและความเชี่ยวชาญ</Text>
              </View>
            </View>
            <View style={styles.container20_1_1}>
              <View style={styles.container20_2}>
                <View style={styles.container20_5_1_1}>
                  <Text style={styles.pageText1_3}>UX Research & Design</Text>
                </View>
                <View style={[styles.container20_5_1, { marginLeft: 5 }]}>
                  <Text style={styles.pageText1_3}>Agile/Scrum Methodologies</Text>
                </View>
              </View>
              <View style={[styles.container20_2, { marginTop: 10 }]}>
                <View style={styles.container20_5_1}>
                  <Text style={styles.pageText1_3}>Product Strategy</Text>
                </View>
                <View style={[styles.container20_5_1, { marginLeft: 5 }]}>
                  <Text style={styles.pageText1_3}>Prototyping</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <Ionicons name="desktop-outline" size={13} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>เครื่องมือที่ใช้</Text>
              </View>
            </View>
            <View style={styles.container20_1_1}>
              <View style={styles.container6_1}>
                {imagesData.map((image, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <Image
                      source={image.source}
                      style={styles.logo1}
                      resizeMode="contain"
                    />
                    <Text style={styles.imageName}>{image.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <Ionicons name="briefcase-outline" size={13} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>ประสบการณ์การทำงาน</Text>
              </View>
            </View>
            <Image
              source={require('../../../images/advert/Line 4.png')}
              style={styles.logo6}
              resizeMode="contain"
            />
            <View style={styles.container20_1_1}>
              <View style={styles.container20_2_1}>
                <Text style={styles.pageText1_1_0}>• Senior UX/UI Designer & Product Owner</Text>
                <Text style={[styles.pageText1_1_0_1, { marginLeft: 10 }]}>บริษัท เอบีซี เทคโนโลยี จำกัด | 2562 - ปัจจุบัน</Text>
                <Text style={[styles.pageText1_1_0_2, { marginLeft: 10 }]}>-ออกแบบและพัฒนา UX/UI สำหรับแอปพลิเคชันมือถือและเว็บไซต์</Text>
              </View>
              <View style={styles.container20_2_1}>
                <Text style={styles.pageText1_1_0}>• UX/UI Designer</Text>
                <Text style={[styles.pageText1_1_0_1, { marginLeft: 10 }]}>บริษัท XYZ ดิจิทัล จำกัด | 2559 - 2562</Text>
                <Text style={[styles.pageText1_1_0_2, { marginLeft: 10 }]}>-ออกแบบ User Interface สำหรับแพลตฟอร์ม E-commerce</Text>
              </View>
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <Ionicons name="ribbon-outline" size={13} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>ใบรับรองและการอบรม</Text>
              </View>
            </View>
            <View style={styles.container20_1_1}>
              <View style={styles.container20_2_1}>
                <Text style={styles.pageText1_1_0}>• Certified Scrum Product Owner (CSPO)</Text>
                <View style={styles.container6_1_1}>
                  {imagesData1.map((image, index) => (
                    <View key={index} style={styles.imageContainer1}>
                      <Image
                        source={image.source}
                        style={styles.logo2}
                        resizeMode="contain"
                      />
                      <Text style={styles.imageName}>{image.name}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <Image
                source={require('../../../images/advert/Line 4 (1).png')}
                style={styles.logo5}
                resizeMode="contain"
              />
              <View style={styles.container20_2_1}>
                <Text style={styles.pageText1_1_0}>• Google UX Design Professional Certificate</Text>
                <View style={styles.container6_1_1}>
                  {imagesData2.map((image, index) => (
                    <View key={index} style={styles.imageContainer1}>
                      <Image
                        source={image.source}
                        style={styles.logo2}
                        resizeMode="contain"
                      />
                      <Text style={styles.imageName}>{image.name}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.spaceX}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonContainer2}
            onPress={() => navigation.navigate('Process2', { job })}
          >
            <Text style={styles.buttonText2}>อัปโหลดเอกสาร</Text>
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
  space: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  spaceX: {
    width: '100%',
    backgroundColor: '#FFFFFF'
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
  buttonText: {
    color: '#6D6D6D',
    fontSize: 11,
    fontFamily: 'Sarabun-Medium',
  },
  buttonText1: {
    fontSize: 15,
    fontFamily: 'Sarabun-SemiBold',
    color: '#EAA17C'
  },
  buttonText2: {
    fontSize: 15,
    fontFamily: 'Sarabun-SemiBold',
    color: '#FFFFFF'
  },
  switch: {
    transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }],
    left: 10
  },
  separatorLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6D7CF',
    width: '100%',
    marginTop: -20
  },
  Text: {
    color: '#6D6D6D',
    fontSize: 12,
    fontFamily: 'Sarabun-Medium',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  buttonContainer1: {
    width: '35%',
    height: 50,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#FF8749',
    borderRadius: 50,
  },
  buttonContainer2: {
    backgroundColor: '#FFB472',
    width: '100%',
    height: 50,
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
  ////////////////////////////////
  container20: {
    padding: 20,
  },
  container0: {
    marginBottom: 10
  },
  container20_4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  container20_3: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  container20_5: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%'
  },
  container20_5_1: {
    backgroundColor: '#EFA47C',
    paddingVertical: 2,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  container20_5_1_1: {
    backgroundColor: '#EFA47C',
    paddingVertical: 2,
    paddingHorizontal: 14,
    borderRadius: 50,
  },
  container20V1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  pageText1_1_1: {
    fontFamily: 'Sarabun-SemiBold',
    color: '#5A5A5A',
    fontSize: 13
  },
  pageText1_2: {
    fontFamily: 'Sarabun-Regular',
    color: '#CC9B86',
    fontSize: 12
  },
  container20_1: {
    borderWidth: 1,
    borderColor: '#F6DED1',
    padding: 15,
    borderRadius: 15,
  },
  container20_1_1: {
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 15,
  },
  container20_2: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pageText1_1: {
    fontFamily: 'Sarabun-Regular',
    color: '#5A5A5A',
    fontSize: 12
  },
  pageText1_1_0: {
    color: '#CB8D72',
    fontFamily: 'Sarabun-SemiBold',
    fontSize: 13,
  },
  pageText1_1_0_1: {
    fontFamily: 'Sarabun-Regular',
    color: '#838383',
    fontSize: 12
  },
  pageText1_1_0_2: {
    fontFamily: 'Sarabun-Regular',
    color: '#5A5A5A',
    fontSize: 12
  },
  pageText1_3: {
    fontFamily: 'Sarabun-Medium',
    color: '#FFFFFF',
    fontSize: 12,
  },
  BoxV1: {
    width: 220,
    height: 5,
    backgroundColor: '#EAEAEA',
    borderRadius: 15,
  },
  BoxV4: {
    width: 180,
    height: 5,
    backgroundColor: '#EFA47C',
    borderRadius: 15,
  },
  BoxV5: {
    width: 220,
    height: 5,
    backgroundColor: '#EFA47C',
    borderRadius: 15,
  },
  BoxV6: {
    width: 90,
    height: 5,
    backgroundColor: '#EFA47C',
    borderRadius: 15,
  },
  BoxV2: {
    width: 45
  },
  containerHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  logo1: {
    width: 30,
    height: 30,
  },
  logo2: {
    width: 79,
    height: 61,
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageContainer1: {
    padding: 5,
  },
  imageName: {
    fontFamily: 'Sarabun-Medium',
    color: '#939393',
    fontSize: 12,
  },
  container6_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo5: {
    position: 'absolute', 
    zIndex: 10,
    top: 30,
    height: 100,
    left: 15
  },
  logo6: {
    position: 'absolute', 
    zIndex: 10,
    top: 65,
    height: 50,
    left: 15
  },
  container6_1_1: {
    flexDirection: 'row',
    marginLeft: 10
  },
});

export default ApplicationDetails;
