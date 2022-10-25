/* eslint-disable prettier/prettier */
import {View, TouchableOpacity, TextInput, Image, StyleSheet, Dimensions} from 'react-native';
import React,{useState} from 'react';

const SearchWeather = ({fetchWeatherData}) => {
    const [cityName, setCityName] = useState(' ');
  return (
    <View style={styles.container}>
        <TextInput
        placeholder="Search City"
        value={cityName}
        onChangeText={(text) => setCityName(text)}
        />
<TouchableOpacity
onPress={()=> fetchWeatherData(cityName)}
>
<Image
        source={ require('../assets/images/search.png')}
        style={{
            width:20,
            height:20,
        }}
        />
</TouchableOpacity>
       


            </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width: Dimensions.get('screen').width - 30,
        borderRadius:30,
        borderWidth:5,
        borderColor:'#820405',
        marginTop:10,
        paddingHorizontal:20,
        marginHorizontal:10,
        backgroundColor:'#c98f8f',

    },
});
export default SearchWeather;
