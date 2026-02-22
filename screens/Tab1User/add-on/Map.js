import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text, Linking, Platform, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Savework() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const openMap = () => {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${13.214938559148894},${101.0569688134931}`;
    const label = 'ส่วนสัตว์เลื้อยคลาน';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 13.214938559148894,  
            longitude: 101.0569688134931, 
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: 13.214938559148894,
              longitude: 101.0569688134931
            }}
            title="ส่วนสัตว์เลื้อยคลาน"
          />
          <Polyline
            coordinates={[
              { latitude: 13.209768506728201, longitude: 101.05458016183835 },
              { latitude: 13.214938559148894, longitude: 101.0569688134931 },
            ]}
            strokeColor="#000"
            strokeWidth={3}
          />
        </MapView>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={openMap}>
        <Text style={styles.loginButtonText}>เปิดแผนที่</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  mapContainer: {
    width: 340,
    height: 140,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: 380,
    height: 280,
    marginLeft: -30,
    marginTop: -80,
  },
  loginButtonText: {
    fontFamily: 'Sarabun-Bold',
    fontSize: 14,
    color: '#FFFFFF'
  },
  loginButton: {
    backgroundColor: '#FFB472',
    paddingVertical: 12,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
  },
});