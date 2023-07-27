import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,PermissionsAndroid, Platform  } from 'react-native';
import Geolocation from "@react-native-community/geolocation";

const HomeBox = () => {
  const [locationData, setLocationData] = useState(null);

  // 위치 권한 요청 함수
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "App needs access to your location.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // 권한이 허용되면 위치 정보를 가져오도록 함수 호출
          getCurrentLocation();
        } else {
          console.log("Location permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    } else if (Platform.OS === 'ios') {
      console.log("iOS location permission should be handled separately");
    }
  };

  // 컴포넌트가 마운트될 때 위치 권한 요청
  useEffect(() => {
    requestLocationPermission();
  }, []);

  // 위치 정보를 가져오는 함수
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        // 위치 정보를 state에 저장
        setLocationData(position);
      },
      (error) => {
        console.log("Error getting location:", error);
      }
    );
  };

  return(
    <>
      <View style={styles.contain}>
        <View style={styles.locationContainer}>
          {locationData && (
            <>
              <Text>위도: {locationData.coords.latitude}</Text>
              <Text>경도: {locationData.coords.longitude}</Text>
            </>
          )}
        </View>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  contain : {
    height: 100,
    backgroundColor: 'skyblue', 
    borderRadius: 20,
  },
  locationContainer: {
    padding: 10,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 5,
  },
});

export default HomeBox;