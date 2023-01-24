import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Colors from './constants/Colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Cryptos from './screens/Cryptos';
import CryptoScreen from './screens/CryptoScreen';
import Tabs from './Tabs';
import NewsPage from './screens/NewsPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="CryptoScreen" component={CryptoScreen} options={{ headerStyle: {
              backgroundColor: Colors.primary
           },  headerTitleStyle: {
           color:'#fff'
          },headerTitleAlign:'center',titleStyle:{color:'white'},}}/>
        <Stack.Screen name="Cryptos" component={Tabs}  options={{ headerShown: false }}/>
        <Stack.Screen name="NewsPage" component={NewsPage} options={{ headerStyle: {
              backgroundColor: Colors.primary,color:'#fff'
           } ,titleStyle:{color:'white'},  headerTitleStyle: {
            color:'#fff',
          },headerTitleAlign:'center'}}/>
        
</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;