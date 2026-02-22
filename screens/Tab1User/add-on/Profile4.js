import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    Modal,
    Switch
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ApplicationDetails = () => {
    const navigation = useNavigation();
    const [text, setText] = useState('');
    const [isSaveModalVisible, setSaveModalVisible] = useState(false);

    const handleSave = () => {
        setSaveModalVisible(true);
        setTimeout(() => {
            setSaveModalVisible(false);
            navigation.goBack();
        }, 1500); 
    };

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.separatorLine} />
            <ScrollView>
                <View style={styles.circle1}>
                    <Image
                        source={require('../../../images/icon/image (3).png')}
                        style={styles.logo4}
                        resizeMode="contain"
                    />
                    <TouchableOpacity style={styles.button4}>
                        <View>
                            <Image
                                source={require('../../../images/profile/image (4).png')}
                                style={styles.logo4}
                                resizeMode="contain"
                            />
                            <View style={styles.space11}>
                                <Text style={styles.Text7}>60%</Text>
                            </View>
                        </View>
                        <View style={styles.space2}>
                            <Text style={styles.Text5}>ดาริน พิลาณี</Text>
                            <Text style={styles.Text6}>Product Owner | UX Researcher</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.container4}>
                    <View style={styles.container2}>
                        <View>
                            <Text style={styles.Textframe2}>ชื่อ - นามสกุล</Text>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                value={text}
                                onChangeText={setText}
                                placeholder="กรอกชื่อและนามสกุล"
                            />
                        </View>
                    </View>
                    <View style={styles.container2_1}>
                        <TextInput
                            style={styles.input1}
                            value={text}
                            onChangeText={setText}
                            placeholder="วันเกิด"
                        />
                        <TextInput
                            style={styles.input1}
                            value={text}
                            onChangeText={setText}
                            placeholder="เพศ"
                        />
                    </View>
                    <View style={styles.separatorLine1} />
                    <View style={styles.container2}>
                        <View style={styles.container2_2}>
                            <Text style={styles.Textframe2}>ที่อยู่และช่องทางการติดต่อ</Text>
                        </View>
                        <View style={styles.container2_3}>
                            <View>
                                <Text style={styles.Textframe2}>หมายเลขโทรศัพท์</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={styles.input2}
                                    value={text}
                                    onChangeText={setText}
                                    placeholder="หมายเลขที่ใช้บ่อย : (+66) 631175896"
                                />
                            </View>
                        </View>
                        <View>
                            <View>
                                <Text style={styles.Textframe2}>รายละเอียดที่อยู่</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={styles.input2}
                                    value={text}
                                    onChangeText={setText}
                                    placeholder="หมายเลขที่ใช้บ่อย : (+66) 631175896"
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input3}
                                    value={text}
                                    onChangeText={setText}
                                    placeholder="จังหวัด, เขต/อำเภอ, แขวง/ตำบล, รหัสไปรษณีย์"
                                    placeholderTextColor="#9A9A9A"
                                />
                                <TouchableOpacity onPress={() => alert('Chevron pressed!')}>
                                    <Ionicons name="chevron-forward" size={20} color="#9A9A9A" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separatorLine1} />
                    <View style={styles.container2_4}>
                        <View>
                            <Text style={styles.Textframe2_1}>การศึกษาและคุณสมบัติอื่นๆ</Text>
                            <Text style={styles.Textframe2_2}>ทักษะ, ระดับภาษา, ประสบการณ์ทำงาน, แนะนำตัว, ใบรับรอง</Text>
                        </View>
                        <View>
                            <Switch
                                trackColor={{ false: '#C7C7C7', true: '#4CD964' }}
                                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                                ios_backgroundColor="#E6D7CF"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.spaceX}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.buttonContainer1}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText1}>ยกเลิก</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonContainer2}
                        onPress={handleSave}
                    >
                        <Text style={styles.buttonText2}>บันทึก</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                visible={isSaveModalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setSaveModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>บันทึกสำเร็จ</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    space2: {
        marginTop: 25,
        marginRight: 80
    },
    spaceX: {
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    icon: {
        marginLeft: 5,
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
    separatorLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6D7CF',
        width: '100%',
        marginTop: -20
    },
    separatorLine1: {
        borderBottomWidth: 3,
        borderBottomColor: '#F7F7F7',
        width: '100%',
    },
    container2_4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    buttonContainer1: {
        width: '40%',
        height: 50,
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#FF8749',
        borderRadius: 50,
    },
    buttonContainer2: {
        backgroundColor: '#FFB472',
        width: '55%',
        height: 50,
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
    },
    button4: {
        flexDirection: 'row',
        padding: 20,
        marginTop: -60,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    circle1: {
        marginTop: 19
    },
    space11: {
        top: -10,
        left: 30,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#F5EFEC',
        borderRadius: 8,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text7: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: '#DF8C62',
    },
    Text5: {
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 18,
        color: '#4A4A4A',
    },
    Text6: {
        fontFamily: 'Poppins-Medium',
        color: '#B8A79E',
        fontSize: 12,
    },
    container2: {
        padding: 20,
    },
    container4:{
        marginTop: -10
    },
    container2_1: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    container2_2: {
        marginBottom: 20
    },
    container2_3: {
        marginBottom: 10
    },
    Textframe2: {
        color: '#6D6D6D',
        fontFamily: 'Sarabun-Medium',
        fontSize: 13,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#F6DED1',
        marginBottom: -30,
        marginTop: 5,
        color: '#9A9A9A',
        fontFamily: 'Sarabun-Medium',
        fontSize: 11,
    },
    input1: {
        width: 180,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#F6DED1',
        marginBottom: -20,
        marginTop: 5,
        color: '#9A9A9A',
        fontFamily: 'Sarabun-Medium',
        fontSize: 11,
    },
    input2: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#F6DED1',

        marginTop: 5,
        color: '#9A9A9A',
        fontFamily: 'Sarabun-Medium',
        fontSize: 11,
    },
    input3: {
        flex: 1,
        padding: 10,
        fontFamily: 'Sarabun-Medium',
        fontSize: 11,
        color: '#4A4A4A',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F6DED1',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#FFFFFF',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 16,
        fontFamily: 'Sarabun-Medium',
        color: '#333',
    },
    Textframe2_1: {
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
        color: '#6E6E6E',
    },
    Textframe2_2: {
        fontSize: 11,
        fontFamily: 'Sarabun-Medium',
        color: '#BE7C5A',
    },
});

export default ApplicationDetails;
