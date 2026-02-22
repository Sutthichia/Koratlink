import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal, ScrollView, SafeAreaView } from 'react-native';
import { useFavoriteJobs } from '../../components/FavoriteJobContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';

const Savework = () => {
  const { favoriteJobs, removeFavoriteJob } = useFavoriteJobs();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleJobFavorite = (jobId) => {
    removeFavoriteJob(jobId);
    setModalMessage('เอารายการออกเรียบร้อยแล้ว');
    setModalVisible(true);

    setTimeout(() => {
      setModalVisible(false);
    }, 800);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.container20}>
          <TouchableOpacity style={styles.container21}>
            <Text style={styles.separatorText10}>บันทึกไว้</Text>
            <View style={styles.container31}>
              <Text style={styles.separatorText13}>15</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container22}>
            <Text style={styles.separatorText11}>สมัครแล้ว</Text>
            <View style={styles.container32}>
              <Text style={styles.separatorText12}>10</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container22}>
            <Text style={styles.separatorText11}>เก็บถาวร</Text>
          </TouchableOpacity>
        </View>
      </View>
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
      <ScrollView style={styles.container2}>
        {favoriteJobs.map(job => (
          <View key={job.id}>
            <TouchableOpacity style={styles.container5}>
              <Image source={job.logo} style={styles.logo} resizeMode="contain" />
              <View style={styles.container6}>
                <View style={styles.container9} >
                  <Text style={styles.separatorText1}>{job.companyName}</Text>

                </View>
                <TouchableOpacity onPress={() => handleJobFavorite(job.id)} style={styles.Bottom}>
                  <MaterialCommunityIcons
                    name="bookmark"
                    size={24}
                    color="red"
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
            <View style={styles.separatorLine3}>
              <TouchableOpacity style={styles.separatorLine2} >
                <Text style={styles.separatorText14}>{job.status}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.separatorLine} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%'
  },
  container1:{
    padding: 10
  },
  container20: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  separatorText10: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 13,
    color: '#626262'
  },
  separatorText11: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 13,
    color: '#626262'
  },
  separatorText13: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    color: '#CC9B86',
    left: 3
  },
  separatorText12: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    color: '#FFFFFF',
    left: 3
  },
  container21: {
    backgroundColor: '#F1F1F1',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 137,
    height: 40,
    borderColor: '#FFFFFF',
    borderRadius: 50,
  },
  container22: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 137,
  },
  container31: {
    marginLeft: 5,
    backgroundColor: '#FFFFFF',
    width: 16,
    height: 16,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  container32: {
    marginLeft: 5,
    backgroundColor: '#E5B197',
    width: 16,
    height: 16,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
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
  container2: {
    width: '100%',
  },
  container5: {
    flexDirection: 'row',
    padding: 15
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
    marginVertical: 1,  
  },
  separatorLine2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFDDC3',
    borderRadius: 50,
    width: 350, 
    height: 40,
  },
  separatorLine3: {
    alignItems: 'center',
    marginBottom: 20
  },
  separatorText14: {
    fontFamily: 'Sarabun-Regular',
    fontSize: 12,
    color: '#CC9B86'
  }
});

export default Savework;