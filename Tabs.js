import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Cryptos from './screens/Cryptos'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import News from './screens/News'
import Colors from './constants/Colors'
export default function Tabs() {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign:'center',
        headerStyle: {
          backgroundColor: Colors.primary
       }, headerTitleStyle: {
        color:'#fff'
       },
         tabBarStyle:{
             paddingVertical:10,height:70
         },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Cryptos') {
              iconName = focused
                ? 'line-chart'
                : 'line-chart';
            } else if (route.name === 'News') {
              iconName = focused ? 'newspaper-o' : 'newspaper-o';
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName}  size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Cryptos" component={Cryptos}></Tab.Screen>
         <Tab.Screen name="News"  component={News} ></Tab.Screen>
         
    </Tab.Navigator>
  )
}
