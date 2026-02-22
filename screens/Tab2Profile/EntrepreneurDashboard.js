import React, { useState, useRef, useContext } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity, Image, Text, ScrollView, Switch } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TabBarContext } from '../../components/TabBarContext';
import Feather from '@expo/vector-icons/Feather';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { FontAwesome } from '@expo/vector-icons';


const ScreenA = ({ navigation, setCurrentTab }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const scrollViewRef = useRef(null);
    const { tabBarIcons } = useContext(TabBarContext);
    const options = [
        { label: 'วิศวกร', label1: '53', image: require('../../images/occupation/engineer.jpg') },
        { label: 'ช่างซ่อมแอร์', label1: '53', image: require('../../images/occupation/Maintenance.jpg') },
        { label: 'นักบัญชี', label1: '53', image: require('../../images/occupation/Accountant.jpg') },
        { label: 'ส่งอาหาร', label1: '53', image: require('../../images/occupation/Delivery.jpg') },
        { label: 'แม่บ้าน', label1: '53', image: require('../../images/occupation/maid.jpg') },
    ];

    const koratConnextData = [
        {
            image: require('../../images/icon/image-3_1.png'),
            text: 'โคราชกินอะไรดี',
            textStyle: styles.separatorText9,
        },
        {
            image: require('../../images/icon/image_2.png'),
            text: 'ที่เที่ยวโคราช',
            textStyle: styles.separatorText9,
        },
        {
            image: require('../../images/icon/image-1_1.png'),
            text: 'Marketplace',
            textStyle: styles.separatorText10,
        },
        {
            image: require('../../images/icon/image-2_1.png'),
            text: 'ชาวโคราชบอกต่อ',
            textStyle: styles.separatorText9,
        },
    ];

    const Publicrelationsnews = [
        {
            image: require('../../images/advert/image-1.png'),
        },
        {
            image: require('../../images/advert/image.png'),
        },
        {
            image: require('../../images/advert/image.png'),
        },
        {
            image: require('../../images/advert/image.png'),
        },
    ]

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleSkip = () => {
        navigation.navigate('งานทั้งหมด');
    };
    const handleWarn = () => {
        navigation.navigate('Notification');
    };

    const handleFillter = () => {
        navigation.navigate('Fillter');
    };
    const handleAddhistory = () => {
        navigation.navigate('JobSeekerProfile');
    };
    const handleadvertise = () => {
        navigation.navigate('Advertise');
    };
    const options1 = [
        {
            logo: require('../../images/Logo/image.png'),
            companyName: 'แม่บ้านประจำศูนย์อาหาร..',
            jobTitle: 'HIGH HOUSE BUILDING',
            views: 239,
            type: 'บริษัท',
            timeAgo: '1 ชั่วโมงที่แล้ว',
            tags1: 'พร้อมเริ่มงานทันที',
            tags2: 'ไม่มีประวัติอาชญากรรม',
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
            education: 'วุฒิ ม.3 ขึ้นไป'
        },
        {
            logo: require('../../images/Logo/image.png'),
            companyName: 'แม่บ้านประจำศูนย์อาหาร..',
            jobTitle: 'HIGH HOUSE BUILDING',
            views: 239,
            type: 'ร้านค้า',
            timeAgo: '1 ชั่วโมงที่แล้ว',
            tags1: 'พร้อมเริ่มงานทันที',
            tags2: 'ไม่มีประวัติอาชญากรรม',
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
            education: 'ประสบการณ์ทำงาน 6 ปี'
        },
    ]
    const handleJobWorkingprofile = () => {
        navigation.navigate('Workingprofile');
    };

    const data = [
        {
            image: require('../../images/advertise/1 801.png'),
            name1: '🚀  ด่วน!ตามหา UX/UI....',
            name2: 'ประเภท : โปรโมทงาน',
            name3: 'คนดู : 220',
            name4: 'เหลือเวลา : 5 วัน',
        },
        {
            image: require('../../images/advertise/6 (1).png'),
            name1: 'หางานด่วน!!',
            name2: 'ประเภท : โปรโมทงาน',
            name3: 'คนดู : 220',
            name4: 'เหลือเวลา : 5 วัน',
        },
        {
            image: require('../../images/advertise/10 (1).png'),
            name1: 'รับสมัครด่วน',
            name2: 'ประเภท : โปรโมทงาน',
            name3: 'คนดู : 220',
            name4: 'เหลือเวลา : 5 วัน',
        },
    ];

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <SafeAreaView style={styles.container} >
            <LinearGradient
                colors={['#FFB472', '#FFFFFF']}
                locations={[0.1, 0.5]}
                style={styles.background}
            />
            <View style={styles.TextUp}>
                <View style={styles.TextUp4} >
                    <Text style={styles.separatorText}> KoratLink </Text>
                    <View style={styles.TextUp12}>
                        <Text style={styles.separatorText23}> ผู้ประกอบการ </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.TextUp1} onPress={handleWarn} >
                    <Ionicons name="notifications-outline" size={20} color="#FFFFFF" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.TextUp5} onPress={handleJobWorkingprofile} >
                <View style={styles.TextUp6}>
                    <Image
                        source={require('../../images/Logo/Group 272.png')}
                        style={styles.logo5}
                        resizeMode="contain"
                    />
                    <View tyle={styles.TextUp8}>
                        <View style={styles.TextUp7}>
                            <Text style={styles.separatorText24}> บริษัท ภูพบฟ้า จำกัด</Text>
                            <MaterialCommunityIcons name="check-decagram" size={15} color="#FF9F6F" />
                        </View>
                        <Text style={styles.separatorText25}> PHU POB FA COMPANY LIMITED</Text>
                    </View>
                </View>
                <View style={styles.TextUp9}>
                    <View style={styles.TextUp7}>
                        <Ionicons name="create-outline" size={15} color="#A1A1A1" />
                        <Text style={styles.separatorText26}>แก้ไข</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.separatorLine} />
            <ScrollView>
                <View style={styles.container1}>
                    <Image
                        source={require('../../images/Union.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <View style={styles.top}>
                        <Text style={styles.separatorText1}> ผู้ประกอบการ </Text>
                    </View>
                    <View style={styles.top1}>
                        <View style={styles.top2}>
                            <Text style={styles.separatorText2}> 50 </Text>
                            <Text style={styles.separatorText3}> งานที่โพสต์ </Text>
                        </View>
                        <View style={styles.top2}>
                            <Text style={styles.separatorText2}> 540 </Text>
                            <Text style={styles.separatorText3}> จำนวนเข้าชม </Text>
                        </View>
                        <View style={styles.top2}>
                            <Text style={styles.separatorText2}> 21 </Text>
                            <Text style={styles.separatorText3}> ยื่นไปสมัคร </Text>
                        </View>
                        <View style={styles.top2}>
                            <Text style={styles.separatorText2}> 10 </Text>
                            <Text style={styles.separatorText3}> รับเข้ามา </Text>
                        </View>
                        <View style={styles.top2}>
                            <Text style={styles.separatorText2}> 23 </Text>
                            <Text style={styles.separatorText3}> รีวิว </Text>
                        </View>
                    </View>
                    <View style={styles.top11}>
                        <TouchableOpacity style={styles.top9}
                            onPress={() => {
                                navigation.navigate('งานทั้งหมด');
                                if (setCurrentTab) {
                                    setCurrentTab(2); 
                                }
                            }}>
                            <Ionicons name="calendar-number" size={40} color="#ECA27C" />
                            <View style={styles.textContainer}>
                                <Text style={styles.separatorText14}>จัดการนัด</Text>
                                <Text style={styles.separatorText14}>สัมภาษณ์งาน</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.top9}
                            onPress={() => {
                                navigation.navigate('งานทั้งหมด');
                                if (setCurrentTab) {
                                    setCurrentTab(2); 
                                }
                            }}>
                            <Ionicons name="newspaper-sharp" size={40} color="#ECA27C" />
                            <View style={styles.textContainer}>
                                <Text style={styles.separatorText14}>จัดการ</Text>
                                <Text style={styles.separatorText14}>ใบผู้สมัคร</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.top9} onPress={handleadvertise} >
                            <Foundation name="megaphone" size={40} color="#ECA27C" />
                            <View style={styles.textContainer}>
                                <Text style={styles.separatorText14}>ลงโฆษณา</Text>
                                <Text style={styles.separatorText14}>เพื่อโปรโมท</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.top9}>
                            <Entypo name="chat" size={40} color="#ECA27C" />
                            <View style={styles.textContainer}>
                                <Text style={styles.separatorText14}>รีริว</Text>
                                <Text style={styles.separatorText14}>ผู้สมัครงาน</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container3}>
                        <View style={styles.TextUp2}>
                            <Text style={styles.separatorText4}> ฝากประวัติหางานได้ที่นี่ </Text>
                            <TouchableOpacity onPress={handleAddhistory}>
                                <Text style={styles.separatorText5}> ดูทั้งหมด </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container2}>
                            <TouchableOpacity style={styles.top6} onPress={handleAddhistory} >
                                <View style={styles.top5}>

                                    <AntDesign name="idcard" size={30} color="#FFFFFF" />

                                </View>
                                <Ionicons name="add-circle" size={24} color="#FF935B" style={styles.icon1} />
                                <Text style={styles.separatorText6}> ล่าสุด </Text>
                            </TouchableOpacity>
                            <View style={styles.top7} />
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {options.map((option, index) => (
                                    <TouchableOpacity key={index} style={styles.optionButton}>
                                        <Image source={option.image} style={styles.optionImage} />
                                        <Text style={styles.optionText1}>{option.label}</Text>
                                        <View style={styles.top4}>
                                            <Text style={styles.optionText}>{option.label1}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.container17_2}>
                        <View style={styles.container17_1}>
                            <Text style={styles.separatorText4}> รายการลงโฆษณาล่าสุดของคุณ </Text>
                            <Text style={styles.separatorText4}> ดูทั้งหมด </Text>
                        </View>
                    </View>
                    <View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.menuContentContainer}
                            style={styles.newContent1}>
                            {options1.map((options1, index) => (
                                <View key={index} style={styles.container444}>
                                    <TouchableOpacity style={styles.container5} >
                                        <View style={styles.container44}>
                                            <Image source={options1.logo} style={styles.logo1} resizeMode="contain" />
                                            <View style={styles.container6}>
                                                <View style={styles.container9} >
                                                    <Text style={styles.separatorText1111}>{options1.companyName}</Text>
                                                </View>
                                                <View style={styles.container15}>
                                                    <Text style={styles.separatorText21}>{options1.jobTitle}</Text>
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
                                                    <View style={styles.container14}>
                                                        <Text style={styles.separatorText51}>{options1.location?.name} ({options1.location?.distance} km)</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.container13}>
                                                    <Ionicons name="cash-outline" size={15} color="#CC9B86" />
                                                    <View style={styles.container14}>
                                                        <Text style={styles.separatorText51}>{options1.salary?.min} - {options1.salary?.max} บาท</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View>
                                                <View style={styles.container13}>
                                                    <Ionicons name="reload-circle-outline" size={15} color="#CC9B86" />
                                                    <View style={styles.container14}>
                                                        <Text style={styles.separatorText51}>อายุ {options1.age?.min} - {options1.age?.max} ปี</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.container13}>
                                                    <Ionicons name="school-outline" size={15} color="#CC9B86" />
                                                    <View style={styles.container14}>
                                                        <Text style={styles.separatorText51}>{options1.education}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <View>
                    <View style={styles.container17_2}>
                        <View style={styles.container17_1}>
                            <Text style={styles.separatorText4}> รายการลงโฆษณาล่าสุดของคุณ </Text>
                            <Text style={styles.separatorText4}> ดูทั้งหมด </Text>
                        </View>
                    </View>
                    <View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.menuContentContainer}
                            style={styles.newContent1}>
                            {data.map((data, index) => (
                                <View key={index} style={styles.container444}>
                                    <TouchableOpacity style={styles.item1} >
                                        <Image source={data.image} style={styles.image1} resizeMode="contain" />
                                        <View style={styles.details}>
                                            <Text style={styles.name}>{data.name1}</Text>
                                            <Text style={styles.info}>{data.name2}</Text>
                                            <Text style={styles.info}>{data.name3}</Text>
                                            <Text style={styles.info}>{data.name4}</Text>
                                            
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    //////////////////////////
    container17_1: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between'
    },
    container17_2: {
        backgroundColor: '#FFFFFF'
    },
    //////////////////////////
    item1: {
        flexDirection: 'row',
        width: '85%'
    },
    image1: {
        marginRight: 10,
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
    iconButton:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    //////////////////////////
    contentScrollView: {
        flex: 1,
        width: '100%',
    },
    container1: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    container1Content: {
        alignItems: 'center',
    },
    container2: {
        flexDirection: 'row',
    },
    container3: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF4EB',
        borderColor: '#E6D6CE',
        borderWidth: 0.5,
        marginTop: 20,
        height: 160,
    },
    container4: {
        marginTop: 4
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        padding: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 20,
        backgroundColor: '#fff',
        marginTop: 15,
    },
    searchIcon: {
        paddingLeft: 10,
    },
    searchIcon1: {
        paddingRight: 10,
    },
    searchBox: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 11,
        fontFamily: 'Sarabun-Medium',
        color: '#333333',
    },
    logo: {
        width: 500,
        height: 40,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginLeft: 7,
        marginTop: 10
    },
    logo5: {
        width: 62,
        height: 62
    },
    logo2: {
        width: '60%',
        height: 10
    },
    logo3: {
        width: 80,
        height: 80,
    },
    logo4: {
        width: 200,
        height: 114,
        borderRadius: 10,
    },
    optionImage: {
        width: 52,
        height: 52,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 5
    },
    TextUp: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 55,
        top: -10
    },
    TextUp4: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 120
    },
    TextUp1: {

    },
    TextUp12: {
        backgroundColor: '#FFFFFF',
        width: 80,
        height: 21,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    TextUp2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: -5,
        marginLeft: 50
    },
    TextUp3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TextUp5: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    TextUp6: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextUp7: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextUp8: {

    },
    TextUp9: {
        marginTop: -30,
        marginRight: 10
    },
    separatorText: {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 18,
        color: "#FFFFFF",
        paddingRight: 10,
    },
    separatorText23: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 10,
        color: "#EB9D75",
    },
    separatorText24: {
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 16,
        color: "#4A4A4A",
    },
    separatorText25: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: "#B8A79E",
    },
    separatorText26: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 10,
        color: "#A1A1A1",
    },
    separatorText1: {
        fontFamily: 'Sarabun-MediumItalic',
        fontSize: 9,
        color: "#BF7C5B"
    },
    separatorText2: {
        fontFamily: 'Inter_18pt-Bold',
        fontSize: 20,
        color: "#BF7C5B"
    },
    separatorText3: {
        fontFamily: 'Sarabun-Bold',
        fontSize: 10,
        color: "#BF7C5B"

    },
    textContainer: {
        alignItems: 'center',
    },
    separatorText4: {
        fontFamily: 'Sarabun-ExtraBold',
        fontSize: 12,
        color: "#BF7C5B",
    },
    separatorText5: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 10,
        color: "#BF7C5B",
        marginLeft: '68%'
    },
    separatorText6: {
        fontFamily: 'Sarabun-Bold',
        fontSize: 10,
        color: '#CA9479'
    },
    separatorText7: {
        fontFamily: 'Inter_18pt-Bold',
        color: '#5B5B5B',
        fontSize: 12,
    },
    separatorText8: {
        fontFamily: 'Sarabun-Bold',
        color: '#CA9479',
        fontSize: 10,
        left: 4
    },
    separatorText9: {
        fontFamily: 'NotoSansThai_ExtraCondensed-SemiBold',
        fontSize: 12,
    },
    separatorText10: {
        fontFamily: 'Inter_18pt-SemiBold',
        fontSize: 12,
    },
    separatorText11: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
        color: "#5B5B5B",
        paddingRight: 210
    },
    separatorText12: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 10,
        color: "#BE7C5A"
    },
    separatorText13: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
        color: "#5B5B5B",
        paddingRight: 160
    },
    icon: {

    },
    icon1: {
        marginTop: -24,
        left: 20
    },
    top: {
        alignItems: 'center',
        marginTop: -11
    },
    top1: {
        flexDirection: 'row',
        marginTop: 10
    },
    top11: {
        flexDirection: 'row',
        marginTop: 15
    },
    top2: {
        alignItems: 'center',
        width: 80
    },
    top9: {
        alignItems: 'center',
        width: 80,
        margin: 10,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        padding: 10
    },
    top4: {
        top: -85,
        left: 18,
        backgroundColor: '#FF8749',
        borderRadius: 50,
        width: 20,
        height: 20,
        alignItems: 'center',
    },
    top5: {
        width: 52,
        height: 52,
        backgroundColor: '#FFBB80',
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    top6: {
        width: 90,
        alignItems: 'center',
    },
    top7: {
        width: 2,
        backgroundColor: '#E2C7B9',
        height: 60,
        top: 10
    },
    top8: {
        marginTop: 20,
        backgroundColor: '#F8F8F8',
        width: 381,
        height: 92,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionButton: {
        padding: 10,
        alignItems: 'center',
        height: 90
    },
    optionText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontFamily: 'Sarabun-Medium'
    },
    optionText1: {
        fontSize: 10,
        fontFamily: 'Sarabun-Medium',
        color: '#666666',
    },
    newContent2: {
        marginTop: -20,
        backgroundColor: '#FFFFFF'
    },
    newContent1: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#FFFFFF'
    },
    menuContentContainer: {
        paddingRight: 20,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    container5: {
        padding: 15,
        borderRadius: 17,
        marginLeft: 10
    },
    container44: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    logo1: {
        width: 45,
        height: 35,
    },
    container6: {
        marginLeft: 8
    },
    container9: {
        flexDirection: 'row',

    },
    separatorText1111: {
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
    separatorText21: {
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
    separatorText14: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 10,
        color: '#666666'
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
        justifyContent: 'space-between'
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
    separatorLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#F2EBE5',
        marginVertical: 0.1,
    },
});

export default ScreenA; 