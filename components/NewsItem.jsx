import React from "react";
import {View,Text,Image} from 'react-native'

import {
    useFonts,
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
  } from '@expo-google-fonts/poppins';

export default function NewsItem({data}){
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
      if(fontsLoaded){
        return(
            <View style={{flexDirection:'row',backgroundColor:'#fff',width:'95%',shadowColor: "#000",
            height:130,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            
            elevation: 5,
            borderRadius:10,marginVertical:3
            }}>
                <View>
                    <Image resizeMode="contain" source={{uri:data.imageurl}} style={{height:'100%',width:100,borderBottomLeftRadius:10,borderTopLeftRadius:10}}></Image>
                </View>
                <View style={{padding:10,flex:1,justifyContent:'center'}}>
                    <Text style={{fontFamily:'Poppins_600SemiBold',fontSize:14}}>{data.title}</Text>
                    <Text style={{fontFamily:'Poppins_300Light_Italic'}}>Source : {data.source}</Text>
                </View>
            </View>
        )
      }
    
}