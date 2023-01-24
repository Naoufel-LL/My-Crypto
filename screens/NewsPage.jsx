import {View,Text,Image,Button,StyleSheet,ScrollView,StatusBar} from 'react-native'
import {React} from 'react'
import * as WebBrowser from 'expo-web-browser';
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
import Colors from '../constants/Colors';
export default function NewsPage({route,navigation}) {
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
    const {data} = route.params
  if(fontsLoaded){
    return (
      <ScrollView>
              <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
         <View>
          <Image resizeMode='cover' style={{width:'100%',height:300}} source={{uri:data.imageurl}}></Image>
         </View>
         <View style={{padding:10}}>
          <Text style={{fontFamily:'Poppins_300Light',fontSize:16,marginVertical:11}}> <Text style={{color:Colors.primary,fontFamily:'Poppins_500Medium',fontSize:18}}>Title :</Text> {data.title}</Text>
          <View ></View>
          <Text style={{fontFamily:'Poppins_300Light',fontSize:16,marginVertical:11}}><Text style={{color:Colors.primary,fontFamily:'Poppins_500Medium',fontSize:18}}>Desctiption :</Text> {data.body}</Text>
          <Text  style={{fontFamily:'Poppins_300Light',fontSize:16,marginVertical:11}}><Text style={{color:Colors.primary,fontFamily:'Poppins_500Medium',fontSize:18}}>Source :</Text> {data.source}</Text>
          <View style={{flexDirection:'row',marginVertical:10,flexWrap:'wrap'}}>
            <Text style={{fontFamily:'Poppins_300Light',fontSize:16,marginVertical:11}}><Text style={{color:Colors.primary,fontFamily:'Poppins_500Medium',fontSize:18}}>Tags : </Text>{data.tags}</Text>
          </View>
          <View style={{marginVertical:15}}>
          <Button
         color={Colors.primary} buttonStyle={styles.button}
          title="Open The Article with browser"
          onPress={() => WebBrowser.openBrowserAsync(`${data.url}`)}
        />
          </View>
          
         </View>
      </ScrollView>
    )
  }

}
const styles = StyleSheet.create({
  button:{
    paddingHorizontal:10,
     backgroundColor:Colors.primary,
     borderRadius:20
  },
})
