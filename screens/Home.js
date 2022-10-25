/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ImageBackground, Alert, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import WeatherInfo from './WeatherInfo';
// const image3 = require('../assets/images/shazam4.jpg');
const API_KEYS = '47d779e809e4f8169139fae8ac7f1ca4';
const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  //fetch weather data by this function
  const fetchWeatherData = async (cityName) => {
    try {
      setLoaded(false);
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}`);
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);
        setLoaded(true);
      }
      else {
        setWeatherData(null);
      }
      setLoaded(true);
    }
    catch (error) {
      Alert.alert('Error', error.message);
    }

  };
  //remember the name of my city
  useEffect(() => {
    fetchWeatherData('Thar');
  }, []);
  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color="red" />
        </View>

    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <Text style={styles.textStyle}>⚡Shazam Weather</Text>
      </View>
      <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2ee9d',
    flex: 1,
  },
  backGroundImage: {
    flex: 1,
    blurRadius: 2,
  },
  textStyle: {
    color: '#ffd44a',
    fontSize: hp('4%'),
    fontWeight: 'bold',
  },
  headerTitle: {
    height: hp('10%'),
    backgroundColor: '#820405',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
