import LoginPage from '../Pages/LoginPage/LoginPage';
import HomePage from '../Pages/HomePage/HomePage';
import MainLayout from '../Pages/MainLayout/MainLayout'
import {View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {bgPrimary, bgSecondery} from '../Style/GenralStyle'

const Stack = createNativeStackNavigator();

export const routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: bgPrimary
        }
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerStyle: {
            backgroundColor: bgSecondery,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      />
      <Stack.Screen name="mainLayout" component={MainLayout} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}
