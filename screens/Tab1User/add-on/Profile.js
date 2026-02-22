import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import Profile2 from './Profile2';
import { TabBarContext } from '../../../components/TabBarContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Profile = ({ navigation }) => {
    const [activeSection, setActiveSection] = useState(0);
    const { tabBarIcons } = useContext(TabBarContext);
    const buttons = [
        {
            value: 0,
            label: 'งานที่สมัคร',
            color: '#FFFFFF',
            activeColor: '#7EA1D5'

        },
        {
            value: 1,
            label: 'การนัดหมาย',
            color: '#FFFFFF',
            activeColor: '#7EA1D5'
        },
        {

            value: 2,
            label: 'ประวัติส่วนตัว',
            color: '#FFFFFF',
            activeColor: '#7EA1D5',
            onPress: () => navigation.navigate('Profile3'),
        },
    ];

    const profiles2 = [
        {
            name: "ดาริน พิลาณี",
            age: 28,
            position: "Product Owner",
            timeAvailable: "6 ชั่วโมง",
            jobTitle: "Digital Product Designer",
            qualificationMatch: "คุณสมบัติตรง 99%",
            education: "ป.ตรี วิศวกรรมซอฟต์แวร์",
            documentsStatus: "เอกสารครบถ้วน",
            imageSource: require('../../../images/profile/image (4).png'),
            actions: {
                editTime: "ยกเลิกนัด",
                reschedule: "ขอเลื่อนวันนัด",
                cancel: "ยืนยันการนัด",
            },
        },
        {
            name: "สมชาย สุขเกษม",
            age: 30,
            position: "UX/UI Designer",
            timeAvailable: "8 ชั่วโมง",
            jobTitle: "Web Developer",
            qualificationMatch: "คุณสมบัติตรง 95%",
            education: "ป.ตรี วิทยาการคอมพิวเตอร์",
            documentsStatus: "เอกสารไม่ครบถ้วน",
            imageSource: require('../../../images/profile/Group 650.png'),
            actions: {
                editTime: "ยกเลิกนัด",
                reschedule: "ขอเลื่อนวันนัด",
                cancel: "ยืนยันการนัด",
            },
        },
    ];

    const handleSkip = () => {
        navigation.navigate('Profile3');
    };

    const handleSkip1 = () => {
        navigation.navigate('Profile4');
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {buttons.map((button) => (
                    <View key={button.value} style={styles.buttonWrapper}>
                        <TouchableOpacity
                            style={[
                                styles.circleButton,
                                activeSection === button.value && styles.activeButton,
                                activeSection !== button.value && styles.inactiveButton
                            ]}
                            onPress={button.onPress || (() => setActiveSection(button.value))}
                        >
                            <Text style={[
                                styles.buttonLabel,
                                activeSection === button.value && styles.activeLabel,
                                activeSection !== button.value && styles.inactiveLabel
                            ]}>
                                {button.label}
                            </Text>
                        </TouchableOpacity>

                    </View>
                ))}
            </View>
            <View style={styles.box0}>
                <TouchableOpacity style={styles.button4} onPress={handleSkip} >
                    <View>
                        <View style={styles.circle}>

                            <Image
                                source={require('../../../images/profile/image (4).png')}
                                style={styles.Image}
                                resizeMode="contain"
                            />
                            <View />
                            <View style={styles.space1}>
                                <Text style={styles.Text7}>60%</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.space2}>
                        <View style={styles.space5}>
                            <View style={styles.space6}>
                                <Text style={styles.Text5}>ดาริน พิลาณี</Text>
                                <View style={styles.space9}>
                                    <AntDesign name="checkcircle" size={15} color="#FF9F6F" />
                                </View>
                            </View>
                            <TouchableOpacity style={styles.space4} onPress={handleSkip1}>
                                <Ionicons name="create-outline" size={15} color="#CC9B86" />
                                <Text style={styles.Text6}>แก้ไข</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.Text8}>Product Owner | UX Researcher </Text>
                        <View style={styles.space3}>
                            <View style={styles.space7}>
                                <Ionicons name="mail-outline" size={12} color="#B8A79E" />
                                <Text style={styles.Text9}>darinpila@gmail.com | </Text>
                            </View>
                            <View style={styles.space8}>
                                <Ionicons name="call-outline" size={12} color="#B8A79E" />
                                <Text style={styles.Text9}>063-4567890</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                    {activeSection === 0 && (
                        <View style={styles.page}>
                            <Profile2 />
                        </View>
                    )}
                    {activeSection === 1 && (
                        <ScrollView style={styles.page}>
                            <View style={styles.page1}>
                                <View style={styles.page1v4}>
                                    <View style={styles.space8_1}>
                                        <Ionicons name="calendar-number-outline" size={20} color="#BE7C5A" />
                                        <Text style={[styles.Text9V1, { marginLeft: 5 }]}>8 ตุลาคม 2567</Text>
                                    </View>
                                    <Text style={styles.Text9V2}>3 การนัดหมาย</Text>
                                </View>
                            </View>
                            {profiles2.map((profile, index) => (
                                <View key={index} >
                                    <View key={index} style={styles.page2_1_1}>
                                        <View style={styles.page2}>
                                            <View View style={styles.page2_0}>
                                                <Image
                                                    source={profile.imageSource}
                                                    style={styles.logo}
                                                    resizeMode="contain"
                                                />
                                                <View style={styles.page1_1v2}>
                                                    <View style={styles.page1_1_2}>
                                                        <Text style={styles.Textframe2}>{profile.name}</Text>
                                                        <View style={styles.page1_1_2_1}>
                                                            <MaterialCommunityIcons name="check-decagram" size={15} color="#79BD57" />
                                                            <Text style={styles.Textframe2_1}>( อายุ {profile.age} ปี )</Text>
                                                        </View>
                                                    </View>
                                                    <Text style={styles.pageText2}>{profile.position}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.page1_1_3}>
                                                <Ionicons name="time-outline" size={15} color="#CC9B86" />
                                                <Text style={styles.Textframe3}>{profile.timeAvailable}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.table}>
                                            <View style={styles.row}>
                                                <View style={styles.cell1}>
                                                    <Ionicons name="briefcase-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.jobTitle}</Text>
                                                </View>
                                                <View style={styles.cell2}>
                                                    <Ionicons name="checkmark-circle-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.qualificationMatch}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.row}>
                                                <View style={styles.cell3}>
                                                    <Ionicons name="school-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.education}</Text>

                                                </View>
                                                <View style={styles.cell4}>
                                                    <Ionicons name="checkmark-circle-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.documentsStatus}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.page1V3}>
                                            <TouchableOpacity style={styles.page2_1}>
                                                <Text style={styles.pageText9}>{profile.actions.editTime}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.page2_2}>
                                                <Text style={styles.pageText10}>{profile.actions.reschedule}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.page2_3}>
                                                <Text style={styles.pageText11}>{profile.actions.cancel}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.separatorLine} />
                                </View>
                            ))}

                        </ScrollView>
                    )}
                    {activeSection === 2 && (
                        <View style={styles.page}>

                        </View>
                    )}
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    circleButton: {
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: '#F1F1F1',
    },

    buttonWrapper: {
        alignItems: 'center',
    },
    buttonLabel: {
        fontSize: 12,
        color: '#FFFFFF',
    },
    buttonLabel: {
        fontSize: 12,
        color: '#626262',
    },
    box0: {
        alignItems: 'center'
    },
    page: {
        flex: 1,
    },
    page1: {
        backgroundColor: '#F1F1F1'
    },
    page1v4: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:-10,
        marginTop: -10
    },
    space8_1: {
        flexDirection: 'row',
    },
    pageText: {
        fontSize: 24,
    },
    activeLabel: {
        color: '#626262',
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
    },
    inactiveLabel: {
        color: '#626262',
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
    },
    button4: {
        flexDirection: 'row',
        padding: 15,
        top: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Text9V1: {
        fontSize: 12,
        color: '#BE7C5A',
        fontFamily: 'Sarabun-SemiBold',
    },
    Text9V2:{
        fontSize: 12,
        color: '#BE7C5A',
        fontFamily: 'Sarabun-SemiBold',
    },
    circle: {
        width: 71,
        height: 71,
        borderRadius: 50,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 71,
        height: 71,
        borderRadius: 25,
    },
    space1: {
        top: 35,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#F5EFEC',
        borderRadius: 8,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        left: 3
    },
    Text7: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: '#DF8C62',
    },
    space2: {
        marginTop: -25,
        marginLeft: 20
    },
    space3: {
        flexDirection: 'row',
    },
    space5: {
        flexDirection: 'row',
    },
    space6: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    space4: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 130
    },
    space7: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    space8: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    space9: {
        marginLeft: 10
    },
    Text5: {
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 18,
        color: '#4A4A4A',
    },
    Text6: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 10,
        color: '#CC9B86',
    },
    Text8: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: '#B8A79E',
    },
    Text9: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: '#B8A79E',
        marginLeft: 5
    },
    ///////////////////////////
    page2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#F1F1F1',
    },
    page2_1_1: {
        padding: 20,
    },
    page2_0: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 32,
        height: 32
    },
    page1_1v2: {
        marginLeft: 10
    },
    page1_1_2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Textframe2: {
        color: '#4A4A4A',
        fontSize: 15,
        fontFamily: 'Sarabun-SemiBold',
    },
    page1_1_2_1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5
    },
    Textframe2_1: {
        color: '#818181',
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
        marginLeft: 5
    },
    pageText2: {
        fontSize: 10,
        color: '#4A4A4A',
        fontFamily: 'Poppins-Medium',
    },
    page1_1_3: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    Textframe3: {
        color: '#CC9B86',
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
        marginLeft: 5
    },
    table: {
        marginTop: 20
    },
    row: {
        flexDirection: 'row',
    },
    cell1: {
        borderWidth: 1,
        borderColor: '#CC9B86',
        padding: 10,
        flex: 1,
        borderTopLeftRadius: 10,
        flexDirection: 'row',
    },
    cell2: {
        borderWidth: 1,
        borderColor: '#CC9B86',
        padding: 10,
        flex: 1,
        borderTopRightRadius: 10,
        flexDirection: 'row',
    },
    cell3: {
        borderWidth: 1,
        borderColor: '#CC9B86',
        padding: 10,
        flex: 1,
        borderBottomStartRadius: 10,
        flexDirection: 'row',
    },
    cell5: {
        borderWidth: 1,
        borderColor: '#CC9B86',
        padding: 10,
        flex: 1,
        flexDirection: 'row',
    },
    cell6: {
        borderWidth: 1,
        borderColor: '#CC9B86',
        padding: 10,
        flex: 1,
        flexDirection: 'row',
    },
    cell4: {
        borderWidth: 1,
        borderColor: '#CC9B86',
        padding: 10,
        flex: 1,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
    },
    pageText12: {
        fontSize: 11,
        fontFamily: 'Sarabun-Medium',
        color: '#726D6B',
        marginLeft: 10
    },
    page1V3: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 15
    },
    page2_1: {
        borderColor: '#F2EBE5',
        borderWidth: 1,
        borderRadius: 20,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    page2_2: {
        borderRadius: 20,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#F2EBE5',
        borderWidth: 1,
    },
    page2_3: {
        backgroundColor: '#79BD57',
        borderRadius: 20,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageText9: {
        fontSize: 12,
        fontFamily: 'Sarabun-Medium',
        color: '#C66060'
    },
    pageText10: {
        fontSize: 12,
        fontFamily: 'Sarabun-Medium',
        color: '#6D6D6D'
    },
    pageText11: {
        fontSize: 12,
        fontFamily: 'Sarabun-Medium',
        color: '#FFFFFF'
    },
    separatorLine: {
        borderBottomWidth: 3,
        borderBottomColor: '#F7F7F7',
        marginVertical: 1,
    },
});

export default Profile;
