import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { LinearGradient } from 'expo-linear-gradient';


const App = () => {
  const [activeSection, setActiveSection] = useState(0); 

  const buttons = [
    { 
      icon: 'home', 
      value: 0, 
      label: 'หน้าหลัก', 
      color: '#FFFFFF',       
      activeColor: '#7EA1D5' 
    },
    { 
      icon: 'search', 
      value: 1, 
      label: 'ค้นหา', 
      color: '#FFFFFF',
      activeColor: '#7EA1D5' 
    },
    { 
      icon: 'user', 
      value: 2, 
      label: 'โปรไฟล์', 
      color: '#FFFFFF',
      activeColor: '#7EA1D5' 
    },
  ];

  return (
    <View style={styles.container}>
      
      <LinearGradient
        colors={['#687BC3', '#FFFFFF']}
        locations={[0.1, 0.5]}
        style={styles.background}
      />
      
      <SafeAreaView style={{ flex: 0 }} />

     
      <View style={styles.buttonContainer}>
        {buttons.map((button) => (
          <View key={button.value} style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[
                styles.circleButton,
                activeSection === button.value && styles.activeButton,
                activeSection !== button.value && styles.inactiveButton
              ]}
              onPress={() => setActiveSection(button.value)}
            >
              <Icon 
                name={button.icon} 
                size={24} 
                color={activeSection === button.value ? button.activeColor : button.color} 
              />
            </TouchableOpacity>
            <Text style={styles.buttonLabel}>{button.label}</Text>
          </View>
        ))}
      </View>

     
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {activeSection === 0 && (
            <View style={styles.page}>
              <Text style={styles.pageText}>หน้าหลัก</Text>
            </View>
          )}
          {activeSection === 1 && (
            <View style={styles.page}>
              <Text style={styles.pageText}>ค้นหา</Text>
            </View>
          )}
          {activeSection === 2 && (
            <View style={styles.page}>
              <Text style={styles.pageText}>โปรไฟล์</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#90AEE4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#FFFFFF',
  },
  inactiveButton: { 
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonWrapper: {
    alignItems: 'center',
  },
  buttonLabel: { 
    fontSize: 12,
    marginTop: 10,
    color: '#FFFFFF',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageText: {
    fontSize: 24,
  },
});

export default App;
