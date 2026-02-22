import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

const Profile = () => {
    const [activeSection, setActiveSection] = useState(0);

    const buttons = [
        {
            icon: 'home',
            value: 0,
            label: 'รอดำเนินการ',
            color: '#FFFFFF',
            activeColor: '#7EA1D5'
        },
        {
            icon: 'search',
            value: 1,
            label: 'ประกาศผลแล้ว',
            color: '#FFFFFF',
            activeColor: '#7EA1D5'
        },
        {
            icon: 'user',
            value: 2,
            label: 'ประวัติการสมัคร',
            color: '#FFFFFF',
            activeColor: '#7EA1D5'
        },
    ];


    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 0 }} />
            <View style={styles.buttonContainer}>
                {buttons.map((button) => (
                    <View key={button.value} style={styles.buttonWrapper}>
                        <TouchableOpacity
                            style={[
                                styles.circleButton,
                                activeSection === button.value && styles.activeButton,
                                activeSection !== button.value && styles.inactiveButton
                            ]}
                            onPress={() => setActiveSection(button.value)}
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
            <SafeAreaView style={{ flex: 1, }}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', height: 1000 }}>
                    {activeSection === 0 && (
                        <ScrollView style={styles.page}>
                            <View style={styles.page_1}>
                                <View style={styles.container3}>
                                    <View style={styles.container2}>
                                        <Image
                                            source={require('../../../images/Logo/Group.png')}
                                            style={styles.logo}
                                            resizeMode="contain"
                                        />
                                        <View style={styles.container2_1}>
                                            <Text style={styles.Textframe1}>UX/UI Designer for Web/App</Text>
                                            <Text style={styles.Textframe2}>Thai Beverage Plc</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.container1}>
                                        <Ionicons name="chatbox-ellipses-outline" size={15} color="black" />
                                        <Text style={[styles.Textframe, { marginLeft: 10 }]}>ติดต่อ</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.container3_1}>
                                    <View style={styles.container3_2}>
                                        <View style={styles.container3_3}>
                                            <View style={styles.container3_4}>
                                                <Ionicons name="checkmark-circle" size={15} color="#79BD57" />
                                                <Text style={[styles.Textframe, { marginLeft: 10 }]}>ส่งใบสมัคร</Text>
                                            </View>
                                            <Text style={styles.Textframe3}>2 ตุลาคม 2567</Text>
                                        </View>
                                        <View style={styles.container3_3}>
                                            <View style={styles.container3_4}>
                                                <View>
                                                    <View style={styles.container3_4}>
                                                        <Ionicons name="checkmark-circle" size={15} color="#79BD57" />
                                                        <Text style={[styles.Textframe, { marginLeft: 10 }]}>ส่งใบสมัคร</Text>
                                                    </View>
                                                    <Text style={[styles.Textframe2, { marginLeft: 25 }]}>(รอประกาศวันนัดสัมภาษณ์)</Text>
                                                </View>
                                            </View>
                                            <Text style={styles.Textframe3}>10 ตุลาคม 2567</Text>
                                        </View>
                                        <View style={styles.container3_3}>
                                            <View style={styles.container3_4}>
                                                <Ionicons name="checkmark-circle" size={15} color="#79BD57" />
                                                <Text style={[styles.Textframe, { marginLeft: 10 }]}>สัมภาษณ์งาน</Text>
                                            </View>
                                            <Text style={styles.Textframe3}>22 ตุลาคม 2567</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.container3_3_1}>
                                    <View style={styles.container3_4}>
                                        <Ionicons name="hourglass-outline" size={15} color="#A6A6A6" />
                                        <Text style={[styles.Textframe, { marginLeft: 10 }]}>สัมภาษณ์งาน</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.separatorLine} />
                            <View style={styles.page_1}>
                                <View style={styles.container3}>
                                    <View style={styles.container2}>
                                        <Image
                                            source={require('../../../images/Logo/Group.png')}
                                            style={styles.logo}
                                            resizeMode="contain"
                                        />
                                        <View style={styles.container2_1}>
                                            <Text style={styles.Textframe1}>UX/UI Designer for Web/App</Text>
                                            <Text style={styles.Textframe2}>Thai Beverage Plc</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.container1}>
                                        <Ionicons name="chatbox-ellipses-outline" size={15} color="black" />
                                        <Text style={[styles.Textframe, { marginLeft: 10 }]}>ติดต่อ</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.container3_1_1}>
                                    <View style={styles.container3_2}>
                                        <View style={styles.container3_3}>
                                            <View style={styles.container3_4}>
                                                <Ionicons name="checkmark-circle" size={15} color="#79BD57" />
                                                <Text style={[styles.Textframe, { marginLeft: 10 }]}>ส่งใบสมัคร</Text>
                                            </View>
                                            <Text style={styles.Textframe3}>2 ตุลาคม 2567</Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.container3_3_1}>
                                        <View style={styles.container3_4}>
                                            <View>
                                                <View style={styles.container3_4}>
                                                    <Ionicons name="hourglass-outline" size={15} color="#A6A6A6" />
                                                    <Text style={[styles.Textframe, { marginLeft: 10 }]}>ประกาศผล</Text>
                                                </View>
                                                <Text style={[styles.Textframe2, { marginLeft: 25 }]}>(รอประกาศวันนัดสัมภาษณ์)</Text>
                                            </View>
                                        </View>
                                        <Text style={styles.Textframe3}>10 ตุลาคม 2567</Text>
                                    </View>
                                    <View style={styles.container3_3_1}>
                                        <View style={styles.container3_4}>
                                            <Ionicons name="hourglass-outline" size={15} color="#A6A6A6" />
                                            <Text style={[styles.Textframe, { marginLeft: 10 }]}>สัมภาษณ์งาน</Text>
                                        </View>
                                        <Text style={styles.Textframe3}>22 ตุลาคม 2567</Text>
                                    </View>
                                    <View style={styles.container3_3_1}>
                                        <View style={styles.container3_4}>
                                            <Ionicons name="hourglass-outline" size={15} color="#A6A6A6" />
                                            <Text style={[styles.Textframe, { marginLeft: 10 }]}>บริษัทรับเข้าทำงาน</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.separatorLine} />
                        </ScrollView>
                    )}
                    {activeSection === 1 && (
                        <ScrollView style={styles.page}>


                        </ScrollView>
                    )}
                    {activeSection === 2 && (
                        <ScrollView style={styles.page}>

                        </ScrollView>
                    )}
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    container1: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
        backgroundColor: '#F8F8F8',
        alignItems: 'center'
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container2_1: {
        marginLeft: 10
    },
    container3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    container3_1: {
        backgroundColor: '#FFF8F4',
        borderRadius: 20,
    },
    container3_1_1: {
        backgroundColor: '#FFF8F4',
        borderRadius: 20,
    },
    container3_2: {
        padding: 20
    },
    container3_3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    container3_3_1: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -15
    },
    container3_4: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        width: '100%',
        height: 50
    },
    circleButton: {
        width: 110,
        height: 30,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#FFF5F0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    activeButton: {
        backgroundColor: '#EB9D75',
    },
    inactiveButton: {
        borderWidth: 1,
        borderColor: '#FFF5F0',
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
    page: {
        flex: 1,
        height: 1000
    },
    page_1: {
        padding: 20
    },
    activeLabel: {
        color: '#FFFFFF',
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
    },
    inactiveLabel: {
        color: '#626262',
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
    },
    logo: {
        width: 32,
        height: 32
    },
    Textframe: {
        fontFamily: 'Sarabun-Medium',
    },
    Textframe1: {
        fontFamily: 'Sarabun-Medium',
        color: '#4A4A4A',
        fontSize: 14
    },
    Textframe2: {
        fontFamily: 'Sarabun-Medium',
        color: '#969696',
        fontSize: 14
    },
    Textframe3: {
        fontFamily: 'Sarabun-Medium',
        color: '#CC9B86',
        fontSize: 14
    },
    separatorLine: {
        borderBottomWidth: 5,
        borderBottomColor: '#F7F7F7',
        marginVertical: 1,
    },
});

export default Profile;
