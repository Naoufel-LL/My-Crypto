import {React,useState,useEffect} from 'react'
import axios from 'axios';
import { StyleSheet,Text,View,Image, TouchableOpacity, Button, FlatList, ScrollView, TextInput,ActivityIndicator ,StatusBar} from 'react-native';
import CoinItem from '../components/CoinItem';
import Colors from '../constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome'
export default function Cryptos({navigation}) {
  const [data,setData] = useState([])
  const [name,setName] = useState('')
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false")
      .then(res => {setData(res.data)
        setLoading(true)
        console.log(data)
      })
      .catch(err => console.error(err));
  },[])
   
  let filtred_data = data.filter((data)=>{
    let coin_name = data.name.toUpperCase();
    return coin_name.indexOf(name) != -1
  })
  console.log(name)
  return (
    
   <ScrollView  style={{marginTop:0,backgroundColor:Colors.white}}>
        {navigation.setOptions({ title: `Top 250 Cryptos`})}

    <View>
    <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />

    <TextInput         underlineColorAndroid="transparent"
 onChangeText={(text)=>{setName(text.toUpperCase())}}  style={{height:50,width:'90%',backgroundColor:Colors.white,justifyContent:'center',flex:1,alignItems:'center',margin:20,borderWidth:1,borderRadius:20,padding:15,borderColor:Colors.primary}} placeholder="Enter Coin Name" ></TextInput>
    </View>
    {
      !loading ?  <ActivityIndicator size={40} color={Colors.primary}></ActivityIndicator> :
      <View>
      {filtred_data?.map((coin)=><TouchableOpacity  onPress={()=>{
        navigation.navigate('CryptoScreen',{id:coin.id,prc:coin.price_change_percentage_24h,tv:coin.market_cap,high:coin.high_24h,low:coin.low_24h})
            }} key={coin.id}><CoinItem key={coin.id} coin={coin}></CoinItem></TouchableOpacity>)}
      </View>
    }
   </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
     
    },
  });