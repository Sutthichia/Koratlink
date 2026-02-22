import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Switch, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { TabBarContext } from '../../../components/TabBarContext';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const ApplicationDetails = ({ route,setCurrentTab }) => {
    const { setTabBarIcon } = useContext(TabBarContext);
    const { tabBarIcons } = useContext(TabBarContext);
    const navigation = useNavigation();

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const imagesData = [
        { source: require('../../../images/icon/Group199.png'), name: 'Figma' },
        { source: require('../../../images/icon/Group200.png'), name: 'Adobe XD' },
        { source: require('../../../images/icon/Group201.png'), name: 'InVision' },
        { source: require('../../../images/icon/Group202.png'), name: 'Sketch' },
        { source: require('../../../images/icon/Group203.png'), name: 'Jira' },
    ];

    const imagesData1 = [
        { source: require('../../../images/icon/image.png'), },
        { source: require('../../../images/icon/image-1.png'), },
        { source: require('../../../images/icon/image-2.png'), },
    ];

    const imagesData2 = [
        { source: require('../../../images/icon/image-3.png'), },
        { source: require('../../../images/icon/image-4.png'), },
        { source: require('../../../images/icon/image-5.png'), },
    ];

    const handleLogin3 = () => {
        navigation.navigate('Profile4');
    };

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
                    <View style={styles.button4} >
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
                            <View>
                                <Text style={styles.Text5}>ดาริน พิลาณี</Text>
                                <View style={styles.space2_1}>
                                    <Ionicons name="eye-outline" size={15} color="#CC9B86" />
                                    <Text style={styles.Text6}>249 views</Text>
                                    <Text style={styles.Text6}> | </Text>
                                    <Ionicons name="time-outline" size={15} color="#CC9B86" />
                                    <Text style={styles.Text6}>3 วันที่ผ่านมา</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.space2_2} 
                            onPress={() => {
                                navigation.navigate('แชท');
                                if (setCurrentTab) {
                                  setCurrentTab(1); 
                                }
                              }}>
                                <Ionicons name="chatbox-ellipses-outline" size={15} color="#CC9B86" />
                                <Text style={styles.Text6}>ติดต่อ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.container20}>
                    <View style={styles.container0}>
                        <View style={styles.container20_1}>
                            <View style={styles.container20_2}>
                                <View style={styles.container20_5}>
                                    <Ionicons name="location-outline" size={15} color="#CC9B86" />
                                    <Text style={[styles.pageText1_1, { marginLeft: 5 }]}>อ.เมืองนครราชสีมา</Text>
                                </View>
                                <View style={styles.container20_5}>
                                    <Ionicons name="school-outline" size={15} color="#CC9B86" />
                                    <Text style={[styles.pageText1_1, { marginLeft: 5 }]}>ปริญญาตรีวิศวกรรมไฟฟ้า</Text>
                                </View>
                            </View>
                            <View style={styles.container20_2}>
                                <View style={styles.container20_5}>
                                    <Ionicons name="briefcase-outline" size={15} color="#CC9B86" />
                                    <Text style={[styles.pageText1_1, { marginLeft: 5 }]}>ตำแหน่งวิศวกรไฟฟ้า</Text>
                                </View>
                                <View style={styles.container20_5}>
                                    <Ionicons name="ribbon-outline" size={15} color="#CC9B86" />
                                    <Text style={[styles.pageText1_1, { marginLeft: 5 }]}>ประสบการณ์ทำงาน 6 ปี</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container0}>
                        <View style={styles.container20_4}>
                            <View style={styles.container20_3}>
                                <Ionicons name="star-outline" size={13} color="#6E6E6E" />
                                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>คุณสมบัติเพิ่มเติม</Text>
                            </View>
                        </View>
                        <View style={styles.container20_1_1}>
                            <View style={styles.container20_2}>
                                <View style={styles.container20_5_1}>
                                    <Text style={styles.pageText1_3}>พร้อมเริ่มงานทันที</Text>
                                </View>
                                <View style={[styles.container20_5_1, { marginLeft: 5 }]}>
                                    <Text style={styles.pageText1_3}>ไม่มีประวัติอาชญากรรม</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container0}>
                        <View style={styles.container20_4}>
                            <View style={styles.container20_3}>
                                <SimpleLineIcons name="user" size={13} color="#6E6E6E" />
                                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>แนะนำตัวเอง</Text>
                            </View>
                        </View>
                        <View style={styles.container20_1_1}>
                            <View style={styles.container20_2}>
                                <Text style={styles.pageText1_1}>นักออกแบบประสบการณ์ผู้ใช้และส่วนต่อประสานที่มีความเชี่ยวชาญในการสร้างผลิตภัณฑ์ดิจิทัลที่ใช้งานง่ายและสวยงาม พร้อมด้วยทักษะการเป็น Product Owner</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container0}>
                        <View style={styles.container20_4}>
                            <View style={styles.container20_3}>
                                <Ionicons name="school-outline" size={13} color="#6E6E6E" />
                                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>การศึกษา</Text>
                            </View>
                        </View>
                        <View style={styles.container20_1_1}>
                            <View style={styles.container20_2}>
                                <Text style={styles.pageText1_1}>ปริญญาตรี สาขาการออกแบบอินเทอร์แอคทีฟ</Text>
                            </View>
                            <View style={styles.container20_2}>
                                <Text style={styles.pageText1_1}>มหาวิทยาลัยชื่อดัง | 2555 - 2559</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container0}>
                        <View style={styles.container20_4}>
                            <View style={styles.container20_3}>
                                <MaterialIcons name="translate" size={13} color="#6E6E6E" />
                                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>ระดับภาษา</Text>
                            </View>
                        </View>
                        <View style={styles.container20_1_1}>
                            <View style={styles.container20V1}>
                                <View style={styles.BoxV2}>
                                    <Text style={styles.pageText1_1}>English</Text>
                                </View>
                                <View style={styles.BoxV1}>
                                    <View style={styles.BoxV4}>
                                    </View>
                                </View>
                                <View style={styles.BoxV2}>
                                    <Text style={styles.pageText1_1}>ดีมาก</Text>
                                </View>
                            </View>
                            <View style={styles.container20V1}>
                                <View style={styles.BoxV2}>
                                    <Text style={styles.pageText1_1}>Thai</Text>
                                </View>
                                <View style={styles.BoxV1}>
                                    <View style={styles.BoxV5}>
                                    </View>
                                </View>
                                <View style={styles.BoxV2}>
                                    <Text style={styles.pageText1_1}>ชำนาญ</Text>
                                </View>
                            </View>
                            <View style={styles.container20V1}>
                                <View style={styles.BoxV2}>
                                    <Text style={styles.pageText1_1}>Chinese</Text>
                                </View>
                                <View style={styles.BoxV1}>
                                    <View style={styles.BoxV6}>
                                    </View>
                                </View>
                                <View style={styles.BoxV2}>
                                    <Text style={styles.pageText1_1}>พอใช้</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container0}>
                        <View style={styles.container20_4}>
                            <View style={styles.container20_3}>
                                <Ionicons name="star-outline" size={13} color="#6E6E6E" />
                                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>ทักษะและความเชี่ยวชาญ</Text>
                            </View>
                        </View>
                        <View style={styles.container20_1_1}>
                            <View style={styles.container20_2}>
                                <View style={styles.container20_5_1_1}>
                                    <Text style={styles.pageText1_3}>UX Research & Design</Text>
                                </View>
                                <View style={[styles.container20_5_1, { marginLeft: 5 }]}>
                                    <Text style={styles.pageText1_3}>Agile/Scrum Methodologies</Text>
                                </View>
                            </View>
                            <View style={[styles.container20_2, { marginTop: 10 }]}>
                                <View style={styles.container20_5_1}>
                                    <Text style={styles.pageText1_3}>Product Strategy</Text>
                                </View>
                                <View style={[styles.container20_5_1, { marginLeft: 5 }]}>
                                    <Text style={styles.pageText1_3}>Prototyping</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container0}>
                        <View style={styles.container20_4}>
                            <View style={styles.container20_3}>
                                <Ionicons name="briefcase-outline" size={13} color="#6E6E6E" />
                                <Text style={[styles.pageText1_1_1, { marginLeft: 5 }]}>ประสบการณ์การทำงาน</Text>
                            </View>
                        </View>
                        <Image
                            source={require('../../../images/advert/Line 4.png')}
                            style={styles.logo6}
                            resizeMode="contain"
                        />
                        <View style={styles.container20_1_1}>
                            <View style={styles.container20_2_1}>
                                <Text style={styles.pageText1_1_0}>• Senior UX/UI Designer & Product Owner</Text>
                                <Text style={[styles.pageText1_1_0_1, { marginLeft: 10 }]}>บริษัท เอบีซี เทคโนโลยี จำกัด | 2562 - ปัจจุบัน</Text>
                                <Text style={[styles.pageText1_1_0_2, { marginLeft: 10 }]}>-ออกแบบและพัฒนา UX/UI สำหรับแอปพลิเคชันมือถือและเว็บไซต์</Text>
                            </View>
                            <View style={styles.container20_2_1}>
                                <Text style={styles.pageText1_1_0}>• UX/UI Designer</Text>
                                <Text style={[styles.pageText1_1_0_1, { marginLeft: 10 }]}>บริษัท XYZ ดิจิทัล จำกัด | 2559 - 2562</Text>
                                <Text style={[styles.pageText1_1_0_2, { marginLeft: 10 }]}>-ออกแบบ User Interface สำหรับแพลตฟอร์ม E-commerce</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    container6: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container6_1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container6_1_1: {
        flexDirection: 'row',
        marginLeft: 10
    },
    space2: {
        marginTop: 25,
        marginRight: 110,
    },
    space2_1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    space2_2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F6DED1',
        borderRadius: 50,
        paddingVertical: 1,
        paddingHorizontal: 15,
        marginLeft: 50,
        position: 'absolute',
        left: 140,
        marginTop:20
    },
    logo5: {
        position: 'absolute', 
        zIndex: 10,
        top: 30,
        height: 100,
        left: 15
    },
    logo6: {
        position: 'absolute', 
        zIndex: 10,
        top: 65,
        height: 50,
        left: 15
    },
    separatorLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6D7CF',
        width: '100%',
        marginTop: -20
    },
    button4: {
        flexDirection: 'row',
        padding: 20,
        marginTop: -60,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: -30
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
        fontFamily: 'Sarabun-Medium',
        color: '#CC9B86',
        fontSize: 12,
    },
    /////////////////////////////////
    container20: {
        padding: 20,
    },
    container0: {
        marginBottom: 10
    },
    container20_4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    container20_3: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container20_5: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%'
    },
    container20_5_1: {
        backgroundColor: '#EFA47C',
        paddingVertical: 2,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    container20_5_1_1: {
        backgroundColor: '#EFA47C',
        paddingVertical: 2,
        paddingHorizontal: 14,
        borderRadius: 50,
    },
    container20V1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

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
    container20_1: {
        borderWidth: 1,
        borderColor: '#F6DED1',
        padding: 15,
        borderRadius: 15,
    },
    container20_1_1: {
        backgroundColor: '#F8F8F8',
        padding: 15,
        borderRadius: 15,
    },
    container20_2: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container20_2_1: {

    },
    pageText1_1: {
        fontFamily: 'Sarabun-Regular',
        color: '#5A5A5A',
        fontSize: 12
    },
    pageText1_1_0: {
        color: '#CB8D72',
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 13,
    },
    pageText1_1_0_1: {
        fontFamily: 'Sarabun-Regular',
        color: '#838383',
        fontSize: 12
    },
    pageText1_1_0_2: {
        fontFamily: 'Sarabun-Regular',
        color: '#5A5A5A',
        fontSize: 12
    },
    pageText1_3: {
        fontFamily: 'Sarabun-Medium',
        color: '#FFFFFF',
        fontSize: 12,
    },
    BoxV1: {
        width: 220,
        height: 5,
        backgroundColor: '#EAEAEA',
        borderRadius: 15,
    },
    BoxV4: {
        width: 180,
        height: 5,
        backgroundColor: '#EFA47C',
        borderRadius: 15,
    },
    BoxV5: {
        width: 220,
        height: 5,
        backgroundColor: '#EFA47C',
        borderRadius: 15,
    },
    BoxV6: {
        width: 90,
        height: 5,
        backgroundColor: '#EFA47C',
        borderRadius: 15,
    },
    BoxV2: {
        width: 45
    },
    containerHorizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 16,
    },
    logo1: {
        width: 30,
        height: 30,
    },
    logo2: {
        width: 79,
        height: 61,
    },
    imageContainer: {
        alignItems: 'center',
    },
    imageContainer1: {
        padding: 5,
    },
    imageName: {
        fontFamily: 'Sarabun-Medium',
        color: '#939393',
        fontSize: 12,
    },
});

export default ApplicationDetails;
