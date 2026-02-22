import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { TabBarContext } from '../../components/TabBarContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Map from '../Tab1User/add-on/Map'

const Profile = ({ navigation }) => {
    const [activeSection, setActiveSection] = useState(0);
    const { tabBarIcons } = useContext(TabBarContext);
    const buttons = [
        {
            value: 0,
            label: 'รายละเอียดงาน',
            color: '#FFFFFF',
            activeColor: '#7EA1D5'
        },
        {
            value: 1,
            label: 'ภาพรวมการสมัคร',
            color: '#FFFFFF',
            activeColor: '#7EA1D5'
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
            education: 'วุฒิ ป.ตรีในสาขาที่เกี่ยวข้อง'
        },
    ]

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
        navigation.navigate('Profile3');
    };

    const [selectedButtons, setSelectedButtons] = useState([false, false, false, false,]);
    const [buttonTexts, setButtonTexts] = useState(['ร้านอาหารใกล้เคียง 12 ร้าน', 'ที่พักใกล้เคียง 8 แห่ง', 'มีรถสองแถวผ่านหน้าบริษัททุก 30 นาที', 'ตลาดสดใกล้เคียง 4 แห่ง']); 

    const icons = [
        'fast-food-outline',   
        'business-outline',
        'bus-outline',
        'basket-outline',
    ];

    const handlePress = (index) => {
        const updatedSelection = [...selectedButtons];
        updatedSelection[index] = !updatedSelection[index]; 
        setSelectedButtons(updatedSelection);
    };


    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 0 }} />
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
            <View
                style={styles.newContent1}>
                {options1.map((options1,) => (
                    <View style={styles.container44}>
                        <TouchableOpacity style={styles.container5} >
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
                            </View>
                        </TouchableOpacity>
                        <View style={styles.separatorLine} />
                    </View>
                ))}
            </View>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                    {activeSection === 0 && (
                        <View style={styles.page}>
                            <ScrollView style={styles.container27}>
                                <View style={styles.container20}>
                                    <View style={styles.container0}>
                                        <View style={styles.container20_4}>
                                            <View style={styles.container20_3}>
                                                <Ionicons name="reader-outline" size={20} color="#6E6E6E" />
                                                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>เอกสารที่ต้องใช้ในการสมัคร</Text>
                                            </View>
                                            <View style={styles.container20_3}>
                                                <Ionicons name="create-outline" size={20} color="#CC9B86" />
                                                <Text style={[styles.pageText1_2, { marginLeft: 5 }]}>แก้ไข</Text>
                                            </View>
                                        </View>
                                        <View style={styles.container20_1}>
                                            <View style={styles.container20_2}>
                                                <Text style={styles.pageText1_1}>• สำเนาบัตรประชาชน</Text>
                                                <Text style={styles.pageText1_1}>• สำเนาทะเบียนบ้าน</Text>
                                            </View>
                                            <View style={styles.container20_2}>
                                                <Text style={styles.pageText1_1}>• Portfolio</Text>
                                                <Text style={styles.pageText1_1}>• วุฒิการศึกษา</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.container0}>
                                        <View style={styles.container20_4}>
                                            <View style={styles.container20_3}>
                                                <Ionicons name="reader-outline" size={20} color="#6E6E6E" />
                                                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>คุณสมบัติที่ต้องการ</Text>
                                            </View>
                                            <View style={styles.container20_3}>
                                                <Ionicons name="create-outline" size={20} color="#CC9B86" />
                                                <Text style={[styles.pageText1_2, { marginLeft: 5 }]}>แก้ไข</Text>
                                            </View>
                                        </View>
                                        <View style={styles.container20_5}>
                                            <Text style={styles.pageText1_1}>• วุฒิปริญญาตรีด้านการออกแบบ, HCI, หรือสาขาที่เกี่ยวข้อง</Text>
                                            <Text style={styles.pageText1_1}>• ประสบการณ์อย่างน้อย 3 ปีในการออกแบบ UX/UI</Text>
                                            <Text style={styles.pageText1_1}>• เชี่ยวชาญในการใช้ Figma, Sketch, Adobe XD</Text>
                                            <Text style={styles.pageText1_1}>• มีความเข้าใจในหลักการ UX design และ design thinking</Text>
                                            <Text style={styles.pageText1_1}>• มีทักษะการสื่อสารและการนำเสนอที่ดีเยี่ยม</Text>
                                            <Text style={styles.pageText1_1}>• มี portfolio ที่แสดงถึงผลงานการออกแบบที่โดดเด่น</Text>
                                        </View>
                                    </View>
                                    <View style={styles.container0}>
                                        <View style={styles.container20_4}>
                                            <View style={styles.container20_3}>
                                                <Ionicons name="briefcase-outline" size={20} color="#6E6E6E" />
                                                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>หน้าที่และความรับผิดชอบ</Text>
                                            </View>
                                            <View style={styles.container20_3}>
                                                <Ionicons name="create-outline" size={20} color="#CC9B86" />
                                                <Text style={[styles.pageText1_2, { marginLeft: 5 }]}>แก้ไข</Text>
                                            </View>
                                        </View>
                                        <View style={styles.container20_5}>
                                            <Text style={styles.pageText1_1}>• ออกแบบ User Interface (UI) และ User Experience (UX)</Text>
                                            <Text style={[styles.pageText1_1, { marginLeft: 7 }]}>สำหรับแอปพลิเคชันมือถือและเว็บไซต์</Text>
                                            <Text style={styles.pageText1_1}>• ทำการวิจัยผู้ใช้และวิเคราะห์พฤติกรรมเพื่อพัฒนา user personas</Text>
                                            <Text style={styles.pageText1_1}>• ออกแบบ information architecture และ user flows</Text>
                                            <Text style={styles.pageText1_1}>• ทำงานร่วมกับทีมพัฒนาและผู้มีส่วนได้ส่วนเสียอื่นๆ</Text>
                                            <Text style={styles.pageText1_1}>• สร้างและรักษา design systems</Text>
                                            <Text style={styles.pageText1_1}>• ทำการทดสอบ usability และปรับปรุงดีไซน์ตามผลตอบรับ</Text>
                                        </View>
                                    </View>
                                    <View style={styles.container0}>
                                        <View style={styles.container20_4}>
                                            <View style={styles.container20_3}>
                                                <Ionicons name="cash-outline" size={20} color="#6E6E6E" />
                                                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>เงินเดือนและสวัสดิการ</Text>
                                            </View>
                                            <View style={styles.container20_3}>
                                                <Ionicons name="create-outline" size={20} color="#CC9B86" />
                                                <Text style={[styles.pageText1_2, { marginLeft: 5 }]}>แก้ไข</Text>
                                            </View>
                                        </View>
                                        <View style={styles.container20_5}>
                                            <Text style={styles.pageText1_1}>• เงินเดือน: 50,000 - 80,000 บาท (ขึ้นอยู่กับประสบการณ์)</Text>
                                            <Text style={styles.pageText1_1}>• โบนัสประจำปีตามผลงาน</Text>
                                            <Text style={styles.pageText1_1}>• ประกันสุขภาพและประกันชีวิต</Text>
                                            <Text style={styles.pageText1_1}>• กองทุนสำรองเลี้ยงชีพ</Text>
                                            <Text style={styles.pageText1_1}>• วันหยุดพักร้อน 15 วันต่อปี</Text>
                                            <Text style={styles.pageText1_1}>• งบประมาณสำหรับการฝึกอบรมและพัฒนาทักษะ</Text>
                                            <Text style={styles.pageText1_1}>• อุปกรณ์คอมพิวเตอร์ส่วนตัวสำหรับการทำงาน</Text>
                                        </View>
                                    </View>
                                    <View style={styles.container0}>
                                        <View style={styles.container20_4}>
                                            <View style={styles.container20_3}>
                                                <Ionicons name="ribbon-outline" size={20} color="#6E6E6E" />
                                                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>ทักษะที่เป็นข้อได้เปรียบ</Text>
                                            </View>
                                            <View style={styles.container20_3}>
                                                <Ionicons name="create-outline" size={20} color="#CC9B86" />
                                                <Text style={[styles.pageText1_2, { marginLeft: 5 }]}>แก้ไข</Text>
                                            </View>
                                        </View>
                                        <View style={styles.container20_5}>
                                            <Text style={styles.pageText1_1}>• ความรู้พื้นฐานด้าน HTML, CSS, และ JavaScript</Text>
                                            <Text style={styles.pageText1_1}>• ประสบการณ์ในการทำ motion design หรือ micro-interactions</Text>
                                            <Text style={styles.pageText1_1}>• ความเข้าใจในหลักการ accessibility design</Text>
                                        </View>
                                    </View>
                                    <View style={styles.container0}>
                                        <View style={styles.container20_4}>
                                            <View style={styles.container20_3}>
                                                <Feather name="navigation" size={20} color="#6E6E6E" />
                                                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>แผนที่นำทาง</Text>
                                            </View>
                                            <View style={styles.container20_3}>
                                                <Ionicons name="create-outline" size={20} color="#CC9B86" />
                                                <Text style={[styles.pageText1_2, { marginLeft: 5 }]}>แก้ไข</Text>
                                            </View>
                                        </View>
                                        <View style={styles.container20_5}>
                                            <View style={styles.container26}>
                                                <Text style={styles.pageText1_1}>1242 2 ถ. มิตรภาพ ต.ในเมือง อ.เมืองนครราชสีมา จ.นครราชสีมา 30000</Text>
                                            </View>
                                            <Map />
                                        </View>
                                    </View>
                                    <View style={styles.container0}>
                                        <View style={styles.container20_4}>
                                            <View style={styles.container20_3}>
                                                <Feather name="navigation" size={20} color="#6E6E6E" />
                                                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>สิ่งอำนวยความสะดวกใกลเคียง</Text>
                                            </View>
                                            <View style={styles.container20_3}>
                                                <Ionicons name="create-outline" size={20} color="#CC9B86" />
                                                <Text style={[styles.pageText1_2, { marginLeft: 5 }]}>แก้ไข</Text>
                                            </View>
                                        </View>
                                        <View style={styles.container3}>
                                            {selectedButtons.map((isSelected, index) => (
                                                <TouchableOpacity
                                                    key={index}
                                                    style={[styles.button_2, { borderColor: isSelected ? '#FFB472' : '#FFB472' }]} 
                                                    onPress={() => handlePress(index)}
                                                >
                                                    <View style={styles.container1_1_1}>
                                                        <View style={[styles.container2_1, { backgroundColor: isSelected ? '#FFB472' : '#FFF4EB' }]}>
                                                            <Ionicons
                                                                name={icons[index]}  
                                                                size={15}
                                                                color={isSelected ? 'white' : 'black'}
                                                            />
                                                        </View>
                                                        <Text style={[styles.text, { color: isSelected ? '#FFB472' : '#5B5B5B' }]}>
                                                            {buttonTexts[index]}
                                                        </Text>
                                                    </View>

                                                    <Ionicons
                                                        name={isSelected ? 'chevron-forward-outline' : 'chevron-forward-outline'} 
                                                        size={25}
                                                        color={isSelected ? '#FFB472' : '#FFB472'}
                                                    />
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    )}
                    {activeSection === 1 && (
                        <View style={styles.page5} >
                            <View style={styles.page6} >
                                <View style={styles.page7} >
                                    <Text style={styles.pageText4}>ผู้สมัคร 92 คน</Text>
                                </View>
                                <View style={styles.page8} >
                                    <Text style={styles.pageText5}>เอกสารครบ 42 คน</Text>
                                </View>
                                <View style={styles.page8} >
                                    <Text style={styles.pageText5}>คุณสมบัติตรง 24 คน</Text>
                                </View>
                            </View>
                            <View style={styles.box4} />
                            <ScrollView style={styles.page}>
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

                                        </View>
                                        <View style={styles.separatorLine} />
                                    </View>
                                ))}
                                <View style={styles.box4} />
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
        backgroundColor: '#FFFFFF'
    },
    //////////////////////////////////////////////////
    container0: {
        marginBottom: 10
    },
    container20: {
        padding: 20,
    },
    container20_1: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#F6DED1',
        padding: 15,
        borderRadius: 15,
    },
    container20_2: {
        width: '50%'
    },
    container20_3: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container20_4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    container20_5: {
        borderWidth: 1,
        borderColor: '#F6DED1',
        padding: 15,
        borderRadius: 15,
    },
    container26: {
        marginBottom: 10
    },
    pageText1_1: {
        fontFamily: 'Sarabun-Regular',
        color: '#5A5A5A',
        fontSize: 12
    },
    pageText1_1_1: {
        fontFamily: 'Sarabun-SemiBold',
        color: '#5A5A5A',
        fontSize: 13
    },
    pageText1_2: {
        fontFamily: 'Sarabun-Regular',
        color: '#CC9B86',
        fontSize: 12
    },
    separatorLine1: {
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F1',
        marginVertical: 1,
        marginBottom: 10,
        marginTop: 10
    },
    button_2: {
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        alignItems: 'center'
    },
    container1_1_1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container2_1: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    //////////////////////////////////////////////////

    page5: {
        flex: 1,
    },
    page6: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15
    },
    page7: {
        width: 115,
        height: 28,
        backgroundColor: '#E5B197',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    page8: {
        width: 115,
        height: 28,
        borderWidth: 1,
        borderColor: '#CC9B86',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: ''
    },
    circleButton: {
        width: 160,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,

    },
    activeButton: {
        backgroundColor: '#F1F1F1',
    },
    inactiveButton: {
        borderWidth: 1,
        borderColor: 'white',
    },
    buttonWrapper: {

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
    page: {
        flex: 1,
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
    page2_1_1: {
        padding: 20,
    },
    page2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#F1F1F1',
        marginBottom: 20
    },
    page2_0: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    page1_1v2: {
        marginLeft: 10
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
    cell4: {
        borderWidth: 1,
        borderColor: '#CC9B86',
        padding: 10,
        flex: 1,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
    },
    page1: {
        flexDirection: 'row',
        marginLeft: 25,
        marginTop: 20
    },
    logo: {
        width: 32,
        height: 32
    },
    page1_1: {
        marginLeft: 10
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
    pageText4: {
        fontSize: 12,
        color: '#FFFFFF',
        fontFamily: 'Sarabun-Medium',
    },
    pageText5: {
        fontSize: 12,
        color: '#9A9A9A',
        fontFamily: 'Sarabun-Medium',
    },
    box4: {
        width: '100%',
        height: 1,
        backgroundColor: '#F2EBE5'
    },
    pageText12: {
        fontSize: 11,
        fontFamily: 'Sarabun-Medium',
        color: '#726D6B',
        marginLeft: 10
    },
    container5: {
        flexDirection: 'row',
        padding: 15,
        marginLeft: 1
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
        marginLeft: 15
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
    separatorLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6D7CF',
        marginVertical: 1,
    },
});

export default Profile;
