import React from 'react';
import {Text, View} from 'react-native';
import {style} from './HomePageStyle';


const HomePage = ({username}: any) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Your username is:</Text>
      <Text style={style.text}> {username} </Text>
    </View>
  )
}

export default HomePage;
