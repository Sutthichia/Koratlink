import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Switch, TouchableOpacity, StyleSheet, FlatList, Linking, ScrollView } from 'react-native';
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
        navigation.navigate('Advertisingprocess')
    };

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);


    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.buttonText}>🚀  ด่วน!  ตามหา UX/UI Designer มาร่วมทีม! 🚀</Text>
                <View style={styles.iconButton}>
                    <MaterialCommunityIcons
                        name={isEnabled ? "eye" : "eye-off"}
                        size={15}
                        color={isEnabled ? "#F3A57E" : "#726D6B"} 
                        style={styles.icon}
                    />
                    <Switch
                        trackColor={{ false: '#767577', true: '#4CD964' }}
                        thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            <ScrollView style={styles.container4}>
                <View style={styles.container2}>
                    <Image
                        source={require('../../images/advertise/1 801 (1).png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.container3}>
                    <Text style={styles.buttonText1}>🚀  ด่วน!  ตามหา UX/UI Designer มาร่วมทีม! 🚀</Text>
                    <Text style={styles.buttonText1}>💪  กำลังมองหา UX/UI Designer ที่มีไฟ 🔥  พร้อมลุยงานสุดท้าทาย</Text>
                    <Text style={styles.buttonText1}>✨  คุณสมบัติ:</Text>
                    <View>
                        <Text style={styles.buttonText2}>• ประสบการณ์ออกแบบ UX/UI  อายุ 25 ปี ขึ้นไป</Text>
                        <Text style={styles.buttonText2}>• เชี่ยวชาญ Figma, Adobe XD หรือโปรแกรมออกแบบอื่นๆ</Text>
                        <Text style={styles.buttonText2}>• เข้าใจ User-centered Design</Text>
                        <Text style={styles.buttonText2}>• มี Portfolio สวยๆ โชว์</Text>
                    </View>
                    <Text style={styles.buttonText1}>🎁  สวัสดิการ:</Text>
                    <View>
                        <Text style={styles.buttonText2}>• เงินเดือน [30000 - 40000]</Text>
                        <Text style={styles.buttonText2}>• โบนัสประจำปี</Text>
                        <Text style={styles.buttonText2}>• ประกันสุขภาพ</Text>
                        <Text style={styles.buttonText2}>• วันหยุดพักผ่อน</Text>
                        <Text style={styles.buttonText2}>• บรรยากาศการทำงานสุดชิล</Text>
                    </View>
                    <Text style={styles.buttonText1}>🤩  สนใจร่วมงานกับเรา?</Text>
                    <View>
                        <Text style={styles.buttonText2}>• ส่ง Resume & Portfolio มาที่ [darinpila@gmail.com]</Text>
                        <Text style={styles.buttonText2}>• ติดต่อ [063-4567890]</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.screen}>
                <View style={styles.screen1}>
                    <TouchableOpacity style={styles.screen2} onPress={handleAdvertisingprocess}>
                        <Text style={styles.screenText}>แก้ไข</Text>
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
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    container2: {
        alignItems: 'center',

    },
    container3: {
        padding: 20,
        height: 800
    },
    container4: {

    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    buttonText: {
        color: '#F1996C', 
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 14,
    },
    buttonText1: {
        color: '#000000', 
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 13,
    },
    buttonText2: {
        color: '#726D6B', 
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 13,
    },
    buttonText3: {
        color: '#FFFFFF', 
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 14,
    },
    screenText: {
        color: '#FFFFFF', 
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 15,
    },
    logo: {
        width: 377,
        height: 213
    },
    screen: {
        position: 'absolute',
        bottom: 5,
        left: 0,
        right: 0,
        padding: 5,
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
});

export default Promotiondetails;
