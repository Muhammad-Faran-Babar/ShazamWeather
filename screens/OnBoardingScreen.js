/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
const image = require('../assets/images/shazam1.jpg');
const image2 = require('../assets/images/shazam1.jpg');
const image3 = require('../assets/images/shazam3.jpg');

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const onHome = () => {
    navigation.navigate('Home');
  };
  return (
     <Swiper style={styles.wrapper} showsButtons={false}>
     <View style={styles.slide1}>
      <Image
      source={image}
      style={styles.shadow} />
      <Text style={styles.text}>Shazam⚡ Weather</Text>
    </View>
     <View style={styles.slide2}>
    <Image
      source={image2}
      style={styles.shadow} />
      <Text style={styles.text}>Ask Shazam⚡</Text>
    </View>
    <View style={styles.slide3}>
    <Image
      source={image3}
      style={styles.shadow} />
      <View styles={styles.nextButton}>
        <TouchableOpacity style={styles.nextButtonTouch}
        onPress={onHome}
        >
        <Text style={{ fontSize:hp('4%'), color:'#ffd44a', fontWeight:'900'}}>⚡Enter city</Text>
        </TouchableOpacity>
      </View>
    </View>
   </Swiper>
  );
};

const styles = StyleSheet.create({
    wrapper: {},
    nextButtonTouch:{
      marginBottom:60,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#820405',
      paddingVertical: 8,
      paddingHorizontal: 19,
      borderRadius: 20,
      elevation: 2,
      shadowColor: '#820405',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
    },
    nextButton:{},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0b1c26',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#820405',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffd44a',
    },
    text: {
      color: '#fff',
      fontSize: hp('6%'),
      fontWeight: 'bold',
      marginBottom:60,
    },
    text2:{
      color: '#fff',
      fontSize: hp('3%'),
      fontWeight: 'bold',
      marginLeft:90,
    },
    shadow:{
      margin:20,
      borderColor:'#fff',
      borderWidth: 2,
      borderRadius:40,
      height: hp('70%'), // 70% of height device screen
      width: wp('80%') ,
       shadowColor: '#000',
       shadowOffset: {
            width: 10,
            height: 10,
          },
      shadowOpacity: 2.25,
      shadowRadius: 10,
      elevation: 10,
    },
  });
export default OnBoardingScreen;
