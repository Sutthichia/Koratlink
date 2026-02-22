import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ScreenC({ setCurrentTab }) { 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen A</Text>
     
      <Button 
        title="Switch Tab 3" 
        onPress={() => setCurrentTab(3)}
      /> 
    </View>
  );
}