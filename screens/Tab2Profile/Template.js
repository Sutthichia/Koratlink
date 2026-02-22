import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Switch, TouchableOpacity, StyleSheet, FlatList, Linking, ScrollView, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

const Promotiondetails = ({ navigation, route }) => {



    const handleSkip = () => {
        navigation.navigate('Main');
    };
    const handleMoreTemplatee = () => {
        navigation.navigate('MoreTemplate');
    };
    const handleMenuAdvertise = () => {
        navigation.navigate('MenuAdvertise');
    };
    const handleAdvertisingprocess = () => {
        navigation.navigate('Advertisingprocess')
    };

    const [isModalVisible, setModalVisible] = useState(false);
    const [menuText, setMenuText] = useState('เแนะนำ');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleMenuPress = (menuName) => {
        setMenuText(menuName); 
        toggleModal();
        navigation.navigate('NewTemplate', { menuName });
    };

    const menuData0 = [
        {
            id: 1,
            image: require('../../images/advertise/15.png'),
        },
        {
            id: 2,
            image: require('../../images/advertise/16.png'),
        },
        {
            id: 3,

            image: require('../../images/advertise/4.png'),
        },
        {
            id: 4,
            image: require('../../images/advertise/5.png'),
        },
    ];

    const menuData1 = [
        {
            id: 1,
            image: require('../../images/advertise/6.png'),
        },
        {
            id: 2,
            image: require('../../images/advertise/7.png'),
        },
        {
            id: 3,

            image: require('../../images/advertise/8.png'),
        },
        {
            id: 4,
            image: require('../../images/advertise/9.png'),
        },
    ];

    const menuData2 = [
        {
            id: 1,
            image: require('../../images/advertise/10.png'),
        },
        {
            id: 2,
            image: require('../../images/advertise/11.png'),
        },
        {
            id: 3,
            image: require('../../images/advertise/12.png'),
        },
        {
            id: 4,
            image: require('../../images/advertise/13.png'),
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.container0}>
                <View style={styles.searchBox}>
                    <Icon name="search" size={20} color="#888" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="ค้นหาเทมเพลต..."
                    />
                </View>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <Text style={styles.Textframe}>เลือกประเภท</Text>
                        <View>
                            <TouchableOpacity style={styles.Box} onPress={handleMenuAdvertise}>
                                <Text style={styles.Textframe1}>ประเภท</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.container2} onPress={toggleModal}>
                        <Text style={styles.Textframe}>จัดเรียงตาม :</Text>
                        <Text style={styles.Textframe1}> {menuText}</Text>
                    </TouchableOpacity>
                    <Modal
                        isVisible={isModalVisible}
                        onBackdropPress={toggleModal}
                        style={styles.modal}>
                        <View style={styles.bottomSheet}>
                            <View style={styles.container3}>
                                <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                                </TouchableOpacity>
                                <Text style={styles.title}>จัดเรียงผลลัพธ์ตาม</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.menuButton}
                                onPress={() => handleMenuPress('เแนะนำ')}>
                                <Text style={styles.menuButtonText}>เแนะนำ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.menuButton}
                                onPress={() => handleMenuPress('ยอดนิยม')}>
                                <Text style={styles.menuButtonText}>ยอดนิยม</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.menuButton}
                                onPress={() => handleMenuPress('ใหม่ล่าสุด<')}>
                                <Text style={styles.menuButtonText}>ใหม่ล่าสุด</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            </View>
            <View>
                <View style={styles.screens}>
                    <Text style={styles.Textframe}>แนะนำ</Text>
                    <TouchableOpacity>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.screens1}>
                    {menuData0.map((item) => (

                        <TouchableOpacity key={item.id} style={styles.button} onPress={handleMoreTemplatee}>
                            <Image source={item.image} style={styles.icon} />
                        </TouchableOpacity>

                    ))}
                </ScrollView>
            </View>
            <View>
                <View style={styles.screens}>
                    <Text style={styles.Textframe}>ยอดนิยม</Text>
                    <TouchableOpacity>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.screens1}>
                    {menuData1.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.button} onPress={handleMoreTemplatee}>
                            <Image source={item.image} style={styles.icon} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View>
                <View style={styles.screens}>
                    <Text style={styles.Textframe}>ใหม่ล่าสุด</Text>
                    <TouchableOpacity>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.screens1}>
                    {menuData2.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.button} onPress={handleMoreTemplatee}>
                            <Image source={item.image} style={styles.icon} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container0: {
        padding: 20,
        paddingBottom:1
    },
    container1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container3: {
        alignItems: 'center',
        padding: 20,
    },
    screens: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        paddingBottom: 10
    },
    screens1: {
        paddingLeft: 20
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 10
    },
    Box: {
        borderWidth: 1,
        borderColor: '#F1996C',
        paddingVertical: 2,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginLeft: 10
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 13,
        fontFamily: 'Sarabun-Medium', 
    },
    Textframe: {
        color: '#626262',
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
    },
    Textframe1: {
        color: '#F1996C',
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    bottomSheet: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        minHeight: Dimensions.get('window').height * 0.4,
    },
    title: {
        fontSize: 14,
        color: '#DF8C62',
        fontFamily: 'Sarabun-SemiBold',
    },
    menuButton: {
        borderWidth: 1,
        borderColor: '#F5EFEC',
        paddingVertical: 20,
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    menuButtonText: {
        color: '#787878',
        fontSize: 14,
    },
    closeButton: {
        backgroundColor: '#ACACAC',
        paddingVertical: 2,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginBottom: 15
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    button: {

    },
});

export default Promotiondetails;
