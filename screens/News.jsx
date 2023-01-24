import {React,useEffect,useState} from 'react'
import {View,Text,TouchableOpacity, ScrollView, FlatList,ActivityIndicator,StatusBar} from 'react-native'
import axios from 'axios'
import NewsItem from '../components/NewsItem'
import Colors from '../constants/Colors'
export default function News({navigation}) {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        axios
          .get("https://min-api.cryptocompare.com/data/v2/news/")
          .then(res => {setData(res.data.Data) ;setLoading(true)} )
          .catch(err => console.error(err));
    },[])
    console.log(data)
  return (
   <View >
                  <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
     {!loading ? <ActivityIndicator size={40} color={Colors.primary}></ActivityIndicator> : <ScrollView style={{marginTop:15}}>
    {data.map((data)=>{
       return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('NewsPage',{data:data})}>
          <NewsItem key={data.id} data={data}/>
          </TouchableOpacity>
            </View>
       )
  })}
   </ScrollView>}
   </View>
  )
}
