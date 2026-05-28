import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../components/AuthContext';
import { TabBarContext } from '../components/TabBarContext';
import { useTab } from '../components/TabContext';

import Home from '../screens/Tab1User/Home';
import AllWork from '../screens/Tab1User/AllWork';
import Message from '../screens/Tab1User/Message';
import Savework from '../screens/Tab1User/Savework';
import Menubar from '../screens/Tab1User/Menubar';

const Tab1 = createBottomTabNavigator();

export default function TabNavigator1({ navigation }) {
  const { isLoggedIn } = useAuth();
  const { tabBarIcons } = useContext(TabBarContext);
  const { setCurrentTab } = useTab();

  return (
    <Tab1.Navigator
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
          } else if (route.name === 'ข้อความ') {
            iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
          } else if (route.name === 'บันทึก') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'เมณู') {
            if (tabBarIcons['เมณู']) {
              return (
                <Image
                  source={tabBarIcons['เมณู']}
                  style={{
                    width: size,
                    height: size,
                    borderRadius: size / 2
                  }}
                />
              );
            } else {
              iconName = focused ? 'settings' : 'settings-outline';
            }
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
      <Tab1.Screen name="หน้าหลัก" options={{ headerShown: false }}>
        {(props) => <Home {...props} setCurrentTab={setCurrentTab} />}
      </Tab1.Screen>
      <Tab1.Screen name="งานทั้งหมด" options={{ headerShown: false }}>
        {(props) => <AllWork {...props} setCurrentTab={setCurrentTab} />}
      </Tab1.Screen>
      <Tab1.Screen name="ข้อความ"
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
        {(props) => <Message {...props} setCurrentTab={setCurrentTab} />}
      </Tab1.Screen>
      <Tab1.Screen name="บันทึก"
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
        })}
      >
        {(props) => <Savework {...props} setCurrentTab={setCurrentTab} />}
      </Tab1.Screen>
      <Tab1.Screen
        name="เมณู"
        options={{ headerShown: false }}
      >
        {(props) => <Menubar {...props} setCurrentTab={setCurrentTab} />}
      </Tab1.Screen>
    </Tab1.Navigator>
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
