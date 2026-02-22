import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [notifications, setNotifications] = useState([
        { id: '1', title: 'KoratLink', read: true, image: require('../../images/profile/Gemini_Generated_Image_55uuzs55uuzs55uu 3.png'), showDetails: false, additionalText: 'คุณมีการเข้าชมโปรไฟล์บริษัท 124 ครั้ง ในสัปดาห์นี้', time: '1 ชั่วโมง' },
        { id: '2', title: 'มีผู้สมัครมาสมัครงานคุณตอนนี้', read: true, image: require('../../images/profile/Gemini_Generated_Image_55uuzs55uuzs55uu 3.png'), showDetails: true, time: '12 ชั่วโมง' },
        { id: '3', title: 'KoratLink', read: false, image: require('../../images/profile/Gemini_Generated_Image_55uuzs55uuzs55uu 3.png'), showDetails: true, additionalText: 'คุณได้เลื่อนนัดของอนันต์ พิริยากร', time: '2 วัน' },
        { id: '4', title: 'ยินดีต้อนรับสู่ KoratLink', read: true, image: require('../../images/profile/Gemini_Generated_Image_55uuzs55uuzs55uu 3.png'), showDetails: false, additionalText: 'ขอขอบคุณที่เลือกใช้ KoratLink เราตื่นเต้นที่จะได้ร่วมเป็นส่วน......', time: '3 วัน' },
    ]);

    const [filter, setFilter] = useState('all'); // 'all' หรือ 'unread'

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleViewDetails = (id) => {
        Alert.alert('รายละเอียดผู้สมัคร', `คุณเลือกดูรายละเอียดของรายการ ID: ${id}`);
    };

    // กรองรายการตามตัวกรองและข้อความค้นหา
    const filteredNotifications = notifications.filter((notification) => {
        const matchesFilter = filter === 'all' ? true : !notification.read;
        const matchesSearch = notification.title.includes(searchText);
        return matchesFilter && matchesSearch;
    });

    return (
        <View style={styles.container}>
            <View style={styles.containerV1}>
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#939393" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchBox}
                        placeholder="ค้นหาการแจ้งเตือนของคุณ..."
                        placeholderTextColor="#888"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>
            </View>
            <View style={styles.separatorLine} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.filterButton, filter === 'all' && styles.activeButton]}
                    onPress={() => handleFilterChange('all')}
                >
                    <Text style={styles.buttonText}>
                        ทั้งหมด ({notifications.length})
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filterButton, filter === 'unread' && styles.activeButton]}
                    onPress={() => handleFilterChange('unread')}
                >
                    <Text style={styles.buttonText}>
                        ยังไม่ได้อ่าน ({notifications.filter((n) => !n.read).length})
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separatorLine} />
            {/* รายการแจ้งเตือน */}
            <FlatList
                data={filteredNotifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.notificationItem, item.read && styles.readNotification]}>
                        <Image source={item.image} style={styles.notificationImage} />
                        <View style={{ flex: 1 }}>
                            <View style={styles.containerV2}>
                                <Text style={styles.notificationText}>{item.title}</Text>
                                <Text style={styles.timeText}>{item.time}</Text>
                            </View>
                            {item.additionalText && (
                                <Text style={styles.additionalText}>{item.additionalText}</Text>
                            )}
                            {item.showDetails && (
                                <TouchableOpacity
                                    style={styles.detailsButton}
                                    onPress={() => handleViewDetails(item.id)}
                                >
                                    <View style={styles.containerV3}>
                                        <Text style={styles.detailsButtonText}>ดูรายละเอียดผู้สมัคร</Text>
                                        <Ionicons name="chevron-forward-outline" size={20} color="#CC9B86" />
                                    </View>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerV1: {
        padding: 20,
    },
    containerV2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    containerV3: {
        flexDirection: 'row',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
        borderRadius: 50,
        paddingHorizontal: 10,
        height: 45,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchBox: {
        flex: 1,
        fontSize: 13,
        color: '#939393',
        fontFamily: 'Sarabun-Medium',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -10,
        marginTop: -10,
        padding: 20
    },
    filterButton: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 50,
    },
    activeButton: {
        backgroundColor: '#F1F1F1',
    },
    buttonText: {
        color: '#626262',
        fontSize: 13,
        fontFamily: 'Sarabun-Medium',
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFF6F2',
    },
    readNotification: {
        backgroundColor: '#FFFFFF',
    },
    notificationImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    notificationText: {
        fontSize: 16,
        color: '#333',
    },
    timeText: {
        fontSize: 12,
        color: '#888',
        marginTop: 5,
    },
    detailsButton: {
        marginTop: 5,
        padding: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        alignItems: 'center',
        width: '50%',
        borderColor: '#CC9B86',
        borderWidth: 1,

    },
    detailsButtonText: {
        color: '#CC9B86',
        fontSize: 13,
    },
    separatorLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F1',
        marginVertical: 1,
    },
});

export default NotificationScreen;
