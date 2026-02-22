import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text, Image, TouchableOpacity, Button, Switch, ScrollView, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

const StepForm = ({ navigation, route }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [step, setStep] = useState(1);
    const scaleValue = useRef(new Animated.Value(1)).current;
    const colorValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(scaleValue, {
                        toValue: 1.2,
                        duration: 500,
                        useNativeDriver: false,
                    }),
                    Animated.timing(scaleValue, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: false,
                    }),
                ]),
                Animated.timing(colorValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }, []);

    const interpolatedColor = colorValue.interpolate({
        inputRange: [0, 5],
        outputRange: ['#C8E6C9', '#66BB6A',]
    });

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            setStep(1);
        });

        return unsubscribe;
    }, [navigation]);

    const nextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const previousStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const { setCurrentTab } = route.params;
    const [useRegisteredInfo, setUseRegisteredInfo] = useState(false);
    const [isDocumentEnabled, setIsDocumentEnabled] = useState(true);
    const [jobTitle, setJobTitle] = useState('');
    const [position1, setPosition1] = useState('');
    const [details1, setDetails1] = useState('');
    const [position2, setPosition2] = useState('');
    const [details2, setDetails2] = useState('');
    const [otherInfo, setOtherInfo] = useState('');
    const [showPosition2, setShowPosition2] = useState(false);
    const [isSwitch1On, setIsSwitch1On] = useState(false);
    const [isSwitch2On, setIsSwitch2On] = useState(false);
    const [isCompanySelected, setIsCompanySelected] = useState(true);

    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [taxId, setTaxId] = useState('');
    const [taxCode, setTaxCode] = useState('');
    const [documentFile, setDocumentFile] = useState(null);
    const [isPressed, setIsPressed] = useState(false);

    const handlePress11 = () => {
        setIsPressed(!isPressed);
    };

    const handlePress12 = () => {
        setIsPressed(!isPressed);
    };

    const toggleSwitch1 = () => {
        setIsSwitch1On(previousState => !previousState);
        if (!isSwitch1On) {
            setIsSwitch2On(false);
        }
    };

    const toggleSwitch2 = () => {
        setIsSwitch2On(previousState => !previousState);
        if (!isSwitch2On) {
            setIsSwitch1On(false);
        }
    };

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        if (result.type === 'success') {
            setDocumentFile(result.name);
        }
    };

    const handlePress = () => {
        setCurrentTab(2);
        navigation.navigate('Main', { screen: 'TabNavigator2', params: { screen: 'Guest Home' } });
    };
    
    
    return (
        <View style={styles.container}>
            {step === 1 && (
                <View style={styles.container1_2}>
                    <View style={styles.container1_2_3}>

                        <View style={styles.container6}>
                            <View>
                                <Text style={styles.text11}>ประเภทสถานประกอบการ</Text>
                            </View>
                            <View style={styles.switchContainer}>
                                <Text style={styles.text}>บริษัท</Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#4CD964" }}
                                    thumbColor={isSwitch1On ? "#FFFFFF" : "#FFFFFF"}
                                    onValueChange={toggleSwitch1}
                                    value={isSwitch1On}
                                />
                            </View>
                            <View style={styles.switchContainer}>
                                <Text style={styles.text}>ร้านค้า</Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#4CD964" }}
                                    thumbColor={isSwitch2On ? "#FFFFFF" : "#FFFFFF"}
                                    onValueChange={toggleSwitch2}
                                    value={isSwitch2On}
                                />
                            </View>

                            <ScrollView style={styles.screenContainer}>
                                <View style={styles.screenContainer1} >
                                    {isSwitch1On && (
                                        <View style={styles.screen}>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>ชื่อสถานประกอบการของคุณ *</Text>
                                                </View>
                                                <View style={styles.section}>
                                                    <TextInput
                                                        style={styles.input}
                                                        value={businessType}
                                                        onChangeText={setBusinessType}
                                                    />
                                                </View>
                                            </View>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>ประเภทธุรกิจคุณ *</Text>
                                                </View>
                                                <View style={styles.section1}>
                                                    <TouchableOpacity style={[styles.cover, isPressed && styles.coverPressed]} onPress={handlePress11}>
                                                        <Text style={[styles.Textframe1, isPressed && styles.Textframe1Pressed]} onPress={handlePress12}>การผลิต</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover}>
                                                        <Text style={styles.Textframe1}>บริการ</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover}>
                                                        <Text style={styles.Textframe1}>การค้า</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover}>
                                                        <Text style={styles.Textframe1}>การเกษตร</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.section1}>
                                                    <TouchableOpacity style={styles.cover1}>
                                                        <Text style={styles.Textframe1}>อุตสาหกรรม</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover1}>
                                                        <Text style={styles.Textframe1}>ธุรกิจพลังงาน</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover1}>
                                                        <Text style={styles.Textframe1}>ธุรกิจเทคโนโลยี</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover1}>
                                                        <Text style={styles.Textframe1}>ธุรกิจการเงิน</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.section1}>
                                                    <TouchableOpacity style={styles.more} >
                                                        <Text style={styles.screenText1}>+ เพิ่มเติม</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>จำนวนพนักงานของคุณ (สามารถข้ามและกลับมาใส่ย้อนหลังได้)</Text>
                                                </View>
                                                <View style={styles.section1}>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>1-10 คน</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>11-50 คน</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>51-200 คน</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>500 คนขึ้นไป</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>สวัสดิการ (เลือกได้หลายรายการ)</Text>
                                                </View>
                                                <View style={styles.section1}>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>มีที่พัก</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>อบรม</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>ประกันชีวิต</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>วันหยุดพิเศษ</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>บริการรับ-ส่ง</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.section1}>
                                                    <TouchableOpacity style={styles.cover3}>
                                                        <Text style={styles.Textframe1}>ตรวจสุขภาพประจำปี</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover3}>
                                                        <Text style={styles.Textframe1}>กองทุนสำรองเลี้ยงชีพ</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.section1}>
                                                    <TouchableOpacity style={styles.more} >
                                                        <Text style={styles.screenText1}>+ เพิ่มเติม</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <Text style={styles.screenText1}>ข้อมูลติดต่อ *</Text>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>เบอร์โทรศัพษ์ที่ติดต่อได้ *</Text>
                                                </View>
                                                <View style={styles.inputContainer}>
                                                    <TextInput
                                                        style={styles.input3}
                                                        value={businessType}
                                                        onChangeText={setBusinessType}
                                                    />
                                                    <TouchableOpacity style={styles.button} onPress={() => console.log('Button Pressed')}>
                                                        <Text style={styles.buttonText}>+ เพิ่มเติม</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>อีเมล</Text>
                                                </View>
                                                <View style={styles.inputContainer}>
                                                    <TextInput
                                                        style={styles.input3}
                                                        value={businessType}
                                                        onChangeText={setBusinessType}
                                                    />
                                                    <TouchableOpacity style={styles.button} onPress={() => console.log('Button Pressed')}>
                                                        <Text style={styles.buttonText}>+ เพิ่มเติม</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <Text style={styles.screenText1}>สถานที่ตั้งบริษัทคุณ *</Text>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>ที่อยู่ * </Text>
                                                </View>
                                                <View style={styles.section}>
                                                    <TextInput
                                                        style={styles.input}
                                                        value={businessType}
                                                        onChangeText={setBusinessType}
                                                    />
                                                </View>
                                            </View>
                                            <View >
                                                <View style={styles.screen22}>
                                                    <View >
                                                        <View style={styles.screen3}>
                                                            <Text style={styles.screenText1}>อำเภท *</Text>
                                                        </View>
                                                        <View style={styles.section}>
                                                            <TextInput
                                                                style={styles.input1}
                                                                value={businessType}
                                                                onChangeText={setBusinessType}
                                                            />
                                                        </View>
                                                    </View>
                                                    <View >
                                                        <View style={styles.screen3}>
                                                            <Text style={styles.screenText1}>จังหวัด *</Text>
                                                        </View>
                                                        <View style={styles.section}>
                                                            <TextInput
                                                                style={styles.input1}
                                                                value={businessType}
                                                                onChangeText={setBusinessType}
                                                            />
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>รหัสไปรษณีย์ *</Text>
                                                </View>
                                                <View style={styles.section}>
                                                    <TextInput
                                                        style={styles.input}
                                                        value={businessType}
                                                        onChangeText={setBusinessType}
                                                    />
                                                </View>
                                            </View>
                                            <Text style={styles.screenText1}>ยืนยันความถูกต้อง (คุณสามารถเลือกใส่อย่างใดอย่างนึงได้) *</Text>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>เลขทะเบียนนิติบุคคล (ดูตัวอย่าง) </Text>
                                                </View>
                                                <View style={styles.section}>
                                                    <TextInput
                                                        style={styles.input}
                                                        value={businessType}
                                                        onChangeText={setBusinessType}
                                                    />
                                                </View>
                                            </View>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>รหัสประจำตัวผู้เสียภาษี *  (ตัวอย่าว)</Text>
                                                </View>
                                                <View style={styles.section}>
                                                    <TextInput
                                                        style={styles.input}
                                                        value={businessType}
                                                        onChangeText={setBusinessType}
                                                    />
                                                </View>
                                            </View>
                                            <View style={styles.screen4} >
                                                <Text style={styles.screenText3}>ข้อมูลเหล่านี้จะใช้เพื่อตรวจสอบความถูกต้องเท่านั้น และจะไม่ถูกนำ
                                                    ไปใช้เพื่อวัตถุประสงค์อื่นใด  ขอขอบคุณสำหรับความร่วมมือ</Text>
                                            </View>
                                        </View>
                                    )}
                                    {isSwitch2On && (
                                        <View style={styles.screen}>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>ชื่อสถานประกอบการของคุณ *</Text>

                                                </View>
                                                <View style={styles.section}>
                                                    <TextInput
                                                        style={styles.input}
                                                        value={businessType}
                                                        onChangeText={setBusinessType}
                                                    />
                                                </View>
                                            </View>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>ประเภทธุรกิจคุณ *</Text>
                                                </View>
                                                <View style={styles.section1}>
                                                    <TouchableOpacity style={[styles.cover, isPressed && styles.coverPressed]} onPress={handlePress11}>
                                                        <Text style={[styles.Textframe1, isPressed && styles.Textframe1Pressed]} onPress={handlePress12}>การผลิต</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover}>
                                                        <Text style={styles.Textframe1}>บริการ</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover}>
                                                        <Text style={styles.Textframe1}>การค้า</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover}>
                                                        <Text style={styles.Textframe1}>การเกษตร</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.section1}>
                                                    <TouchableOpacity style={styles.cover1}>
                                                        <Text style={styles.Textframe1}>อุตสาหกรรม</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover1}>
                                                        <Text style={styles.Textframe1}>ธุรกิจพลังงาน</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover1}>
                                                        <Text style={styles.Textframe1}>ธุรกิจเทคโนโลยี</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover1}>
                                                        <Text style={styles.Textframe1}>ธุรกิจการเงิน</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.section1}>
                                                    <TouchableOpacity style={styles.more}>
                                                        <Text style={styles.screenText1}>+ เพิ่มเติม</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>จำนวนพนักงานของคุณ (สามารถข้ามและกลับมาใส่ย้อนหลังได้)</Text>
                                                </View>
                                                <View style={styles.section1}>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>1-10 คน</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>11-50 คน</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>51-200 คน</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>500 คนขึ้นไป</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>สวัสดิการ (เลือกได้หลายรายการ)</Text>
                                                </View>
                                                <View style={styles.section1}>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>มีที่พัก</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>อบรม</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>ประกันชีวิต</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>วันหยุดพิเศษ</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover2}>
                                                        <Text style={styles.Textframe1}>บริการรับ-ส่ง</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.section1}>
                                                    <TouchableOpacity style={styles.cover3}>
                                                        <Text style={styles.Textframe1}>ตรวจสุขภาพประจำปี</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.cover3}>
                                                        <Text style={styles.Textframe1}>กองทุนสำรองเลี้ยงชีพ</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.section1}>
                                                    <TouchableOpacity style={styles.more} >
                                                        <Text style={styles.screenText1}>+ เพิ่มเติม</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <Text style={styles.screenText1}>ข้อมูลติดต่อ *</Text>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>เบอร์โทรศัพษ์ที่ติดต่อได้ *</Text>
                                                </View>
                                                <View style={styles.inputContainer}>
                                                    <TextInput
                                                        style={styles.input3}
                                                        value={businessType}
                                                        onChangeText={setBusinessType}
                                                    />
                                                    <TouchableOpacity style={styles.button} onPress={() => console.log('Button Pressed')}>
                                                        <Text style={styles.buttonText}>+ เพิ่มเติม</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>อีเมล</Text>
                                                </View>
                                                <View style={styles.inputContainer}>
                                                    <TextInput
                                                        style={styles.input3}
                                                        value={businessType}
                                                        onChangeText={setBusinessType}
                                                    />
                                                    <TouchableOpacity style={styles.button} onPress={() => console.log('Button Pressed')}>
                                                        <Text style={styles.buttonText}>+ เพิ่มเติม</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <Text style={styles.screenText1}>สถานที่ตั้งบริษัทคุณ *</Text>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>ที่อยู่ * </Text>
                                                </View>
                                                <View style={styles.section}>
                                                    <TextInput
                                                        style={styles.input}
                                                        value={businessType}
                                                        onChangeText={setBusinessType}
                                                    />
                                                </View>
                                            </View>
                                            <View >
                                                <View style={styles.screen22}>
                                                    <View >
                                                        <View style={styles.screen3}>
                                                            <Text style={styles.screenText1}>อำเภท *</Text>
                                                        </View>
                                                        <View style={styles.section}>
                                                            <TextInput
                                                                style={styles.input1}
                                                                value={businessType}
                                                                onChangeText={setBusinessType}
                                                            />
                                                        </View>
                                                    </View>
                                                    <View >
                                                        <View style={styles.screen3}>
                                                            <Text style={styles.screenText1}>จังหวัด *</Text>
                                                        </View>
                                                        <View style={styles.section}>
                                                            <TextInput
                                                                style={styles.input1}
                                                                value={businessType}
                                                                onChangeText={setBusinessType}
                                                            />
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>รหัสไปรษณีย์ *</Text>
                                                </View>
                                                <View style={styles.section}>
                                                    <TextInput
                                                        style={styles.input}
                                                        value={businessType}
                                                        onChangeText={setBusinessType}
                                                    />
                                                </View>
                                            </View>
                                            <Text style={styles.screenText1}>ยืนยันความถูกต้อง (คุณสามารถเลือกใส่อย่างใดอย่างนึงได้) *</Text>
                                            <View>
                                                <View style={styles.screen33}>
                                                    <Text style={styles.screenText1}>ใบทะเบียนพาณิชย์ หรือใบรับรองอื่นๆ (ดูตัวอย่าง) </Text>
                                                    <Switch
                                                        value={isEnabled}
                                                        onValueChange={setIsEnabled}
                                                        thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'} 
                                                        trackColor={{
                                                            false: '#969696', 
                                                            true: '#4CD964', 
                                                        }}
                                                    />
                                                </View>
                                                <View style={styles.sectionmore}>
                                                    <View>
                                                        <Ionicons name="cloud-upload-outline" size={50} color="#F3C6AF" />
                                                    </View>
                                                    <Text style={styles.screenText1}>อัปโหลดไฟล์ของคุณที่นี่</Text>
                                                    <Text style={styles.Textframe2}>เลือกไฟล์</Text>
                                                </View>
                                            </View>
                                            <View>
                                                <View style={styles.screen33}>
                                                    <Text style={styles.screenText1}>รูปถ่ายหน้าร้าน (ตัวอย่าว)</Text>
                                                    <Switch
                                                        value={isEnabled2}
                                                        onValueChange={setIsEnabled2}
                                                        thumbColor={isEnabled2 ? '#FFFFFF' : '#FFFFFF'} 
                                                        trackColor={{
                                                            false: '#969696', 
                                                            true: '#4CD964', 
                                                        }}
                                                    />
                                                </View>
                                                <View style={styles.sectionmore}>
                                                    <View>
                                                        <Ionicons name="cloud-upload-outline" size={50} color="#F3C6AF" />
                                                    </View>
                                                    <Text style={styles.screenText1}>อัปโหลดไฟล์ของคุณที่นี่</Text>
                                                    <Text style={styles.Textframe2}>เลือกไฟล์</Text>
                                                </View>
                                            </View>
                                            <View style={styles.screen4} >
                                                <Text style={styles.screenText3}>ข้อมูลเหล่านี้จะใช้เพื่อตรวจสอบความถูกต้องเท่านั้น และจะไม่ถูกนำ
                                                    ไปใช้เพื่อวัตถุประสงค์อื่นใด  ขอขอบคุณสำหรับความร่วมมือ</Text>
                                            </View>
                                        </View>
                                    )}
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.screen1} >
                        <View style={styles.screen66} >
                            <Text style={styles.Textframe1}>ข้อมูลสถานประกอบการ</Text>
                        </View>
                        <View style={styles.screen6}>
                            <TouchableOpacity onPress={nextStep} style={styles.screen5}>
                                <Text style={styles.screenText}>ลงทะเบียน</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
            {step === 2 && (
                <View style={styles.container1_3} >
                    <View style={styles.container1}>
                        <View style={styles.container11}>
                            <Animated.View
                                style={[
                                    styles.circle,
                                    {
                                        transform: [{ scale: scaleValue }],
                                        backgroundColor: interpolatedColor
                                    }
                                ]}
                            />
                            <View style={styles.Area}>
                                <Ionicons name="checkmark-sharp" size={80} color="#FFFFFF" />
                            </View>
                        </View>
                        <View style={styles.Area1}>
                            <Text style={styles.paragraph1}>ลงทะเบียนบัญชีผู้ประกอบการสำเร็จ</Text>
                            <Text style={styles.paragraph2}>โอกาสของคุณที่จะมองผู้มีความสามารถ มาถึงคุณแล้ว!</Text>
                            <View style={styles.Area2}>
                                <Text style={styles.paragraph3}>เราจะดำเนินการแจ้งผลการสมัครโดยเร็วที่สุดผ่านแอปพลิเคชัน </Text>
                                <Text style={styles.paragraph5}>KoratLink</Text>
                            </View>
                            <Text style={styles.paragraph4}>คุณสามารถติดตามสถานะการสมัครได้ที่นี่</Text>
                        </View>
                        <View style={styles.container2}>
                            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Workingprofile')} >
                                <Text style={styles.loginButtonText}>ดูโปรไฟล์บริษัท</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.customButton} onPress={handlePress}>
                                <Text style={styles.customButtonText}>กลับสู่หน้าผู้ประกอบการ</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.top}>
                            <Image
                                source={require('../../images/Union.png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                            <View style={styles.TextUp}>
                                <Text style={styles.separatorText}> หางานโคราช </Text>
                                <View style={styles.TextUp1}>
                                    <FontAwesome6 name="diamond" size={5} color="#E6D7CF" />
                                    <View style={styles.separatorLine} />
                                    <FontAwesome6 name="diamond" size={5} color="#E6D7CF" />
                                </View>
                                <Text style={styles.separatorText2}> “ลอดประตูชุมพล 2 ครั้ง ได้กลับมาทำงานอยู่โคราชบ้านเอง” </Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    container1_3: {
        flex: 1,

    },
    container1_2: {
        flex: 1,
        paddingTop: 50
    },
    container1_2_3: {
        alignItems: 'center',
    },
    container1_1: {
        flex: 1,

    },

    text11: {
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
        color: '#626262'
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
    },
    container2: {
        alignItems: 'center',
        padding: 20
    },
    container11: {
        alignItems: 'center',
    },
    circle: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    Area: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#4CD964',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -110
    },
    Area1: {
        alignItems: 'center',
        marginTop: 40
    },
    Area2: {
        flexDirection: 'row',
    },
    circle: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    logo: {
        width: 500,
        height: 40,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginLeft: 7
    },
    TextUp: {
        alignItems: 'center',
        marginTop: -11
    },
    separatorText: {
        fontFamily: 'Sarabun-MediumItalic',
        fontSize: 10,
        color: "#BF7C5B"
    },
    TextUp1: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    separatorText2: {
        marginHorizontal: 1,
        fontFamily: 'Sarabun-MediumItalic',
        fontSize: 11,
        color: "#BF7C5B"
    },
    loginButton: {
        backgroundColor: '#FFB472',
        paddingVertical: 12,
        borderRadius: 50,
        width: '100%',
        alignItems: 'center',
        marginBottom: 15
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Sarabun-Medium'
    },
    customButton: {
        borderWidth: 1,
        borderColor: '#FFB472',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    customButtonText: {
        fontFamily: 'Sarabun-Medium',
        color: '#E5B197',
        fontSize: 15
    },
    paragraph1: {
        fontSize: 22,
        color: '#57AD66',
        fontFamily: 'Sarabun-SemiBold',
    },
    paragraph2: {
        fontSize: 14,
        color: '#7EBF89',
        fontFamily: 'Sarabun-SemiBold',
        marginBottom: 15
    },
    paragraph3: {
        fontSize: 12,
        color: '#7D7D7D',
        fontFamily: 'Sarabun-Medium',
    },
    paragraph4: {
        fontSize: 12,
        color: '#7D7D7D',
        fontFamily: 'Sarabun-Medium',
    },
    paragraph5: {
        fontSize: 12,
        color: '#EAA571',
        fontFamily: 'Sarabun-Medium',
    },

    label: {

        fontFamily: 'Sarabun-Medium',
        fontSize: 13,
        color: '#DF8C62'
    },
    selected: {
        fontSize: 16,
        color: '#FF6600',
        fontWeight: 'bold',
    },
    unselected: {
        fontSize: 16,
        color: '#999',
    },
    input: {
        borderWidth: 1,
        borderColor: '#F6DED1',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        width: '100%'
    },
    input1: {
        borderWidth: 1,
        borderColor: '#F6DED1',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        width: 170
    },
    uploadBox: {
        borderWidth: 1,
        borderColor: '#FFCC99',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FDF2E9',
    },
    uploadText: {
        color: '#FF6600',
    },
    warningText: {
        fontSize: 14,
        color: '#FF6600',
        textAlign: 'center',
        marginVertical: 20,
    },
    nextButton: {
        backgroundColor: '#FF6600',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    switchContainer11: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },



    container6: {

    },
    switchContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 1,
    },
    text: {
        color: '#DF8C62',
        fontSize: 13,
        fontFamily: 'Sarabun-Medium'
    },
    screenContainer: {
        marginTop: 10,

    },
    screen: {
        width: '100%',
        borderRadius: 10,
        height: 2000
    },
    screen2: {
        flexDirection: 'row',
    },
    screen22: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    screen3: {
        flexDirection: 'row',
        marginBottom: 11
    },
    screen33: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    screen4: {
        width: 370,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF4EB',
        padding: 12,
        borderRadius: 10,
        marginTop: 20
    },
    screen9: {
        padding: 15,
        marginTop: 40
    },
    screen10: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    screen11: {
        width: 100,
        height: 30,
        backgroundColor: '#F66B6B',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,

    },
    screenText: {
        fontSize: 15,
        fontFamily: 'Sarabun-SemiBold',
        color: '#FFFFFF'
    },
    screenText1: {
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
        color: '#626262'
    },
    screenText2: {
        fontSize: 16,
        fontFamily: 'Sarabun-Medium',
        color: '#626262'
    },
    screenText3: {
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
        color: '#626262'
    },
    screenText4: {
        fontSize: 13,
        fontFamily: 'Sarabun-SemiBold',
        color: '#6D6D6D'
    },
    screenText5: {
        fontSize: 15,
        fontFamily: 'Sarabun-SemiBold',
        color: '#FFFFFF'
    },
    screen1: {
        position: 'absolute',
        bottom: 1,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    screen5: {
        backgroundColor: '#FFB472',
        width: 360,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    screen6: {
        alignItems: 'center',
    },
    screen66:{
        alignItems: 'center',
        top:-10
    },
    screen7: {
        backgroundColor: '#EB9D75',
        width: 225,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 16
    },
    screen8: {
        backgroundColor: '#D9D9D9',
        width: 140,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    screen12: {
        backgroundColor: '#EB9D75',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 20
    },
    separatorLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6D7CF',
        marginVertical: 1,
    },
    section: {

    },
    section1: {
        flexDirection: 'row',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F6DED1',
        borderRadius: 15,
        padding: 8,
        marginBottom: 10
    },
    input3: {
        flex: 1,
        padding: 3,
    },
    button: {
        backgroundColor: '#FFBB80',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginLeft: 8,
    },
    buttonText: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
        color: '#FFFFFF'
    },
    ///////////////////////////////1//////////////////////////
    cover: {
        borderWidth: 1,
        borderColor: '#CC9B86',
        borderRadius: 20,
        padding: 3,
        width: 70,
        alignItems: 'center',
        marginRight: 5,
    },
    cover1: {
        borderWidth: 1,
        borderColor: '#CC9B86',
        borderRadius: 20,
        paddingVertical: 3,
        paddingHorizontal: 6,
        alignItems: 'center',
        marginRight: 5,
        marginTop: 10
    },
    cover2: {
        borderWidth: 1,
        borderColor: '#CC9B86',
        borderRadius: 20,
        paddingVertical: 3,
        paddingHorizontal: 6,
        alignItems: 'center',
        marginRight: 5,
        marginBottom: 10,
    },
    cover3: {
        borderWidth: 1,
        borderColor: '#CC9B86',
        borderRadius: 20,
        paddingVertical: 3,
        paddingHorizontal: 6,
        alignItems: 'center',
        marginRight: 5,
    },
    more: {
        backgroundColor: '#EAEAEA',
        borderRadius: 20,
        paddingVertical: 3,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
    },
    coverPressed: {
        backgroundColor: '#FFBB80',
        borderColor: '#FFBB80',
    },
    Textframe1: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
        color: '#626262'

    },
    Textframe2: {
        textDecorationLine: 'underline',
        textDecorationColor: 'blue',   
        color: 'black',                 
    },
    Textframe1Pressed: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
        color: '#FFFFFF'
    },
    ///////////////////////////////1//////////////////////////
    sectionmore: {
        borderWidth: 1,
        borderColor: '#CC9B86',
        borderRadius: 20,
        alignItems: 'center',
        padding: 40,
        marginBottom: 10
    },
});

export default StepForm;
