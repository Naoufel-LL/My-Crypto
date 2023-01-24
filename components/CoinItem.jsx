import React from 'react'
import { StyleSheet,Text,View,Image, TouchableOpacity, Button,ActivityIndicator } from 'react-native';
import Colors from '../constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome'
export default function CoinItem({coin}) {
  const img = coin.image
  return (
     <View style={styles.coin}>
        <Image resizeMode='contain'  style={{width: 40, height: 50}} source={{uri:img}}></Image>
        <View style={styles.coin_col}>
          <Text style={styles.text}>{coin?.symbol.toUpperCase()}<Text style={{color:'#9c9c9c'}}>/USDT</Text></Text>
          <Text>#{coin.market_cap_rank} {coin?.name}</Text> 

           </View>
           <View style={styles.coin_col}>
            <Text style={styles.text}>{coin?.current_price}$</Text>
            <View>
           <Text style={{backgroundColor: coin?.price_change_percentage_24h > 0? '#007a20' : '#e30000',padding:6,width:75,borderRadius:5,marginTop:5}}>{coin?.price_change_percentage_24h > 0 ? <FontAwesome color='#fff' size={16} name='caret-up'> {coin?.price_change_percentage_24h?.toFixed(2)}%</FontAwesome> : <FontAwesome color="#fff" size={16} name='caret-down'> {coin.price_change_percentage_24h?.toFixed(2)}% </FontAwesome>}</Text>
            </View>
   </View>
      </View> )
}
const styles = StyleSheet.create({
   coin:{
    width:'100%',
      flexDirection:'row',
      justifyContent:"space-around",
      paddingLeft:10,
      alignItems:'center',
      backgroundColor:Colors.white,
      borderRadius:5,
      margin:0.5,
      elevation: 20,
      shadowColor: '#a7a7a7',
      shadowOffset:5,
      
   },
   coin_col:{
     flexDirection:'column',
     padding:20
   },
   text:{
    fontSize:16,
    fontFamily:'sans-serif',
    fontWeight:'700'

   }
})