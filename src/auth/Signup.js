import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styling/styles';
import UserOrientations from '../assets/UserOrientations';

const Signup = ({navigation}) => {
  const WIDTH = UserOrientations().width;
  const HEIGHT = UserOrientations().height;

  return (
    <View style={{width: .85*WIDTH ,...styles.signupContainer}}>
      {/* logo section */}
      <View style={styles.signupS1Container}>
        <Image
          style={styles.signupLogo}
          source={require('../assets/images/logo-short.png')}
        />
        <Text style={styles.signupLogoText}>Where Stories Live</Text>
      </View>
      {/* sign up with fb & google section */}
      <View style={styles.signupS2Container}>
        <TouchableOpacity
          style={styles.facebookSignupButton}>
          <Image
            style={styles.signupFacebookLogo}
            source={require('../assets/images/facebook.png')}
          />
          <Text style={styles.SignupS2Text}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.googleSignupButton}>
          <Image
            style={styles.signupGoogleLogo}
            source={require('../assets/images/google.png')}
          />
          <Text style={styles.SignupS2Text}>Google</Text>
        </TouchableOpacity>
      </View>
      {/* signup form section */}
      <View>
        <View style={styles.emptyViewContainer}>
          <View style={ styles.emptyView}></View>
          <Text style={styles.emptyViewText}>OR</Text>
          <View style={styles.emptyView}></View>
        </View>
      </View>
      {/* footer section */}
    </View>
  );
};

export default Signup;
