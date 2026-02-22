import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Switch, TouchableOpacity, StyleSheet, Modal, FlatList, Linking, ScrollView } from 'react-native';
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
        navigation.navigate('Advertisingprocess');
    };

    const [boxData, setBoxData] = useState([
        { id: 1, isLarge: false, name: 'ช่องที่ 1', smallText: 'กล่องข้อความขนาดเล็ก (1)', largeText: 'กล่องข้อความขนาดใหญ่ (1)', icon: 'cloud-upload-outline', },
        { id: 2, isLarge: false, name: 'ช่องที่ 2', smallText: 'กล่องข้อความขนาดเล็ก (2)', largeText: 'กล่องข้อความขนาดใหญ่ (2)', icon: 'cloud-upload-outline', },
        { id: 3, isLarge: false, name: 'ช่องที่ 3', smallText: 'กล่องข้อความขนาดเล็ก (2)', largeText: 'กล่องข้อความขนาดใหญ่ (2)', icon: 'cloud-upload-outline', },
        { id: 4, isLarge: false, name: 'ช่องที่ 4', smallText: 'กล่องข้อความขนาดเล็ก (1)', largeText: 'กล่องข้อความขนาดใหญ่ (1)', icon: 'cloud-upload-outline', },
        { id: 5, isLarge: false, name: 'ช่องที่ 5', smallText: 'กล่องข้อความขนาดเล็ก (2)', largeText: 'กล่องข้อความขนาดใหญ่ (2)', icon: 'cloud-upload-outline', },
        { id: 6, isLarge: false, name: 'ช่องที่ 6', smallText: 'กล่องข้อความขนาดเล็ก (2)', largeText: 'กล่องข้อความขนาดใหญ่ (2)', icon: 'cloud-upload-outline', },
    ]);

    const handleSizeChange = (id, isLarge) => {
        const updatedBoxData = boxData.map((box) =>
            box.id === id ? { ...box, isLarge } : box
        );
        setBoxData(updatedBoxData);
    };

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container4}>
                <View style={styles.container2}>
                    <Image
                        source={require('../../images/advertise/1 801 (2).png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.container5}>
                    <Text style={styles.screenText1}>ใส่เนื้อหาที่คุณต้องการในแต่ละช่อง</Text>
                    <View>
                        <TouchableOpacity
                            style={styles.button3}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.buttonText1}>ดูตัวอย่าง</Text>
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

                            <Image
                                source={require('../../images/advertise/1 801 (2).png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </View>
                    </Modal>
                </View>
                <View style={styles.container3}>
                    {boxData.map((box) => (
                        <View key={box.id} style={styles.section}>
                            <View style={styles.buttonRow}>
                                <Text style={styles.buttonText2}>{box.name}</Text>
                                <View style={styles.buttonRow0}>
                                    <View style={styles.buttonRow1}>
                                        <TouchableOpacity
                                            style={[styles.button, !box.isLarge && styles.activeButton]}
                                            onPress={() => handleSizeChange(box.id, false)}
                                        >
                                            <Text style={[styles.buttonText, !box.isLarge && styles.activeFontColor]}>ข้อความ</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.buttonRow1}>
                                        <TouchableOpacity
                                            style={[styles.button1, box.isLarge && styles.activeButton]}
                                            onPress={() => handleSizeChange(box.id, true)} 
                                        >
                                            <Text style={[styles.buttonText, box.isLarge && styles.activeFontColor]}>รูป</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.box, box.isLarge ? styles.largeBox : styles.smallBox]}>
                                <Text style={styles.boxText}>
                                    {box.isLarge ? box.largeText : box.smallText}
                                </Text>
                                {box.isLarge && (
                                    <Ionicons name={box.icon} size={50} color="#FFB472" />
                                )}
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.screen}>
                <View style={styles.screen1}>
                    <TouchableOpacity style={styles.screen2} onPress={handleAdvertisingprocess}>
                        <Text style={styles.screenText}>บันทึก</Text>
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
    container2: {
        alignItems: 'center',
    },
    container3: {
        padding: 20,
        height: 1000,
        paddingTop: -10
    },
    container5: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop:-10
    },
    buttonText: {
        color: '#626262', 
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
    },
    buttonText1: {
        color: '#FFB472',
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
    },
    activeFontColor: {
        color: '#FFFFFF', 
        fontSize: 12,
        fontFamily: 'Sarabun-Medium',
    },
    buttonText2: {
        color: '#726D6B', 
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 13,
    },
    screenText1: {
        color: '#726D6B', 
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 13,
    },
    screenText:{
        color: '#FFFFFF', 
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 15,
    },
    logo: {
        width: 411,
        height: 255
    },
    screen: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        height: 80,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    screen1: {
        alignItems: 'center',
        marginTop: 10
    },
    screen2: {
        backgroundColor: '#FFB472',
        width: 360,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    buttonRow0: {
        flexDirection: 'row',
    },
    buttonRow1: {

    },
    button: {
        backgroundColor: '#FFF5F0',
        paddingVertical: 5,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
        width: 75
    },
    button1: {
        backgroundColor: '#FFF5F0',
        paddingVertical: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        width: 75
    },
    button3: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#EDB589',
        paddingVertical: 5,
        paddingHorizontal: 30,
    },
    activeButton: {
        backgroundColor: '#FFB472', 
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    smallBox: {
        borderWidth: 1,
        borderColor: '#F6DED1',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
    },
    largeBox: {
        borderWidth: 1,
        borderColor: '#F6DED1',
        paddingVertical: 80,
        paddingHorizontal: 30,
        borderRadius: 15,
    },
    boxText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
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
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 10,
        zIndex: 10, 
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
    },
});

export default Promotiondetails;
