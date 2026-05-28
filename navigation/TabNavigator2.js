import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTab } from '../components/TabContext';

import EntrepreneurDashboard from '../screens/Tab2Profile/EntrepreneurDashboard';
import Overviewofjobapplications from '../screens/Tab2Profile/Overviewofjobapplications';
import Announcement from '../screens/Tab2Profile/announcement';
import Massage from '../screens/Tab2Profile/Massage';
import ScreenD from '../screens/Tab2Profile/ScreenD';

const Tab2 = createBottomTabNavigator();

export default function TabNavigator2({ navigation }) {
  const { setCurrentTab } = useTab();

  return (
    <Tab2.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: tabBarStyles.tabBarLabel,
        tabBarLabel: ({ focused, color }) => (
          <Text style={{
            color,
            fontSize: 10,
            marginBottom: 15,
            fontFamily: 'Sarabun-Bold',
          }}>
            {route.name}
          </Text>
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'หน้าหลัก') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'งานทั้งหมด') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'ลงประกาศงาน') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'แชท') {
            iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
          } else if (route.name === 'เมนู') {
            iconName = focused ? 'menu' : 'menu-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#EDB589',
        tabBarInactiveTintColor: '#A3A3A3',
        tabBarStyle: {
          height: 75,
          paddingTop: 10,
        },
      })}
    >
      <Tab2.Screen
        name="หน้าหลัก"
        options={{ headerShown: false }}>
        {(props) => <EntrepreneurDashboard {...props} setCurrentTab={setCurrentTab} />}
      </Tab2.Screen>
      <Tab2.Screen
        name="งานทั้งหมด"
        options={({ navigation }) => ({
          headerShown: true,
          title: '',
          headerTitle: 'งานของฉัน',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#6D6D6D',
            fontSize: 16,
            fontFamily: 'Sarabun-ExtraBold'
          },
          headerStyle: {
            borderBottomWidth: 0,
            borderBottomColor: '#E6D7CF',
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
          },
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={24}
              color="#000"
              style={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()} 
            />
          ),
        })}>
        {(props) => <Overviewofjobapplications {...props} setCurrentTab={setCurrentTab} />}
      </Tab2.Screen>
      <Tab2.Screen
        name="ลงประกาศงาน"
        options={{
          headerShown: true,
          tabBarStyle: { display: 'none' },
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('หน้าหลัก')}>
              <Ionicons
                name="chevron-back"
                size={24}
                color="#000"
                style={{ marginLeft: 15 }}
              />
            </TouchableWithoutFeedback>
          ),
          headerTitle: 'ลงประกาศงาน', 
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Sarabun-Bold',  
            fontSize: 18,              
            color: '#6D6D6D',         
          },
          tabBarButton: (props) => (
            <TouchableWithoutFeedback onPress={() => { }} {...props}>
              <View style={{
                flex: 1,
                height: 80,
                marginTop: -15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Ionicons
                  name="add-circle"
                  size={50}
                  color="#FFB472"
                />
                <Text style={{
                  color: '#A3A3A3',
                  fontSize: 10,
                  fontFamily: 'Sarabun-Bold',
                  marginTop: -1,
                }}>
                  ลงประกาศงาน
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )
        }}
      >
        {(props) => <Announcement {...props} setCurrentTab={setCurrentTab} />}
      </Tab2.Screen>
      <Tab2.Screen
        name="แชท"
        options={({ navigation }) => ({
          headerShown: true,
          title: '',
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitle: 'บันทึก',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#6D6D6D',
            fontSize: 16,
            fontFamily: 'Sarabun-ExtraBold'
          },
          headerStyle: {
            borderBottomWidth: 0,
            borderBottomColor: '#E6D7CF',
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
          },
        })}>
        {(props) => <Massage {...props} setCurrentTab={setCurrentTab} />}
      </Tab2.Screen>
      <Tab2.Screen
        name="เมนู"
        options={{ headerShown: false }}>
        {(props) => <ScreenD {...props} setCurrentTab={setCurrentTab} />}
      </Tab2.Screen>
    </Tab2.Navigator>
  );
}

const tabBarStyles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: 'bold',
  }
});
