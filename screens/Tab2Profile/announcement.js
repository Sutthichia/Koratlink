import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text, Image, TouchableOpacity, Button, Switch, ScrollView, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const StepForm = ({ navigation, setCurrentTab }) => {

    const [step, setStep] = useState(1);
    const scaleValue = useRef(new Animated.Value(1)).current;
    const colorValue = useRef(new Animated.Value(0)).current;
    const [minSalary, setMinSalary] = useState(0);
    const [maxSalary, setMaxSalary] = useState(12000);

    const handleMinSalaryChange = (amount) => {
        setMinSalary((prevSalary) => Math.max(0, prevSalary + amount));
    };

    const handleMaxSalaryChange = (amount) => {
        setMaxSalary((prevSalary) => Math.max(minSalary, prevSalary + amount));
    };

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

    const [DATA, setDATA] = useState([
        { id: 1, label: 'รับสมัครด่วน', isSelected: false },
        { id: 2, label: 'เหลือเพียง 2 อัตรา', isSelected: false },
        { id: 3, label: 'รับคนมีประสบการณ์เท่านั้น', isSelected: false },
    ]);

    const [DATA1, setDATA1] = useState([
        { id: 1, label: '20 - 45 ปี', isSelected: false },
        { id: 2, label: '18 - 35 ปี', isSelected: false },
        { id: 3, label: '20 - 25 ปี', isSelected: false },
        { id: 4, label: '18 - 20 ปี', isSelected: false },
    ]);

    const [DATA2, setDATA2] = useState([
        { id: 1, label: '15,000 - 30,000 บาท', isSelected: false },
        { id: 2, label: '30,001 - 50,000 บาท', isSelected: false },
    ]);

    const [DATA3, setDATA3] = useState([
        { id: 1, label: 'สำเนาบัตรประชาชน', isSelected: false },
        { id: 2, label: 'Portfolio', isSelected: false },
        { id: 3, label: 'สำเนาทะเบียนบ้าน', isSelected: false },
    ]);

    const [DATA4, setDATA4] = useState([
        { id: 1, label: 'วุฒิการศึกษา', isSelected: false },
    ]);

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

    const toggleButton = (id) => {
        setDATA((prevDATA) =>
            prevDATA.map((item) =>
                item.id === id ? { ...item, isSelected: !item.isSelected } : item
            )
        );
    };

    const toggleButto1 = (id) => {
        setDATA1((prevDATA) =>
            prevDATA.map((item) =>
                item.id === id ? { ...item, isSelected: !item.isSelected } : item
            )
        );
    };

    const toggleButto2 = (id) => {
        setDATA2((prevDATA) =>
            prevDATA.map((item) =>
                item.id === id ? { ...item, isSelected: !item.isSelected } : item
            )
        );
    };

    const toggleButto3 = (id) => {
        setDATA3((prevDATA) =>
            prevDATA.map((item) =>
                item.id === id ? { ...item, isSelected: !item.isSelected } : item
            )
        );
    };

    const toggleButto4 = (id) => {
        setDATA4((prevDATA) =>
            prevDATA.map((item) =>
                item.id === id ? { ...item, isSelected: !item.isSelected } : item
            )
        );
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
                            <View style={styles.switchContainer}>
                                <Text style={styles.label}>ข้อมูลบริษัทส่วนนี้สามารถใช้ข้อมูลที่ลงทะเบียนโปรไฟล์</Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#4CD964" }}  
                                    thumbColor={isDocumentEnabled ? "#FFFFFF" : "#FFFFFF"}
                                    onValueChange={() => setIsDocumentEnabled(!isDocumentEnabled)}
                                    value={isDocumentEnabled}
                                />
                            </View>
                            <ScrollView style={styles.screenContainer}>
                                <View style={styles.screenContainer1} >
                                    {isSwitch1On && (
                                        <View style={styles.screen}>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>ชื่อสถานประกอบการของคุณ *                                                 </Text>
                                                    <View style={styles.screen2} >
                                                        <Ionicons name="create-outline" size={20} color="black" />
                                                        <Text style={styles.screenText1}>แก้ไข</Text>
                                                    </View>
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
                                                    <Text style={styles.screenText1}>สวัสดิการ (เลือกได้หลายรายการ)</Text>
                                                    <View style={styles.screen2} >
                                                        <Ionicons name="create-outline" size={20} color="black" />
                                                        <Text style={styles.screenText1}>แก้ไข</Text>
                                                    </View>
                                                </View>
                                                <View>
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
                                            </View>
                                            <View>
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
                                            </View>
                                            <View>
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
                                            </View>
                                        </View>
                                    )}
                                    {isSwitch2On && (
                                        <View style={styles.screen}>
                                            <View>
                                                <View style={styles.screen3}>
                                                    <Text style={styles.screenText1}>ชื่อสถานประกอบการของคุณ *                                                 </Text>
                                                    <View style={styles.screen2} >
                                                        <Ionicons name="create-outline" size={20} color="black" />
                                                        <Text style={styles.screenText1}>แก้ไข</Text>
                                                    </View>
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
                                                    <Text style={styles.screenText1}>สวัสดิการ (เลือกได้หลายรายการ)</Text>
                                                    <View style={styles.screen2} >
                                                        <Ionicons name="create-outline" size={20} color="black" />
                                                        <Text style={styles.screenText1}>แก้ไข</Text>
                                                    </View>
                                                </View>
                                                <View>
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
                                            </View>
                                            <View>
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
                                            </View>
                                            <View>
                                                <Text style={styles.screenText1}>สถานที่ตั้งร้านค้าคุณ *</Text>
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
                                            </View>
                                        </View>
                                    )}
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.screen1} >
                        <View style={styles.screen3}>
                            <Text style={styles.screenText1}>ข้อมูลตำแหน่งงาน (ร้านค้า)</Text>
                        </View>
                        <View style={styles.screen6}>
                            <TouchableOpacity onPress={nextStep} style={styles.screen5}>
                                <Text style={styles.screenText}>ขั้นตอนต่อไป</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
            {step === 2 && (
                <View style={styles.container1_1}>
                    <ScrollView style={styles.container1_0}>
                        <View style={styles.container1_4}>
                            <View>
                                <Text style={styles.Textframe1}>
                                    ข้อความขึ้นด่วน : <Text style={{ color: '#EB9D75' }}>(เลือกได้สูงสุด 3 รายการ)</Text>
                                </Text>
                                <View style={styles.container1_1_2}>
                                    {DATA.map((item) => (
                                        <TouchableOpacity
                                            key={item.id}
                                            style={[
                                                styles.button_1,
                                                item.isSelected ? styles.selectedButton : styles.unselectedButton,
                                            ]}
                                            onPress={() => toggleButton(item.id)}
                                        >
                                            <Text
                                                style={[
                                                    styles.buttonText,
                                                    item.isSelected ? styles.selectedText : styles.unselectedText,
                                                ]}
                                            >
                                                {item.label}
                                            </Text>
                                        </TouchableOpacity>

                                    ))}
                                </View>
                                <View style={styles.section1}>
                                    <TouchableOpacity style={styles.more_1} >
                                        <Text style={styles.screenText1}>+ เพิ่มเติม</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.Textframe1}>
                                    ข้อความขึ้นด่วน : <Text style={{ color: '#EB9D75' }}>(เลือกได้สูงสุด 3 รายการ)</Text>
                                </Text>
                                <View style={styles.container1_1_2}>
                                    {DATA1.map((item) => (
                                        <TouchableOpacity
                                            key={item.id}
                                            style={[
                                                styles.button_1,
                                                item.isSelected ? styles.selectedButton : styles.unselectedButton,
                                            ]}
                                            onPress={() => toggleButto1(item.id)}
                                        >
                                            <Text
                                                style={[
                                                    styles.buttonText,
                                                    item.isSelected ? styles.selectedText : styles.unselectedText,
                                                ]}
                                            >
                                                {item.label}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <View style={styles.section1}>
                                    <TouchableOpacity style={styles.more_1} >
                                        <Text style={styles.screenText1}>+ เพิ่มเติม</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.Textframe1}>
                                    เงินเดือน : <Text style={{ color: '#EB9D75' }}>( เลือกเงินเดือนที่คุณต้องการ หรือระบุด้วยตนเอง )</Text>
                                </Text>
                                <View style={styles.container1_1_2}>
                                    {DATA2.map((item) => (
                                        <TouchableOpacity
                                            key={item.id}
                                            style={[
                                                styles.button_1,
                                                item.isSelected ? styles.selectedButton : styles.unselectedButton,
                                            ]}
                                            onPress={() => toggleButto2(item.id)}
                                        >
                                            <Text
                                                style={[
                                                    styles.buttonText,
                                                    item.isSelected ? styles.selectedText : styles.unselectedText,
                                                ]}
                                            >
                                                {item.label}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <View style={styles.salaryBox1}>
                                    <View style={styles.salaryBox2}>
                                        <Text style={styles.label}>เงินเดือนเริ่มต้น (บาท)</Text>
                                        <View style={styles.salaryBox}>
                                            <View style={styles.buttonContainer}>
                                                <TouchableOpacity onPress={() => handleMinSalaryChange(-1000)}>
                                                    <Ionicons name="remove-circle-outline" size={24} color="#A3A3A3" />
                                                </TouchableOpacity>
                                                <Text style={styles.salaryText}>{minSalary.toLocaleString()}</Text>
                                                <TouchableOpacity onPress={() => handleMinSalaryChange(1000)}>
                                                    <Ionicons name="add-circle-outline" size={24} color="#A3A3A3" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.salaryBox2}>
                                        <Text style={styles.label}>สูงสุด (บาท)</Text>
                                        <View style={styles.salaryBox}>
                                            <View style={styles.buttonContainer}>
                                                <TouchableOpacity onPress={() => handleMaxSalaryChange(-1000)}>
                                                    <Ionicons name="remove-circle-outline" size={24} color="#A3A3A3" />
                                                </TouchableOpacity>
                                                <Text style={styles.salaryText}>{maxSalary.toLocaleString()}</Text>
                                                <TouchableOpacity onPress={() => handleMaxSalaryChange(1000)}>
                                                    <Ionicons name="add-circle-outline" size={24} color="#A3A3A3" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.Textframe1}>
                                    เอกสารที่ต้องใช้ในการสมัคร : <Text style={{ color: '#EB9D75' }}>(เลือกได้หลายรายการ) </Text>
                                </Text>
                                <View style={styles.container1_1_2}>
                                    {DATA3.map((item) => (
                                        <TouchableOpacity
                                            key={item.id}
                                            style={[
                                                styles.button_1,
                                                item.isSelected ? styles.selectedButton : styles.unselectedButton,
                                            ]}
                                            onPress={() => toggleButto1(item.id)}
                                        >
                                            <Text
                                                style={[
                                                    styles.buttonText,
                                                    item.isSelected ? styles.selectedText : styles.unselectedText,
                                                ]}
                                            >
                                                {item.label}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <View style={styles.container1_1_2_1}>
                                    {DATA4.map((item) => (
                                        <TouchableOpacity
                                            key={item.id}
                                            style={[
                                                styles.button_1,
                                                item.isSelected ? styles.selectedButton : styles.unselectedButton,
                                            ]}
                                            onPress={() => toggleButto1(item.id)}
                                        >
                                            <Text
                                                style={[
                                                    styles.buttonText,
                                                    item.isSelected ? styles.selectedText : styles.unselectedText,
                                                ]}
                                            >
                                                {item.label}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <View style={styles.section1}>
                                    <TouchableOpacity style={styles.more_1} >
                                        <Text style={styles.screenText1}>+ เพิ่มเติม</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <View style={styles.section1_1}>
                                        <Text style={styles.Textframe1}>ตำแหน่งงานที่ 1 *</Text>
                                        <TouchableOpacity style={styles.more_1_1} >
                                            <Text style={styles.screenText1_1}>ลบออก</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.screen3}>
                                        <Text style={styles.screenText1}>ชื่อตำแหน่งงาน</Text>
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
                                        <Text style={styles.screenText1}>คุณสมบัติที่ต้องการ</Text>
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
                                        <Text style={styles.screenText1}>หน้าที่และความรับผิดชอบ</Text>
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
                                        <Text style={styles.screenText1}>ทักษะที่เป็นข้อได้เปรียบ</Text>
                                    </View>
                                    <View style={styles.section}>
                                        <TextInput
                                            style={styles.input}
                                            value={businessType}
                                            onChangeText={setBusinessType}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.more_1_2} >
                                    <Text style={styles.screenText}>+ เพิ่มเติม</Text>
                                </TouchableOpacity>
                                <View style={styles.switchContainer}>
                                    <Text style={styles.screenText1}>ค้นหาสิ่งอำนวยความสะดวกใกล้เคียง</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#4CD964" }} 
                                        thumbColor={isDocumentEnabled ? "#FFFFFF" : "#FFFFFF"}
                                        onValueChange={() => setIsDocumentEnabled(!isDocumentEnabled)}
                                        value={isDocumentEnabled}
                                    />
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
                    </ScrollView>

                    <View style={styles.screen1} >
                        <View style={styles.screen6}>
                            <TouchableOpacity onPress={nextStep} style={styles.screen7}>
                                <Text style={styles.screenText}>บันทึกและโพสต์</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.screen6}>
                            <TouchableOpacity onPress={previousStep} style={styles.screen8}>
                                <Text style={styles.screenText4}>ย้อนกลับ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
            {step === 3 && (
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
                            <Text style={styles.paragraph1}>โพสต์งานสำเร็จ</Text>
                            <Text style={styles.paragraph2}>โอกาสของคุณที่จะมองผู้มีความสามารถ มาถึงคุณแล้ว!</Text>
                            <View style={styles.Area2}>
                                <Text style={styles.paragraph3}>เราจะดำเนินการแจ้งผลการสมัครโดยเร็วที่สุดผ่านแอปพลิเคชัน </Text>
                                <Text style={styles.paragraph5}>KoratLink</Text>
                            </View>
                            <Text style={styles.paragraph4}>คุณสามารถดูงานที่ประกาศเอาไว้หรือรายการงานทั้งหมดได้ที่นี่</Text>
                        </View>
                        <View style={styles.container2}>
                            <TouchableOpacity style={styles.loginButton} onPress={() => {
                                navigation.navigate('งานทั้งหมด');
                                if (setCurrentTab) {
                                    setCurrentTab(2); 
                                }
                            }} >
                                <Text style={styles.loginButtonText}>ดูงานที่โพสต์</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('หน้าหลัก')}>
                                <Text style={styles.customButtonText}>กลับสู่หน้าหลัก</Text>
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
    },
    container1_2_3: {
        padding: 20
    },
    container1_1: {
        flex: 1,
    },
    container1_0: {
        padding: 20
    },
    container1_4: {
        height: 1500
    },
    container1_1_2: {
        flexDirection: 'row',
    },
    container1_1_2_1: {
        flexDirection: 'row',
        marginTop: -10
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
        borderColor: '#E5B197',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: '#DF8C62',
        fontSize: 13,
        fontFamily: 'Sarabun-Medium'
    },
    screenContainer: {
        marginTop: 10,

    },
    screenContainer1: {

    },
    screen: {
        width: '100%',
        borderRadius: 10,
        height: 1300
    },
    screen2: {
        flexDirection: 'row',
    },
    screen3: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginBottom: 11
    },
    section: {

    },
    screen22: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    screenText1_1: {
        fontSize: 13,
        fontFamily: 'Sarabun-SemiBold',
        color: '#FFFFFF'
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
        alignItems: 'center',
        position: 'absolute',
        bottom: 1,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'space-between',

    },
    screen5: {
        backgroundColor: '#FFB472',
        width: 360,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    screen7: {
        backgroundColor: '#FFB472',
        width: 225,
        height: 51,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    screen8: {
        backgroundColor: '#D9D9D9',
        width: 140,
        height: 51,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    screen6: {

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
    section1: {
        flexDirection: 'row',
    },
    section1_1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
    more_1: {
        backgroundColor: '#EAEAEA',
        borderRadius: 20,
        paddingVertical: 3,
        paddingHorizontal: 15,
        alignItems: 'center',
        marginRight: 5,
        marginBottom: 10,
    },
    more_1_1: {
        backgroundColor: '#F66B6B',
        borderRadius: 20,
        paddingVertical: 3,
        paddingHorizontal: 25,
        alignItems: 'center',
        marginRight: 5,
        marginBottom: 10,
    },
    more_1_2: {
        backgroundColor: '#FFB472',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        marginRight: 5,
        marginBottom: 10,
    },
    Textframe1: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
        color: '#626262'
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
    button_1: {
        borderWidth: 1,
        borderColor: '#F6DED1',
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 20,
        marginVertical: 10,
        marginRight: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
        color: '#FFFFFF'
    },
    buttonText1: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
        color: '#FFFFFF'
    },
    selectedText: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
        color: '#FFFFFF'
    },
    unselectedText: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 12,
        color: '#626262'
    },
    selectedButton: {
        borderWidth: 1,
        borderColor: '#F6DED1',
        backgroundColor: '#FFBB80',
    },
    unselectedButton: {
        borderWidth: 1,
        borderColor: '#FFBB80',
    },
    //////////////////////
    salaryBox1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    salaryBox: {
        width: 175,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
});

export default StepForm;
