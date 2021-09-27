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

const Home = () => {
  const count = useSelector(state => state.counter.value);

  const[value, setValue] = useState(count)

  const dispatch = useDispatch();

  // const addValue = (num) =>{
  //   dispatch(incrementByAmount(num))
  // }


  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={{mrgin: 30}}>
        <Text>Increase</Text>
        <TouchableOpacity onPress={() => dispatch(increament())}>
          <Text style={{margin: 20}}>++++</Text>
        </TouchableOpacity>
      </View>
      <View style={{mrgin: 30}}>
        <Text>Decrease</Text>
        <TouchableOpacity onPress={() => dispatch(decreament())}>
          <Text style={{margin: 20}}>----</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 30}}>
        <TextInput
          style={{flex: 1, borderColor: 'white', borderWidth: 1, color:'white'}}
          onChangeText={text => setValue(text)}
          value={count}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity onPress={() => dispatch(incrementByAmount(value))}  style={{backgroundColor: 'red', margin: 20}}>
        <Text>Submit</Text>
      </TouchableOpacity>

      <View>
        <Text>current counter: {count} </Text>
      </View>
    </View>
  );
};

export default Home;
