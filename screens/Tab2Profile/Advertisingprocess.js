import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Switch, TouchableOpacity, StyleSheet, FlatList, Linking, ScrollView, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = ({ navigation, route }) => {



    const handleSkip = () => {
        navigation.navigate('Main');
    };
    const handleMoreTemplate = () => {
        navigation.navigate('MoreTemplate');
    };
    const handleSignUp1 = () => {
        navigation.navigate('Promotiondetails');
    };
    const handleadvertise = () => {
        navigation.navigate('Advertise')
    };
    const handlePackageV1 = () => {
        navigation.navigate('PackageV1');
    };


    const [currentPage, setCurrentPage] = useState(1);

    const getButtonStyle = (page) => {
        return currentPage === page
            ? styles.activeButton
            : styles.inactiveButton;
    };
    const getButtonStyle1 = (selectedButtons, buttonId) => {
        return selectedButtons.includes(buttonId)
            ? styles.selectedButton
            : styles.deselectedButton;
    };
    const [selectedButtons, setSelectedButtons] = useState([]);

    const toggleButtonSelection = (buttonId) => {
        if (selectedButtons.includes(buttonId)) {
            setSelectedButtons(selectedButtons.filter((id) => id !== buttonId)); 
        } else {
            setSelectedButtons([...selectedButtons, buttonId]); 
        }
    };

    const getTextStyle = (selectedButtons, buttonId) => {
        return selectedButtons.includes(buttonId)
            ? styles.selectedText
            : styles.deselectedText;
    };


    const buttonsData = [
        { id: 1, label: 'โปรโมทงาน' },
        { id: 2, label: 'โปรโมทโปรไฟล์ของคุณ' },
        { id: 3, label: 'โปรโมทร้านอาหาร' },
        { id: 4, label: 'โปรโมทที่พักของคุณ' },
        { id: 5, label: 'โปรโมทสินค้าของคุณ' },
        { id: 6, label: 'โปรโมทบริการของคุณ' },
        { id: 7, label: 'โปรโมทอีเว้นท์ของคุณ' },
    ];

    const data = [
        {
            id: '1',
            image: require('../../images/advertise/1 801.png'),
            name1: '🚀  ด่วน!ตามหา UX/UI....',
            name2: 'ประเภท : โปรโมทงาน',
            name3: 'คนดู : 220',
            name4: 'เหลือเวลา : 5 วัน',
        },
        {
            id: '2',
            image: require('../../images/advertise/6 (1).png'),
            name1: 'หางานด่วน!!',
            name2: 'ประเภท : โปรโมทงาน',
            name3: 'คนดู : 220',
            name4: 'เหลือเวลา : 5 วัน',
        },
        {
            id: '3',
            image: require('../../images/advertise/10 (1).png'),
            name1: 'รับสมัครด่วน',
            name2: 'ประเภท : โปรโมทงาน',
            name3: 'คนดู : 220',
            name4: 'เหลือเวลา : 5 วัน',
        },
    ];

    const [text, setText] = useState('');

    const [switchStates, setSwitchStates] = useState(
        data.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
    );

    
    const toggleSwitch = (id) => {
        setSwitchStates((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const [modalVisible, setModalVisible] = useState(false);

    const renderItem = ({ item }) => (
        <View>
            <View style={styles.item}>
                <TouchableOpacity style={styles.item1}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.details}>
                        <Text style={styles.name}>{item.name1}</Text>
                        <Text style={styles.info}>{item.name2}</Text>
                        <Text style={styles.info}>{item.name3}</Text>
                        <Text style={styles.info}>{item.name4}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.container8}>
                    <TouchableOpacity style={styles.iconButton}>
                        <FontAwesome
                            name={switchStates[item.id] ? 'eye' : 'eye-slash'}
                            size={15}
                            color={switchStates[item.id] ? '#F3A57E' : '#726D6B'}
                        />
                    </TouchableOpacity>
                    <Switch
                        value={switchStates[item.id]}
                        onValueChange={() => toggleSwitch(item.id)}
                        thumbColor={switchStates[item.id] ? '#FFFFFF' : '#FFFFFF'} 
                        trackColor={{ false: '#767577', true: '#4CD964' }}
                        style={styles.switch}
                    />
                </View>
            </View>
            <View style={styles.container9}>
                <TouchableOpacity style={styles.button5} onPress={handleSignUp1}>
                    <Text style={styles.Textframe7}>แก้ไข</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button6}>
                    <Text style={styles.Textframe8}>ลบ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.underline} />
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={[styles.button, getButtonStyle(1)]}
                    onPress={() => setCurrentPage(1)}
                >
                    <Text style={styles.buttonText}>กรอกข้อมูล</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, getButtonStyle(2)]}
                    onPress={() => setCurrentPage(2)}
                >
                    <Text style={styles.buttonText}>โฆษณาทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.underline} />
            <View style={styles.page}>
                {currentPage === 1 ? (
                    <View style={styles.container1}>
                        <View style={styles.container2}>
                            <Text style={styles.Textframe1}>ประเภทโฆษณา</Text>
                            <Text style={styles.Textframe2}>( เลือกประเภทโฆษณา)</Text>
                        </View>
                        <View style={styles.container3}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {buttonsData.map((button) => (
                                    <TouchableOpacity
                                        key={button.id}
                                        style={[styles.button1, getButtonStyle1(selectedButtons, button.id)]}
                                        onPress={() => toggleButtonSelection(button.id)}
                                    >
                                        <Text style={[styles.buttonText, getTextStyle(selectedButtons, button.id)]}>
                                            {button.label}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                        <View style={styles.container2}>
                            <View>
                                <Text style={styles.Textframe2}>หัวข้อคุณ *</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    value={text}
                                    onChangeText={setText} 
                                />
                            </View>
                        </View>
                        <View style={styles.container4}>
                            <View>
                                <Text style={styles.Textframe2}>อัพโหลดรูปภาพโฆษณาของคุณ</Text>
                                <Text style={styles.Textframe2}>(หากไม่มีคุณสามารถใช้เทมเพลตเราได้)</Text>
                            </View>
                            <TouchableOpacity style={styles.button2} onPress={handleadvertise}>
                                <Text style={styles.Textframe3}>ใช้รูป</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container5}>
                            <View style={styles.sectionmore}>
                                <Image
                                    source={require('../../images/advertise/1 801 (1).png')}
                                    style={styles.logo}
                                    resizeMode="contain"
                                />
                                <TouchableOpacity style={styles.button7} onPress={handleMoreTemplate}>
                                    <Text style={styles.Textframe3}>แก้ไข</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.container6}>
                            <View>
                                <Text style={styles.Textframe2}>คำอธิบายเพิ่มเติม (ตัวอย่างการกรอก) *</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={styles.input1}
                                    value={text}
                                    onChangeText={setText} 
                                />
                            </View>
                        </View>
                        <View style={styles.screen}>
                            <TouchableOpacity style={styles.button3} onPress={() => setModalVisible(true)}>
                                <Text style={styles.Textframe4}>บันทึกและลงโฆษณา</Text>
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
                                    <Text style={styles.modalTitle}>คุณเป็นสมาชิกหรือยัง?</Text>
                                    <Text style={styles.modalText}>หากยังลองทดลองใช้ฟรี 7</Text>

                                    <View style={styles.modalContent1}>
                                        <TouchableOpacity
                                            style={styles.navigateButton}
                                            onPress={handlePackageV1}
                                        >
                                            <Text style={styles.modalText1}>ตกลง</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.closeButton}
                                            onPress={() => setModalVisible(false)}
                                        >
                                            <Text style={styles.modalText2}>ยกเลิก</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>

                ) : (
                    <View>
                        <View style={styles.container7}>
                            <Text style={styles.Textframe5}>เลือกประเภทเทล</Text>
                            <View>
                                <TouchableOpacity style={styles.button4}>
                                    <Text style={styles.Textframe7}>ประเภท</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                        />
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    container1: {
        height: '96%'
    },
    container2: {
        padding: 20,
    },
    container3: {
        left: 10
    },
    container4: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 15
    },
    container5: {
        padding: 20,
    },
    container6: {
        padding: 20,
        marginTop: -30
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 5,
        marginBottom: 5
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 50,
        borderRadius: 50,
        marginHorizontal: 10,
    },
    button1: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginHorizontal: 5,
    },
    button2: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
        backgroundColor: '#FFB472'
    },
    button3: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        backgroundColor: '#FFB472',
        alignItems: 'center'
    },
    button7: {
        paddingVertical: 10,
        paddingHorizontal: 60,
        borderRadius: 10,
        backgroundColor: '#FFB472'
    },
    activeButton: {
        backgroundColor: '#F1F1F1', 
    },
    inactiveButton: {
        backgroundColor: '#FFFFFF', 
    },
    buttonText: {
        color: '#626262',
        fontFamily: 'Sarabun-Medium',
        fontSize: 13,
    },
    page: {
        width: '100%',

    },
    underline: {
        height: 1, 
        width: '100%', 
        backgroundColor: '#F1F1F1', 
    },
    Textframe1: {
        color: '#DF8C62',
        fontFamily: 'Sarabun-Medium',
        fontSize: 13,
    },
    Textframe2: {
        color: '#6D6D6D',
        fontFamily: 'Sarabun-Medium',
        fontSize: 13,
    },
    Textframe3: {
        color: '#fff',
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
    },
    Textframe4: {
        color: '#fff',
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 15,
    },
    selectedButton: {
        backgroundColor: '#FFB472',
    },
    deselectedButton: {
        backgroundColor: '#FFF4EB',
    },
    selectedText: {
        color: '#fff', 
        fontFamily: 'Sarabun-Medium',
        fontSize: 13,
    },
    deselectedText: {
        color: '#726D6B', 
        fontFamily: 'Sarabun-Medium',
        fontSize: 12
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#F6DED1',
        marginBottom: -20,
        marginTop: 5
    },
    input1: {
        width: '100%',
        padding: 30,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#F6DED1',
        marginBottom: -20,
        marginTop: 5
    },
    sectionmore: {
        backgroundColor: '#F7F7F7',
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        padding: 25,
        justifyContent: 'space-between'
    },
    screen: {
        position: 'absolute',
        bottom: -5,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    /////////////////2/////////////////////////
    container7: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container8: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -70
    },
    container9: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -10
    },
    Textframe5: {
        color: '#626262',
        fontFamily: 'Sarabun-Medium',
        fontSize: 14,
    },
    Textframe6: {
        color: '#626262',
        fontFamily: 'Sarabun-Medium',
        fontSize: 14,
    },
    Textframe7: {
        color: '#E98B5C',
        fontFamily: 'Sarabun-Medium',
        fontSize: 14,
    },
    Textframe8: {
        color: '#565656',
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
    },
    button4: {
        borderWidth: 1,
        borderColor: '#F1996C',
        paddingVertical: 2,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginLeft: 10
    },
    button5: {
        borderWidth: 1,
        borderColor: '#F1996C',
        paddingVertical: 3,
        paddingHorizontal: 120,
        borderRadius: 50,
    },
    button6: {
        borderWidth: 1,
        borderColor: '#EAEAEA',
        backgroundColor: '#EAEAEA',
        paddingVertical: 3,
        paddingHorizontal: 35,
        borderRadius: 50,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
    },
    item1: {
        flexDirection: 'row',
        width: '85%'
    },
    image: {
        marginRight: 10,
    },
    details: {
        flex: 1,
    },
    name: {
        fontSize: 12,
        fontFamily: 'Sarabun-SemiBold',
        marginBottom: 5,
    },
    info: {
        fontSize: 14,
        color: '#555',
    },
    iconButton: {
        marginHorizontal: 1,
    },
    switch: {
        marginLeft: 2,
    },
    logo: {
        width: 109,
        height: 62,

    },
    //////////////////////////////////////////////////
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
    modalContent1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: 'Sarabun-SemiBold',
        marginBottom: 5,
        color: '#4A4A4A'
    },
    modalText: {
        fontSize: 14,
        color: '#4A4A4A',
        marginBottom: 30,
        fontFamily: 'Sarabun-Medium',
    },
    modalText1:{
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: 'Sarabun-Medium',
    },
    modalText2:{
        fontSize: 14,
        color: '#FFB472',
        fontFamily: 'Sarabun-Medium',
    },
    closeButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 50,
        borderWidth: 1,
        width:120,
        borderColor: '#FFB472',
        alignItems: 'center',
        marginLeft: 15
    },
    navigateButton: {
        backgroundColor: '#FFB472', 
        padding: 10,
        borderRadius: 50,
        width:120,
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
});

export default LoginScreen;
