import React from 'react';
import { Share } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTab } from '../components/TabContext';

// Tab Navigators
import TabNavigator1 from './TabNavigator1';
import TabNavigator2 from './TabNavigator2';

// Auth Screens (from screens/Auth/)
import Welcome from '../screens/Auth/Welcome';
import Login from '../screens/Auth/LoginScreen';
import Login1 from '../screens/Auth/LoginScreen1';
import SignUpScreen from '../screens/Auth/SignupScreen';
import SignUpScreen1 from '../screens/Auth/SignupScreen1';
import Alternate from '../screens/Auth/Alternate';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import ResetPassword from '../screens/Auth/ResetPassword';

// Other Screens
import RegisterProfile from '../screens/Tab2Profile/RegisterProfile';
import Map from '../screens/Tab1User/add-on/Map';
import Advertise from '../screens/Tab2Profile/advertise';
import Advertisingprocess from '../screens/Tab2Profile/Advertisingprocess';
import Template from '../screens/Tab2Profile/Template';
import Notification from '../screens/Tab2Profile/Notification';
import Personald่ from '../screens/Tab2Profile/Personald่';
import MoreTemplate from '../screens/Tab2Profile/MoreTemplate';
import NewTemplate from '../screens/Tab2Profile/NewTemplate';
import MenuAdvertise from '../screens/Tab2Profile/MenuAdvertise';
import PackageV1 from '../screens/Tab2Profile/PackageV1';
import Resume from '../screens/Tab2Profile/Resume';
import PackageV2 from '../screens/Tab2Profile/PackageV2';
import Promotiondetails from '../screens/Tab2Profile/Promotiondetails';
import Promotionresults from '../screens/Tab2Profile/Promotionresults';
import Workingprofile from '../screens/Tab2Profile/Workingprofile';
import JobDetailsScreen from '../screens/Tab1User/add-on/JobDetailsScreen';
import Filter from '../screens/Tab1User/add-on/Filter';
import DetailsJob from '../screens/Tab2Profile/DetailsJob';
import SwitchAccounts from '../screens/Tab1User/add-on/SwitchAccounts';
import Profile5 from '../screens/Tab1User/add-on/Profile5';
import JobSeekerProfile from '../screens/Tab2Profile/JobSeekerProfile';
import Warn from '../screens/Tab1User/add-on/Warn';
import Process2 from '../screens/Tab1User/add-on/Process2';
import Addhistory from '../screens/Tab1User/add-on/Addhistory';
import CheckJob from '../screens/Tab1User/add-on/CheckJob';
import Profile2 from '../screens/Tab1User/add-on/Profile2';
import Profile3 from '../screens/Tab1User/add-on/Profile3';
import Profile4 from '../screens/Tab1User/add-on/Profile4';
import Profile from '../screens/Tab1User/add-on/Profile';
import ApplicationDetails from '../screens/Tab1User/add-on/ApplicationDetails';
import Fillter from '../screens/Tab1User/add-on/Fillter';
import ChatScreen from '../screens/Tab1User/add-on/ChatScreen';
import Personalrecord from '../screens/Tab1User/add-on/Personalrecord';
import JobDetails from '../screens/Tab1User/add-on/JobDetails';

const Stack = createStackNavigator();

export default function RootNavigator() {
  const { currentTab } = useTab();

  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Main" options={{ headerShown: false }}>
        {({ navigation }) => {
          if (currentTab === 1) {
            return <TabNavigator1 navigation={navigation} />;
          } else if (currentTab === 2) {
            return <TabNavigator2 navigation={navigation} />;
          }
          return null;
        }}
      </Stack.Screen>

      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Login1" component={Login1} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpScreen1" component={SignUpScreen1} options={{ headerShown: false }} />
      <Stack.Screen name="Map" component={Map} options={{ headerShown: false }} />
      <Stack.Screen name="Alternate" component={Alternate} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterProfile" component={RegisterProfile} options={{ headerShown: false }} />

      <Stack.Screen
        name="Advertise"
        component={Advertise}
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
      />

      <Stack.Screen
        name="Advertisingprocess"
        component={Advertisingprocess}
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
      />

      <Stack.Screen
        name="Template"
        component={Template}
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
      />

      <Stack.Screen
        name="Notification"
        component={Notification}
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
      />

      <Stack.Screen
        name="Personald่"
        component={Personald่}
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
      />

      <Stack.Screen
        name="MoreTemplate"
        component={MoreTemplate}
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
      />

      <Stack.Screen
        name="NewTemplate"
        component={NewTemplate}
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
      />

      <Stack.Screen
        name="MenuAdvertise"
        component={MenuAdvertise}
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
      />

      <Stack.Screen
        name="PackageV1"
        component={PackageV1}
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
      />

      <Stack.Screen
        name="Resume"
        component={Resume}
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
      />

      <Stack.Screen
        name="PackageV2"
        component={PackageV2}
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
      />

      <Stack.Screen
        name="Promotiondetails"
        component={Promotiondetails}
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
      />

      <Stack.Screen
        name="Promotionresults"
        component={Promotionresults}
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
      />

      <Stack.Screen
        name="Workingprofile"
        component={Workingprofile}
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
      />

      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
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
      />

      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
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
      />

      <Stack.Screen name="JobDetailsScreen" component={JobDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Filter" component={Filter} options={{ headerShown: false }} />

      <Stack.Screen
        name="DetailsJob"
        component={DetailsJob}
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
      />

      <Stack.Screen name="SwitchAccounts" component={SwitchAccounts} options={{ headerShown: false }} />

      <Stack.Screen
        name="Profile5"
        component={Profile5}
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
      />

      <Stack.Screen
        name="JobSeekerProfile"
        component={JobSeekerProfile}
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
      />

      <Stack.Screen
        name="Warn"
        component={Warn}
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
      />

      <Stack.Screen
        name="Process2"
        component={Process2}
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
      />

      <Stack.Screen
        name="Addhistory"
        component={Addhistory}
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
      />

      <Stack.Screen name="CheckJob" component={CheckJob} options={{ headerShown: false }} />
      <Stack.Screen name="Profile2" component={Profile2} options={{ headerShown: false }} />

      <Stack.Screen
        name="Profile3"
        component={Profile3}
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
      />

      <Stack.Screen
        name="Profile4"
        component={Profile4}
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
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
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
      />

      <Stack.Screen
        name="ApplicationDetails"
        component={ApplicationDetails}
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
      />

      <Stack.Screen
        name="Fillter"
        component={Fillter}
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
      />

      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
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
      />

      <Stack.Screen
        name="Personalrecord"
        component={Personalrecord}
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
      />

      <Stack.Screen
        name="JobDetails"
        component={JobDetails}
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
      />
    </Stack.Navigator>
  );
}
