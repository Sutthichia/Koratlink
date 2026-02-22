import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ChatScreen = () => {
  const route = useRoute();
  const { chat } = route.params;  
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!' },
    { id: '2', text: 'Hi there!' },
   
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: String(messages.length + 1), text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatHeader}>
        <Image source={chat.image} style={styles.chatImage} />
        <Text style={styles.chatName}>{chat.name}</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        style={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={handleSendMessage} color="#E63946" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  messageList: {
    flex: 1,
  },
  messageContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
});

export default ChatScreen;
