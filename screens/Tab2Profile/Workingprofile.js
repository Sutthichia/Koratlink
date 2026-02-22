import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text, Image, TouchableOpacity, Button, Switch, ScrollView, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

const StepForm = ({ navigation, route }) => {
    const { setCurrentTab } = route.params;

    const handlePress = () => {
        setCurrentTab(2);
        navigation.navigate('Main', { screen: 'TabNavigator2', params: { screen: 'Guest Home' } });
    };

    const options1 = [
        {
            logo: require('../../images/Logo/image.png'),
            companyName: 'แม่บ้านประจำศูนย์อาหาร..',
            jobTitle: 'HIGH HOUSE BUILDING',
            views: 239,
            type: 'บริษัท',
            timeAgo: '1 ชั่วโมงที่แล้ว',
            tags1: 'รับสมัครด่วน',
            tags2: 'เหลือเพียง 1 อัตรา',
            status: 'สมัครงานนี้ก่อนใคร',
            location: {
                name: 'เดอะมอล์นครราชสีมา',
                distance: 5.2
            },
            salary: {
                min: 20000,
                max: 30000
            },
            age: {
                min: 20,
                max: 45
            },
            education: 'วุฒิ ป.ตรี'
        },
        {
            logo: require('../../images/Logo/image.png'),
            companyName: 'แม่บ้านประจำศูนย์อาหาร..',
            jobTitle: 'HIGH HOUSE BUILDING',
            views: 239,
            type: 'ร้านค้า',
            timeAgo: '1 ชั่วโมงที่แล้ว',
            tags1: 'รับสมัครด่วน',
            tags2: 'เหลือเพียง 1 อัตรา',
            status: 'ดูรายการสมัคร',
            location: {
                name: 'เมืองนครราชสีมา',
                distance: 3.2
            },
            salary: {
                min: 20000,
                max: 30000
            },
            age: {
                min: 20,
                max: 45
            },
            education: 'วุฒิ ม.3 ขึ้นไป'
        },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.separatorLine} />
            <ScrollView>
                <View style={styles.circle1}>
                    <Image
                        source={require('../../images/icon/image (3).png')}
                        style={styles.logo4}
                        resizeMode="contain"
                    />
                    <TouchableOpacity style={styles.button4} >
                        <View>
                            <Image
                                source={require('../../images/Logo/image (5).png')}
                                style={styles.logo4}
                                resizeMode="contain"
                            />
                            <View style={styles.space11}>
                                <Text style={styles.Text7}>60%</Text>
                            </View>
                        </View>
                        <View style={styles.space2}>
                            <Text style={styles.Text5}>บริษัท ภูพบฟ้า จำกัด</Text>
                            <Text style={styles.Text6}>PHU POB FA COMPANY LIMITED </Text>
                            <Text style={styles.Text6}>สตาร์ทอัพด้านเทคโนโลยี  พนักงาน 11 - 50 คน </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <Text style={styles.Text}>กองบิน 1 ต.หนองไผ่ล้อม อ.เมืองนครราชสีมา จ.นครราชสีมา 30000</Text>
                        <View style={styles.container3}>
                            <Text style={styles.Text}>darinpila@gmail.com</Text>
                            <Text style={styles.Text}>063-4567890</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.Area}>
                            <FontAwesome5 name="user" size={12} color="black" />
                            <Text style={styles.Text1}>เกี่ยวกับ</Text>
                        </View>
                        <View style={styles.container54}>
                            <View>
                                <Text style={styles.Text2}>ทำระบบจัดการ E-Commerce ครบวงจร และมีดีลพิเศษกับบริษัท, ห้างร้าน, ธนาคาร ต่างๆมากมาย  บริษัทต้องการคนรุ่นใหม่ หรือคนมีประสบการณ์</Text>
                            </View>
                            <View style={styles.container64}>
                                <Ionicons name="globe-outline" size={20} color="#B8A79E" />
                                <Text style={styles.Text15}>PHUPOBFACOMPANYLIMITED.ae</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.Area}>
                            <Entypo name="star-outlined" size={15} color="black" />
                            <Text style={styles.Text1}>สวัสดิการ</Text>
                        </View>
                        <View style={styles.container5}>
                            <View style={styles.container80}>
                                <View>
                                    <View style={styles.container5_1}>
                                        <Ionicons name="checkmark-circle-outline" size={20} color="#DF8C62" />
                                        <Text style={[styles.Text, { marginLeft: 5 }]}>Work Form Home 100%</Text>
                                    </View>
                                    <View style={styles.container5_1}>
                                        <Ionicons name="checkmark-circle-outline" size={20} color="#DF8C62" />
                                        <Text style={[styles.Text, { marginLeft: 5 }]}>วันหยุดตามธนาคาร</Text>
                                    </View>
                                </View>
                                <View style={styles.container5_1_1}>
                                    <View style={styles.container5_1}>
                                        <Ionicons name="checkmark-circle-outline" size={20} color="#DF8C62" />
                                        <Text style={[styles.Text, { marginLeft: 5 }]}>วันหยุดตามธนาคาร</Text>
                                    </View>
                                    <View style={styles.container5_1}>
                                        <Ionicons name="checkmark-circle-outline" size={20} color="#DF8C62" />
                                        <Text style={[styles.Text, { marginLeft: 5 }]}>ผ่านโปรแจก Macbook</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.menuContentContainer}
                    style={styles.newContent1}>
                    {options1.map((options1, index) => (
                        <View key={index} style={styles.container44}>
                            <TouchableOpacity style={styles.container55} >
                                <View style={styles.program}>
                                    <Image source={options1.logo} style={styles.logo15} resizeMode="contain" />
                                    <View style={styles.container95} >
                                        <Text style={styles.separatorText11115}>{options1.companyName}</Text>
                                        <View style={styles.container155}>
                                            <Text style={styles.separatorText215}>{options1.jobTitle}</Text>
                                            <View style={styles.container18}>
                                                <View style={styles.container8}>
                                                    <Ionicons name="eye-outline" size={12} color="#CC9B86" />
                                                    <View style={styles.container17}>
                                                        <Text style={styles.separatorText31}>{options1.views} เข้าชม</Text>
                                                    </View>
                                                    <View style={styles.separatorLine11} />
                                                </View>
                                                <View style={styles.container8}>
                                                    <Ionicons name="time-outline" size={12} color="#CC9B86" />
                                                    <View style={styles.container17}>
                                                        <Text style={styles.separatorText31}>{options1.timeAgo}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.container65}>

                                    <View style={styles.container16}>
                                        <View style={styles.urgent}>
                                            <View style={styles.urgent1}>
                                                <Text style={styles.separatorText111}>{options1.tags1}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.urgent}>
                                            <View style={styles.urgent2}>
                                                <Text style={styles.separatorText41}>{options1.tags2}</Text>
                                            </View>
                                        </View>

                                    </View>
                                    <View style={styles.container10}>
                                        <View>
                                            <View style={styles.container13}>
                                                <Ionicons name="location-outline" size={15} color="#CC9B86" />
                                                <View style={styles.container145}>
                                                    <Text style={styles.separatorText51}>{options1.location?.name} ({options1.location?.distance} km)</Text>
                                                </View>
                                            </View>
                                            <View style={styles.container13}>
                                                <Ionicons name="cash-outline" size={15} color="#CC9B86" />
                                                <View style={styles.container145}>
                                                    <Text style={styles.separatorText51}>{options1.salary?.min} - {options1.salary?.max} บาท</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View>
                                            <View style={styles.container13}>
                                                <Ionicons name="reload-circle-outline" size={15} color="#CC9B86" />
                                                <View style={styles.container145}>
                                                    <Text style={styles.separatorText51}>อายุ {options1.age?.min} - {options1.age?.max} ปี</Text>
                                                </View>
                                            </View>
                                            <View style={styles.container13}>
                                                <Ionicons name="school-outline" size={15} color="#CC9B86" />
                                                <View style={styles.container145}>
                                                    <Text style={styles.separatorText51}>{options1.education}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </ScrollView>
            <View style={styles.spaceX}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonContainer3} onPress={handlePress} >
                        <Text style={styles.buttonText11}>หน้าแรก</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer1} >
                        <Text style={styles.buttonText1}>แก้ไขประวัติ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    container1: {
        padding: 20,
        marginTop: -30
    },
    container2: {
        borderWidth: 1,
        borderColor: "#F6DED1",
        borderRadius: 10,
        width: 370,
        padding: 10,
        marginBottom: 8,
    },
    container3: {
        flexDirection: 'row',
    },
    container4: {
        flexDirection: 'row',
    },
    container80: {
        flexDirection: 'row',
    },
    container81: {
        marginLeft: 30
    },
    container5: {
        width: 370,
        padding: 10,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container5_1:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    container5_1_1:{
        marginLeft: 10
    },
    container54: {
        width: 370,
        padding: 10,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        marginBottom: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container64: {
        borderWidth: 1,
        borderColor: "#F6DED1",
        borderRadius: 10,
        width: 330,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    box: {
        height: 20,
    },
    box3: {
        height: 20,
    },
    box1: {
        top: 10
    },
    box2: {
        marginTop: -60
    },
    Box4: {
        marginTop: -60,
        marginBottom: 20
    },
    container6: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container7: {
        marginTop: 19

    },

    container9: {
        flexDirection: 'row',
    },
    container10: {
        flexDirection: 'row',
    },
    container12: {
        marginLeft: 10
    },
    container14: {

    },
    imageContainer: {
        alignItems: 'center',
        width: '20%',
    },
    container11: {
        flexDirection: 'column',
        height: '30%',
        paddingVertical: 120,
    },
    container15: {
        backgroundColor: '#EAEAEA',
        width: 220,
        height: 2,
        borderRadius: 50,
    },
    container16: {
        backgroundColor: '#F0BA9E',
        width: 160,
        height: 2,
        borderRadius: 50,
    },

    Area: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    space: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    space1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
    },
    space2: {
        marginTop: 35,
        marginRight: 30
    },
    space3: {
        marginLeft: 10
    },
    spaceX: {
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    logo: {

    },
    logo1: {
        width: 34,
        height: 34,
    },
    logo2: {
        width: 79,
        height: 61,
        marginLeft: 10,
        marginBottom: 6
    },
    logo3: {
        height: 100,
        width: 1,
    },
    logo4: {
    },

    button: {
        backgroundColor: '#FFF4EB',
        padding: 5,
        borderRadius: 50,
        marginTop: 10,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#6D6D6D',
        fontSize: 11,
        fontFamily: 'Sarabun-Medium',
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
    switch: {
        transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }],
        left: 10
    },
    separatorLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6D7CF',
        width: '100%',
        marginTop: -20
    },
    Text: {
        color: '#6D6D6D',
        fontSize: 12,
        fontFamily: 'Sarabun-Medium',
    },
    Text1: {
        marginLeft: 10
    },
    Text2: {
        color: '#6D6D6D',
        fontSize: 11,
        fontFamily: 'Sarabun-Regular',
    },
    Text9: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 12,
        marginBottom: 5,
    },
    Text15: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: '#B8A79E',
        marginLeft: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    buttonContainer1: {
        width: '70%',
        height: 50,
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#FF8749',
        borderRadius: 50,
    },
    buttonContainer3: {
        width: '27%',
        height: 50,
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#FFB472'
    },
    buttonText11: {
        fontSize: 15,
        fontFamily: 'Sarabun-SemiBold',
        color: '#FFFFFF'
    },
    buttonContainer2: {
        backgroundColor: '#EB9D75',
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
    circle: {
        width: 90,
        height: 90,
        borderRadius: 100,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: -78
    },
    circle1: {

    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 25,
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
    container55: {
        padding: 15,
        borderRadius: 17,
        marginLeft: 22,
        borderWidth: 1,
        borderColor: '#CC9B86',
    },
    logo15: {
        width: 45,
        height: 35,
    },
    container65: {
        marginLeft: 8
    },
    container95: {


    },
    separatorText11115: {
        color: '#4A4A4A',
        fontFamily: 'Sarabun-Medium',
        fontSize: 15
    },
    Bottom5: {
        marginLeft: 300,
        marginTop: -25
    },
    container155: {
        flexDirection: 'row',
        marginBottom: 6,
        alignItems: 'center'
    },
    separatorText215: {
        color: '#969696',
        fontFamily: 'Inter_18pt-Medium',
        fontSize: 10
    },
    container18: {
        flexDirection: 'row',
        marginLeft: -9
    },
    separatorText31: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 10,
        color: '#CC9B86'
    },
    separatorLine11: {
        height: 10,
        width: 1,
        backgroundColor: '#CC9B86',
        left: 8
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
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 10,
        color: '#CC9B86'
    },
    separatorText111: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 10,
        color: '#C66060'
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
    separatorText41: {
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
    container16: {
        flexDirection: 'row',
        right: 7
    },
    separatorText51: {
        fontFamily: 'Sarabun-Regular',
        fontSize: 12,
        color: '#6D6D6D',
        marginLeft: 5
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF4EB',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },

    separatorText22: {
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 10,
        color: '#A3A3A3',
    },
    separatorLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#F2EBE5',
        marginVertical: 0.1,
    },
    program: {
        flexDirection: 'row',
    },
});

export default StepForm;
