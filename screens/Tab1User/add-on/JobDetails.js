import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, ScrollView, Switch } from 'react-native';
import { useFavoriteJobs } from '../../../components/FavoriteJobContext';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Map from './Map'
import { useNavigation } from '@react-navigation/native'
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

const JobDetails = ({ route, }) => {
  const { job } = route.params;
  const { favoriteJobs, addFavoriteJob, removeFavoriteJob } = useFavoriteJobs();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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
    }, 500);
  };
  const [selectedButtons, setSelectedButtons] = useState([false, false, false, false,]);
  const [buttonTexts, setButtonTexts] = useState(['ร้านอาหารใกล้เคียง 12 ร้าน', 'ที่พักใกล้เคียง 8 แห่ง', 'มีรถสองแถวผ่านหน้าบริษัททุก 30 นาที', 'ตลาดสดใกล้เคียง 4 แห่ง']); // ข้อความของปุ่ม

  const icons = [
    'fast-food-outline',   
    'business-outline',
    'bus-outline',
    'basket-outline',
  ];

  const handlePress = (index) => {
    const updatedSelection = [...selectedButtons];
    updatedSelection[index] = !updatedSelection[index]; 
    setSelectedButtons(updatedSelection);
  };

  const handleApplyJob = (job) => {
    navigation.navigate('ApplicationDetails', { job });
  };

  return (
    <View style={styles.container}>
      <View>
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
        <View key={job.id} style={styles.container4}>
          <View style={styles.container5} onPress={() => handleJobPress(job)} >
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
          </View>
        </View>
        <View style={styles.separatorLine} />
      </View>
      <ScrollView style={styles.container27}>
        <View style={styles.container20}>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <Ionicons name="reader-outline" size={20} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>เอกสารที่ต้องใช้ในการสมัคร</Text>
              </View>
              <View style={styles.container20_3}>
                <Entypo name="chevron-small-up" size={20} color="black" />
              </View>
            </View>
            <View style={styles.container20_1}>
              <View style={styles.container20_2}>
                <Text style={styles.pageText1_1}>• สำเนาบัตรประชาชน</Text>
                <Text style={styles.pageText1_1}>• สำเนาทะเบียนบ้าน</Text>
              </View>
              <View style={styles.container20_2}>
                <Text style={styles.pageText1_1}>• Portfolio</Text>
                <Text style={styles.pageText1_1}>• วุฒิการศึกษา</Text>
              </View>
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <Ionicons name="reader-outline" size={20} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>คุณสมบัติที่ต้องการ</Text>
              </View>
              <View style={styles.container20_3}>
                <Entypo name="chevron-small-up" size={20} color="black" />
              </View>
            </View>
            <View style={styles.container20_5}>
              <Text style={styles.pageText1_1}>• วุฒิปริญญาตรีด้านการออกแบบ, HCI, หรือสาขาที่เกี่ยวข้อง</Text>
              <Text style={styles.pageText1_1}>• ประสบการณ์อย่างน้อย 3 ปีในการออกแบบ UX/UI</Text>
              <Text style={styles.pageText1_1}>• เชี่ยวชาญในการใช้ Figma, Sketch, Adobe XD</Text>
              <Text style={styles.pageText1_1}>• มีความเข้าใจในหลักการ UX design และ design thinking</Text>
              <Text style={styles.pageText1_1}>• มีทักษะการสื่อสารและการนำเสนอที่ดีเยี่ยม</Text>
              <Text style={styles.pageText1_1}>• มี portfolio ที่แสดงถึงผลงานการออกแบบที่โดดเด่น</Text>
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <Ionicons name="briefcase-outline" size={20} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>หน้าที่และความรับผิดชอบ</Text>
              </View>
              <View style={styles.container20_3}>
                <Entypo name="chevron-small-up" size={20} color="black" />
              </View>
            </View>
            <View style={styles.container20_5}>
              <Text style={styles.pageText1_1}>• ออกแบบ User Interface (UI) และ User Experience (UX)</Text>
              <Text style={[styles.pageText1_1, { marginLeft: 7 }]}>สำหรับแอปพลิเคชันมือถือและเว็บไซต์</Text>
              <Text style={styles.pageText1_1}>• ทำการวิจัยผู้ใช้และวิเคราะห์พฤติกรรมเพื่อพัฒนา user personas</Text>
              <Text style={styles.pageText1_1}>• ออกแบบ information architecture และ user flows</Text>
              <Text style={styles.pageText1_1}>• ทำงานร่วมกับทีมพัฒนาและผู้มีส่วนได้ส่วนเสียอื่นๆ</Text>
              <Text style={styles.pageText1_1}>• สร้างและรักษา design systems</Text>
              <Text style={styles.pageText1_1}>• ทำการทดสอบ usability และปรับปรุงดีไซน์ตามผลตอบรับ</Text>
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <Ionicons name="cash-outline" size={20} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>เงินเดือนและสวัสดิการ</Text>
              </View>
              <View style={styles.container20_3}>
                <Entypo name="chevron-small-up" size={20} color="black" />
              </View>
            </View>
            <View style={styles.container20_5}>
              <Text style={styles.pageText1_1}>• เงินเดือน: 50,000 - 80,000 บาท (ขึ้นอยู่กับประสบการณ์)</Text>
              <Text style={styles.pageText1_1}>• โบนัสประจำปีตามผลงาน</Text>
              <Text style={styles.pageText1_1}>• ประกันสุขภาพและประกันชีวิต</Text>
              <Text style={styles.pageText1_1}>• กองทุนสำรองเลี้ยงชีพ</Text>
              <Text style={styles.pageText1_1}>• วันหยุดพักร้อน 15 วันต่อปี</Text>
              <Text style={styles.pageText1_1}>• งบประมาณสำหรับการฝึกอบรมและพัฒนาทักษะ</Text>
              <Text style={styles.pageText1_1}>• อุปกรณ์คอมพิวเตอร์ส่วนตัวสำหรับการทำงาน</Text>
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <Ionicons name="ribbon-outline" size={20} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>ทักษะที่เป็นข้อได้เปรียบ</Text>
              </View>
              <View style={styles.container20_3}>
                <Entypo name="chevron-small-up" size={20} color="black" />
              </View>
            </View>
            <View style={styles.container20_5}>
              <Text style={styles.pageText1_1}>• ความรู้พื้นฐานด้าน HTML, CSS, และ JavaScript</Text>
              <Text style={styles.pageText1_1}>• ประสบการณ์ในการทำ motion design หรือ micro-interactions</Text>
              <Text style={styles.pageText1_1}>• ความเข้าใจในหลักการ accessibility design</Text>
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <Feather name="navigation" size={20} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>แผนที่นำทาง</Text>
              </View>
              <View style={styles.container20_3}>
                <Entypo name="chevron-small-up" size={20} color="black" />
              </View>
            </View>
            <View style={styles.container20_5}>
              <View style={styles.container26}>
                <Text style={styles.pageText1_1}>1242 2 ถ. มิตรภาพ ต.ในเมือง อ.เมืองนครราชสีมา จ.นครราชสีมา 30000</Text>
              </View>
              <Map />
            </View>
          </View>
          <View style={styles.container0}>
            <View style={styles.container20_4}>
              <View style={styles.container20_3}>
                <Feather name="navigation" size={20} color="#6E6E6E" />
                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>สิ่งอำนวยความสะดวกใกลเคียง</Text>
              </View>
              <View style={styles.container20_3}>
                <Entypo name="chevron-small-up" size={20} color="black" />
              </View>
            </View>
            <View style={styles.container3}>
              {selectedButtons.map((isSelected, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.button_2, { borderColor: isSelected ? '#FFB472' : '#FFB472' }]} 
                  onPress={() => handlePress(index)}
                >
                  <View style={styles.container1_1_1}>
                    <View style={[styles.container2_1, { backgroundColor: isSelected ? '#FFB472' : '#FFF4EB' }]}>
                      <Ionicons
                        name={icons[index]}  
                        size={15}
                        color={isSelected ? 'white' : 'black'}
                      />
                    </View>
                    <Text style={[styles.text, { color: isSelected ? '#FFB472' : '#5B5B5B' }]}>
                      {buttonTexts[index]}
                    </Text>
                  </View>

                  <Ionicons
                    name={isSelected ? 'chevron-forward-outline' : 'chevron-forward-outline'}ะ
                    size={25}
                    color={isSelected ? '#FFB472' : '#FFB472'}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.applyButton} onPress={() => handleApplyJob(job)}>
          <Text style={styles.buttonText1} >สมัครงาน</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#FFFFFF'
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
  container21: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#F6DED1",
    borderRadius: 10,
    width: 370,
    padding: 10,
  },
  container22: {
    flexDirection: 'row',
  },
  container25: {
    flexDirection: 'row',
  },
  container26: {
    marginBottom: 10
  },

  container2: {
    width: '100%',
  },
  container4: {
    alignItems: 'center',
    marginTop: -10
  },
  container5: {
    flexDirection: 'row',
    padding: 5
  },
  container23: {
    alignItems: 'center',
    width: '100%'
  },
  logo: {
    width: 45,
    height: 35,
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
  Bottom: {
    marginLeft: 300,
    marginTop: -25
  },
  container15: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  separatorText2: {
    color: '#969696',
    fontFamily: 'Inter_18pt-Medium',
    fontSize: 10
  },
  container18: {
    flexDirection: 'row',
    marginLeft: 40
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
  container16: {
    flexDirection: 'row',
    right: 7
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
  container14: {
    paddingHorizontal: 5,
  },
  separatorText5: {
    fontFamily: 'Sarabun-Regular',
    fontSize: 12,
    color: '#6D6D6D'
  },
  separatorLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6D7CF',
    marginVertical: 10,
    top: -5
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 1,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#fff',
  },
  applyButton: {
    backgroundColor: '#FFB472', 
    width: '100%',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  saveButton: {
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    width: '35%',
    borderWidth: 1,
    borderColor: '#FF8749',
  },
  buttonText: {
    color: '#EAA17C',
    fontFamily: 'Sarabun-Medium',
    fontSize: 15,
  },
  buttonText1: {
    color: '#fff',
    fontFamily: 'Sarabun-Medium',
    fontSize: 15,
  },
  container20: {
    padding: 20,
  },
  container0: {
    marginBottom: 10
  },
  container20_1: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#F6DED1',
    padding: 15,
    borderRadius: 15,
  },
  container20_2: {
    width: '50%'
  },
  container20_4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  container20_3: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  container20_5: {
    borderWidth: 1,
    borderColor: '#F6DED1',
    padding: 15,
    borderRadius: 15,
  },
  button_2: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    alignItems: 'center'
  },
  container1_1_1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container2_1: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  },
  pageText1_1: {
    fontFamily: 'Sarabun-Regular',
    color: '#5A5A5A',
    fontSize: 12
  },
  pageText1_1_1: {
    fontFamily: 'Sarabun-SemiBold',
    color: '#5A5A5A',
    fontSize: 13
  },
});

export default JobDetails;