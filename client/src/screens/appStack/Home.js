import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {
  increament,
  decreament,
  incrementByAmount,
} from '../../redux/slice/counterSlice';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <View>
        <TouchableOpacity>
          <Text onPress={() => navigation.navigate('Signup')}>signup here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
