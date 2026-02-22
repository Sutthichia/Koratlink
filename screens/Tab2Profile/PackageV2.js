import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Switch, TouchableOpacity, StyleSheet, FlatList, Linking, ScrollView, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

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
        navigation.navigate('Advertise')
    };

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <TouchableOpacity style={styles.Box} onPress={() => setModalVisible(true)}>
                    <View>
                        <View style={styles.Box1}>
                            <Text style={styles.Textframe1}>สมาชิกใหม่</Text>
                            <Text style={styles.Textframe4}>!!!</Text>
                        </View>
                        <View style={styles.Box4}>
                            <Image
                                source={require('../../images/advertise/Group 1059.png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.Box2}>
                            <Text style={styles.Textframe2}>เพลเพลินไปกับสิทธิพิเศษการมองหาผู้สมัครได้ก่อนใครพร้อมทั้งตัวช่วยการออกพิเศษที่มีให้กับคุณ</Text>
                        </View>
                    </View>
                    <View style={styles.Box3}>
                        <Text style={styles.Textframe1}>เฉพาะสมาชิกใหม่เท่านั้น</Text>
                        <View style={styles.Box4}>
                            <View style={styles.Box5}>
                                <Text style={styles.Textframe3}>1 โฆษณา</Text>
                            </View>
                            <View style={styles.Box6}>
                                <Text style={styles.Textframe3}>7 วัน</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.container2}>
                    <TouchableOpacity style={styles.BoxV1} onPress={() => setModalVisible(true)}>
                        <View style={styles.Box9}>
                            <Text style={styles.Textframe5}>450</Text>
                            <View style={styles.Box8}>
                                <Text style={styles.Textframe9}>+ Vat 7% = 481.5</Text>
                            </View>
                            <View style={styles.Box4}>
                                <Image
                                    source={require('../../images/advertise/Group 760.png')}
                                    style={styles.logo1}
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                        <View style={styles.Box3}>
                            <View style={styles.Box4}>
                                <View style={styles.Box5}>
                                    <Text style={styles.Textframe6}>1 โฆษณา</Text>
                                </View>
                                <View style={styles.Box6}>
                                    <Text style={styles.Textframe6}>7 วัน</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BoxV1} onPress={() => setModalVisible(true)}>
                        <View style={styles.Box9}>
                            <Text style={styles.Textframe5}>900</Text>
                            <View style={styles.Box8}>
                                <Text style={styles.Textframe9}>+ Vat 7% = 963</Text>
                            </View>
                            <View style={styles.Box4}>
                                <Image
                                    source={require('../../images/advertise/Group 760 (1).png')}
                                    style={styles.logo1}
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                        <View style={styles.Box3}>
                            <View style={styles.Box4}>
                                <View style={styles.Box5}>
                                    <Text style={styles.Textframe6}>2 โฆษณา</Text>
                                </View>
                                <View style={styles.Box6}>
                                    <Text style={styles.Textframe6}>14 วัน</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity style={styles.BoxV1} onPress={() => setModalVisible(true)}>
                        <View style={styles.Box9}>
                            <Text style={styles.Textframe5}>1350</Text>
                            <View style={styles.Box8}>
                                <Text style={styles.Textframe9}>+ Vat 7% = 1444.5</Text>
                            </View>
                            <View style={styles.Box4}>
                                <Image
                                    source={require('../../images/advertise/Group 760 (2).png')}
                                    style={styles.logo1}
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                        <View style={styles.Box3}>
                            <View style={styles.Box4}>
                                <View style={styles.Box5}>
                                    <Text style={styles.Textframe6}>3 โฆษณา</Text>
                                </View>
                                <View style={styles.Box6}>
                                    <Text style={styles.Textframe6}>21 วัน</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BoxV1} onPress={() => setModalVisible(true)}>
                        <View style={styles.Box9}>
                            <Text style={styles.Textframe5}>1800</Text>
                            <View style={styles.Box8}>
                                <Text style={styles.Textframe9}>+ Vat 7% = 1926</Text>
                            </View>
                            <View style={styles.Box4}>
                                <Image
                                    source={require('../../images/advertise/Group 1059.png')}
                                    style={styles.logo1}
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                        <View style={styles.Box3}>
                            <View style={styles.Box4}>
                                <View style={styles.Box5}>
                                    <Text style={styles.Textframe6}>4 โฆษณา</Text>
                                </View>
                                <View style={styles.Box6}>
                                    <Text style={styles.Textframe6}>28 วัน</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType="fade"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <TouchableOpacity
                            style={styles.background}
                            activeOpacity={1}
                            onPress={() => setModalVisible(false)}
                        />
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>คำสั่งซื้อสำเร็จ</Text>
                            <View style={styles.modalContent1}>
                                <Text style={styles.modalText1}>แพ็กเกจ 450 บาท จำกัด 1</Text>
                                <Text style={styles.modalText2}>โฆษณา จำนวนวัน 7 วัน</Text>
                            </View>
                            <Text style={styles.modalText}>เริ่ม 16/11/2567 - สิ้นสุด 22/11/2567</Text>
                            <TouchableOpacity
                                style={styles.navigateButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.buttonText}>ตกลง</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container1: {
        padding: 20
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    Box: {
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
        marginBottom: 30

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
    Box1: {
        flexDirection: 'row',
    },
    Box2: {
        width: '86%',
        marginBottom: 20
    },
    Box3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Box5: {
        borderWidth: 1,
        borderColor: '#FBEFE5',
        paddingVertical: 5,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
        width: 75
    },
    Box6: {
        borderWidth: 1,
        borderColor: '#FBEFE5',
        paddingVertical: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        width: 75
    },
    Box4: {
        flexDirection: 'row',
    },
    Box8: {
        marginTop: -10,
        marginBottom: 10
    },
    Box9: {
        alignItems: 'center'
    },
    Textframe1: {
        color: '#626262',
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 15,
    },
    Textframe2: {
        color: '#626262',
        fontFamily: 'Sarabun-Medium',
        fontSize: 13,
    },
    Textframe3: {
        color: '#626262',
        fontFamily: 'Sarabun-Medium',
        fontSize: 13,
    },
    Textframe4: {
        color: '#FF7272',
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 15,
        marginLeft: 10
    },
    Textframe5: {
        color: '#4C4C4C',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 25,
        marginTop: -5
    },
    Textframe6: {
        color: '#757575',
        fontFamily: 'Sarabun-Medium',
        fontSize: 10,
    },
    Textframe9: {
        color: '#CC9B86',
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Sarabun-Medium',
        fontSize: 15,
    },
    logo: {
        position: 'absolute', // ทำให้รูปภาพลอย
        zIndex: 10, // เลเยอร์สูงกว่า
        width: 32,
        height: 51,
        left: '90%',
        top: -56
    },
    logo1: {
        position: 'absolute', 
        width: 32,
        height: 51,
        left: '30%',
        top: -88
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        ...StyleSheet.absoluteFillObject, 
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 10,
        zIndex: 10, 
    },
    modalContent1:{
        width: '60%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        color: '#4A4A4A',
        fontFamily: 'Sarabun-SemiBold',
    },
    modalText: {
        fontSize: 16,
        color: '#4A4A4A',
        fontFamily: 'Sarabun-SemiBold',
        marginBottom: 20,
    },
    modalText1: {
        fontSize: 14,
        color: '#626262',
        fontFamily: 'Sarabun-Medium',

    },
    modalText2:{
        fontSize: 14,
        color: '#626262',
        marginBottom: 20,
        fontFamily: 'Sarabun-Medium',
    },
    navigateButton: {
        backgroundColor: '#FFB472',
        padding: 10,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 70,
    },
});

export default Promotiondetails;
