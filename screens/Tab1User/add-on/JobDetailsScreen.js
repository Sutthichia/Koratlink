import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from '@expo/vector-icons/Ionicons';
import Map from './Map'
const BottomSheetModal = ({ isModalVisible, toggleModal, job }) => {

  return (
    <Modal
      isVisible={isModalVisible}
      onSwipeComplete={toggleModal} 
      onBackdropPress={toggleModal}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <TouchableOpacity onPress={toggleModal} style={styles.dragIndicator}>
          <View style={styles.dragLine} />
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.container20}>
            <View style={styles.container25}>
              <Ionicons name="reader-outline" size={24} color="black" />
              <View>
                <Text style={styles.separatorText5}>สำเนาทะเบียนบ้าน</Text>
              </View>
            </View>
            <View style={styles.container21}>
              <View>
                <Text style={styles.separatorText5}>สำเนาบัตรประชาชน</Text>
                <Text style={styles.separatorText5}>สำเนาทะเบียนบ้าน</Text>
              </View>
              <View>
                <Text style={styles.separatorText5}>Portfolio</Text>
                <Text style={styles.separatorText5}>วุฒิการศึกษา</Text>
              </View>
            </View>
            <View style={styles.container25}>
              <Ionicons name="reader-outline" size={24} color="black" />
              <View>
                <Text style={styles.separatorText5}>คุณสมบัติที่ต้องการ</Text>
              </View>
            </View>
            <View style={styles.container21}>
              <View>
                <Text style={styles.separatorText5}>วุฒิปริญญาตรีด้านการออกแบบ, HCI, หรือสาขาที่เกี่ยวข้อง</Text>
                <Text style={styles.separatorText5}>ประสบการณ์อย่างน้อย 3 ปีในการออกแบบ UX/UI</Text>
                <Text style={styles.separatorText5}>เชี่ยวชาญในการใช้ Figma, Sketch, Adobe XD</Text>
                <Text style={styles.separatorText5}>มีความเข้าใจในหลักการ UX design และ design thinking</Text>
                <Text style={styles.separatorText5}>มีทักษะการสื่อสารและการนำเสนอที่ดีเยี่ยม</Text>
                <Text style={styles.separatorText5}>มี portfolio ที่แสดงถึงผลงานการออกแบบที่โดดเด่น</Text>
              </View>
            </View>
            <View style={styles.container25}>
              <Ionicons name="reader-outline" size={24} color="black" />
              <View>
                <Text style={styles.separatorText5}>หน้าที่และความรับผิดชอบ</Text>
              </View>
            </View>
            <View style={styles.container21}>
              <View>
                <Text style={styles.separatorText5}>ออกแบบ User Interface (UI) และ User Experience (UX) สำหรับแอปพลิเคชัน มือถือและเว็บไซต์</Text>
                <Text style={styles.separatorText5}>สร้าง wireframes, prototypes และ mockups</Text>
                <Text style={styles.separatorText5}>ทำการวิจัยผู้ใช้และวิเคราะห์พฤติกรรมเพื่อพัฒนา user personas</Text>
                <Text style={styles.separatorText5}>ออกแบบ information architecture และ user flows</Text>
                <Text style={styles.separatorText5}>ทำงานร่วมกับทีมพัฒนาและผู้มีส่วนได้ส่วนเสียอื่นๆ</Text>
                <Text style={styles.separatorText5}>สร้างและรักษา design systems</Text>
                <Text style={styles.separatorText5}>ทำการทดสอบ usability และปรับปรุงดีไซน์ตามผลตอบรับ</Text>
              </View>
            </View>
            <View style={styles.container25}>
              <Ionicons name="reader-outline" size={24} color="black" />
              <View>
                <Text style={styles.separatorText5}>เงินเดือนและสวัสดิการ</Text>
              </View>
            </View>
            <View style={styles.container21}>
              <View>
                <Text style={styles.separatorText5}>เงินเดือน: 50,000 - 80,000 บาท (ขึ้นอยู่กับประสบการณ์)</Text>
                <Text style={styles.separatorText5}>โบนัสประจำปีตามผลงาน</Text>
                <Text style={styles.separatorText5}>ประกันสุขภาพและประกันชีวิต</Text>
                <Text style={styles.separatorText5}>กองทุนสำรองเลี้ยงชีพ</Text>
                <Text style={styles.separatorText5}>วันหยุดพักร้อน 15 วันต่อปี</Text>
                <Text style={styles.separatorText5}>งบประมาณสำหรับการฝึกอบรมและพัฒนาทักษะ</Text>
                <Text style={styles.separatorText5}>อุปกรณ์คอมพิวเตอร์ส่วนตัวสำหรับการทำงาน</Text>
              </View>
            </View>
            <View style={styles.container25}>
              <Ionicons name="reader-outline" size={24} color="black" />
              <View>
                <Text style={styles.separatorText5}>ทักษะที่เป็นข้อได้เปรียบ</Text>
              </View>
            </View>
            <View style={styles.container21}>
              <View>
                <Text style={styles.separatorText5}>ความรู้พื้นฐานด้าน HTML, CSS, และ JavaScript</Text>
                <Text style={styles.separatorText5}>ประสบการณ์ในการทำ motion design หรือ micro-interactions</Text>
                <Text style={styles.separatorText5}>ความเข้าใจในหลักการ accessibility design</Text>
              </View>
            </View>
            <View style={styles.container25}>
              <Ionicons name="reader-outline" size={24} color="black" />
              <View>
                <Text style={styles.separatorText5}>แผนที่นำทาง</Text>
              </View>
            </View>
            <View style={styles.container26}>
              <Text style={styles.separatorText5}>1242 2 ถ. มิตรภาพ ต.ในเมือง อ.เมืองนครราชสีมา จ.นครราชสีมา 30000</Text>
              <Map />
            </View>
          </View>
        </ScrollView>
        <Button title="ปิดแถบ" onPress={toggleModal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '80%',
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  dragIndicator: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  dragLine: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
  },
  container20: {
    padding: 5,
  },
  container25: {
    flexDirection: 'row',
  },
  separatorText5: {
    fontFamily: 'Sarabun-Regular',
    fontSize: 12,
    color: '#6D6D6D'
  },
  container21: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#F6DED1",
    borderRadius: 10,
    width: 370,
    padding: 10,
  },
});

export default BottomSheetModal;