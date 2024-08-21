import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import React, {FC, useEffect} from 'react';
import {Colors} from '@utils/Constants';
import {screenHeigh, screenWidth} from '@utils/Scaling';
import logo from '@assets/images/splash_logo.jpeg';
import GeoLocation from '@react-native-community/geolocation';
import {useAuthStore} from '@state/authStore';
import {tokenStorage} from '@state/storage';
import {resetAndNavigate} from '@utils/NavigationUtils';

GeoLocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'always',
  enableBackgroundLocationUpdates: true,
  locationProvider: 'auto',
});

const SplashScreen: FC = () => {
  const {user, setUser} = useAuthStore();

  const tokenCheck = async () => {
    const accessToken = tokenStorage.getString('accessToken') as string;
    const refeshToken = tokenStorage.getString('refeshToken') as string;

    if (accessToken) {
    }

    resetAndNavigate('CustomerLogin');
    return false;
  };

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        GeoLocation.requestAuthorization();
        tokenCheck();
      } catch (error) {
        Alert.alert(
          'Sorry blinkit needs location service to give you better exprience',
        );
      }
    };
    const timeoutId = setTimeout(fetchUserLocation, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logoImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: screenHeigh * 0.7,
    width: screenWidth * 0.7,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
