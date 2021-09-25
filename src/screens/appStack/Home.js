import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../components/Header';

const Home = () => {
  const [counter, setCounter] = useState(0);

  const increament = () => {
    setCounter(counter + 1);
  };
  const decreamnet = () => {
    setCounter(counter - 1);
  };

  // console.log(counter);

  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={{mrgin: 30}}>
        <Text>Increase</Text>
        <TouchableOpacity onPress={increament}>
          <Text style={{margin:20}}>++++</Text>
        </TouchableOpacity>
      </View>
      <View style={{mrgin: 30}}>
        <Text>Decrease</Text>
        <TouchableOpacity onPress={decreamnet}>
          <Text style={{margin:20}}>----</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
