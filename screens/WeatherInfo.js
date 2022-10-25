/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import SearchWeather from './SearchWeather';

const WeatherInfo = ({ weatherData, fetchWeatherData }) => {
    const {
        name,
        weather: [{ icon, description }],
        visibility,
        main: { temp, humidity, feels_like },
        wind: { speed },
        sys: { sunrise, sunset },



    } = weatherData;
    return (
        <ScrollView showsVerticalScrollIndicator = {false} >
        <SafeAreaView style={styles.container}>
            <SearchWeather fetchWeatherData={fetchWeatherData}/>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>
                    {name}
                </Text>
            </View>
            <View style={styles.logoView}>
                <Image style={styles.logoImage}
                    source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
                />
                <Text style={styles.tempText}>
                    {temp}°K
                </Text>
            </View>
            <Text
                style={styles.descriptionText}>{description}</Text>
                {/* //Extra information */}
                
            <View style={styles.extraInfoContainer}>
                <TouchableOpacity>
                <View style={styles.extraInfo}>
                    <Image style={styles.extraInfoIcon}
                        source={require('../assets/images/temp.png')}
                    />
                    <Text style={styles.extraInfoText}>{feels_like}°K </Text>
                    <Text style={styles.extraInfoText}>Feels like </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.extraInfo}>
                    <Image style={styles.extraInfoIcon}
                        source={require('../assets/images/humidity.png')}
                    />
                    <Text style={styles.extraInfoText}>{humidity}% </Text>
                    <Text style={styles.extraInfoText}>Humidity</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.extraInfoContainer}>
                <TouchableOpacity>
                <View style={styles.extraInfo}>
                    <Image style={styles.extraInfoIcon}
                        source={require('../assets/images/visibility.png')}
                    />
                    <Text style={styles.extraInfoText}>{visibility} </Text>
                    <Text style={styles.extraInfoText}>Visibility</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.extraInfo}>
                    <Image style={styles.extraInfoIcon}
                        source={require('../assets/images/windspeed.png')}
                    />
                    <Text style={styles.extraInfoText}>{speed} m/s </Text>
                    <Text style={styles.extraInfoText}>Wind Speed</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.extraInfoContainer}>
                <TouchableOpacity>
                <View style={styles.extraInfo}>
                    <Image style={styles.extraInfoIcon}
                        source={require('../assets/images/sunrise.png')}
                    />
                    <Text style={styles.extraInfoText}>{new Date(sunrise * 1000).toLocaleString()} </Text>
                    <Text style={styles.extraInfoText}>Sunrise </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.extraInfo}>
                    <Image style={styles.extraInfoIcon}
                        source={require('../assets/images/sunset.webp')}
                    />
                    <Text style={styles.extraInfoText}>{new Date(sunset * 1000).toLocaleString()}</Text>
                    <Text style={styles.extraInfoText}>Sunset</Text>
                </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
    },
    title: {
        fontSize: heightPercentageToDP('6%'),
        marginTop: heightPercentageToDP('2.5%'),
        color: '#820405',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tempText: {
        fontSize: heightPercentageToDP('4%'),
        //marginTop: heightPercentageToDP('2.5%'),
        color: '#820405',
        fontWeight: '500',
        //  textAlign: 'center',
    },
    logoView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    descriptionText: {
        textAlign: 'center',
        fontSize: heightPercentageToDP('5%'),
        color: '#fff',
        fontWeight: '700',
        marginTop:-10,

    },
    extraInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 7,
    },
    extraInfo: {
        width: Dimensions.get('screen').width / 2.5,
        borderColor:'#820405',
        borderWidth:3,
        backgroundColor: '#c98f8f',
        borderRadius: 25,
        padding: 10,
        justifyContent: 'center',
    },
    extraInfoIcon: {
        width: 50,
        height: 50,
        borderRadius: 20,
        alignSelf: 'center',

    },
    extraInfoText: {
        fontSize: heightPercentageToDP('2%'),
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center',

    },

});
export default WeatherInfo;
