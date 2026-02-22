import React, { useState, useContext, } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, Image, Share, TouchableWithoutFeedback } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from
  './components/AuthContext';
import { useFonts } from 'expo-font';
import { FavoriteJobProvider } from './components/FavoriteJobContext';
import { TabBarProvider, TabBarContext } from './components/TabBarContext';
import { TabProvider } from './components/TabContext';


import Home from './screens/Tab1User/Home';
import Menubar from './screens/Tab1User/Menubar';
import ScreenD from './screens/Tab2Profile/ScreenD';
import RegisterProfile from './screens/Tab2Profile/RegisterProfile';
import Login from './screens/LoginScreen';
import Login1 from './screens/LoginScreen1';
import Welcome from "./screens/Welcome";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AllWork from './screens/Tab1User/AllWork';
import Savework from './screens/Tab1User/Savework';
import JobDetails from './screens/Tab1User/add-on/JobDetails';
import ChatScreen from './screens/Tab1User/add-on/ChatScreen';
import Map from './screens/Tab1User/add-on/Map'
import Alternate from './screens/Alternate'
import Message from './screens/Tab1User/Message'
import Fillter from './screens/Tab1User/add-on/Fillter'
import ApplicationDetails from './screens/Tab1User/add-on/ApplicationDetails'
import JobDetailsScreen from './screens/Tab1User/add-on/JobDetailsScreen'
import Process2 from './screens/Tab1User/add-on/Process2'
import CheckJob from './screens/Tab1User/add-on/CheckJob'
import Filter from './screens/Tab1User/add-on/Filter'
import Personalrecord from './screens/Tab1User/add-on/Personalrecord'
import SignUpScreen from './screens/SignupScreen';
import SignUpScreen1 from './screens/SignupScreen1';
import SwitchAccounts from './screens/Tab1User/add-on/SwitchAccounts'
import Warn from './screens/Tab1User/add-on/Warn'
import Profile from './screens/Tab1User/add-on/Profile'
import Profile2 from './screens/Tab1User/add-on/Profile2'
import Profile3 from './screens/Tab1User/add-on/Profile3'
import Profile4 from './screens/Tab1User/add-on/Profile4'
import Profile5 from './screens/Tab1User/add-on/Profile5'
import Addhistory from './screens/Tab1User/add-on/Addhistory'
import Announcement from './screens/Tab2Profile/announcement'
import Massage from './screens/Tab2Profile/Massage'
import JobSeekerProfile from './screens/Tab2Profile/JobSeekerProfile'
import EntrepreneurDashboard from './screens/Tab2Profile/EntrepreneurDashboard'
import Overviewofjobapplications from './screens/Tab2Profile/Overviewofjobapplications'
import DetailsJob from './screens/Tab2Profile/DetailsJob'
import ForgetPassword from './screens/ForgetPassword';
import ResetPassword from './screens/ResetPassword'
import Workingprofile from './screens/Tab2Profile/Workingprofile'
import Advertise from './screens/Tab2Profile/advertise'
import Advertisingprocess from './screens/Tab2Profile/Advertisingprocess'
import Promotiondetails from './screens/Tab2Profile/Promotiondetails'
import Template from './screens/Tab2Profile/Template'
import NewTemplate from './screens/Tab2Profile/NewTemplate'
import MenuAdvertise from './screens/Tab2Profile/MenuAdvertise'
import MoreTemplate from './screens/Tab2Profile/MoreTemplate'
import PackageV1 from './screens/Tab2Profile/PackageV1'
import PackageV2 from './screens/Tab2Profile/PackageV2'
import Promotionresults from './screens/Tab2Profile/Promotionresults'
import Notification from './screens/Tab2Profile/Notification'
import Resume from './screens/Tab2Profile/Resume'
import Personald่ from './screens/Tab2Profile/Personald่'


const Stack = createStackNavigator();
const Tab1 = createBottomTabNavigator();

function TabNavigator1({ navigation, setCurrentTab }) {
  const { isLoggedIn } = useAuth();
  const { tabBarIcons } = useContext(TabBarContext);

  const handleSwitchTab = () => {
    if (!isLoggedIn) {
      navigation.navigate('Login');
    } else {
      setCurrentTab(2);
    }
  };

  return (
    <Tab1.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: tabBarStyles.tabBar,
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

const Tab2 = createBottomTabNavigator();
function TabNavigator2({ navigation, setCurrentTab }) {
  return (
    <Tab2.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: tabBarStyles.tabBar,
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
  },
  switchButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
  loggedInButton: {
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default function App() {
  const [currentTab, setCurrentTab] = useState(1);

  const [fontsLoaded] = useFonts({
    'Sarabun-Regular': require('./fonts/Sarabun-Regular.ttf'),
    'Sarabun-Italic': require('./fonts/Sarabun-Italic.ttf'),
    'Sarabun-Bold': require('./fonts/Sarabun-Bold.ttf'),
    'Sarabun-BoldItalic': require('./fonts/Sarabun-BoldItalic.ttf'),
    'Sarabun-ExtraBold': require('./fonts/Sarabun-ExtraBold.ttf'),
    'Sarabun-ExtraBoldItalic': require('./fonts/Sarabun-ExtraBoldItalic.ttf'),
    'Sarabun-ExtraLight': require('./fonts/Sarabun-ExtraLight.ttf'),
    'Sarabun-ExtraLightItalic': require('./fonts/Sarabun-ExtraLightItalic.ttf'),
    'Sarabun-Thin': require('./fonts/Sarabun-Thin.ttf'),
    'Sarabun-ThinItalic': require('./fonts/Sarabun-ThinItalic.ttf'),
    'Sarabun-SemiBold': require('./fonts/Sarabun-SemiBold.ttf'),
    'Sarabun-SemiBoldItalic': require('./fonts/Sarabun-SemiBoldItalic.ttf'),
    'Sarabun-Medium': require('./fonts/Sarabun-Medium.ttf'),
    'Sarabun-MediumItalic': require('./fonts/Sarabun-MediumItalic.ttf'),
    'Sarabun-Light': require('./fonts/Sarabun-Light.ttf'),
    'Sarabun-LightItalic': require('./fonts/Sarabun-LightItalic.ttf'),
    ///////////////////////////////////////////////////////////////
    'Inter_18pt-Black': require('./fonts/Inter_18pt-Black.ttf'),
    'Inter_18pt-BlackItalic': require('./fonts/Inter_18pt-BlackItalic.ttf'),
    'Inter_18pt-Bold': require('./fonts/Inter_18pt-Bold.ttf'),
    'Inter_18pt-BoldItalic': require('./fonts/Inter_18pt-BoldItalic.ttf'),
    'Inter_18pt-ExtraBold': require('./fonts/Inter_18pt-ExtraBold.ttf'),
    'Inter_18pt-ExtraBoldItalic': require('./fonts/Inter_18pt-ExtraBoldItalic.ttf'),
    'Inter_18pt-ExtraLight': require('./fonts/Inter_18pt-ExtraLight.ttf'),
    'Inter_18pt-ExtraLightItalic': require('./fonts/Inter_18pt-ExtraLightItalic.ttf'),
    'Inter_18pt-Italic': require('./fonts/Inter_18pt-Italic.ttf'),
    'Inter_18pt-Light': require('./fonts/Inter_18pt-Light.ttf'),
    'Inter_18pt-LightItalic': require('./fonts/Inter_18pt-LightItalic.ttf'),
    'Inter_18pt-Medium': require('./fonts/Inter_18pt-Medium.ttf'),
    'Inter_18pt-MediumItalic': require('./fonts/Inter_18pt-MediumItalic.ttf'),
    'Inter_18pt-Regular': require('./fonts/Inter_18pt-Regular.ttf'),
    'Inter_18pt-SemiBold': require('./fonts/Inter_18pt-SemiBold.ttf'),
    'Inter_18pt-SemiBoldItalic': require('./fonts/Inter_18pt-SemiBoldItalic.ttf'),
    'Inter_18pt-Thin': require('./fonts/Inter_18pt-Thin.ttf'),
    'Inter_18pt-ThinItalic': require('./fonts/Inter_18pt-ThinItalic.ttf'),
    ///////////////////////////////////////////////////////////////
    'NotoSansThai_Condensed-Black': require('./fonts/NotoSansThai_Condensed-Black.ttf'),
    'NotoSansThai_Condensed-Bold': require('./fonts/NotoSansThai_Condensed-Bold.ttf'),
    'NotoSansThai_Condensed-ExtraBold': require('./fonts/NotoSansThai_Condensed-ExtraBold.ttf'),
    'NotoSansThai_Condensed-ExtraLight': require('./fonts/NotoSansThai_Condensed-ExtraLight.ttf'),
    'NotoSansThai_Condensed-Light': require('./fonts/NotoSansThai_Condensed-Light.ttf'),
    'NotoSansThai_Condensed-Medium': require('./fonts/NotoSansThai_Condensed-Medium.ttf'),
    'NotoSansThai_Condensed-Regular': require('./fonts/NotoSansThai_Condensed-Regular.ttf'),
    'NotoSansThai_Condensed-SemiBold': require('./fonts/NotoSansThai_Condensed-SemiBold.ttf'),
    'NotoSansThai_Condensed-Thin': require('./fonts/NotoSansThai_Condensed-Thin.ttf'),
    'NotoSansThai_ExtraCondensed-Black': require('./fonts/NotoSansThai_ExtraCondensed-Black.ttf'),
    'NotoSansThai_ExtraCondensed-Bold': require('./fonts/NotoSansThai_ExtraCondensed-Bold.ttf'),
    'NotoSansThai_ExtraCondensed-ExtraBold': require('./fonts/NotoSansThai_ExtraCondensed-ExtraBold.ttf'),
    'NotoSansThai_ExtraCondensed-ExtraLight': require('./fonts/NotoSansThai_ExtraCondensed-ExtraLight.ttf'),
    'NotoSansThai_ExtraCondensed-Light': require('./fonts/NotoSansThai_ExtraCondensed-Light.ttf'),
    'NotoSansThai_ExtraCondensed-Medium': require('./fonts/NotoSansThai_ExtraCondensed-Medium.ttf'),
    'NotoSansThai_ExtraCondensed-Regular': require('./fonts/NotoSansThai_ExtraCondensed-Regular.ttf'),
    'NotoSansThai_ExtraCondensed-SemiBold': require('./fonts/NotoSansThai_ExtraCondensed-SemiBold.ttf'),
    'NotoSansThai_ExtraCondensed-Thin': require('./fonts/NotoSansThai_ExtraCondensed-Thin.ttf'),
    'NotoSansThai_SemiCondensed-Black': require('./fonts/NotoSansThai_SemiCondensed-Black.ttf'),
    'NotoSansThai_SemiCondensed-Bold': require('./fonts/NotoSansThai_SemiCondensed-Bold.ttf'),
    'NotoSansThai_SemiCondensed-ExtraBold': require('./fonts/NotoSansThai_SemiCondensed-ExtraBold.ttf'),
    'NotoSansThai_SemiCondensed-ExtraLight': require('./fonts/NotoSansThai_SemiCondensed-ExtraLight.ttf'),
    'NotoSansThai_SemiCondensed-Light': require('./fonts/NotoSansThai_SemiCondensed-Light.ttf'),
    'NotoSansThai_SemiCondensed-Medium': require('./fonts/NotoSansThai_SemiCondensed-Medium.ttf'),
    'NotoSansThai_SemiCondensed-Regular': require('./fonts/NotoSansThai_SemiCondensed-Regular.ttf'),
    'NotoSansThai_SemiCondensed-SemiBold': require('./fonts/NotoSansThai_SemiCondensed-SemiBold.ttf'),
    'NotoSansThai_SemiCondensed-Thin': require('./fonts/NotoSansThai_SemiCondensed-Thin.ttf'),
    'NotoSansThai-Black': require('./fonts/NotoSansThai-Black.ttf'),
    'NotoSansThai-Bold': require('./fonts/NotoSansThai-Bold.ttf'),
    'NotoSansThai-ExtraBold': require('./fonts/NotoSansThai-ExtraBold.ttf'),
    'NotoSansThai-ExtraLight': require('./fonts/NotoSansThai-ExtraLight.ttf'),
    'NotoSansThai-Light': require('./fonts/NotoSansThai-Light.ttf'),
    'NotoSansThai-Medium': require('./fonts/NotoSansThai-Medium.ttf'),
    'NotoSansThai-Regular': require('./fonts/NotoSansThai-Regular.ttf'),
    'NotoSansThai-SemiBold': require('./fonts/NotoSansThai-SemiBold.ttf'),
    'NotoSansThai-Thin': require('./fonts/NotoSansThai-Thin.ttf'),
    ////////////////////////////////////////////////////////////////
    'Poppins-Black': require('./fonts/Poppins-Black.ttf'),
    'Poppins-BlackItalic': require('./fonts/Poppins-BlackItalic.ttf'),
    'Poppins-Bold': require('./fonts/Poppins-Bold.ttf'),
    'Poppins-BoldItalic': require('./fonts/Poppins-BoldItalic.ttf'),
    'Poppins-ExtraBold': require('./fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraBoldItalic': require('./fonts/Poppins-ExtraBoldItalic.ttf'),
    'Poppins-ExtraLight': require('./fonts/Poppins-ExtraLight.ttf'),
    'Poppins-ExtraLightItalic': require('./fonts/Poppins-ExtraLightItalic.ttf'),
    'Poppins-Italic': require('./fonts/Poppins-Italic.ttf'),
    'Poppins-Light': require('./fonts/Poppins-Light.ttf'),
    'Poppins-LightItalic': require('./fonts/Poppins-LightItalic.ttf'),
    'Poppins-Medium': require('./fonts/Poppins-Medium.ttf'),
    'Poppins-MediumItalic': require('./fonts/Poppins-MediumItalic.ttf'),
    'Poppins-Regular': require('./fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./fonts/Poppins-SemiBold.ttf'),
    'Poppins-SemiBoldItalic': require('./fonts/Poppins-SemiBoldItalic.ttf'),
    'Poppins-Thin': require('./fonts/Poppins-Thin.ttf'),
    'Poppins-ThinItalic': require('./fonts/Poppins-ThinItalic.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <FavoriteJobProvider>
        <TabBarProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
              <Stack.Screen
                name="Main"
                options={{ headerShown: false }}
              >
                {({ navigation }) => {
                  if (currentTab === 1) {
                    return <TabNavigator1 navigation={navigation} setCurrentTab={setCurrentTab} />;
                  } else if (currentTab === 2) {
                    return <TabNavigator2 navigation={navigation} setCurrentTab={setCurrentTab} />;
                  }
                }}
              </Stack.Screen>
              <Stack.Screen
                name="Welcome"
                options={{ headerShown: false }}
              >
                {(props) => <Welcome {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
              >
                {(props) => <Login {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Login1"
                options={{ headerShown: false }}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <Login1 {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="SignUpScreen"
                options={{ headerShown: false }}
              >
                {(props) => <SignUpScreen {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="SignUpScreen1"
                options={{ headerShown: false }}
              >
                {(props) => <SignUpScreen1 {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Map"
                options={{ headerShown: false }}
              >
                {(props) => <Map {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Alternate"
                options={{ headerShown: false }}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <Alternate {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="RegisterProfile"
                options={{ headerShown: false }}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <RegisterProfile {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Advertise"
                options={({ navigation }) => ({ 
                  headerShown: true,
                  title: 'ลงโฆษณา',
                  headerBackTitle: 'Back',
                  headerTintColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Sarabun-Medium',
                    fontSize: 13,
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
                })}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <Advertise {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Advertisingprocess"
                options={({ navigation }) => ({ 
                  headerShown: true,
                  title: 'ลงโฆษณา',
                  headerBackTitle: 'Back',
                  headerTintColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Sarabun-Medium',
                    fontSize: 13,
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
                })}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <Advertisingprocess {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Template"
                options={({ navigation }) => ({ 
                  headerShown: true,
                  title: 'เทมเพลต',
                  headerBackTitle: 'Back',
                  headerTintColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Sarabun-Medium',
                    fontSize: 13,
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
                })}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <Template {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Notification"
                options={({ navigation }) => ({
                  headerShown: true,
                  title: 'การแจ้งเตือน',
                  headerBackTitle: 'Back',
                  headerTintColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Sarabun-Medium',
                    fontSize: 13,
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
                  headerRight: () => (
                    <Ionicons
                      name="settings-outline" 
                      size={24}
                      color="#000"
                      style={{ marginRight: 10 }}
                      onPress={() => console.log('Right icon pressed')} 
                    />
                  ),
                })}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <Notification {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Personald่"
                options={({ navigation }) => ({ 
                  headerShown: true,
                  title: 'โปรไฟล์คนหางาน',
                  headerBackTitle: 'Back',
                  headerTintColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Sarabun-Medium',
                    fontSize: 13,
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
                })}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <Personald่ {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="MoreTemplate"
                options={({ navigation }) => ({
                  headerShown: true,
                  title: 'เทมเพลต',
                  headerBackTitle: 'Back',
                  headerTintColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Sarabun-Medium',
                    fontSize: 13,
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
                })}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <MoreTemplate {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="NewTemplate"
                options={({ navigation }) => ({ 
                  headerShown: true,
                  title: 'เทมเพลต',
                  headerBackTitle: 'Back',
                  headerTintColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Sarabun-Medium',
                    fontSize: 13,
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
                })}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <NewTemplate {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="MenuAdvertise"
                options={({ navigation }) => ({ 
                  headerShown: true,
                  title: 'เทมเพลต',
                  headerBackTitle: 'Back',
                  headerTintColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Sarabun-Medium',
                    fontSize: 13,
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
                })}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <MenuAdvertise {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="PackageV1"
                options={({ navigation }) => ({ 
                  headerShown: true,
                  title: 'รายละเอียดแพ็กเกจ',
                  headerBackTitle: 'Back',
                  headerTintColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Sarabun-Medium',
                    fontSize: 13,
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
                })}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <PackageV1 {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Resume"
                options={({ navigation }) => ({ 
                  headerShown: true,
                  title: 'เรซูเม่',
                  headerBackTitle: 'Back',
                  headerTintColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Sarabun-Medium',
                    fontSize: 13,
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
                })}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <Resume {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="PackageV2"
                options={({ navigation }) => ({ 
                  headerShown: true,
                  title: 'รายละเอียดแพ็กเกจ',
                  headerBackTitle: 'Back',
                  headerTintColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Sarabun-Medium',
                    fontSize: 13,
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
                })}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <PackageV2 {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Promotiondetails"
                options={({ navigation }) => ({ 
                  headerShown: true,
                  title: 'รายละเอียด',
                  headerBackTitle: 'Back',
                  headerTintColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Sarabun-Medium',
                    fontSize: 13,
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
                })}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <Promotiondetails {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Promotionresults"
                options={({ navigation }) => ({ 
                  headerShown: true,
                  title: 'รายละเอียด',
                  headerBackTitle: 'Back',
                  headerTintColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Sarabun-Medium',
                    fontSize: 13,
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
                })}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <Promotionresults {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Workingprofile"
                options={({ navigation }) => ({
                  headerShown: true,
                  title: 'รายละเอียดบริษัท',
                  headerBackTitle: 'Back',
                  headerTintColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Sarabun-Medium',
                    fontSize: 13,
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
                  headerRight: () => (
                    <Ionicons
                      name="arrow-redo-outline" 
                      size={24}
                      color="#000"
                      style={{ marginRight: 15 }}
                    />
                  ),
                })}
                initialParams={{ setCurrentTab }}
              >
                {(props) => <Workingprofile {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>

              <Stack.Screen
                name="ForgetPassword"
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
                  headerTitle: 'รายละเอียดงาน',
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
                {(props) => <ForgetPassword {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="ResetPassword"
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
                  headerTitle: 'รายละเอียดงาน',
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
                {(props) => <ResetPassword {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="JobDetailsScreen"
                options={{ headerShown: false }}
              >
                {(props) => <JobDetailsScreen {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Filter"
                options={{ headerShown: false }}
              >
                {(props) => <Filter {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>

              <Stack.Screen
                name="DetailsJob"
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
                  headerTitle: 'รายละเอียดงาน',
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
                {(props) => <DetailsJob {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="SwitchAccounts"
                options={{ headerShown: false }}
              >
                {(props) => <SwitchAccounts {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Profile5"
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
                  headerTitle: 'โปรไฟล์คนหางาน',
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
                {(props) => <Profile5 {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="JobSeekerProfile"
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
                  headerRight: () => (
                    <Ionicons
                      name="settings-outline" 
                      size={24}
                      color="black"
                      style={{ marginRight: 20 }}
                      onPress={() => alert('Settings pressed')} 
                    />
                  ),
                  headerTitle: 'โปรไฟล์คนหางาน',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    color: '#6D6D6D',
                    fontSize: 16,
                    fontFamily: 'Sarabun-ExtraBold',
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
                {(props) => <JobSeekerProfile {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>

              <Stack.Screen
                name="Warn"
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
                  headerTitle: 'การแจ้งเตือน',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    color: '#6D6D6D',
                    fontSize: 16,
                    fontFamily: 'Sarabun-ExtraBold'
                  },
                  headerStyle: {
                    borderBottomWidth: 0,
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                  },
                  headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                      <Ionicons
                        name="settings-outline"
                        size={24}
                        color="black"
                        style={{ marginRight: 15 }}
                      />
                    </TouchableOpacity>
                  ),
                })}
              >
                {(props) => <Warn {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Process2"
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
                  headerTitle: 'ขั้นตอนที่ 2 อัปโหลดเอกสาร',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    color: '#6D6D6D',
                    fontSize: 16,
                    fontFamily: 'Sarabun-ExtraBold'
                  },
                  headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#E6D7CF',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                  },
                })}
              >
                {(props) => <Process2 {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Addhistory"
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
                  headerTitle: 'โปรไฟล์คนหางาน',
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
                {(props) => <Addhistory {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="CheckJob"
                options={{ headerShown: false }}
              >
                {(props) => <CheckJob {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Profile2"
                options={{ headerShown: false }}
              >
                {(props) => <Profile2 {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Profile3"
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
                  headerTitle: 'เรซูเม่',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    color: '#6D6D6D',
                    fontSize: 16,
                    fontFamily: 'Sarabun-ExtraBold'
                  },
                  headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#E6D7CF',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                  },
                })}
              >
                {(props) => <Profile3 {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Profile4"
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
                  headerTitle: 'เรซูเม่ (แก้ไข)',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    color: '#6D6D6D',
                    fontSize: 16,
                    fontFamily: 'Sarabun-ExtraBold'
                  },
                  headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#E6D7CF',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                  },
                })}
              >
                {(props) => <Profile4 {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Profile"
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
                  headerTitle: 'ภาพรวม (Dashboard)',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    color: '#6D6D6D',
                    fontSize: 16,
                    fontFamily: 'Sarabun-ExtraBold'
                  },
                  headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#E6D7CF',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                  },
                })}
              >
                {(props) => <Profile {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="ApplicationDetails"
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
                  headerTitle: 'ขั้นตอนที่ 1 กรอกใบสมัคร',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    color: '#6D6D6D',
                    fontSize: 16,
                    fontFamily: 'Sarabun-ExtraBold'
                  },
                  headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#E6D7CF',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                  },
                })}
              >
                {(props) => <ApplicationDetails {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Fillter"
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
                  headerTitle: 'ตัวกรองทั้งหมด',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    color: '#6D6D6D',
                    fontSize: 16,
                    fontFamily: 'Sarabun-ExtraBold'
                  },
                  headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#F2EBE5',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                  },
                })}
              >
                {(props) => <Fillter {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="ChatScreen"
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
                  headerTitle: 'แขท',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    color: '#6D6D6D',
                    fontSize: 16,
                    fontFamily: 'Sarabun-ExtraBold'
                  },
                  headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#E6D7CF',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                  },
                })}
              >
                {(props) => <ChatScreen {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="Personalrecord"
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
                  headerTitle: 'ภาพรวม (Dashboard)',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    color: '#6D6D6D',
                    fontSize: 16,
                    fontFamily: 'Sarabun-ExtraBold'
                  },
                  headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#E6D7CF',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                  },
                })}
              >
                {(props) => <Personalrecord {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
              <Stack.Screen
                name="JobDetails"
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
                  headerRight: () => (
                    <Ionicons
                      name="arrow-redo-outline"
                      size={24}
                      color="#6D6D6D"
                      style={{ marginRight: 20 }}
                      onPress={() => {
                        Share.share({
                          message: 'แชรเลย!!',
                        });
                      }}
                    />
                  ),
                  headerTitle: 'รายละเอียกงาน',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    color: '#6D6D6D',
                    fontSize: 16,
                    fontFamily: 'Sarabun-ExtraBold'
                  },
                  headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#E6D7CF',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                  },
                })}
              >
                {(props) => <JobDetails {...props} setCurrentTab={setCurrentTab} />}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </TabBarProvider>
      </FavoriteJobProvider>
    </AuthProvider>
  );
}