import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

const Filter = ({ isModalVisible, toggleModal,setCurrentTab }) => {
    const navigation = useNavigation(); 

    const [selectedButton, setSelectedButton] = useState(null); 

    const handlePress = (buttonIndex) => {
        if (selectedButton === buttonIndex) {
           
            setSelectedButton(null);
        } else {
           
            setSelectedButton(buttonIndex);
        }
    };

    const handleSkip = () => {
        navigation.navigate('Fillter'); 
    };

    return (
        <Modal
            isVisible={isModalVisible}
            onSwipeComplete={toggleModal}
            onBackdropPress={toggleModal}
            style={styles.modal}
        >
            <View style={styles.modalContent}>
                <TouchableOpacity onPress={toggleModal} style={styles.dragIndicator}>
                    <View style={styles.dragLine} />
                </TouchableOpacity>

                <View style={styles.Box1}>
                    <View style={styles.Box5}>
                        <View style={styles.Box6}>
                            <Text style={styles.separatorText3}>สลับบัญชี</Text>
                        </View>

                      
                        <View style={styles.Box2}>
                            <View style={styles.Box7}>
                                <Text style={styles.separatorText3}>บัญชีคนหางาน</Text>
                            </View>
                            <TouchableOpacity
                                style={[
                                    styles.Box,
                                    selectedButton === 1 && styles.selectedBox 
                                ]}
                                onPress={() => handlePress(1)}
                            >
                                <Image
                                    source={require('../../../images/profile/image (2).png')}
                                    style={styles.logo}
                                    resizeMode="contain"
                                />
                                <Text style={styles.separatorText}>ดาริน พิลาณี (ปัจจุบัน) </Text>
                            </TouchableOpacity>
                        </View>

                      
                        <View style={styles.Box2}>
                            <View style={styles.Box7}>
                                <Text style={styles.separatorText3}>บัญชีบริษัท</Text>
                            </View>
                            <TouchableOpacity
                                style={[
                                    styles.Box,
                                    selectedButton === 2 && styles.selectedBox 
                                ]}
                                onPress={() => handlePress(2)}
                            >
                                <Text style={styles.separatorText}>บริษัท ภูพบฟ้า จำกัด</Text>
                            </TouchableOpacity>
                        </View>

                      
                        <View style={styles.Box2}>
                            <View style={styles.Box7}>
                                <Text style={styles.separatorText3}>บัญชีร้านค้า</Text>
                            </View>
                            <TouchableOpacity
                                style={[
                                    styles.Box,
                                    selectedButton === 3 && styles.selectedBox 
                                ]}
                                onPress={() => handlePress(3)}
                            >
                                <Text style={styles.separatorText}>F&N Magnolia Icream</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.Box4}>
                        <TouchableOpacity style={styles.Box3} onPress={handleSkip}>
                            <Text style={styles.separatorText1}>ออกจากระบบ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '60%',
    },
    dragIndicator: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 15,
    },
    dragLine: {
        width: 50,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 2.5,
    },
    Box: {
        borderWidth: 1,
        borderColor: '#F5EFEC',
        backgroundColor: '#FFFFFF',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        padding: 13,
    },
    Box1: {},
    Box2: {},
    Box3: {
        backgroundColor: '#EB9D75',
        width: '80%',
        height: 50,
        alignItems: 'center',
        padding: 12,
        borderWidth: 1,
        borderColor: '#FF8749',
        borderRadius: 50,
    },
    Box4: {
        alignItems: 'center',
    },
    Box5: {
        marginBottom: 20,
    },
    Box6: {
        alignItems: 'center',
        marginBottom: 10,
    },
    Box7: {
        padding: 12,
    },
    separatorText: {
        color: '#333',
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
    },
    separatorText1: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'Sarabun-Medium',
    },
    separatorText3: {
        color: '#DF8C62',
        fontFamily: 'Sarabun-Bold',
        fontSize: 13,
    },
    selectedBox: {
        backgroundColor: '#FFF5F0', 
    },
    logo: {
        width: 30,
        height: 30,
    }
});

export default Filter;
