import {React,useState,useEffect} from "react";
import {Text,View,StyleSheet,Dimensions,Image,ScrollView,ActivityIndicator, StatusBar} from 'react-native'
import axios from "axios";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { LineChart } from "react-native-chart-kit";
import Colors from "../constants/Colors";
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
export default function CryptoScreen({route,navigation}) {
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
 const {height,width} = Dimensions.get('window')
 const {id,prc,tv,low,high} = route.params;
 const url = 'https://api.coingecko.com/api/v3/coins/'+id
 const priceurl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=14&interval=daily`
 const [coin,setCoin]=useState([])
 const [prices,setPrices]=useState([])
 const [loading,setLoading]=useState(false)
const [decm,setDecm] = useState(2)
useEffect(()=>{
  axios.all([
    axios.get(url),
    axios.get(priceurl)])
    .then(axios.spread((data1,data2)=>{
       setCoin(data1.data)
       setPrices(data2.data)
       setLoading(true)
      if (data1.current_price < 0.01){
        setDecm(4)
      }
    }))
},[id])
 /*useEffect(()=>{
    axios
      .get(url)
      .then(res => setCoin(res.data))
      .catch(err => console.error(err));
 },[id])
 useEffect(()=>{
    axios
      .get(priceurl)
      .then(res => {
        setPrices(res.data)
        console.log(prices)
    },[id])
      .catch(err => console.error(err));
 },[id])*/
   if(!fontsLoaded){

   }else{
 return(
        <ScrollView>
              <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
         <View>
            <View>
  { !loading ? <ActivityIndicator style={{marginTop:40}} size={40} color={Colors.primary} /> :
   <View style={{justifyContent:'space-between',alignItems:'center',marginTop:20}}>
    {navigation.setOptions({ title: `${coin.name}  ${coin.market_data.current_price["usd"]}$`})}
    <View style={styles.coinheader}>
<Image resizeMode='contain'  style={{width: 60, height: 50}} source={{uri:coin.image["large"]}}></Image>
     <Text style={{color:Colors.white,fontFamily: 'Poppins_700Bold'}}> #{coin.market_cap_rank} {coin.name.toUpperCase()}</Text>
     <View>
           <Text style={{backgroundColor: prc > 0? '#007a20' : '#e30000',padding:6,width:75,borderRadius:5}}>{prc > 0 ? <FontAwesome color='#fff' size={16} name='caret-up'> {prc.toFixed(2)}%</FontAwesome> : <FontAwesome color="#fff" size={16} name='caret-down'> {prc.toFixed(2)}% </FontAwesome>}</Text>
            </View>
</View>
<Text style={{fontSize:20,padding:10,textAlign:'center',fontFamily: 'Poppins_700Bold'}}>{coin.name} Line Chart Last 14 Days</Text>
<Text style={{fontSize:14,padding:2,textAlign:'center',fontFamily: 'Poppins_700Bold'}}>{coin.last_updated}</Text>
  {coin.current_price < 0.01 ? setDecm(10) : null }
  <LineChart
  data={{
    labels: ["14", "13", "12", "11", "10","9","8","7","6","5","4","3","2","Today"],
    datasets: [
      {
        data: [
          prices.prices[0][1],
          prices.prices[1][1],
          prices.prices[2][1],
          prices.prices[3][1],
          prices.prices[4][1],
          prices.prices[5][1],
          prices.prices[6][1],
          prices.prices[7][1],
          prices.prices[8][1],
          prices.prices[9][1],
          prices.prices[10][1],
          prices.prices[11][1],
          prices.prices[12][1],
          prices.prices[13][1]
          
        ]
      }
    ]
  }}
  width={Dimensions.get("window").width} // from react-native
  height={320}
  yAxisLabel="$"
  yAxisSuffix=""
  yAxisInterval={1} // optional, defaults to 1
  chartConfig={{
    backgroundGradientFrom: Colors.primary,
    backgroundGradientTo: Colors.primary,
    decimalPlaces: decm, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 0
    },
    propsForDots: {
      r: "3",
      strokeWidth: "2",
      stroke: "white"
    }
  }}
  bezier
  style={{
    marginVertical: 8,
    borderRadius: 2
  }}
/>
<View style={{paddingHorizontal:20}}>
  {coin.categories && <Text style={{padding:10,fontSize:16,fontFamily: 'Poppins_300Light'}}><FontAwesome color={Colors.primary}  size={22} name="tag"></FontAwesome>   <Text style={{color:Colors.primary,fontFamily: 'Poppins_700Bold'}}>Categories :</Text> {coin.categories}</Text>}
   <Text style={{padding:10,fontSize:16,fontFamily: 'Poppins_300Light'}}><FontAwesome color={Colors.primary}  size={22} name="bitcoin"></FontAwesome>  <Text style={{color:Colors.primary,fontFamily: 'Poppins_700Bold'}}>Symbol :</Text> {coin.symbol.toUpperCase()}</Text>
   <Text style={{padding:10,fontSize:16,fontFamily: 'Poppins_300Light'}}><FontAwesome color={Colors.primary}  size={22} name="money"></FontAwesome>  <Text style={{color:Colors.primary,fontFamily: 'Poppins_700Bold'}}>Price :</Text> {coin.market_data.current_price["usd"]} $</Text>
   <Text style={{padding:10,fontSize:16,fontFamily: 'Poppins_300Light'}}><FontAwesome color={Colors.primary}  size={22} name="arrow-circle-o-up"></FontAwesome>  <Text style={{color:Colors.primary,fontFamily: 'Poppins_700Bold'}}>High Price in 24h :</Text> {high}$</Text>
   <Text style={{padding:10,fontSize:16,fontFamily: 'Poppins_300Light'}}><FontAwesome color={Colors.primary}  size={22} name="arrow-circle-o-down"></FontAwesome>  <Text style={{color:Colors.primary,fontFamily: 'Poppins_700Bold'}}>Low Price in 24h :</Text> {low}$</Text>
   <Text style={{padding:10,fontSize:16,fontFamily: 'Poppins_300Light'}}><FontAwesome color={Colors.primary}  size={22} name="smile-o"></FontAwesome>  <Text style={{color:Colors.primary,fontFamily: 'Poppins_700Bold'}}>Popularity :</Text>  #{coin.market_cap_rank}</Text>
   <Text style={{padding:10,fontSize:16,fontFamily: 'Poppins_300Light'}}><FontAwesome color={Colors.primary}  size={22} name="pie-chart"></FontAwesome>  <Text style={{color:Colors.primary,fontFamily: 'Poppins_700Bold'}}>Market Cap :</Text> {tv}</Text>
   {coin.links["homepage"][0] && <Text style={{padding:10,fontSize:16,fontFamily: 'Poppins_300Light',            
}}><FontAwesome color={Colors.primary}  size={22} name="google"></FontAwesome>  <Text style={{color:Colors.primary,fontFamily: 'Poppins_700Bold'}}>Website :</Text> {coin.links["homepage"][0]}</Text>}
    {coin.community_data.twitter_followers && <Text style={{padding:10,fontSize:16,fontFamily: 'Poppins_300Light'}}><FontAwesome color={Colors.primary}  size={22} name="twitter"></FontAwesome>  <Text style={{color:Colors.primary,fontFamily: 'Poppins_700Bold'}}>Twitter Followers :</Text> {coin.community_data.twitter_followers}</Text>}


         <View style={{padding:10,marginTop:15,color:Colors.white,backgroundColor:Colors.primary,borderRadius:20
  ,width:'99%',marginHorizontal:20,shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  
  elevation: 5,
  }}>
         <Text style={{color:Colors.white,fontFamily: 'Poppins_300Light',paddingVertical:10,fontSize:20}}>About {coin.name}</Text>
    <Text style={{fontSize:16,fontFamily: 'Poppins_300Light',color:Colors.white}}>
      {coin.description["en"]}
    </Text>
          </View>
  </View> 
</View>



  }
</View>
         </View>  
         </ScrollView>    
       )}
}
const styles = StyleSheet.create({
    coinheader:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
      elevation: 5,
        padding:20,
        flexDirection:'row',
          width:'80%',
          backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:"space-around",
        textAlign:'center',
        borderRadius:10
        
    },
    socials:{
      marginLeft:100,
     flexDirection:'row'
    }
})