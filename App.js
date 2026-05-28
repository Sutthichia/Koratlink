import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { AuthProvider } from './components/AuthContext';
import { FavoriteJobProvider } from './components/FavoriteJobContext';
import { TabBarProvider } from './components/TabBarContext';
import { TabProvider } from './components/TabContext';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
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
          <TabProvider>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </TabProvider>
        </TabBarProvider>
      </FavoriteJobProvider>
    </AuthProvider>
  );
}