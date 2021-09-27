import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';

const UserOrientations = () => {
  const [screenInfo, setScreenInfo] = useState(Dimensions.get('window'));

  //   console.log(screenInfo);
  //   {"fontScale": 1, "height": 736, "scale": 2, "width": 360}

  useEffect(() => {
    //result is the object returned by the change in Dimensions class
    //because result has: window, screen
    const onChange = result => {
      setScreenInfo(result.window);
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    //when component unmount
    //use this methode instead of removeEventListener
    return () => subscription?.remove();
  });

  return {
    ...screenInfo,
    isPortrait: screenInfo.width > screenInfo.height,
  };
};

export default UserOrientations;
