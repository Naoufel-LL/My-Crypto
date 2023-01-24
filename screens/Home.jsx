import React from 'react'
import Colors from '../constants/Colors';
import { useFonts ,Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic, } from '@expo-google-fonts/poppins';
  
import { StyleSheet,Text,View,Image, TouchableOpacity, Button, ImageBackground, Dimensions } from 'react-native';


export default function Home({navigation}) {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  const {height} = Dimensions.get('window')
  if(!fontsLoaded){
  }else{
    return (
      <View style={styles.container}>
          <ImageBackground style={{height:height/2,width:'100%',marginTop:20}} resizeMode='contain' source={require('../assets/draw.png')}></ImageBackground>
          <View style={styles.desc}>
          <Text style={styles.textBig}>WELCOME TO MY CRYPTO APP </Text>
          <Text style={styles.text}>This project was started so i can learn ReactNative.I used Coingecko Api for the data .Made By Naoufel Bahassoune</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Cryptos')}>
            <Text style={styles.buttontext}>Go To The App </Text>
          </TouchableOpacity>
    </View>
    )
  }
 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontFamily: 'Poppins_400Regular',
      backgroundColor: Colors.white,
      alignItems: 'center',
    },
    img:{
         width:'100%'
    },
    text:{
      fontFamily: 'Poppins_400Regular',
      textAlign:'left',
      color:'black',
      fontSize:16
    },
    desc:{
      fontFamily: 'Poppins_400Regular',
      padding:20,

    },
    button: {
      marginTop:'10%',
      alignItems: 'center',
      borderRadius:10,
      backgroundColor: Colors.primary,
      paddingBottom: 20,
      paddingTop:20,
      paddingLeft:80,
      paddingRight:80
    },
    buttontext:{
      color:"#fff",
      fontWeight:'500'
    },
    textBig:{
      fontFamily: 'Poppins_700Bold',
      fontSize:35,
      textAlign:'center',
      color:Colors.primary,
      marginBottom:15
    }
  });
  