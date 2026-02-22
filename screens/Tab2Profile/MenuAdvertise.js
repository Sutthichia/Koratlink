import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Switch, TouchableOpacity, StyleSheet, FlatList, Linking, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const MenuAdvertise = ({ navigation, route }) => {



    const handleSkip = () => {
        navigation.navigate('Main');
    };
    const handleRegisterProfile = () => {
        navigation.navigate('RegisterProfile');
    };
    const handleNewTemplate = () => {
        navigation.navigate('NewTemplate');
    };
    const handleAdvertisingprocess = () => {
        navigation.navigate('Advertisingprocess')
    };

    const [selectedButtons, setSelectedButtons] = useState([false, false, false, false, false, false, false]);
    const [buttonTexts, setButtonTexts] = useState(['โปรโมทงาน', 'โปรโมทโปรไฟล์ของคุณ', 'โปรโมทร้านอาหาร', 'โปรโมทที่พักของคุณ', 'โปรโมทสินค้าของคุณ', 'โปรโมทบริการของคุณ', 'โปรโมทอีเว้นท์ของคุณ']); // ข้อความของปุ่ม

    const icons = [
        'briefcase-outline',   
        'bus-outline',
        'fast-food-outline',
        'business-outline',
        'bag-handle-outline',      
        'people-outline',
        'star-outline',
    ];

    const handlePress = (index) => {
        const updatedSelection = [...selectedButtons];
        updatedSelection[index] = !updatedSelection[index]; 
        setSelectedButtons(updatedSelection);
    };


    return (
        <View style={styles.container}>
            <View style={styles.container3}>
                {selectedButtons.map((isSelected, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.button, { borderColor: isSelected ? '#FFB472' : '#FFB472' }]}
                        onPress={() => handlePress(index)}
                    >
                        <View style={styles.container1}>
                            <View style={[styles.container2, { backgroundColor: isSelected ? '#FFB472' : '#FFF4EB' }]}>
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

                        <MaterialIcons
                            name={isSelected ? 'radio-button-checked' : 'radio-button-unchecked'} 
                            size={25}
                            color={isSelected ? '#FFB472' : '#FFB472'}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.screen1}>
                <Text style={styles.Textframe1}>เลือกได้มากกว่า 1 ประเภท</Text>
            </View>
            <View style={styles.screen}>
                <TouchableOpacity style={styles.button3} onPress={handleNewTemplate}>
                    <Text style={styles.Textframe4}>บันทึกและลงโฆษณา</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    container1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container2: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    container3: {
        padding: 20
    },
    button: {
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        fontFamily: 'Sarabun-Medium',
    },
    screen: {
        position: 'absolute',
        bottom: 2,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    screen1:{
        paddingLeft:20
    },
    button3: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        backgroundColor: '#FFB472',
        alignItems: 'center'
    },
    Textframe1:{
        color: '#5B5B5B',
        fontFamily: 'Sarabun-Medium',
        fontSize: 13,
    },
    Textframe4: {
        color: '#fff',
        fontFamily: 'Sarabun-SemiBold',
        fontSize: 15,
    },
});

export default MenuAdvertise;
