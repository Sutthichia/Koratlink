import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    TextInput,
    Image,
    FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

const NewScreen = ({ navigation, route }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [menuText, setMenuText] = useState(route.params.menuName);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleMenuPress = (menuName) => {
        setMenuText(menuName);
        toggleModal();
    };

    const handleMoreTemplate = () => {
        navigation.navigate('MoreTemplate');
    };



    const data = [
        { id: '1', image: require('../../images/advertise/15.png') },
        { id: '2', image: require('../../images/advertise/15.png') },
        { id: '3', image: require('../../images/advertise/16.png') },
        { id: '4', image: require('../../images/advertise/16.png') },
        { id: '5', image: require('../../images/advertise/4.png') },
        { id: '6', image: require('../../images/advertise/4.png') },
        { id: '7', image: require('../../images/advertise/5.png') },
        { id: '8', image: require('../../images/advertise/5.png') },

    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={handleMoreTemplate}>
            <Image source={item.image} style={styles.image} />
        </TouchableOpacity>
    );

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
                            <TouchableOpacity style={styles.Box}>
                                <Text style={styles.Textframe1}>โปรโมทงาน</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={toggleModal}>
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
            <FlatList
                data={data}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.container}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container0: {
        padding: 20
    },
    container1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
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
    container3: {
        alignItems: 'center',
        padding: 20,
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
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 10
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
    Box: {
        borderWidth: 1,
        borderColor: '#F1996C',
        paddingVertical: 2,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginLeft: 10
    },
    item: {
        flex: 1,
        margin: 10,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default NewScreen;
