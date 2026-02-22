import React, { useState, useLayoutEffect, useCallback } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const ChatListScreen = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [chats, setChats] = useState([
    { id: '1', name: 'Alice', lastMessage: 'Hey there!', time: '10:30', read: true, image: require('../../images/profile/image (2).png') },
    { id: '2', name: 'Bob', lastMessage: 'How are you?', time: '9:15', read: false, image: require('../../images/profile/image (2).png') },
    { id: '3', name: 'Alice', lastMessage: 'Hey there!', time: '10:30', read: true, image: require('../../images/profile/image (2).png') },
    { id: '4', name: 'Bob', lastMessage: 'How are you?', time: '9:15', read: false, image: require('../../images/profile/image (2).png') },
    { id: '5', name: 'Alice', lastMessage: 'Hey there!', time: '10:30', read: true, image: require('../../images/profile/image (2).png') },
    { id: '6', name: 'Bob', lastMessage: 'How are you?', time: '9:15', read: false, image: require('../../images/profile/image (2).png') },

  ]);

  const navigation = useNavigation();


  const getMessageCount = () => {
    if (filter === 'unread') {
      return chats.filter(chat => !chat.read).length;
    }
    return chats.length;
  };

  const [selectedFilter, setSelectedFilter] = useState(null);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `กล่องข้อความ (${getMessageCount()})`,
    });
  }, [navigation, filter, chats]);

  useFocusEffect(
    useCallback(() => {


      console.log('Screen focused. Refresh chat data if needed.');


      const updatedChats = [
        { id: '1', name: 'HR Thai Beverage Plc', lastMessage: 'สวัสดีค่ะคุณดาริณ เนื่องจากการขอเลื่อนนัดที่คุณแจ้ง...', time: '1 ชั่วโมง', read: true, image: require('../../images/Logo1/image-4.png') },
        { id: '2', name: 'HR The Mall Korat', lastMessage: 'สวัสดีค่ะคุณดาริณ เนื่องจากการขอเลื่อนนัด...', time: '1 ชั่วโมง', read: false, image: require('../../images/Logo1/image-6.png') },
        { id: '3', name: 'HR CP ALL', lastMessage: 'สวัสดีค่ะคุณดาริณ เนื่องจากการขอเลื่อนนัดที่คุณแจ้ง...', time: '1 ชั่วโมง', read: true, image: require('../../images/Logo1/image-1.png') },
        { id: '4', name: 'HR Thai Beverage Plc', lastMessage: 'สวัสดีค่ะคุณดาริณ เนื่องจากการขอเลื่อนนัด...', time: '1 ชั่วโมง', read: false, image: require('../../images/Logo1/image-4.png') },
      ];
      setChats(updatedChats);
    }, [])
  );

  const handleDelete = (id) => {
    setChats(chats.filter(chat => chat.id !== id));
  };

  const handleChatPress = (chat) => {
    navigation.navigate('ChatScreen', { chat });
  };

  const renderRightActions = (id) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => handleDelete(id)}
    >
      <Text style={styles.deleteText}>ลบ</Text>
    </TouchableOpacity>
  );

  const filteredChats = chats.filter(chat => {
    if (filter === 'unread') {
      return !chat.read;
    }
    return true;
  }).filter(chat => chat.name.toLowerCase().includes(search.toLowerCase()));

  const getUnreadCount = (chat) => {
    return chat.read ? 0 : 1;
  };

  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <View style={styles.searchBoxWrapper}>
          <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBox}
            placeholder="ค้นหาข้อความและงานของคุณ"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>
      <View style={styles.filterContainer1}>
        <View style={styles.filterContainer}>
          <View style={styles.filterWrapper}>
            <TouchableOpacity
              style={[styles.filterButton, selectedFilter === 'all' && styles.activeFilter]}
              onPress={() => {
                setFilter('all');
                setSelectedFilter('all');
              }}
            >
              <Text style={[styles.filterText, selectedFilter === 'all' && styles.activeFilterText]}>ทั้งหมด (3)</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.filterWrapper}>
            <TouchableOpacity
              style={[styles.filterButton, selectedFilter === 'unread' && styles.activeFilter]}
              onPress={() => {
                setFilter('unread');
                setSelectedFilter('unread');
              }}
            >
              <Text style={[styles.filterText, selectedFilter === 'unread' && styles.activeFilterText]}>ยังไม่ได้อ่าน (3)</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.filterWrapper}>
            <TouchableOpacity
              style={[styles.filterButton, selectedFilter === 'time' && styles.activeFilter]}
              onPress={() => {
                setFilter('time');
                setSelectedFilter('time');
              }}
            >
              <Text style={[styles.filterText, selectedFilter === 'time' && styles.activeFilterText]}>ถังขยะ (3)</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.area}>
        <FlatList
          data={filteredChats}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Swipeable renderRightActions={() => renderRightActions(item.id)}>
              <TouchableOpacity onPress={() => handleChatPress(item)}>
                <View style={styles.chatItem}>
                  <Image source={item.image} style={styles.chatImage} />
                  <View style={styles.chatDetails}>
                    <Text style={styles.chatName}>{item.name}</Text>
                    <Text style={styles.lastMessage}>{item.lastMessage}</Text>
                  </View>
                  <View style={styles.chatInfo}>
                    <Text style={styles.time}>{item.time}</Text>
                    {getUnreadCount(item) > 0 ? (
                      <Text style={styles.unreadCount}>{getUnreadCount(item)} ยังไม่ได้อ่าน</Text>
                    ) : (
                      <Text style={styles.readStatus}></Text>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            </Swipeable>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container1: {
    padding: 16,
    marginTop: - 10
  },
  searchBoxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderRadius: 50,
    backgroundColor: '#F3F3F3',
  },
  searchBox: {
    height: 45,
    flex: 1,
    fontSize: 12,
    fontFamily: 'Sarabun-Light'
  },
  searchIcon: {
    paddingHorizontal: 15,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: -10,
    marginTop:-10
  },
  filterContainer1:{
    backgroundColor: '#F7F7F7',
    
  },
  filterWrapper: {
    
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 25,
    alignItems: 'center',
    borderRadius: 50,

  },
  activeFilter: {
    backgroundColor: '#EAEAEA',
  },
  filterText: {
    fontSize: 12,
    color: '#626262',
    fontFamily: 'Sarabun-Bold',
  },
  activeFilterText: {
    color: '#626262',
    fontFamily: 'Sarabun-Regular',
  },
  arrowIcon: {
    marginTop: -14,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F7F7F7',
  },
  chatImage: {
    width: 44,
    height: 44,
    marginRight: 10,
  },
  chatDetails: {
    flex: 1,
  },
  chatName: {
    fontSize: 14,
    fontFamily: 'Sarabun-Bold',
    color: '#5A5A5A'
  },
  lastMessage: {
    fontSize: 12,
    fontFamily: 'Sarabun-Medium',
    color: '#8B8B8B'
  },
  chatInfo: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 12,
    color: '#868686',
    fontFamily: 'Sarabun-Regular',
    top: -10
  },
  readStatus: {
    fontSize: 14,
    color: 'green',
  },
  unreadCount: {
    fontSize: 12,
    color: '#EB9D75',
    fontFamily: 'Sarabun-Medium',
    top: 10
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E63946',
    height: '100%',
    width: 80,
    padding: 10,
  },
  deleteText: {
    color: '#fff',
    fontWeight: '600',
  },
  area: {
    marginTop: 15
  }
});

export default ChatListScreen;
