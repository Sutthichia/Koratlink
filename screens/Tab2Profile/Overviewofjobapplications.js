import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, Switch, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { TabBarContext } from '../../components/TabBarContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Profile = ({ navigation }) => {
    const [activeSection, setActiveSection] = useState(0);
    const { tabBarIcons } = useContext(TabBarContext);
    const buttons = [
        {
            value: 0,
            label: 'งานทั้งหมด',
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
            label: 'จัดการใบสมัคร',
            color: '#FFFFFF',
            activeColor: '#7EA1D5',
        },
    ];

    const options1 = [
        {
            logo: require('../../images/Logo/Group 272.png'),
            companyName: 'บริษัท ภูพบฟ้า จำกัด',
            jobTitle: 'HIGH HOUSE BUILDING',
            views: 239,
            type: 'บริษัท',
            timeAgo: '1 ชั่วโมงที่แล้ว',
            tags1: 'รับสมัครด่วน',
            tags2: 'เหลือเพียง 1 อัตรา',
            status: 'รับคนมีประสบการณ์เท่านั้น',
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
            education: 'วุฒิ ป.ตรีในสาขาที่เกี่ยวข้อง',
            actions: {
                editTime: "แก้ไข",
                reschedule: "ลบ",
            },
        },
        {
            logo: require('../../images/Logo/Group 272.png'),
            companyName: 'บริษัท ภูพบฟ้า จำกัด',
            jobTitle: 'HIGH HOUSE BUILDING',
            views: 239,
            type: 'บริษัท',
            timeAgo: '1 ชั่วโมงที่แล้ว',
            tags1: 'รับสมัครด่วน',
            tags2: 'เหลือเพียง 1 อัตรา',
            status: 'รับคนมีประสบการณ์เท่านั้น',
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
            education: 'วุฒิ ป.ตรีในสาขาที่เกี่ยวข้อง',
            actions: {
                editTime: "แก้ไข",
                reschedule: "ลบ",
            },
        },
        {
            logo: require('../../images/Logo/Group 272.png'),
            companyName: 'บริษัท ภูพบฟ้า จำกัด',
            jobTitle: 'HIGH HOUSE BUILDING',
            views: 239,
            type: 'บริษัท',
            timeAgo: '1 ชั่วโมงที่แล้ว',
            tags1: 'รับสมัครด่วน',
            tags2: 'เหลือเพียง 1 อัตรา',
            status: 'รับคนมีประสบการณ์เท่านั้น',
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
            education: 'วุฒิ ป.ตรีในสาขาที่เกี่ยวข้อง',
            actions: {
                editTime: "แก้ไข",
                reschedule: "ลบ",
            },
        },
    ]

    const profiles = [
        {
            name: "ดาริน พิลาณี",
            position: "Product Owner | UX Researcher",
            contactButton: "ติดต่อ",
            imageSource: require('../../images/profile/image (4).png'),
            schedule: {
                time: "08:00 - 12:00 น.",
                date: "วันอังคารที่ 8 ตุลาคม 2567",
                jobTitle: "Digital Product Designer",
                documentStatus: "เอกสารครบถ้วน",
                interviewType: "การนัดสัมภาษณ์แบบออนไลน์",
                canReschedule: "ไม่สามารถเลื่อนนัดได้",
            },
            actions: {
                editTime: "แก้ไขเวลานัด",
                reschedule: "ขอเลื่อนวันนัด",
                cancel: "ยกเลิกการนัด",
            },
        },
    ];

    const profiles1 = [
        {
            name: "สมชาย สุขเกษม",
            position: "UX/UI Designer",
            contactButton: "ติดต่อ",
            imageSource: require('../../images/profile/Group 650.png'),
            schedule: {
                time: "14:00 - 16:00 น.",
                date: "วันพุธที่ 9 ตุลาคม 2567",
                jobTitle: "Web Developer",
                documentStatus: "เอกสารไม่ครบถ้วน",
                interviewType: "การนัดสัมภาษณ์แบบออนไลน์",
                canReschedule: "สามารถเลื่อนนัดได้",
            },
            actions: {
                editTime: "แก้ไขเวลานัด",
                reschedule: "ขอเลื่อนวันนัด",
                cancel: "ยกเลิกการนัด",
            },
        },
        {
            name: "อนุชา งามวงศ์",
            position: "Product Owner | UX Researcher ",
            contactButton: "ติดต่อ",
            imageSource: require('../../images/profile/Group 650 (1).png'),
            schedule: {
                time: "14:00 - 16:00 น.",
                date: "วันพุธที่ 9 ตุลาคม 2567",
                jobTitle: "Web Developer",
                documentStatus: "เอกสารไม่ครบถ้วน",
                interviewType: "การนัดสัมภาษณ์แบบออนไลน์",
                canReschedule: "สามารถเลื่อนนัดได้",
            },
            actions: {
                editTime: "แก้ไขเวลานัด",
                reschedule: "ขอเลื่อนวันนัด",
                cancel: "ยกเลิกการนัด",
            },
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
            imageSource: require('../../images/profile/image (4).png'),
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
            imageSource: require('../../images/profile/Group 650.png'),
        },
    ];

    const handleSkip = () => {
        navigation.navigate('Resume');
    };

    const handleDetailsJob = () => {
        navigation.navigate('DetailsJob');
    };

    const handleJobWorkingprofile = () => {
        navigation.navigate('Workingprofile');
    };

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <View style={styles.container}>

            <SafeAreaView style={{ flex: 0 }} />
            <View style={styles.box0}>
                <TouchableOpacity style={styles.button4} onPress={handleJobWorkingprofile} >
                    <View>
                        <View style={styles.circle}>

                            <Image
                                source={require('../../images/Logo/Group 272.png')}
                                style={styles.image}
                            />

                            <View />

                        </View>

                    </View>
                    <View style={styles.space2}>
                        <View style={styles.space5}>
                            <View style={styles.space6}>
                                <Text style={styles.Text5}>บริษัท ภูพบฟ้า จำกัด</Text>
                                <View style={styles.space9}>
                                    <MaterialCommunityIcons name="check-decagram" size={15} color="#FF9F6F" />
                                </View>
                            </View>
                            <TouchableOpacity style={styles.space4}>
                                <Ionicons name="create-outline" size={15} color="#CC9B86" />
                                <Text style={styles.Text6}>แก้ไข</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.Text8}>Product Owner | UX Researcher </Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* ปุ่มแนวนอน */}
            <View style={styles.separatorLine1} />
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
            <View style={styles.separatorLine1} />
            {/* ส่วนของเนื้อหาที่เปลี่ยนไปตามปุ่มที่ถูกเลือก */}
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                    {activeSection === 0 && (
                        <View style={styles.page}>
                            <View style={styles.page1V4}>
                                <View style={styles.page1V5}>
                                    <Ionicons name="calendar-number-outline" size={20} color="#BE7C5A" />
                                    <Text style={styles.Textframe}>2 ตุลาคม 2567</Text>
                                </View>
                            </View>
                            <ScrollView
                                style={styles.newContent1}>
                                {options1.map((options1,index) => (
                                    <View key={index} style={styles.container44}>
                                        <TouchableOpacity style={styles.container5} onPress={handleDetailsJob} >
                                            <View style={styles.container55}>
                                                <Image source={options1.logo} style={styles.logo1} resizeMode="contain" />
                                                <View style={styles.container6}>
                                                    <View style={styles.container9} >
                                                        <Text style={styles.separatorText1111}>{options1.companyName}</Text>
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
                                        <View style={styles.container12}>
                                            <TouchableOpacity style={styles.container11V1}>
                                                <Text style={styles.separatorText51}>{options1.actions?.editTime}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.container11V2}>
                                                <Text style={styles.separatorText51}>{options1.actions?.reschedule}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.separatorLine} />
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    )}
                    {activeSection === 1 && (
                        <ScrollView style={styles.page0v1}>
                            <View style={styles.page1V4}>
                                <View style={styles.page1V5}>
                                    <Ionicons name="calendar-number-outline" size={20} color="#BE7C5A" />
                                    <Text style={styles.Textframe}>2 ตุลาคม 2567</Text>
                                </View>
                                <Text style={styles.Textframe1}>1 การนัดหมาย</Text>
                            </View>
                            {profiles.map((profile, index) => (
                                <View >
                                    <View key={index} style={styles.page0}>
                                        <TouchableOpacity style={styles.page1V1} onPress={handleSkip}>
                                            <View style={styles.page1}>
                                                <Image
                                                    source={profile.imageSource}
                                                    style={styles.logo}
                                                    resizeMode="contain"
                                                />
                                                <View style={styles.page1_1}>
                                                    <View style={styles.page1_1_1}>
                                                        <Text style={styles.pageText1}>{profile.name}</Text>
                                                        <View style={styles.page1_1_1_1}>
                                                            <MaterialCommunityIcons name="check-decagram" size={15} color="#FF9F6F" />
                                                        </View>
                                                    </View>
                                                    <Text style={styles.pageText2}>{profile.position}</Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity style={styles.Box1}>
                                                <View style={styles.area}>
                                                    <Ionicons name="chatbox-ellipses-outline" size={18} color="#BE7C5A" />
                                                    <Text style={styles.pageText3}>{profile.contactButton}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                        <View style={styles.page1V2}>
                                            <View style={styles.row}>
                                                <View style={styles.cell1}>
                                                    <Ionicons name="alarm-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.schedule.time}</Text>
                                                </View>
                                                <View style={styles.cell2}>
                                                    <Ionicons name="calendar-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.schedule.date}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.row}>
                                                <View style={styles.cell5}>
                                                    <Ionicons name="briefcase-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.schedule.jobTitle}</Text>

                                                </View>
                                                <View style={styles.cell6}>
                                                    <Ionicons name="checkmark-circle-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.schedule.documentStatus}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.row}>
                                                <View style={styles.cell3}>
                                                    <Ionicons name="desktop-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.schedule.interviewType}</Text>

                                                </View>
                                                <View style={styles.cell4}>
                                                    <Ionicons name="hourglass-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.schedule.canReschedule}</Text>
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
                            <View style={styles.page1V4}>
                                <View style={styles.page1V5}>
                                    <Ionicons name="calendar-number-outline" size={20} color="#BE7C5A" />
                                    <Text style={styles.Textframe}>3 ตุลาคม 2567</Text>
                                </View>
                                <Text style={styles.Textframe1}>2 การนัดหมาย</Text>
                            </View>
                            {profiles1.map((profile, index) => (
                                <View >
                                    <View key={index} style={styles.page0}>
                                        <TouchableOpacity style={styles.page1V1} onPress={handleSkip}>
                                            <View style={styles.page1}>
                                                <Image
                                                    source={profile.imageSource}
                                                    style={styles.logo}
                                                    resizeMode="contain"
                                                />
                                                <View style={styles.page1_1}>
                                                    <View style={styles.page1_1_1}>
                                                        <Text style={styles.pageText1}>{profile.name}</Text>
                                                        <View style={styles.page1_1_1_1}>
                                                            <MaterialCommunityIcons name="check-decagram" size={15} color="#FF9F6F" />
                                                        </View>
                                                    </View>
                                                    <Text style={styles.pageText2}>{profile.position}</Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity style={styles.Box1}>
                                                <View style={styles.area}>
                                                    <Ionicons name="chatbox-ellipses-outline" size={18} color="#BE7C5A" />
                                                    <Text style={styles.pageText3}>{profile.contactButton}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                        <View style={styles.page1V2}>
                                            <View style={styles.row}>
                                                <View style={styles.cell1}>
                                                    <Ionicons name="alarm-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.schedule.time}</Text>
                                                </View>
                                                <View style={styles.cell2}>
                                                    <Ionicons name="calendar-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.schedule.date}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.row}>
                                                <View style={styles.cell5}>
                                                    <Ionicons name="briefcase-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.schedule.jobTitle}</Text>

                                                </View>
                                                <View style={styles.cell6}>
                                                    <Ionicons name="checkmark-circle-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.schedule.documentStatus}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.row}>
                                                <View style={styles.cell3}>
                                                    <Ionicons name="desktop-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.schedule.interviewType}</Text>

                                                </View>
                                                <View style={styles.cell4}>
                                                    <Ionicons name="hourglass-outline" size={20} color="#BE7C5A" />
                                                    <Text style={styles.pageText12}>{profile.schedule.canReschedule}</Text>
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
                            <View style={styles.page1V4}>
                                <View style={styles.page1V5}>
                                    <Ionicons name="calendar-number-outline" size={20} color="#BE7C5A" />
                                    <Text style={styles.Textframe}>2 ตุลาคม 2567</Text>
                                </View>
                                <Text style={styles.Textframe1}>
                                    จัดเรียงตาม : <Text style={{ color: '#EB9D75' }}>คุณสมบัติตรงที่สุด</Text>
                                </Text>
                            </View>
                            <ScrollView style={styles.page}>
                                {profiles2.map((profile, index) => (
                                    <View key={index} >
                                        <TouchableOpacity key={index} style={styles.page2_1_1} onPress={handleSkip}>
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

                                        </TouchableOpacity>
                                        <View style={styles.separatorLine} />
                                    </View>
                                ))}


                            </ScrollView>
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
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    circleButton: {
        width: 120,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    activeButton: {
        backgroundColor: '#EAEAEA',
    },
    inactiveButton: {

    },
    buttonWrapper: {

    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: -30
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
        alignItems: 'center',
    },
    page0v1: {
        flex: 1,
    },
    page0v2: {
        flexDirection: 'row',
    },
    page0v3: {
        flexDirection: 'row',
    },
    page1V4: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        marginBottom: -25
    },
    page1V5: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Textframe: {
        color: '#BE7C5A',
        fontSize: 13,
        fontFamily: 'Sarabun-SemiBold',
        marginLeft: 10
    },
    Textframe1: {
        color: '#808080',
        fontSize: 13,
        fontFamily: 'Sarabun-SemiBold',
    },
    Textframe2: {
        color: '#4A4A4A',
        fontSize: 15,
        fontFamily: 'Sarabun-SemiBold',
    },
    Textframe2_1: {
        color: '#818181',
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
        marginLeft: 5
    },
    Textframe3: {
        color: '#CC9B86',
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
        marginLeft: 5
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
        padding: 10,
        top: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    circle: {
        width: 60,
        height: 60,
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
        marginLeft: 70
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
    page0: {
        padding: 20,
    },
    page1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        padding: 5,
        backgroundColor: '#F1F1F1',

    },
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
    page1_1v2: {
        marginLeft: 10
    },
    page2_0: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    page1V1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        padding: 5,
        backgroundColor: '#F1F1F1',
    },
    page1V2: {
        marginTop: 15
    },
    page1V3: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 15
    },
    logo: {
        width: 32,
        height: 32
    },
    page1_1: {
        marginLeft: 10,
    },
    page1_1_1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    page1_1_2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    page1_1_2_1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5
    },
    page1_1_3: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    page1_1_1_1: {
        marginLeft: 5
    },
    pageText1: {
        fontSize: 14,
        color: '#4A4A4A',
        fontFamily: 'Poppins-SemiBold',
    },
    pageText2: {
        fontSize: 10,
        color: '#4A4A4A',
        fontFamily: 'Poppins-Medium',

    },
    Box1: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 40,
        marginRight: 5
    },
    area: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    pageText3: {
        fontSize: 11,
        color: '#BE7C5A',
        fontFamily: 'Sarabun-Medium',
        paddingLeft: 10
    },
    box3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box4: {
        width: '100%',
        height: 1,
        backgroundColor: '#F2EBE5'
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
        backgroundColor: '#FF7272',
        borderRadius: 20,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    page2_3_3: {
        borderRadius: 20,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#F2EBE5',
        borderWidth: 1,
    },
    pageText9: {
        fontSize: 12,
        fontFamily: 'Sarabun-Medium',
        color: '#6D6D6D'
    },
    pageText9_1: {
        fontSize: 12,
        fontFamily: 'Sarabun-Medium',
        color: '#C66060'
    },
    pageText9_1_1: {
        fontSize: 12,
        fontFamily: 'Sarabun-Medium',
        color: '#C66060'
    },
    pageText10: {
        fontSize: 12,
        fontFamily: 'Sarabun-Medium',
        color: '#6D6D6D'
    },
    pageText10_2: {
        fontSize: 12,
        fontFamily: 'Sarabun-Medium',
        color: '#FFFFFF'
    },
    pageText11: {
        fontSize: 12,
        fontFamily: 'Sarabun-Medium',
        color: '#FFFFFF'
    },
    pageText11_3: {
        fontSize: 12,
        fontFamily: 'Sarabun-Medium',
        color: '#6D6D6D'
    },
    pageText12: {
        fontSize: 11,
        fontFamily: 'Sarabun-Medium',
        color: '#726D6B',
        marginLeft: 10
    },
    container5: {
        padding: 20,
        marginLeft: 1
    },
    container55: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
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
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: -8

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
        alignItems: 'center'
    },
    separatorText21: {
        color: '#969696',
        fontFamily: 'Inter_18pt-Medium',
        fontSize: 10
    },
    container18: {
        flexDirection: 'row',
        marginLeft: 5
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
        fontFamily: 'Sarabun-Medium',
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
        justifyContent: 'space-between'
    },
    container11V1: {
        paddingVertical: 10,
        paddingHorizontal: 110,
        borderRadius: 50,
        borderColor: '#FFB472',
        borderWidth: 1,
    },
    container11V2: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 50,
        backgroundColor: '#EAEAEA'
    },
    container12: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        marginTop: -25
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
        marginBottom: 5
    },
    separatorText51: {
        fontFamily: 'Sarabun-Regular',
        fontSize: 12,
        color: '#6D6D6D',
        marginLeft: 5
    },
    separatorText55: {
        fontFamily: 'Sarabun-Regular',
        fontSize: 12,
        color: '#BE7C5A',
        marginLeft: 5
    },
    separatorLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6D7CF',
        marginVertical: 1,
    },
    separatorLine1: {
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F1',
        marginVertical: 1,
        marginBottom: 10,
        marginTop: 10
    },
});

export default Profile;
