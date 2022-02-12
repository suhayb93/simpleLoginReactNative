import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import InfoPage from '../InfoPage/InfoPage';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet} from 'react-native';
import {bgSecondery} from '../../Style/GenralStyle'


const Tab = createBottomTabNavigator();
const MainLayout = ({route}: any) => {
  const {username} = route.params;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;


          if (route.name === 'Info') {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === 'Home') {
            iconName = focused ? "ellipsis-horizontal" : "ellipsis-horizontal-outline";
          } else if (route.name === 'About') {
            iconName = focused ? "cloud" : "cloud-outline";

          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#D9534F',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: bgSecondery,
          paddingBottom: 5,
          fontWeight: 'bold'
        },
        headerStyle: {
          backgroundColor: bgSecondery
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }

      })}
    >
      <Tab.Screen
        name={'Home'}
        component={(props) => <HomePage {...props} username={username}/>}
      />
      <Tab.Screen name={'Info'} component={InfoPage} />
      <Tab.Screen name={'About'} component={AboutPage} />
    </Tab.Navigator>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    margin: 30
  }
})

export default MainLayout;
