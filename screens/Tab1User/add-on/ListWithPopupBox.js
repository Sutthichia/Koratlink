import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Slider from '@react-native-community/slider';

const CounterButton = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderPosition] = useState(new Animated.Value(0));

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
   
    Animated.timing(sliderPosition, {
      toValue: newValue,
      duration: 0, 
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={sliderValue}
          onValueChange={handleSliderChange}
          minimumTrackTintColor="#FF5733"

          maximumTrackTintColor="#D3D3D3"
          thumbTintColor="#FFC300"
        />
       
        <Animated.View style={[styles.valueContainer, {
          transform: [{
            translateX: sliderPosition.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 260], 
            })
          }]
        }]}>
          <Text style={styles.valueText}>{sliderValue.toFixed(0)} Km</Text>
        </Animated.View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    padding: 20,
  },
  sliderContainer: {
    position: 'relative', 
  },
  slider: {
    width: 300,
    height: 40,
    marginTop: 20,
  },
  valueContainer: {
    position: 'absolute',
    bottom: 40, 
    alignItems: 'center',
    zIndex: 1, 
  },
  valueText: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default CounterButton;
